import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 页面标题 TODO:i18n */ 
    title?: string
    /** 权限信息 */
    permissions?: Array<string>
    icon?: () => import('vue').VNodeChild
  }
}
