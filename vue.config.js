// vue.config.js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // Configura publicPath solo para producción
  publicPath: process.env.NODE_ENV === 'production'
    // El nombre del repositorio es 'polimarket_vue', por lo tanto, la ruta base es '/polimarket_vue/'
    ? '/polimarket_vue/'
    : '/' // Para desarrollo local, la ruta base sigue siendo la raíz
})
