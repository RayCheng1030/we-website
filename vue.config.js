const { defineConfig } = require("@vue/cli-service");

const globalSassFiles = [
    "./src/assets/styles/themes.scss",
];
const i18n = {
    zht: {
        title: "WE世界娛樂官方形象網站",
        description: "WE世界娛樂 2022世界拳王-帕奎奧 南韓首場表演賽獨家冠名。世界娛樂-現場之最 World Entertainment Create Masterpiece of Live",
    },
    en: {
        title: "WORLD ENTERTAINMENT",
        description: "WE ABSOLUTE ENJOYMENT, PAGCOR, MGA, GLI INTERNATIONAL FAIRNESS MECHANISM CERTIFICATE",
    },
};

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "./",
    pages: {
        index: {
            entry: "src/main.ts",
            template: "public/index.html",
            filename: "index.html",
            chunks: ["chunk-vendors", "chunk-common", "index"],
            title: i18n.zht.title,
            description: i18n.zht.description,
            i18n,
            url: "./",
        },
        en: {
            entry: "src/main.ts",
            template: "public/en/index.html",
            filename: "en/index.html",
            chunks: ["chunk-vendors", "chunk-common", "en"],
            title: i18n.en.title,
            description: i18n.en.description,
            i18n,
            url: "./../",
        },
    },
    chainWebpack: config => {
        config.module.rule("scss").oneOfs.store.forEach(item => {
            item.use("sass-resources-loader")
                .loader("sass-resources-loader")
                .options({
                    resources: globalSassFiles,
                })
                .end();
        });
    },
});
