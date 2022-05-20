<template>
    <section class="lNews" id="news">
        <h2 class="cTitle lNews-title" data-el="cTitle" data-scroll data-scroll-call="cTitle">
            <span class="cTitle-line -top"></span>
            <span class="cTitle-line -bottom"></span>
            {{ $t("navigation.news") }}
        </h2>
        <div class="lNews-accordion" data-accordion>
            <div class="lNews-group lNewsStalker" data-el>
                <NewsArticle v-for="(article, i) in articles" :key="i" :article="article" />
                <div class="lNewsMouseStalker" data-el>
                    <div class="lNewsMouseStalker-text" data-ref>{{ $t("button.more") }}</div>
                        <div class="lNewsMouseStalker-shapeNormal -shape -normal" data-ref>
                            <div class="lNewsMouseStalker-circle"></div>
                        </div>
                        <div class="lNewsMouseStalker-shapeAccent -shape -accent" data-ref>
                            <div class="lNewsMouseStalker-circle"></div>
                        </div>
                        <div class="lNewsMouseStalker-shapeTheme -shape -theme" data-ref>
                            <div class="lNewsMouseStalker-circle"></div>
                        </div>
                    </div>
                </div>
            <div class="lNews-accordionMore" data-accordion-trigger>
                <div class="lNews-accordionMore-text">{{ $t("button.load") }}</div>
                <div class="lNews-accordionMore-iconWrap">
                    <div class="lNews-accordionMore-icon"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getI18nList } from "@/models/util";
import { useI18n } from "vue-i18n";

import NewsArticle from "@/views/comps/NewsArticle.vue";

const { t } = useI18n();

const articles = computed(() => getI18nList(`news.articles`, `summary`).map((v, i) => {
    return {
        date: t(`news.articles[${ i }].date`),
        year: t(`news.articles[${ i }].year`),
        summary: t(`news.articles[${ i }].summary`),
        href: t(`news.articles[${ i }].href`),
        image: t(`news.articles[${ i }].image`),
    };
}));
</script>

<style lang="scss">

</style>
