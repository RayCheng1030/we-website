import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import i18n from "@/models/i18n";

const routes: Array<RouteRecordRaw> = []

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach(to => {
    if (to.query.lang) {
        i18n.global.locale = to.query.lang as string;
        localStorage.setItem("lang", i18n.global.locale);
    }
    else i18n.global.locale = localStorage.getItem("lang") || "zht";

    sessionStorage.clear();

    if (to.fullPath !== "/")
        window.location.href = "/";
});

export default router;
