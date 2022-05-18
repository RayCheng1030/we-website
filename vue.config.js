const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "./",
    chainWebpack: config => {
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
