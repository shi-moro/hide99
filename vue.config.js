const Dotenv = require('dotenv-webpack');

module.exports = {
  transpileDependencies: ["vuetify"],

  configureWebpack: {
    plugins: [
      new Dotenv()
    ],

  },

  pluginOptions: {
    i18n: {
      locale: "ru",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
      enableBridge: false,
    }
  }
}
