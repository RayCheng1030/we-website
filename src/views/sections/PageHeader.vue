<template>
    <a class="lHero" data-el data-scroll data-scroll-sticky data-scroll-target=".cMain">
        <SoundWave />
        <div class="lHero-title">
            <div class="lHero-titleInner" data-ref>
                <h1 class="lHero-titleMain" data-ref>
                    <span class="lHero-titleMajor" data-ref aria-hidden="true">
                        <span v-for="(text, i) in title" :key="i" class="lHero-titleWord">{{ text }}&nbsp;</span>
                    </span>
                    <span class="lHero-titleMajor -flicker" data-ref="titleMajorFlicker">
                        <span v-for="(text, i) in title" :key="i" class="lHero-titleWord">{{ text }}&nbsp;</span>
                    </span>
                    <span class="lHero-titleSub" data-ref>{{ $t(`header.subtitle`) }}</span>
                </h1>
                <p v-show="state.headerLogoVisible" class="lHero-logo" data-ref>
                    <span>
                        <img class="lHero-logo-img" width="150" height="100" aria-label="WE Logo" :src="require(`@/assets/images/logo.png`)" />
                    </span>
                </p>
            </div>
        </div>
        <BottomMarquee target="lHero" :texts="marquee" />
        <video class="lHero-video" :src="require(`@/assets/videos/background.mp4`)" muted loop playsinline autoplay data-ref></video>
        <div class="lHeroMouseStalker" data-el="cMouseStalker">
            <div class="lHeroMouseStalker-text" data-ref="cMouseStalker-text" :style="`left: calc(50% + ${ $t(`button.fullMovie.textLeft`) }px)`">{{ $t("button.fullMovie.text") }}</div>
            <div class="lHeroMouseStalker-shape -normal" data-ref="cMouseStalker-shapeNormal" style="display: none" />
            <div class="lHeroMouseStalker-shape -accent" data-ref="cMouseStalker-shapeAccent" style="display: none" />
            <div class="lHeroMouseStalker-shape -theme" data-ref="cMouseStalker-shapeTheme">
                <svg class="lHeroMouseStalker-circle" viewBox="0 0 100 100" width="100" height="100">
                    <defs>
                        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text :font-size="$t(`button.fullMovie.borderSize`)">
                        <textPath xlink:href="#circle">{{ $t("button.fullMovie.border").replace(/ /g, "&nbsp;") }}</textPath>
                    </text>
                </svg>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getI18nList } from "@/models/util";
import store from "@/models/store";

import BottomMarquee from "@/views/comps/BottomMarquee.vue";
import SoundWave from "@/views/comps/SoundWave.vue";

const { state } = store;

const title = computed(() => getI18nList(`header.title`));
const marquee = computed(() => getI18nList(`marquee.bottom`));
</script>

<style lang="scss">
.lHeroMouseStalker {
    width: 100px;
    height: 100px;
    transform: translate(-50%, -50%);

    .lHeroMouseStalker-text {
        left: calc(50% - 10px);
        font-size: 20px;
    }
    .lHeroMouseStalker-circle {
        height: auto;
        width: 100px;

        fill: #c1c4cb;
        transform-origin: center;

        animation: revolve 7.5s linear infinite;
    }
}

@include mobile {
    .lHero-titleWord {
        @include full-width;
    }
    .lHeroMouseStalker {
        transform: translate(0%, 0%);

        .lHeroMouseStalker-text {
            top: calc(50% - 10px);
        }
    }
}

@keyframes spin {
    0%, 80% {
        transform: scale(1) rotate(0deg);
    }
    82.5% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1) rotate(360deg);
    }
}
@keyframes revolve {
    0% {
        transform: translate(-2.5%, -2.5%) rotate(0deg);
    }
    100% {
        transform: translate(-2.5%, -2.5%) rotate(360deg);
    }
}
</style>
