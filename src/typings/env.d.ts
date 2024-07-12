/**
 *后台服务的环境类型
 * - dev: 后台开发环境
 * - test: 后台测试环境
 * - prod: 后台生产环境
 */
type ServiceEnvType = 'dev' | 'test' | 'prod'

interface ServiceEnvConfig {
  /** 请求地址 */
  url: string
}

interface ServiceEnvConfigWithProxyPattern
  extends ServiceEnvConfig {
  /**
   * 匹配路径的正则字符串
   * - 用于拦截地址转发代理(任意以 /开头 + 字符串, 单个/不起作用)
   * - 和后端请求地址的前缀无关
   * - 有多个后端请求实例时，需要创建不同的值
   */
  proxyPattern: '/proxy-pattern'
}

interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string

  /** 项目名称 */
  readonly VITE_APP_NAME: string

  /** iconify图标作为组件的前缀 */
  readonly VITE_ICON_PREFFIX: string
  /**
   * 本地SVG图标作为组件的前缀, 请注意一定要包含 VITE_ICON_PREFFIX
   * - 格式 {VITE_ICON_PREFFIX}-{本地图标集合名称}
   * - 例如：icon-local
   */
  readonly VITE_ICON_LOCAL_PREFFIX: string

  /** 后端服务的环境类型 */
  readonly VITE_SERVICE_ENV?: ServiceEnvType
}
