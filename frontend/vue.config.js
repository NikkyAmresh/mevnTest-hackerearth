module.exports = {
  devServer: {
    port: 8000,
    disableHostCheck: true,
    transpileDependencies: true,
  },
  publicPath: `/${process.env.VUE_APP_HASH}/`,
};
