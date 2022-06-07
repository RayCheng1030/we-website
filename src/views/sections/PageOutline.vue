<template>
    <section class="lOutline" id="outline" data-el data-scroll data-scroll-call="lOutline">
        <h2 class="cTitle -right lOutline-title" data-el="cTitle" data-scroll data-scroll-call="lOutline-title" data-ref data-scroll-offset="10%">
            <span class="cTitle-line -top"></span>
            <span class="cTitle-line -bottom"></span>
            {{ $t("navigation.outline") }}
        </h2>
        <p class="lOutline-catchMajor" data-el data-scroll data-scroll-call="lOutline-catchMajor">
            <span v-for="(text, i) in title" :key="i">{{ text }}&nbsp;<br></span>
        </p>
        <picture>
            <source media="(max-width: 767px)" :srcset="require(`@/assets/images/outline/main.png`)">
            <img class="lOutline-image" alt="" loading="lazy" data-ref data-scroll data-scroll-speed="-3" :src="require(`@/assets/images/outline/main.png`)" :width="main.width">
        </picture>
        <p class="lOutline-catchSub" data-ref data-scroll data-scroll-call="lOutline-catchSub">
            <span class="lOutline-catchSub-line -top"></span>
            <span class="lOutline-catchSub-line -bottom"></span>
            {{ $t("outline.subtitle") }}
        </p>
        <div class="lOutline-text" data-el data-scroll data-scroll-call="lOutline-text-p">
            <p v-for="(paragraph, i) in content" :key="i" class="lOutline-text-p">
                <span v-for="(text, j) in paragraph" :key="j" class="full-width">{{ text }}</span>
            </p>
        </div>
        <picture v-for="(photo, i) in photos" :key="i">
            <source media="(max-width: 767px)" :srcset="require(`@/assets/images/outline/bg-${ pad(i + 1, 2) }.png`)">
            <img :class="`lOutline-bgPhoto -n${ i + 1 }`" alt="" loading="lazy" data-el data-scroll :data-scroll-speed="randomInt(0, 5)" :src="require(`@/assets/images/outline/bg-${ pad(i + 1, 2) }.png`)" :width="photo.width">
        </picture>
    </section>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { getI18nList, pad, randomInt } from "@/models/util";

const main = reactive({ width: 1480 });
const photos = reactive([
    { width: 500 },
    { width: 400 },
    { width: 700 },
    { width: 500 },
    { width: 300 },
]);

const title = computed(() => getI18nList(`outline.title`));
const content = computed(() => getI18nList(`outline.content`, `0`).map((v, i) => getI18nList(`outline.content[${ i }]`)));
</script>

<style lang="scss">
.lOutline-catchMajor {
    .mOverlap {
        display: block !important;

        .mOverlap-line {
            @include full-width;
        }
    }
}

@include desktop {
    .lOutline-bgPhoto {
        &.-n1 {
            left: 68.4375rem;
            top: 97.3125rem;
            width: 31.25rem;
            height: 42.5rem;
        }
        &.-n2 {
            left: 0;
            top: 142rem;
            width: 18.375rem;
            height: 25rem;
        }
        &.-n3 {
            left: 50rem;
            top: 164.4375rem;
            width: 43.75rem;
            height: 32.0625rem;
        }
        &.-n4 {
            left: 0;
            top: 196.4375rem;
            width: 31.25rem;
            height: 42.5rem;
        }
        &.-n5 {
            left: 49.9375rem;
            top: 224.25rem;
            width: 18.75rem;
            height: 25.4375rem;
        }
    }
}

@include mobile {
    .lOutline-bgPhoto {
        &.-n1 {
            right: 0;
            top: 54.0625rem;
            width: 15.625rem;
            height: 21.25rem;
        }
        &.-n2 {
            left: 0;
            top: 76.625rem;
            width: 12.5rem;
            height: 9.1875rem;
        }
        &.-n3 {
            left: 4rem;
            top: 87.53125rem;
            width: 21.875rem;
            height: 16.03125rem;
        }
        &.-n4 {
            left: 0;
            top: 109.59375rem;
            width: 15.625rem;
            height: 21.25rem;
        }
        &.-n5 {
            left: 16.5rem;
            top: 134.375rem;
            width: 9.25rem;
            height: 12.71875rem;
        }
    }
}
</style>
