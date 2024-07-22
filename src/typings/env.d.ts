/**
 *后台服务的环境类型
 * - development: 开发环境
 * - test: 测试环境
 * - production: 生产环境
 */
type ServiceEnvType = 'development' | 'test' | 'production'

type ServiceEnvConfig = [string, string][]

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

  /** 是否开启proxy */
  readonly VITE_HTTP_PROXY: boolean

  /** 后端服务的环境类型 */
  readonly VITE_SERVICE_ENV: ServiceEnvType

  /** 是否开启可视化体积分析插件 */
  readonly VITE_VISUALIZER: boolean

  /** 是否开启压缩插件 */
  readonly VITE_COMPRESS?: boolean

  /** 压缩算法类型 */
  /** 可选: gzip | brotliCompress | deflate |  deflateRaw*/
  readonly VITE_COMPRESS_TYPE?:
    | 'gzip'
    | 'brotliCompress'
    | 'deflate'
    | 'deflateRaw'
}
