<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PLANETS } from "../constants";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";

const loader = new GLTFLoader();

export default {
    data() {
        return {
        }
    },
    async mounted(){
        // Create scene
        const scene = this.createScene();
        const camera = this.createCamera();
        const renderer = this.createRenderer(scene, camera);

        camera.layers.enable(1);

        this.setupLighting(scene);

        const controls = this.createControls(camera, renderer);

        const composer = this.setupPostProcessing(scene, camera, renderer);

        const planets = await this.createSolarSystem(scene);

        const clock = new THREE.Clock();

        THREE.Object3D.prototype.tick = (e) => {}
        
        renderer.setAnimationLoop(() => {
            // Update planets
            let delta = clock.getDelta();
            for(let planet of planets){
                planet.tick(delta);
            }
            controls.update();

            composer.render();
        })

        // Resize renderer when window size changes 
        window.onresize = () => {
            // Update renderer
            this.resizeRenderer(renderer);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        }
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
                    let object = new THREE.Mesh(new THREE.TorusGeometry(planet.scaledOrbitalRadius, 0.05, 8, 64 ), material);
                    object.rotation.x = THREE.MathUtils.degToRad(90);
                    pivot.add(object);

                    orbitObject.add(pivot);
                    planets.push(pivot);
                }
                else{
                    // This is basically only for Sun
                    let group = new THREE.Group();
                    gltf.scene.rotation.z = THREE.MathUtils.degToRad(planet.axialTilt ?? 0);
                    group.add(gltf.scene);
                    group.userData = userData;
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
        // Finds the correct object to orbit in the list of planets
        findOrbitObject: function(planets, name) {
            let planet = planets.find(p => p.name === name);
            if(planet.userData.isPivot) {
                return planet.children.find(p => !p.userData.isPivot);
            }
            return planet;
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
                this.userData.currentRotation += (this.userData.rotationVelocity * e) * 60 * 60 * 24;// * 28;
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
            const loader = new THREE.CubeTextureLoader();
            const texture = loader.load([
                './assets/universe.jpg',
                './assets/universe.jpg',
                './assets/universe.jpg',
                './assets/universe.jpg',
                './assets/universe.jpg',
                './assets/universe.jpg',
            ]);            
            scene.background = texture;

            return scene;
        },
        // Create and cofigure camera and return it 
        createCamera: function () { 
            const camera = new THREE.PerspectiveCamera(47, window.innerWidth / window.innerHeight, 0.1, 1000);

            return camera;
        },
        // Create and configure renderer and return it 
        createRenderer: function (scene, camera) { 
            const renderer = new THREE.WebGLRenderer({
                powerPreference: "high-performance",
                antialias: true,
                canvas: this.$refs.canvas,
                alpha: true
            });
            renderer.setClearColor( 0x000000, 0 );

            this.resizeRenderer(renderer);

            renderer.autoClearColor = false;
            renderer.outputEncoding = THREE.LinearEncoding;
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
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
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
            scene.add(ambientLight);

            // Light from the Sun
            const pointLight = new THREE.PointLight(0xffe8e0, 1.35, 300);
            scene.add(pointLight);

            const dirLight1 = new THREE.RectAreaLight(0xffffff, 5, 18, 18);
            dirLight1.position.z = 12;
            dirLight1.position.y = 12;
            dirLight1.lookAt( 0, 0, 0 );
            scene.add(dirLight1);

            const dirLight2 = new THREE.RectAreaLight(0xffffff, 6, 18, 18);
            dirLight2.position.z = -12;
            dirLight2.position.y = 12;
            dirLight2.lookAt( 0, 0, 0 );
            scene.add(dirLight2);

            const dirLight3 = new THREE.RectAreaLight(0xffffff, 5, 18, 18);
            dirLight3.position.x = 12;
            dirLight3.position.y = 12;
            dirLight3.lookAt( 0, 0, 0 );
            scene.add(dirLight3);

            const dirLight4 = new THREE.RectAreaLight(0xffffff, 6, 18, 18);
            dirLight4.position.x = -12;
            dirLight4.position.y = 12;
            dirLight4.lookAt( 0, 0, 0 );
            scene.add(dirLight4);

            const dirLight5 = new THREE.RectAreaLight(0xffffff, 5, 18, 18);
            dirLight5.position.z = 12;
            dirLight5.position.y = -12;
            dirLight5.lookAt( 0, 0, 0 );
            scene.add(dirLight5);

            const dirLight6 = new THREE.RectAreaLight(0xffffff, 6, 18, 18);
            dirLight6.position.z = -12;
            dirLight6.position.y = -12;
            dirLight6.lookAt( 0, 0, 0 );
            scene.add(dirLight6);

            const dirLight7 = new THREE.RectAreaLight(0xffffff, 5, 18, 18);
            dirLight7.position.x = 12;
            dirLight7.position.y = -12;
            dirLight7.lookAt( 0, 0, 0 );
            scene.add(dirLight7);

            const dirLight8 = new THREE.RectAreaLight(0xffffff, 6, 18, 18);
            dirLight8.position.x = -12;
            dirLight8.position.y = -12;
            dirLight8.lookAt( 0, 0, 0 );
            scene.add(dirLight8);

            const dirLight9 = new THREE.RectAreaLight(0xffffff, 5, 18, 18);
            dirLight9.position.z = 12;
            dirLight9.position.y = 0;
            dirLight9.lookAt( 0, 0, 0 );
            scene.add(dirLight9);

            const dirLight10 = new THREE.RectAreaLight(0xffffff, 6, 18, 18);
            dirLight10.position.z = -12;
            dirLight10.position.y = 0;
            dirLight10.lookAt( 0, 0, 0 );
            scene.add(dirLight10);

            const dirLight11 = new THREE.RectAreaLight(0xffffff, 5, 18, 18);
            dirLight11.position.x = 12;
            dirLight11.position.y = 0;
            dirLight11.lookAt( 0, 0, 0 );
            scene.add(dirLight11);

            const dirLight12 = new THREE.RectAreaLight(0xffffff, 6, 18, 18);
            dirLight12.position.x = -12;
            dirLight12.position.y = 0;
            dirLight12.lookAt( 0, 0, 0 );
            scene.add(dirLight12);
        },
        // Configure postprocessing and return composer
        setupPostProcessing: function (scene, camera, renderer) {
            const composer = new EffectComposer(renderer);
            composer.addPass(new RenderPass(scene, camera));

            composer.setSize(window.innerWidth, window.innerHeight);
                
            return composer;
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