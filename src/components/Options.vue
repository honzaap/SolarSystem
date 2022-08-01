<template>
    <div class="options">
        <div class="form-group">
            <label>Speed</label>
            <div class="input-select">
                    <div class="select-item">
                    <input name="speed" id="realtime" type="radio" value="realtime" v-model="speed" @change="onSpeedChange">
                    <label for="realtime">Realtime</label>
                </div>
                <div class="select-item">
                    <input checked name="speed" id="day_sec" type="radio" value="day_sec" v-model="speed" @change="onSpeedChange">
                    <label for="day_sec">1 day/sec</label>
                </div>
                <div class="select-item">
                    <input name="speed" id="mon_sec" type="radio" value="mon_sec" v-model="speed" @change="onSpeedChange">
                    <label for="mon_sec">1 mon/sec</label>
                </div>
                <div class="select-item">
                    <input name="speed" id="idealized" type="radio" value="idealized" v-model="speed" @change="onSpeedChange">
                    <label for="idealized">Idealized</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            speed: "day_sec"
        }
    },
    emits: ["speedChanged"],
    methods: {
        onSpeedChange(e) {
            const value = e.target.value;
            this.$emit('speedChanged', value);
        }
    },
    mounted() {
        this.$emit('speedChanged', this.speed);
    }
}
</script>

<style scoped lang="scss">
    .options {
        position: absolute;
        right: 10px;
        top: 100px;
        .form-group {
            margin: 15px 5px;
            text-align: center;
            > label {
                font-size: 18px;
            }
        }
        .input-select {
            background-color: var(--primary);
            border-radius: var(--radius);
            margin-top: 10px;
            max-width: 115px;
            margin-left: auto;
            overflow: hidden;
            .select-item {
                display: flex;
                justify-content: stretch;
                align-items: stretch;
                text-align: center;
                input {
                    appearance: none;
                    &:checked + label {
                        background-color: var(--tertiary);
                    }
                }
                label {
                    padding: 10px 16px;
                    cursor: pointer;
                    flex-grow: 1;
                }
            }
        }
        .input-check {
            appearance: none;
            margin-top: 8px;
            width: 1em;
            height: 1em;
            background-color: var(--text);
            outline: 2px solid #fff;
            border-radius: 50%;
            cursor: pointer;
            margin-right: 10px;
            &:checked {
                background-color: var(--tertiary)
            }
            & + label{
                cursor: pointer;
            }
        }
    }
    @media (max-height: 360px) {
        .options {
            top: 50px;
        }
    }
</style>