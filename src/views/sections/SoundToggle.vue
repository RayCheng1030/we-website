<template>
    <button type="button" :class="`site-volume ${ state.isSoundPlaying && `is-playing` }`" :title="$t(`button.sound`)" @click="onToggleSound()">
        <audio ref="sound" :src="require(`@/assets/sounds/sound.mp3`)"></audio>
        <span class="pulsing-ui"></span>
    </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import store from "@/models/store";

const { state, commit } = store;
const sound = ref(null as HTMLAudioElement | null);

const onToggleSound = () => {
    commit(`toggleSound`);

    state.isSoundPlaying ? sound.value?.play() : sound.value?.pause();
};
</script>

<style lang="scss">
.site-volume {
    cursor: pointer;

    position: fixed;
    border: 0 none;
    outline: none;
    z-index: 999;
    left: 35px;
    bottom: 22.5px;
    height: 30px;
    width: 30px;

    background: transparent;
    pointer-events: all;

    &:before {
        content: "";
        background-color: #ffffff;
    }
    &.is-playing .pulsing-ui {
        opacity: 1;
    }

    .pulsing-ui, &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 6px;
        width: 6px;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }
    .pulsing-ui {
        transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 0;

        &:before, &:after {
            content: "";

            position: absolute;
            z-index: -1;
            top: 50%;
            left: 50%;
            height: 30px;
            width: 30px;

            transform: translate(-50%, -50%) scale(0);
            animation: wave 1.6s linear infinite;
            border: 2px solid #fff;
            border-radius: 50%;
        }
        &:before {
            animation-delay: 0.5s;
        }
    }
}

@include mobile {
    .site-volume {
        left: 20px;
        bottom: 27.5px;
    }
}

@keyframes wave {
    0% {
        transform: translate(-50%,-50%) scale(0);
        opacity: 1
    }
    100% {
        transform: translate(-50%,-50%) scale(1);
        opacity: 0
    }
}
</style>
