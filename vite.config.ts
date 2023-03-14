import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  server: {
    port: 2333,
    open: true,
    cors: true
  }
})