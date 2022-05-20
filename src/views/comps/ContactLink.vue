<template>
    <a class="lOrder-contact-link" :href="props.href" target="_blank" rel="noopener noreferrer">
        <div class="lOrder-contact-link-font">{{ props.title }}</div>
        <div class="lOrder-contact-link-arrow">
            <div class="lOrder-contact-link-arrow-wrap">
                <img class="lOrder-contact-link-arrow-img01" :src="require(`@/assets/images/link-arrow.png`)" width="21" height="21" alt="" loading="lazy">
                <img class="lOrder-contact-link-arrow-img02 -pcOnly" :src="require(`@/assets/images/link-arrow.png`)" width="21" height="21" alt="" loading="lazy">
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{ title: string, href: string }>();
</script>

<style lang="scss">

</style>
