import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import { wrapperEnv } from './build/utils'
import { getServiceEnvConfig } from './.env-config'

import {
  createViteProxy,
  getSrcPath,
  getRootPath,
  setupVitePlugins,
  viteDefine
} from './build'

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)

  const proxyConfig = getServiceEnvConfig(viteEnv)

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
    define: viteDefine,
    plugins: setupVitePlugins(viteEnv),
    server: {
      open: false,
      cors: true,
      host: true,
      proxy: createViteProxy(
        viteEnv.VITE_HTTP_PROXY,
        proxyConfig
      )
    },
    optimizeDeps: {
      include: ['@better-scroll/core']
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false
      }
    }
  }
}
