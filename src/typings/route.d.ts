import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 页面标题 TODO:i18n */
    title?: string
    /** 权限信息 */
    permissions?: Array<string>
    /** 是否在菜单中隐藏 */
    hide?: boolean
    /** 图标 */
    icon?: string
    /** 本地图标 */
    localIcon?: string
    /** 是否支持页面多标签 */
    multiTab?: boolean
    /** 页面是否缓存 */
    keepAlive: boolean
  }
}
