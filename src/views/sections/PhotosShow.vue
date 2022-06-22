<template>
    <div id="photos-show" v-show="props.show">
        <img v-for="i in photos.length" :key="i" class="photo" :src="require(`@/assets/images/shows/photo-${ pad(i, 2) }.jpg`)" :style="getPhotoStyle(i - 1)" />
    </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, reactive, watch } from "vue";
import { pad } from "@/models/util";

const props = defineProps<{ duration: number, show: boolean }>();
const emit = defineEmits<{
    (event: "complete"): void,
}>();

const photos = reactive({
    length: 10,
    width: 0.5,
    stagger: 0.2,
});
const getPhotoStyle = (i: number) => {
    const left = (Math.random() * (1.2 - photos.width) - 0.1) * 100;
    const top = (Math.random() * 0.8 - 0.1) * 100;

    return {
        width: `${ photos.width * 100 }%`,
        left: `${ left }%`,
        top: `${ top }%`,
        animationDuration: `${ props.duration - (photos.length - 1) * photos.stagger }s`,
        animationDelay: `${ i * photos.stagger }s`,
        transformOrigin: `${ 100 - left * 2 }% ${ 100 - top * 2 }%`,
    }
};

let timeout = -1;

watch(() => props.show, value => {
    if (!value) return;

    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
        emit("complete");
    }, props.duration * 1000);
});
</script>

<style lang="scss">
#photos-show {
    position: fixed;
    z-index: 800;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;

    .photo {
        position: absolute;
        border-radius: 10px;
        opacity: 0;
        transform: scale(0.5);

        animation: photo-show ease-out;
    }
}

@keyframes photo-show {
    0% {
        opacity: 0;
        transform: scale(0.35);
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: scale(1);
    }
}
</style>
