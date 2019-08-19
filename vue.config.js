module.exports = {
  lintOnSave: false,

  chainWebpack (config) {
    // Keeping 'preload' enabled causes some really stupid cache problems.
    config.plugins.delete('preload')
  }
}
