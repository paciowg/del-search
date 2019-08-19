module.exports = {
  lintOnSave: false,

  outputDir: 'docs/',
  publicPath: '/del-search/',

  chainWebpack (config) {
    // Keeping 'preload' enabled causes some really stupid cache problems.
    config.plugins.delete('preload')
  }
}
