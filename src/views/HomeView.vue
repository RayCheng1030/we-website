<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const HelloWorld = defineAsyncComponent(/* webpackChunkName: "HelloWorld" */ () => import("@/components/HelloWorld.vue"));
</script>
