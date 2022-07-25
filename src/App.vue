<template>
    <audio ref="sound" id="bgm" :src="require(`@/assets/sounds/sound.mp3`)"></audio>
    <template v-if="isPageEntered">
        <div class="cBase" data-menu-hidden data-transition-hidden>
            <div data-scroll-container>
                <router-view />
                <footer class="cFooter" data-scroll data-scroll-call="footer" data-scroll-repeat data-permanent>
                    <p><small>{{ $t("rights") }}</small></p>
                </footer>
            </div>
            <div data-fixed-local-container></div>
        </div>
        <div data-permanent>
            <MenuNavigation />
            <MenuPopup />
            <PhotosShow v-if="!opening.status" :show="opening.pending" :duration="3" @complete="onPhotosCompleted" />
            <SoundToggle />
            <canvas class="cRay" data-el></canvas>
            <canvas class="cRayBackground" data-el></canvas>
            <canvas class="cCylinder" data-el></canvas>
            <div v-show="ray.progress >= 0.01" class="cRayForeground" :style="`background-image: url(${ require(`@/assets/images/king.png`) }); opacity: ${ ray.progress }`" />
            <div v-show="screen.scrolling" class="cScrollingMask"></div>
        </div>
    </template>
    <template v-else>
        <div class="full-screen">
            <img id="img-logo" :src="require(`@/assets/images/logo-large.png`)">
            <button id="btn-enter" @click="commit(`enterPage`)">{{ $t(`button.enter`) }}</button>
        </div>
        <audio :style="{ visibility: `hidden` }" :src="require(`@/assets/sounds/sound.mp3`)" muted autoplay preload="auto"></audio>
        <video :style="{ visibility: `hidden`, height: `1px` }" :src="require(`@/assets/videos/background.mp4`)" muted autoplay preload="auto"></video>
        <video :style="{ visibility: `hidden`, height: `1px` }" :src="require(`@/assets/videos/full.mp4`)" muted autoplay preload="auto"></video>
    </template>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import store from "@/models/store";
import load from "load-asset";

import MenuNavigation from "@/views/sections/MenuNavigation.vue";
import MenuPopup from "@/views/sections/MenuPopup.vue";
import PhotosShow from "@/views/sections/PhotosShow.vue";
import SoundToggle from "@/views/sections/SoundToggle.vue";

const { t, locale } = useI18n();
const { state, commit } = store;
const route = useRoute();
const sound = ref(null as HTMLAudioElement | null);

const opening = reactive({
    pending: false as NonNullable<typeof window["openingPending"]>,
    status: false as NonNullable<typeof window["openingStatus"]>,
});
const ray = reactive({
    progress: 0 as NonNullable<typeof window["rayProgress"]>,
});
const screen = reactive({
    scrolling: false as NonNullable<typeof window["screenScrolling"]>,
});
const isPageEntered = computed(() => {
    const value = state.isPageEntered || route.name !== "home";
    if (!value && route.name !== undefined) {
        load.any([
            ...new Array(10).fill(null).map((v, i) => require(`@/assets/images/shows/photo-${ `${ i + 1 }`.padStart(2, "0") }.jpg`)),
            ...new Array(5).fill(null).map((v, i) => require(`@/assets/images/outline/bg-${ `${ i + 1 }`.padStart(2, "0") }.png`)),
            ...new Array(6).fill(null).map((v, i) => require(`@/assets/images/gallery/photo-${ `${ i + 1 }`.padStart(2, "0") }.jpg`)),
            require(`@/assets/images/outline/main.jpg`),
            require(`@/assets/images/outline/main-mobile.jpg`),
            { url: require(`@/assets/sounds/sound.mp3`), type: "binary" },
            { url: require(`@/assets/videos/background.mp4`), type: "binary" },
            { url: require(`@/assets/videos/full.mp4`), type: "binary" },
        ], ({ target, progress, error }) => {
            console.debug(`Assets Loaded: ${ (progress * 100).toFixed(1) }% - ${ typeof target === "string" ? target : target.url }`);
            error && console.error(error)
        });
    }
    return value;
});

window.rayImageSrc = require(`@/assets/images/ray.jpg`);
window.menuBgSrc = [require(`@/assets/images/menu/bg.jpg`), require(`@/assets/images/menu/bg-mobile.jpg`)];
window.openingTimeout = 7;

const onPhotosCompleted = () => {
    window.openingStatus = true;
}

const updateStatus = () => {
    opening.pending = !!window.openingPending;
    opening.status = window.openingStatus;
    ray.progress = window.rayProgress || 0;
    screen.scrolling = !!window.screenScrolling;

    requestAnimationFrame(updateStatus);
}
updateStatus();

const updateLocale = (locale: string) => {
    const head = document.getElementsByTagName("head")[0];
    const libs = [] as { rel: string, href: string }[];

    switch (locale) {
        case "zht":
            libs.push({ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap" });
            break;
    }
    for (const lib of libs) {
        const link = document.createElement("link");

        link.rel = lib.rel;
        link.href = lib.href;

        head.appendChild(link);
    }
    window.marqueeRing = t(`marquee.ring`);
};
updateLocale(locale.value);
watch(locale, updateLocale);

watch(() => state.isSoundPlaying, value => {
    value ? sound.value?.play() : sound.value?.pause();
});
watch(() => state.isVideoPlaying, value => {
    sound.value && (sound.value.muted = value);
});

onMounted(() => {
    const autoplay = localStorage.getItem("autoplay");

    if (sound.value && autoplay) {
        const [timestamp, playtime, paused] = autoplay.split(",").map(v => +v);

        if (new Date().getTime() - timestamp <= 2000) {
            commit(`enterPage`);

            sound.value.currentTime = playtime;
            paused && commit(`toggleSound`);
        }
    }
});
document.body.addEventListener("touchend", () => {
    if (state.isSoundPlaying && sound.value?.paused)
        sound.value.play();
});
</script>

<style lang="scss">
.full-width {
    @include full-width;
}
.full-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    width: 100%;
    height: 90vh;

    font-size: 15px;
    color: #eeeeee;

    #img-logo {
        display: block;
        width: 150px;
    }
    #btn-enter {
        display: block;
        padding: 8px 24px;

        border: 1px solid #797979;
        border-radius: 5px;

        &:hover {
            font-weight: bold;
            color: #111111;

            border-color: #eeeeee;
            background-color: #eeeeee;
        }
    }
}

.cRayForeground {
    position: fixed;
    z-index: 750;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: right bottom;
}
.cScrollingMask {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: #050711;
}
</style>
