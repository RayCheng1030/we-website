<template>
    <div class="cModal lVideo" data-modal="lVideo" data-el>
        <div class="cModal-content lVideo-content" ref="video" data-modal-content data-ref>
            <video class="lVideo-video" :data-src="require(`@/assets/videos/full.mp4`)" controls preload="none" data-ref></video>
        </div>
        <div class="cModal-close lVideo-close" data-modal-close aria-label="CLOSE">
            <div class="lVideo-close-side -top"></div>
            <div class="lVideo-close-side -bottom"></div>
        </div>
        <div class="cModal-backdrop" data-modal-backdrop></div>
            <div class="lVideoMouseStalker" data-el="cMouseStalker">
            <div class="lVideoMouseStalker-shape -normal" data-ref="cMouseStalker-shapeNormal">
                <div class="lVideoMouseStalker-side -top"></div>
                <div class="lVideoMouseStalker-side -bottom"></div>
            </div>
            <div class="lVideoMouseStalker-shape -accent" data-ref="cMouseStalker-shapeAccent">
                <div class="lVideoMouseStalker-side -top"></div>
                <div class="lVideoMouseStalker-side -bottom"></div>
            </div>
            <div class="lVideoMouseStalker-shape -theme" data-ref="cMouseStalker-shapeTheme">
                <div class="lVideoMouseStalker-side -top"></div>
                <div class="lVideoMouseStalker-side -bottom"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import store from "@/models/store";

const { state } = store;
const video = ref(null as HTMLDivElement | null);

const checkVisibility = () => {
    state.isVideoPlaying = (video.value?.style.opacity || 0) > 0;

    requestAnimationFrame(checkVisibility);
};
checkVisibility();
</script>

<style lang="scss">

</style>
