import { createApp } from "vue";
import App from "@/App.vue";
import i18n from "@/models/i18n";
import router from "@/models/router";
import store from "@/models/store";

createApp(App).use(i18n).use(store).use(router).mount("#pIndex");
