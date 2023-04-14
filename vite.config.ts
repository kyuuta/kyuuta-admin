import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import unocss from '@unocss/vite'

export default defineConfig({
  base: './',
  plugins: [vue(), unocss()],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  server: {
    port: 2333,
    open: false,
    cors: true
  }
})
