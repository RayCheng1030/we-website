<template>
    <div data-router-wrapper>
        <div data-router-view="pIndex">
            <main class="cMain">
                <PageHeader />
                <PageOutline />
                <PageOutlineGallery />
                <PageNews />
                <PageOrder />
                
                <div data-scroll data-scroll-repeat data-scroll-call="scrollDown" style="position:absolute;top:0;height:5vh"></div>
            </main>
            <div data-fixed-local>
                <VideoPopup />
                <LoadingPopup />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import PageHeader from "@/views/sections/PageHeader.vue";
import PageOutline from "@/views/sections/PageOutline.vue";
import PageOutlineGallery from "@/views/sections/PageOutlineGallery.vue";
import PageNews from "@/views/sections/PageNews.vue";
import PageOrder from "@/views/sections/PageOrder.vue";
import VideoPopup from "@/views/sections/VideoPopup.vue";
import LoadingPopup from "@/views/sections/LoadingPopup.vue";

onMounted(async () => {
    const head = document.getElementsByTagName("head")[0];
    const libs = ["vendor", "pace.min", "index", "main"];

    for (const lib of libs) {
        await new Promise(resolve => {
            const script = document.createElement("script");

            script.defer = true;
            script.src = `./libs/home/${ lib }.js?v=4`;
            script.onload = resolve;

            head.appendChild(script);
        });
    }
});
</script>

<style lang="scss">

</style>
