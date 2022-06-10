<template>
    <div v-if="state.isSoundPlaying" ref="wave" class="sound-wave">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script setup lang="ts">
import store from "@/models/store";
import { ref } from "vue";

const { state } = store;
const wave = ref(null as HTMLDivElement | null);

const updateOpacity = () => {
    const titleInner = document.querySelector(".lHero-titleInner") as HTMLDivElement | null;

    wave.value && (wave.value.style.opacity = titleInner?.style.opacity || "0");
    requestAnimationFrame(updateOpacity);
};
requestAnimationFrame(updateOpacity);
</script>

<style lang="scss">
.sound-wave {
    position: absolute;
    top: -45px;
    left: -35%;
    height: 100%;
    width: 100%;
    opacity: 0.75;

    span {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0;
        height: 0;

        opacity: 0;
        border-radius: 50%;
        border: 2px #c1c4cb solid;
        animation: sound-wave 4s linear infinite;

        &:nth-of-type(2) {
            animation-delay: 0.5s;
        }
        &:nth-of-type(3) {
            animation-delay: 1s;
        }
    }
}

@keyframes sound-wave {
    0% {
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        width: 400px;
        height: 800px;
        opacity: 0;
    }
}
</style>
