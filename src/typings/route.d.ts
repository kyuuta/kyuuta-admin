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


1.新增了Tab标签页组件
2.增加了betterscroll插件依赖
3.优化整体布局
4.增加了页面缓存 由路由表源信息的keepAlive控制