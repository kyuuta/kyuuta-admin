type ServiceEnv = Record<ServiceEnvType>

const serviceEnv: ServiceEnv = {
  dev: {
    url: 'http://somedev.cn'
  },
  test: {
    url: 'http://sometest.cn'
  },
  prod: {
    url: 'https://someprod.cn'
  }
}

/**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
export function getServiceEnvConfig(
  env: ImportMetaEnv
): ServiceEnvConfigWithProxyPattern {
  const { VITE_SERVICE_ENV = 'dev' } = env

  const config = serviceEnv[VITE_SERVICE_ENV]

  return {
    ...config,
    proxyPattern: '/proxy-pattern'
  }
}