<template>
    <a :class="`${ props.target }-logo`" :href="href">
        <p>
            <img :class="`${ props.target }-logo-image sign-logo-image`" :src="require(`@/assets/images/sign.png`)" alt="Sign" loading="lazy">
        </p>
    </a>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps<{ target: string }>();
const href = computed(() => `/#/?lang=${ localStorage.getItem("lang") }`);
</script>

<style lang="scss">
@include desktop {
    .sign-logo-image {
        width: calc(6rem * 1.5);
        height: calc(2.3rem * 1.5);
    }
}

@include mobile {
    .sign-logo-image {
        width: calc(6rem * 1.35);
        height: calc(2.3rem * 1.35);
    }
}
</style>
