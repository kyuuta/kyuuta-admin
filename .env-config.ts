type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig>

/**
 * 匹配路径的正则字符串
 * - 用于拦截地址转发代理(任意以 /开头 + 字符串, 单个/不起作用)
 * - 和后端请求地址的前缀无关
 * - 有多个后端请求实例时，需要创建不同的值
 */
const serviceEnv: ServiceEnv = {
  development: [
    ["/proxy-pattern", "http://somedevapi.com"]
  ],
  test: [],
  production: []
}

/**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
export function getServiceEnvConfig(
  env: ImportMetaEnv
): ServiceEnvConfig {
  const { VITE_SERVICE_ENV = 'development' } = env

  const config = serviceEnv[VITE_SERVICE_ENV as ServiceEnvType]

  return config
}