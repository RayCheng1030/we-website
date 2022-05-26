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

        <canvas class="cRay" data-el></canvas>
        <canvas class="cRayBackground" data-el></canvas>
        <canvas class="cCylinder" data-el></canvas>
    </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useI18n } from "vue-i18n";

import MenuNavigation from "@/views/sections/MenuNavigation.vue";
import MenuPopup from "@/views/sections/MenuPopup.vue";

const { t, locale } = useI18n();

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

window.rayImageSrc = require(`@/assets/images/ray.jpg`);
window.menuBgSrc = [require(`@/assets/images/menu/bg.jpg`), require(`@/assets/images/menu/bg-mobile.jpg`)];
</script>

<style lang="scss">
.full-width {
    @include full-width;
}
</style>
