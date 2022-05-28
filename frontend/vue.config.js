module.exports = {
  devServer: {
    port: 8000,
    disableHostCheck: true,
    transpileDependencies: true,
  },
  publicPath: `/${process.env.REACT_APP_HASH}/`,
};
