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
                args[0].title = "WE 世界娛樂";
                args[0].description = "World Entertainment 世界娛樂形象官方網站";
                args[0].url = "./";
                return args;
            });
    },
});
