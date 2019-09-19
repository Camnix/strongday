module.exports = {
  outputDir: 'dist',
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
      defaultSizes: 'gzip'
    }
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `@import "~@/assets/sass/main.scss"`
      }
    }
  },
  chainWebpack: config => {
    ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach(match => {
      config.module
        .rule('scss')
        .oneOf(match)
        .use('sass-loader')
        .tap(opt =>
          Object.assign(opt, { data: `@import '~@/assets/sass/main.scss';` })
        );
    });
  }
};
