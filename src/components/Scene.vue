<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer,RenderPass } from "postprocessing";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PLANETS } from "../constants";

const loader = new GLTFLoader();

export default {
    data() {
        return {
        }
    },
    mounted(){
        // Create scene
        const scene = this.createScene();
        const camera = this.createCamera();
        const renderer = this.createRenderer(scene, camera);

        this.setupLighting(scene);

        const controls = this.createControls(camera, renderer);

        const composer = this.setupPostProcessing(scene, camera, renderer);

        const planets = this.createSolarSystem(scene);

        let event = new CustomEvent('tick', { detail: { delta: 0 } } );
        const clock = new THREE.Clock();

        THREE.Object3D.prototype.tick = (e) => {}
        
        // Animation loop
        function animate(){
            requestAnimationFrame(animate);

            // Update planets
            for(let planet of planets){
                planet.tick(clock.getDelta());
            }

            controls.update();
            composer.render();
        }
        animate();

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
        createSolarSystem: function(scene) {
            const planets = []; // List of Object3D of planets
            for(let planet of PLANETS) {
                // Load 3D model
                loader.load(`../../blender_assets/gltf/${planet.name}.glb`, function (gltf) {
                    gltf.scene.name = planet.name;
                    gltf.scene.userData = {
                        orbitalVelocity: planet.orbitalVelocity,
                        orbitObject: planet.orbitObject,
                        orbitalRadius: planet.orbitalRadius,
                    }

                    // Get the object the planet is orbitting
                    if(planet.orbitObject != null) {
                        let orbitObject = scene.children.find(c => c.name === planet.orbitObject);
                        // Distance planet from orbitObject by orbitalRadius
                        gltf.scene.position.z = orbitObject.position.z + planet.orbitalRadius;
                    }

                    // Update event
                    gltf.scene.tick = function(e) {
                        this.position.z += e * this.userData.orbitalVelocity * 1000;
                    };

                    planets.push(gltf.scene);
                    scene.add(gltf.scene);
                }, undefined, function (error) {
                    console.error(error);
                } );
            }
            
            return planets;
        },
        createScene: function() {
            const scene = new THREE.Scene();
            const loader = new THREE.CubeTextureLoader();
            const texture = loader.load([
                '../../blender_assets/universe.jpg',
                '../../blender_assets/universe.jpg',
                '../../blender_assets/universe.jpg',
                '../../blender_assets/universe.jpg',
                '../../blender_assets/universe.jpg',
                '../../blender_assets/universe.jpg',
            ]);            
            scene.background = texture;

            return scene;
        },
        // Create and cofigure camera and return it 
        createCamera: function () { 
            const camera = new THREE.PerspectiveCamera(47, window.innerWidth / window.innerHeight, 0.1, 500);

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
            controls.minDistance = 120;
            controls.maxDistance = 500;

            return controls;
        },
        setupLighting: function (scene) {
            const ambientLight = new THREE.AmbientLight(0xffffff, 1);
            scene.add(ambientLight);
        },
        // Configure postprocessing and return composer
        setupPostProcessing: function (scene, camera, renderer) {
            const composer = new EffectComposer(renderer);
            composer.addPass(new RenderPass(scene, camera));

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