<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer,RenderPass } from "postprocessing";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const loader = new GLTFLoader();

export default {
mounted(){
        // Create scene
        const scene = this.createScene();
        const camera = this.createCamera();
        const renderer = this.createRenderer(scene, camera);

        this.setupLighting(scene);

        const controls = this.createControls(camera, renderer);

        const composer = this.setupPostProcessing(scene, camera, renderer);

        this.createSolarSystem(scene);

        // Animation loop
        function animate(){
            requestAnimationFrame(animate);
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
        createSolarSystem: function(scene) {
            loader.load(`../../blender_assets/earth.glb`, function (gltf) {

                scene.add(gltf.scene);
            }, undefined, function (error) {
                console.error(error);
            } );
        },
        createScene: function() {
            const scene = new THREE.Scene();
            const bgTexture = new THREE.TextureLoader().load('../../blender_assets/universe.png');
            scene.background = bgTexture;

            return scene;
        },
        // Create and cofigure camera and return it 
        createCamera: function () { 
            const camera = new THREE.PerspectiveCamera(47, window.innerWidth / window.innerHeight, 0.1, 250);

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

            renderer.render(scene, camera);
            renderer.outputEncoding = THREE.sRGBEncoding;
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;

            console.log(window.innerHeight);
            return renderer;
        },
        // Create and configure controls and return it 
        createControls: function (camera, renderer) {
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.autoRotate = false;
            controls.enableDamping = true;
            controls.dampingFactor = 0.1;
            controls.enablePan = false;
            controls.minDistance = 5;
            controls.maxDistance = 100;

            return controls;
        },
        setupLighting: function (scene) {
            
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