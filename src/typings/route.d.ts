import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 页面标题 */
    title?: string
    /** 图标 */
    icon?: string
    /** 本地图标 */
    localIcon?: string
    /** 是否在菜单中隐藏 */
    hide?: boolean
    /** 需要高亮的菜单路由 name */
    activeMenu?: string
    /** 是否支持打开页面多标签 */
    multiTab?: boolean
    /** 权限信息 */
    permissions?: Array<string>
    /** 是否需要权限访问 */
    requiresAuth?: boolean
    /** 页面是否缓存 */
    keepAlive?: boolean
  }
}
