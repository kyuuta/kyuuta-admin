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

/**
 * 获取缓存的路由名称
 * @param routes - 路由
 */
export function getCacheRoutes(routes: RouteRecordRaw[]) {
  const cacheNames: string[] = []
  routes.forEach((route) => {
    if (hasChildren(route)) {
      route.children.forEach((item) => {
        if (isKeepAlive(item)) {
          cacheNames.push(item.name as string)
        }
      })
    }
  })
  return cacheNames
}
