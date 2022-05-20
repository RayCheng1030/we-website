<template>
    <header class="cHeader" data-el="cHeader">
        <div class="cHeader-main">
            <p class="cHeader-text">{{ $t("header.sign") }}</p>
            <a class="cHeader-logo" href="/">
                <p>
                    <img class="cHeader-logo-image" :src="require(`@/assets/images/sign.png`)" alt="Sign">
                </p>
            </a>
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

</script>

<style lang="scss">

</style>
