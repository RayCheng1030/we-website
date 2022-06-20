<template>
    <p :class="`cMarquee ${ props.target }-marquee`" aria-label="Marquee Text" data-ref>
        <span class="cMarquee-line" :style="`transform: translateX(-${ marquee.offsetX }px)`" data-ref>
            <span class="cMarquee-text" ref="marqueeText" data-ref>
                <span v-for="(text, i) in texts" :key="i">
                    <span v-if="i !== 0">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>{{ text }}</span>
                </span>
            </span>
        </span>
    </p>
</template>

<script setup lang="ts">
import { computed, defineProps, reactive, ref } from "vue";
import { getI18nList } from "@/models/util";

const marqueeText = ref(null as HTMLSpanElement | null);
const marquee = reactive({
    textWidth: 0,
    offsetX: 0,
    speed: 0.5,
});

const props = defineProps<{ target: string }>();
const texts = computed(() => getI18nList(`marquee.bottom`));

const getMarqueeWidth = () => {
    if (marqueeText.value) {
        const { width } = marqueeText.value.getBoundingClientRect();

        width && (marquee.textWidth = width);
        marquee.offsetX += marquee.speed;

        if (marquee.offsetX > marquee.textWidth)
            marquee.offsetX = 0;
    }
    requestAnimationFrame(getMarqueeWidth);
};
getMarqueeWidth();
</script>

<style lang="scss">

</style>
