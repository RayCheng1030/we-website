<template>
    <p :class="`cMarquee ${ props.target }-marquee`" aria-label="Marquee Text" data-ref>
        <span class="cMarquee-line" data-ref>
            <span class="cMarquee-text" data-ref>
                <span v-for="(text, i) in texts" :key="i">
                    <span v-if="i !== 0">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>{{ text }}</span>
                </span>
            </span>
        </span>
    </p>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { getI18nList } from "@/models/util";

const props = defineProps<{ target: string }>();
const texts = computed(() => getI18nList(`marquee.bottom`));
</script>

<style lang="scss">

</style>
