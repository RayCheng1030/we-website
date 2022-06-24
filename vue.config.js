const { defineConfig } = require("@vue/cli-service");

const globalSassFiles = [
    "./src/assets/styles/themes.scss",
];

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "./",
    chainWebpack: config => {
        config.module.rule("scss").oneOfs.store.forEach(item => {
            item.use("sass-resources-loader")
                .loader("sass-resources-loader")
                .options({
                    resources: globalSassFiles,
                })
                .end();
        });
        config
            .plugin("html")
            .tap(args => {
                args[0].title = "WE世界娛樂官方形象網站";
                args[0].description = "WE世界娛樂、政府監督下、公平有保障。持有菲律賓、馬耳他博彩牌照、GLI國際公正機制證書，世界娛樂就是好玩！";
                args[0].url = "./";
                return args;
            });
    },
});
