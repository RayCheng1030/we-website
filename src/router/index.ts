import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "HomeView" */ "../views/HomeView.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import(/* webpackChunkName: "AboutView" */ "../views/AboutView.vue"),
    },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
