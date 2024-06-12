import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由是否缓存
 * @param route
 */
function isKeepAlive(route: RouteRecordRaw) {
  return Boolean(route?.meta?.keepAlive)
}
/**
 * 是否有二级路由
 * @param route
 */
function hasChildren(route: RouteRecordRaw) {
  return Boolean(route.children && route.children.length)
}
