<template>
    <Scene @onSceneLoad="onSceneLoad" />
    <div ref="loading" class="loading-screen">
        <div class="planet">
            <div class="cloud"></div>
            <div class="cloud"></div>
            <div class="cloud"></div>
        </div>
        <p>Loading...</p>
    </div>
</template>

<script>
    import Scene from "./components/Scene.vue";
    export default {
        components: {
            Scene,
        },
        methods: {
            onSceneLoad() {
                this.$refs.loading.style.display = "none";
            }
        }
    }
</script>

<style scoped lang="scss">
    .loading-screen {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background-color: var(--dark);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        font-weight: bold;
        .planet {
            width: 80px;
            height: 80px;
            overflow: hidden;
            border-radius: 50%;
            background-color: #3009e0;
            position: relative;
            box-shadow: inset -20px 0px 12px 0px #05014d;
            .cloud {
                border-radius: var(--radius);
                background-color: rgb(208, 208, 208);
                width: 30px;
                height: 10px;
                position: absolute;
                transform: translateY(-100px);
            }
            .cloud:nth-child(1) {
                top: 3px;
                animation: cloud 1500ms linear 100ms infinite;
            }
            .cloud:nth-child(2) {
                top: 28px;
                animation: cloud 1700ms linear 50ms infinite;
            }
            .cloud:nth-child(3) {
                top: 58px;
                animation: cloud 1800ms linear 200ms infinite;
            }
        }
    }
    @keyframes cloud {
        0% {
            transform: translateX(-50px);
        }
        100% {
            transform: translateX(90px);
        }
    }
</style>
