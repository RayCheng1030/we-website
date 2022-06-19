import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import i18n from "@/models/i18n";
import HomePage from "@/views/pages/HomePage.vue";
import ArticlePage from "@/views/pages/ArticlePage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        alias: ["/outline", "/news", "/order"],
        name: "home",
        component: HomePage,
    },
    {
        path: "/article/:id",
        name: "article",
        component: ArticlePage,
    },
];

const hashMode = true;
const router = createRouter({
    history: hashMode ? createWebHashHistory() : createWebHistory(),
    routes,
});

window.routes = ["/article"];

router.beforeEach(to => {
    if (to.query.lang) {
        i18n.global.locale = to.query.lang as string;
        localStorage.setItem("lang", i18n.global.locale);
    }
    else i18n.global.locale = localStorage.getItem("lang") || "zht";
});
router.afterEach(() => {
    if (sessionStorage.getItem("site-loaded"))
        sessionStorage.clear();
    else {
        sessionStorage.setItem("site-loaded", "true");
        window.location.reload();
    }
});

export default router;
