import { defineConfig, loadEnv } from 'vite'
import { getServiceEnvConfig } from './.env-config'
import {
  createViteProxy,
  getSrcPath,
  getRootPath,
  setupVitePlugins
} from './build'

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd())

  const rootPath = getRootPath()
  const srcPath = getSrcPath()

  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === 'Y'

  const envConfig = getServiceEnvConfig(viteEnv)

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
      open: false,
      cors: true,
      host: true,
      proxy: createViteProxy(isOpenProxy, envConfig)
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
