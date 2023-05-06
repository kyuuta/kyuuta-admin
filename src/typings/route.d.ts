import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 页面标题 TODO:i18n */
    title?: string
    /** 权限信息 */
    permissions?: Array<string>
    /** 图标 */
    icon?: string
    /** 本地图标 */
    localIcon?: string
  }
}
