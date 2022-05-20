import { createI18n } from "vue-i18n";
import zht from "@/models/i18n/zht.json";
import en from "@/models/i18n/en.json";

/** Default locale */
const locale = "zht";

export default createI18n({
    locale,
    fallbackLocale: locale,
    messages: {
        zht,
        en,
    },
});
