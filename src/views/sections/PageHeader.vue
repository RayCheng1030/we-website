<template>
    <a class="lHero" data-el data-scroll data-scroll-sticky data-scroll-target=".cMain">
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
            <p class="lHero-logo" data-ref>
                <span>
                    <img class="lHero-logo-img" width="150" height="100" aria-label="WE Logo" :src="require(`@/assets/images/logo.png`)" />
                </span>
            </p>
        </div>
        </div>
        <BottomMarquee target="lHero" :texts="marquee" />
        <video class="lHero-video" :src="require(`@/assets/videos/background.mp4`)" muted loop playsinline autoplay data-ref></video>
        <div class="lHeroMouseStalker" data-el="cMouseStalker">
            <div class="lHeroMouseStalker-text" data-ref="cMouseStalker-text">{{ $t("button.fullMovie") }}</div>
            <div class="lHeroMouseStalker-shape -normal" data-ref="cMouseStalker-shapeNormal">
                <div class="lHeroMouseStalker-side -left"></div>
                <div class="lHeroMouseStalker-side -top"></div>
                <div class="lHeroMouseStalker-side -bottom"></div>
            </div>
            <div class="lHeroMouseStalker-shape -accent" data-ref="cMouseStalker-shapeAccent">
                <div class="lHeroMouseStalker-side -left"></div>
                <div class="lHeroMouseStalker-side -top"></div>
                <div class="lHeroMouseStalker-side -bottom"></div>
            </div>
            <div class="lHeroMouseStalker-shape -theme" data-ref="cMouseStalker-shapeTheme">
                <div class="lHeroMouseStalker-side -left"></div>
                <div class="lHeroMouseStalker-side -top"></div>
                <div class="lHeroMouseStalker-side -bottom"></div>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getI18nList } from "@/models/util";

import BottomMarquee from "@/views/comps/BottomMarquee.vue";

const title = computed(() => getI18nList(`header.title`));
const marquee = computed(() => getI18nList(`marquee.bottom`));
</script>

<style lang="scss">
@include mobile {
    .lHero-titleWord {
        @include full-width;
    }
}
</style>
