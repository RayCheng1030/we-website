<template>
    <div class="cModal cMenu" data-modal="menu" data-el>
        <div ref="menuBg" class="cModal-backdrop cMenu-background" data-modal-backdrop></div>
        <div class="cModal-content cMenu-content" data-modal-content>
            <div class="cModal-close" data-modal-close>
                <span data-ref="cMenu-cHoverOverlap">{{ $t("button.close") }}</span>
            </div>
            <a class="cMenu-logo" href="/">
                <p>
                    <img class="cMenu-logo-image" src="images/common/c-logoEN.svg" alt="ACSL" loading="lazy">
                </p>
            </a>
            <div class="cMenu-group">
                <a class="cMenu-item" href="/#outline" data-ref>
                    <span class="cMenu-item-line -top">
                        <span class="cMenu-item-line-child -left"></span>
                        <span class="cMenu-item-line-child -right"></span>
                    </span>
                    <span class="cMenu-item-line -bottom">
                        <span class="cMenu-item-line-child -left"></span>
                        <span class="cMenu-item-line-child -right"></span>
                    </span>
                    <span class="cMenu-linkTitle">{{ $t("navigation.outline") }}</span>
                </a>
                <a class="cMenu-item" href="/#news" data-ref>
                    <span class="cMenu-item-line -top">
                        <span class="cMenu-item-line-child -left"></span>
                        <span class="cMenu-item-line-child -right"></span>
                    </span>
                    <span class="cMenu-item-line -bottom">
                        <span class="cMenu-item-line-child -left"></span>
                        <span class="cMenu-item-line-child -right"></span>
                    </span>
                    <span class="cMenu-linkTitle">{{ $t("navigation.news") }}</span>
                </a>
                <a class="cMenu-item" href="/#order" data-ref>
                    <span class="cMenu-item-line -top">
                        <span class="cMenu-item-line-child -left"></span>
                        <span class="cMenu-item-line-child -right"></span>
                    </span>
                    <span class="cMenu-item-line -bottom">
                        <span class="cMenu-item-line-child -left"></span>
                        <span class="cMenu-item-line-child -right"></span>
                    </span>
                    <span class="cMenu-linkTitle">{{ $t("navigation.order") }}</span>
                </a>
            </div>
            <BottomMarquee target="cMenu" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { isMobile } from "@/models/util";
import { onMounted, ref } from "vue";

import BottomMarquee from "@/views/comps/BottomMarquee.vue";

const menuBg = ref(null as HTMLDivElement | null);

onMounted(() => {
    menuBg.value && (menuBg.value.style.backgroundImage = `url(${ window.menuBgSrc[isMobile() ? 1 : 0] })`);
});
</script>
