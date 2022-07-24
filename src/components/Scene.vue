<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PLANETS } from "../constants";
import { Lensflare, LensflareElement } from "three/examples/jsm/objects/Lensflare.js";

const loader = new GLTFLoader();

export default {
    data() {
        return {
        }
    },
    async mounted(){
        // Create scene
        const scene = this.createScene();
        const bacakgroundScene = this.createBackgroundScene();
        const camera = this.createCamera();
        const renderer = this.createRenderer(scene, camera);

        this.setupLighting(scene);

        const controls = this.createControls(camera, renderer);

        const planets = await this.createSolarSystem(scene);

        const clock = new THREE.Clock();

        const mouse = new THREE.Vector2();

        const raycaster = new THREE.Raycaster();

        THREE.Object3D.prototype.tick = (e) => {}

        let hoverObject = {
            planet: null,
            outline: null,
        };

        let selectedPlanet = null;
        
        renderer.autoClear = false;
        camera.layers.enable(1);

        renderer.setAnimationLoop(() => {
            // Update planets
            let delta = clock.getDelta();
            for(let planet of planets){
                planet.tick(delta);
            }
            // Make cameara follow selected planet
            if(selectedPlanet) {
                selectedPlanet.children[0].getWorldPosition(controls.target);
            }
            controls.update();
            
            // Planet hover effect
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(planets, true);
            if (intersects.length > 0 && hoverObject.planet == null) {
                hoverObject.planet = intersects[0].object;
                hoverObject.outline = this.highlightPlanet(intersects[0].object);
            }
            else if(intersects.length > 0 && hoverObject.planet !== intersects[0].object) {
                this.unhighlightPlanet(hoverObject.planet);
                hoverObject.planet = intersects[0].object;
                hoverObject.outline = this.highlightPlanet(intersects[0].object);
            }
            else if(intersects.length === 0 && hoverObject.planet != null) {
                this.unhighlightPlanet(hoverObject.planet);
                hoverObject.planet = null;
                hoverObject.outline = null;
            }

            renderer.clear();
            camera.layers.set(1);
            renderer.render(bacakgroundScene, camera);
            renderer.render(scene, camera);

            camera.layers.set(0);
            renderer.render(scene, camera);
        })

        // Resize renderer when window size changes 
        window.onresize = () => {
            // Update renderer
            this.resizeRenderer(renderer);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        }

        document.addEventListener("mousemove", (e) => {
	        e.preventDefault();

            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
        });

        document.addEventListener("click", (e) => {
            e.preventDefault();

            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;

            // Planet click -> Todo: get object with userData for planet card
            if (hoverObject.planet != null) {
                const planet = this.findMeshPlanet(hoverObject.planet);
                // Set default distance and target to sun
                if(planet.name === "sun") { 
                    controls.minDistance = 60;
                    controls.maxDistance = 500;
                    controls.target.set(0, 0, 0);
                }
                // Change min/max camera distance to suit given planet
                else {
                    let box = new THREE.Box3().setFromObject(planet.children[0].children[0]);
                    let diameter = Math.abs(box.max.x - box.min.x);
                    controls.minDistance = diameter * 1.25;
                    controls.maxDistance = diameter * 2.5;
                }
                selectedPlanet = planet;
            }
        });
    },
    methods: {
        // Look through list of all planets and initialize them
        createSolarSystem: async function(scene) {
            const planets = []; // List of Object3D of planets
            for(let planet of PLANETS) {
                // Load 3D model
                let gltf = await loader.loadAsync(`./assets/gltf/${planet.name}.glb`);
                let updateObject;
                let userData = {
                    isPlanet: true,
                    orbitalVelocity: planet.orbitalVelocity,
                    orbitalRadius: planet.orbitalRadius,
                    currentDistance: 2 * Math.PI * planet.orbitalRadius * Math.random(),
                    currentRotation: 0,
                    planetCircumference: 2 * Math.PI * planet.radius,
                    orbitalCircumference: 2 * Math.PI * planet.orbitalRadius,
                    scaledOrbitalRadius: planet.scaledOrbitalRadius,
                    isPivot: false,
                    radius: planet.radius,
                    rotationVelocity: planet.rotationVelocity,
                }
                // Get the object the planet is orbitting
                if(planet.orbitObject != null) {
                    let orbitObject = this.findOrbitObject(planets, planet.orbitObject);
                    gltf.scene.position.z = planet.scaledOrbitalRadius;
                    gltf.scene.rotation.z = THREE.MathUtils.degToRad(planet.axialTilt ?? 0);

                    // Create a pivot for orbit
                    let pivot = new THREE.Object3D();
                    pivot.name = planet.name;
                    pivot.userData = userData;
                    pivot.userData.isPivot = true;
                    pivot.add(gltf.scene);
                    pivot.rotation.x = THREE.MathUtils.degToRad(planet.orbitalInclination);

                    updateObject = pivot;

                    // Create trajectory for planet's orbit
                    const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
                    material.side = THREE.DoubleSide;
                    material.transparent = true;
                    material.opacity = 0.15;
                    let trajectory = new THREE.Mesh(new THREE.TorusGeometry(planet.scaledOrbitalRadius, 0.05, 8, 64 ), material);
                    trajectory.rotation.x = THREE.MathUtils.degToRad(90);
                    pivot.add(trajectory);

                    gltf.scene.children[0].userData.trajectory = trajectory;
                    gltf.scene.children[0].userData.canHover = true;

                    orbitObject.add(pivot);
                    planets.push(pivot);
                }
                else{
                    // This is basically only for Sun
                    let group = new THREE.Group();
                    gltf.scene.rotation.z = THREE.MathUtils.degToRad(planet.axialTilt ?? 0);
                    group.add(gltf.scene);
                    group.userData = userData;
                    gltf.scene.userData.canHover = true;
                    group.name = planet.name;

                    updateObject = group;

                    scene.add(group);
                    planets.push(group);
                }

                // Update event
                this.createUpdateLoop(updateObject);
            }

            return planets;
        },
        // Creates outline around planet and makes trajectory brighter
        highlightPlanet: function (mesh) {
            if(!mesh.parent.userData.canHover) return;
            mesh.parent.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material.emissive = new THREE.Color(0x404040);
                    child.material.emissiveIntensity = 1.31;
                }
            });

            const trajectory = mesh.parent.userData.trajectory;
            if(trajectory) {
                trajectory.material.opacity = 1;
            }

            return null;
        },
        // Removes outline from planet and makes trajectory transparent
        unhighlightPlanet: function (mesh) {
            if(!mesh?.parent.userData.canHover) return;
            mesh.parent.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material.emissive = new THREE.Color(0x000000);
                }
            });
            const trajectory = mesh.parent.userData.trajectory;
            if(trajectory) {
                trajectory.material.opacity = 0.15;
            }
        },
        // Finds the correct object to orbit in the list of planets
        findOrbitObject: function(planets, name) {
            let planet = planets.find(p => p.name === name);
            if(planet.userData.isPivot) {
                return planet.children.find(p => !p.userData.isPivot);
            }
            return planet;
        },
        // Return the planet that contains given mesh
        findMeshPlanet: function(mesh) {
            if(mesh.userData.isPlanet) return mesh;
            return mesh.parent == null ? null : this.findMeshPlanet(mesh.parent);
        },
        // Adds tick method to planet that runs every frame 
        createUpdateLoop: function(planet) {
            planet.tick = function(e) {
                // Planet orbit around its parent
                if(this.userData.orbitalRadius !== 0){
                    // (this.userData.orbitalVelocity * e * this.userData.orbitalCircumference / 500) // For idealized
                    this.userData.currentDistance += (this.userData.orbitalVelocity * e) * 60 * 60 * 24;// * 28; 
                    if(this.userData.currentDistance > this.userData.orbitalCircumference){
                        this.userData.currentDistance = this.userData.currentDistance % this.userData.orbitalCircumference
                    }

                    this.rotation.y = this.userData.currentDistance / this.userData.orbitalCircumference * Math.PI * 2;
                }

                // Planet rotation around its own axis 
                this.userData.currentRotation += (this.userData.rotationVelocity * e);// * 60 * 60 * 24;// * 28;
                let rY = this.userData.currentRotation / this.userData.planetCircumference * Math.PI * 2;
                // Find the Group that holds the Meshes and roatate it
                if(this.userData.isPivot){
                    this.children[0].children[0].rotation.y = rY;
                }
                else{
                    this.children[0].rotation.y = rY;
                }
            };  
        },
        createScene: function() {
            const scene = new THREE.Scene();

            return scene;
        },
        // Create and cofigure camera and return it 
        createCamera: function () { 
            const camera = new THREE.PerspectiveCamera(47, window.innerWidth / window.innerHeight, 0.1, 1000);

            return camera;
        },
        // Create a separate scene with background 
        createBackgroundScene: function() {
            const backgroundScene = new THREE.Scene();
            const loader = new THREE.CubeTextureLoader();
            const texture = loader.load([
                './assets/universe.jpg',
                './assets/universe.jpg',
                './assets/universe.jpg',
                './assets/universe.jpg',
                './assets/universe.jpg',
                './assets/universe.jpg',
            ]);            
            backgroundScene.background = texture;

            return backgroundScene;
        },
        // Create and configure renderer and return it 
        createRenderer: function (scene, camera) { 
            const renderer = new THREE.WebGLRenderer({
                powerPreference: "high-performance",
                canvas: this.$refs.canvas,
                antialias: true,
                alpha: true,
            });
            renderer.setClearColor( 0x000000, 0 );

            this.resizeRenderer(renderer);

            renderer.autoClearColor = false;
            renderer.outputEncoding = THREE.LinearEncoding;
            renderer.render(scene, camera);

            return renderer;
        },
        // Create and configure controls and return it 
        createControls: function (camera, renderer) {
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.autoRotate = false;
            controls.enableDamping = true;
            controls.dampingFactor = 0.1;
            controls.enablePan = false;
            controls.minDistance = 60;
            controls.maxDistance = 500;
            controls.object.rotation.x = -0.841;
            controls.object.rotation.y = 0.528;
            controls.object.rotation.z = 0.513;
            controls.object.position.x = 98.467;
            controls.object.position.y = 125.67;
            controls.object.position.z = 112.32;

            return controls;
        },
        setupLighting: function (scene) {
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
            scene.add(ambientLight);

            // Light from the Sun
            const pointLight = new THREE.PointLight(0xffe8e0, 1.5, 300);
            scene.add(pointLight);

            const textureLoader = new THREE.TextureLoader();

            const textureFlare0 = textureLoader.load( "./assets/textures/lensflare0.png" );
            const textureFlare1 = textureLoader.load( "./assets/textures/lensflare1.png" );

            const lensflare = new Lensflare();
            lensflare.layers.enable(1);
            lensflare.addElement( new LensflareElement(textureFlare0, 120));
            lensflare.addElement( new LensflareElement(textureFlare1, 100));
            lensflare.addElement( new LensflareElement(textureFlare1, 130));
            lensflare.addElement( new LensflareElement(textureFlare1, 140));
            pointLight.add(lensflare);

             // Lights used to bright up the sun
            const dirLight1 = new THREE.RectAreaLight(0xffffff, 7, 20, 25);
            dirLight1.position.set(-12, 0, 0);
            dirLight1.lookAt(0, 0, 0)
            scene.add(dirLight1);

            const dirLight2 = new THREE.RectAreaLight(0xffffff, 7, 20, 25);
            dirLight2.position.set(12, 0, 0);
            dirLight2.lookAt(0, 0, 0)
            scene.add(dirLight2);

            const dirLight3 = new THREE.RectAreaLight(0xffffff, 7, 20, 20);
            dirLight3.position.set(0, 10, 12);
            dirLight3.lookAt(0, 0, 0)
            scene.add(dirLight3);

            const dirLight4 = new THREE.RectAreaLight(0xffffff, 7, 20, 20);
            dirLight4.position.set(0, 10, -12);
            dirLight4.lookAt(0, 0, 0)
            scene.add(dirLight4);

            const dirLight5 = new THREE.RectAreaLight(0xffffff, 7, 20, 20);
            dirLight5.position.set(0, -10, 12);
            dirLight5.lookAt(0, 0, 0)
            scene.add(dirLight5);

            const dirLight6 = new THREE.RectAreaLight(0xffffff, 7, 20, 20);
            dirLight6.position.set(0, -10, -12);
            dirLight6.lookAt(0, 0, 0)
            scene.add(dirLight6);
        },
        // Set's the renderers size to current window size
        resizeRenderer: function (renderer) { 
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
    }
}
</script>

<style>
canvas{
    width: 100vw;
    height: 100vh;
}
</style>