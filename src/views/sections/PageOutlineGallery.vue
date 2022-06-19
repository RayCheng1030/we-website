<template>
    <div class="lOutlineGallery" data-el data-scroll data-scroll-id="lOutlineGallery" data-scroll-call="lOutlineGallery" data-scroll-repeat>
    <div class="lOutlineGallery-target" data-ref data-scroll data-scroll-call="lOutlineGallery-inner" data-scroll-offset="80%,80%" data-scroll-repeat>
        <div class="lOutlineGallery-wrapper" data-scroll data-scroll-sticky data-scroll-target=".lOutlineGallery-target" data-sticky>
            <ul class="lOutlineGallery-list" data-ref>
                <li v-for="i in photos.length" :key="i" class="lOutlineGallery-item">
                    <picture>
                        <source media="(max-width: 767px)" :srcset="require(`@/assets/images/gallery/photo-${ pad(i, 2) }.jpg`)">
                        <img class="lOutlineGallery-image" alt="" loading="lazy" data-el :src="require(`@/assets/images/gallery/photo-${ pad(i, 2) }.jpg`)" :width="photos.width" :height="photos.height">
                    </picture>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { pad } from "@/models/util";

const photos = reactive({
    length: 6,
    width: 300,
    height: 300,
});
</script>

<style lang="scss">

</style>
