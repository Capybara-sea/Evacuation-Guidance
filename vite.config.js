import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Evacuation-Guidance/',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      symbolId: 'icon-[dir]-[name]',
      svgoOptions: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/style/index.scss';",
      },
    },
  },
  server: {
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        error: resolve(__dirname, '404.html'),
      },
    },
  },
})
