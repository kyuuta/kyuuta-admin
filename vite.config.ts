import { defineConfig, loadEnv } from 'vite'
import {
  getSrcPath,
  getRootPath,
  setupVitePlugins
} from './build'

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd())

  const rootPath = getRootPath()
  const srcPath = getSrcPath()

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath
      }
    },
    plugins: setupVitePlugins(viteEnv),
    server: {
      port: 2333,
      open: false,
      cors: true
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false
      }
    }
  }
})
