<template>
    <div class="lOrder" id="order" data-el>
        <h2 class="cTitle -right lOrder-title" data-el="cTitle" data-scroll data-scroll-call="cTitle">
            <span class="cTitle-line -top"></span>
            <span class="cTitle-line -bottom"></span>
            {{ $t("navigation.order") }}
        </h2>
        <p class="lOrder-catch" data-ref data-scroll data-scroll-call="lOrder-catch">
            <span v-for="(text, i) in title" :key="i">{{ text }}</span>
        </p>
        <div class="lOrder-purchase">
            <p class="lOrder-purchase-text">
                <span v-for="(text, i) in subtitle" :key="i" class="full-width" v-html="text"></span>
            </p>
            <!-- <div class="lOrder-purchase-action"> -->
            <!--     <ContactLink v-for="(link, i) in linkTop" :key="i" :title="link.title" :href="link.href" /> -->
            <!-- </div> -->
            <div class="lOrder-social-buttons">
                <button v-for="(link, i) in linkSocial" :key="i" @click.prevent="onLink(link.href)">
                    <img :src="require(`@/assets/images/social/${ link.title }`)" :alt="link.title">
                </button>
            </div>
        </div>
        <div class="lOrder-contact">
            <ContactLink v-for="(link, i) in linkBottom" :key="i" :title="link.title" :href="link.href" />
        </div>
        <div class="lOrder-video">
            <video class="lOrderVideo" :src="require(`@/assets/videos/background.mp4`)" muted loop playsinline autoplay data-el data-scroll data-scroll-speed="2" data-scroll-call="lOrderVideo" data-scroll-repeat></video>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getI18nList } from "@/models/util";
import { useI18n } from "vue-i18n";

import ContactLink from "@/views/comps/ContactLink.vue";

const { t } = useI18n();

const title = computed(() => getI18nList(`order.title`));
const subtitle = computed(() => getI18nList(`order.subtitle`).map(v => v + "&nbsp;"));
const linkTop = computed(() => getI18nList(`order.link.top`, `title`).map((v, i) => {
    return { title: t(`order.link.top[${ i }].title`), href: t(`order.link.top[${ i }].href`) };
}));
const linkBottom = computed(() => getI18nList(`order.link.bottom`, `title`).map((v, i) => {
    return { title: t(`order.link.bottom[${ i }].title`), href: t(`order.link.bottom[${ i }].href`) };
}));
const linkSocial = computed(() => getI18nList(`order.link.social`, `title`).map((v, i) => {
    return { title: t(`order.link.social[${ i }].title`), href: t(`order.link.social[${ i }].href`) };
}));

const onLink = (href: string) => {
    window.open(href, "_blank");
};
</script>

<style lang="scss">
.lOrder-catch {
    margin-top: 50px;

    .mOverlap {
        display: block !important;

        .mOverlap-line {
            @include full-width;
        }
    }
}
.lOrder-social-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;

    margin-top: 40px;
    height: 70px;

    background: url("~@/assets/images/social/border.svg") no-repeat;
    background-position: center;
    background-size: contain;

    button {
        width: 50px;
        height: 50px;

        img {
            width: 100%;
            height: 100%;
        }

        &:hover {
            filter: brightness(110%);
        }
    }
}
</style>
