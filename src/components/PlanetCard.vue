<template>
    <div class="planet-card">
        <img class="planet-img" src="/assets/cards/earth.png" alt="Earth">
        <h2>Earth</h2>
        <button class="close">×</button>
        <div class="temperature">
            <p>min: <span :style="{ color: temperatureColor(-40)}">~ -40 °C</span></p>
            <p>max: <span :style="{ color: temperatureColor(70)}">~ 70 °C</span></p>
        </div>
        <div class="info">
            <h5>Blue Planet</h5>
            <ul>
                <li>Radius: <span class="value">6371 km</span></li>
                <li><span class="value">1x</span> larger than Earth</li>
                <li>Distance from Sun: <span class="value">1 AU</span></li>
                <li>1 year: <span class="value">365.25 days</span></li>
                <li>1 day: <span class="value">23.9 hours</span></li>
                <li>Moons: <span class="value">1</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            temperatureColors: {
                "-80": "#a8f1ff",
                "-50": "#1fb6d0",
                "-20": "#c4f987",
                10: "#c4f987",
                50: "#ffcc33",
                80: "#ee6600",
                120: "#990000",
            }
        }
    },
    methods: {
        temperatureColor(temp) {
            const keys = Object.keys(this.temperatureColors).map(t => parseInt(t));
            keys.sort((a, b) => (+a) - (+b));
            for(let key of keys) {
                if(key > temp) {
                    return this.temperatureColors[key];
                }
            }
            return this.temperatureColors[keys[keys.length - 1]];
        }
    }
}
</script>

<style scoped lang="scss">
    .planet-card {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        width: 250px;
        height: 400px;
        border-radius: var(--radius);
        box-shadow: -8px -9px 14px rgb(255 255 255 / 8%);
        overflow: hidden;
        .planet-img{
            width: 100%;
            height: auto;
            background-color: var(--secondary);
        }
        .info {
            position: absolute;
            top: 150px;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: var(--radius);
            background: linear-gradient(131.76deg, var(--primary) -34.78%, var(--dark) 93.37%);
            padding: 6px 12px;
            h5 {
                text-align: center;
                font-size: 18px;
                color: var(--tertiary);
                font-weight: 100;
            }
            ul {
                margin-top: 10px;
                text-align: left;
                font-size: 16px;
                list-style: none;
                padding-left: 0;
                li {
                    margin: 4px 0;
                    color: #d5d5d5;
                    .value {
                        font-weight: bold;
                        color: #fff;
                    }
                }
            }
        }
        h2 {
            position: absolute;
            top: 2px;
            left: 50%;
            transform: translateX(-50%);
            text-transform: uppercase;
            font-weight: 400;
            font-size: 20px;
        }
        .temperature {
            position: absolute;
            top: 50px;
            right: 10px;
            font-weight: 600;
            text-shadow: 0px 0px 10px #0000006b;
            font-size: 14px;
        }
        .close {
            position: absolute;
            top: 2px;
            right: 6px;
            background-color: transparent;
            border: 0;
            color: #fff;
            font-size: 24px;
            cursor: pointer;
        }
    }
    @media (max-width: 560px) {
        .planet-card {
            width: auto;
            height: auto;
            transform: none;
            top: 125px;
            left: 10px;
            right: 10px;
            bottom: 20px;
            z-index: 4;
            .info {
                top: 250px;
            }
            .close {
                font-size: 32px;
            }
        }
    }
    @media (max-height: 360px) {
        .planet-card {
            width: auto;
            height: auto;
            transform: none;
            top: 15px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            z-index: 4;
            .planet-img {
                height: 100%;
                width: auto;
            }
            .info {
                top: 0;
                right: 0;
                width: auto;
                height: 100%;
                left: 250px;
            }
            h2 {
                left: 110px;
                transform: none;
            }
            .temperature {
                left: 140px;
                right: auto;
            }
            .close {
                right: auto;
                left: 6px;
                font-size: 32px;
            }
        }
    }
</style>