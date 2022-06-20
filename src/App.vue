<template>
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

<script setup lang="ts">
import { reactive, watch } from "vue";
import { useI18n } from "vue-i18n";

import MenuNavigation from "@/views/sections/MenuNavigation.vue";
import MenuPopup from "@/views/sections/MenuPopup.vue";
import PhotosShow from "@/views/sections/PhotosShow.vue";
import SoundToggle from "@/views/sections/SoundToggle.vue";

const { t, locale } = useI18n();
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
</script>

<style lang="scss">
.full-width {
    @include full-width;
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
