<template>
    <div class="cLoading" data-el="cLoading">
        <div v-for="(text, i) in headerTitle" :key="i" class="cLoading-catch" :data-ref="`cLoading-catch${ i + 1 }`">{{ text }}</div>
        <div class="cLoading-percentage" data-ref="cLoading-percentage"></div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getI18nList } from "@/models/util";

const headerTitle = computed(() => getI18nList(`header.title`));
</script>

<style lang="scss">

</style>
