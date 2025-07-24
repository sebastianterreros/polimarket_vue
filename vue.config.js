const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // Configuración del publicPath para GitLab Pages
  publicPath: process.env.NODE_ENV === 'production'
      ? '/poli-market/'
      : '/'
})