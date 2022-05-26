<template>
    <header :class="`cHeader ${ route.name !== `home` && `opacity-100` }`" data-el="cHeader">
        <div class="cHeader-main">
            <p class="cHeader-text">{{ $t("header.sign") }}</p>
            <LogoSign target="cHeader" />
        </div>
        <nav class="cHeader-nav">
            <ul class="cHeader-list">
                <li class="cHeader-item">
                    <a class="cHeader-link" href="/#outline" data-el="cHoverOverlap">{{ $t("navigation.outline") }}</a>
                </li>
                <li class="cHeader-item">
                    <a class="cHeader-link" href="/#news" data-el="cHoverOverlap">{{ $t("navigation.news") }}</a>
                </li>
                <li class="cHeader-item">
                    <a class="cHeader-link" href="/#order" data-el="cHoverOverlap">{{ $t("navigation.order") }}</a>
                </li>
            </ul>
            <p>
                <a class="cHeader-menu" data-modal-trigger="menu" data-el="cHoverOverlap">{{ $t("navigation.menu") }}</a>
            </p>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

import LogoSign from "@/views/comps/LogoSign.vue";

const route = useRoute();
</script>

<style lang="scss">
.opacity-100 {
    opacity: 100;
}

@include desktop {
    .cHeader-logo-image {
        width: calc(6rem * 1.5);
        height: calc(2.3rem * 1.5);
    }
}

@include mobile {
    .cHeader-logo-image {
        width: calc(6rem * 1.35);
        height: calc(2.3rem * 1.35);
    }
}
</style>
