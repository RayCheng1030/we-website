<template>
    <div data-router-wrapper>
        <div data-router-view="pNewsDetail">
            <main class="cMain">
                <div class="lNewsDetail-main">
                    <div class="lNewsDetail-lead">
                        <div class="lNewsDetail-lead-date">{{ $t(`${ article }.date`) }}</div>
                        <h1 class="lNewsDetail-lead-mainTitle">{{ $t(`${ article }.title`) }}</h1>
                    </div>
                    <div class="lNewsDetail-lead-image">
                        <img class="lNewsDetail-lead-img wp-post-image" :src="require(`@/assets/images/articles/${ $t(`${ article }.image`) }`)" width="1000" height="650" alt="" />
                    </div>
                    <div class="lNewsDetail-wysiwyg">
                        <p v-for="(paragraph, i) in paragraphs" :key="i" v-html="md.renderInline(paragraph)"></p>
                    </div>
                    <ContactLink :title="$t(`button.back`)" href="/news" :routerLink="true" />
                </div>
                <div data-scroll data-scroll-repeat data-scroll-call="scrollDown" style="position:absolute;top:0;height:5vh"></div>
            </main>
            <div data-fixed-local>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RenderRule } from "markdown-it/lib/renderer";
import { computed, onMounted } from "vue";
import { getI18nList } from "@/models/util";
import { useRoute } from "vue-router";
import markdownIt from "markdown-it";

import ContactLink from "@/views/comps/ContactLink.vue";

const { params } = useRoute();
const article = computed(() => `news.pages.${ params.id }`);

const paragraphs = getI18nList(`${ article.value }.content`);

const underline = (md: markdownIt) => {
    const renderEm = ((tokens, idx, options, env, self) => {
        const token = tokens[idx];

        if (token.markup === "_")
            token.tag = "u";
        return self.renderToken(tokens, idx, options);
    }) as RenderRule;

    md.renderer.rules.em_open = renderEm;
    md.renderer.rules.em_close = renderEm;
}

const md = markdownIt({
    html: true,
    xhtmlOut: true,
    breaks: true,
    linkify: true,
}).use(underline);

onMounted(async () => {
    const head = document.getElementsByTagName("head")[0];
    const libs = ["vendor", "pace.min", "main"];

    for (const lib of libs) {
        await new Promise(resolve => {
            const script = document.createElement("script");

            script.defer = true;
            script.src = `./libs/article/${ lib }.js?v=4`;
            script.onload = resolve;

            head.appendChild(script);
        });
        console.debug(`Scripts Loaded: ./libs/article/${ lib }.js?v=4`);
    }
});
</script>

<style lang="scss">

</style>
