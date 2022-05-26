<template>
    <div class="cNews" data-news>
        <component class="cNews-link" :is="props.article.href.startsWith(`http`) ? `a` : `router-link`" :href="props.article.href" :to="`/article/${ props.article.href }`">
            <div class="cNews-day">
                <p class="cNews-day-month">{{ props.article.date }}</p>
                <p class="cNews-day-year">{{ props.article.year }}</p>
            </div>
            <div class="cNews-article">
                <p class="cNews-article-text">{{ props.article.summary }}</p>
                <div class="cNews-article-image" data-news-image>
                    <img width="2000" height="1125" :src="require(`@/assets/images/articles/${ props.article.image }`)" class="cNews-article-img wp-post-image" alt="" loading="lazy" />
                </div>
            </div>
        </component>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

type Article = {
    date: string, year: string, summary: string, href: string, image: string,
};

const props = defineProps<{ article: Article }>();
</script>

<style lang="scss">

</style>
