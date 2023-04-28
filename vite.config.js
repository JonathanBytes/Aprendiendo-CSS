// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        selectors: resolve(__dirname, 'selectors/selectors.html'),
        waysToIncludeCSS: resolve(__dirname, 'waysToIncludeCSS/includeCSS.html'),
        syntaxis: resolve(__dirname, 'syntaxis/CSSsyntaxis.html'),
        media: resolve(__dirname, 'media/media.html'),
        home: resolve(__dirname, 'media/home.html')
      },
    },
  },
})
