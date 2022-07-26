<template>
    <component :is="routerLink ? `router-link` : `a`" class="lOrder-contact-link" :href="props.href" :to="props.href" :target="routerLink ? `_self` : `_blank`" @click="onLink" rel="noopener noreferrer">
        <div class="lOrder-contact-link-font">{{ props.title }}</div>
        <div class="lOrder-contact-link-arrow">
            <div class="lOrder-contact-link-arrow-wrap">
                <img class="lOrder-contact-link-arrow-img01" :src="require(`@/assets/images/link-arrow.png`)" width="21" height="21" alt="" loading="lazy">
                <img class="lOrder-contact-link-arrow-img02 -pcOnly" :src="require(`@/assets/images/link-arrow.png`)" width="21" height="21" alt="" loading="lazy">
            </div>
        </div>
    </component>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{ title: string, href: string, routerLink?: boolean }>();

const onLink = () => {
    const bgm = document.querySelector<HTMLAudioElement>("#bgm");

    localStorage.setItem("autoplay", `${ new Date().getTime() },${ bgm?.currentTime || 0 },${ bgm?.paused ? 1 : 0 }`);
};
</script>

<style lang="scss">

</style>
