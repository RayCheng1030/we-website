<template>
    <div class="cLoading" data-el="cLoading">
        <div v-for="(text, i) in headerTitle" :key="i" :class="[`cLoading-catch`, { 'tracking-tight': locale !== `zht` }]" :data-ref="`cLoading-catch${ i + 1 }`">{{ text }}</div>
        <div class="cLoading-percentage" data-ref="cLoading-percentage"></div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getI18nList } from "@/models/util";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const headerTitle = computed(() => getI18nList(`header.title`));
</script>

<style lang="scss">
.tracking-tight {
    letter-spacing: -0.025em;
}
</style>
