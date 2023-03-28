import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 权限信息 */
    permissions?: Array<string>
  }
}