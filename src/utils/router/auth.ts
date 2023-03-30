import { RouteRecordRaw } from 'vue-router'

/**
 * 根据用户权限过滤路由表
 * @param routes - 权限路由
 * @param permission - 权限
 */
 export function filterAsyncRoutes(
  routes: RouteRecordRaw[],
  permission: string
) {
  return routes.map(
    route => filterRoutePermisson(route, permission)
  ).flat(1)
}

/**
 * 判断该路由是否权限
 * @param route - 路由
 * @param permission - 权限
 */
export function getPermission(
  route: RouteRecordRaw,
  permission: string
): boolean {
  return !route?.meta?.permissions
    || permission === 'super'
    || route.meta.permissions.includes(permission)
}

/**
 * 根据用户权限过滤单个路由
 * @param route - 路由
 * @param permission - 权限
 */
export function filterRoutePermisson(
  route: RouteRecordRaw,
  permission: string
) {
  const filterRoute = { ...route }
  const hasPermission = getPermission(route, permission)
  
  if (filterRoute.children) {
    const filterChildren = filterRoute.children.map(
      item => filterRoutePermisson(item, permission)
    ).flat(1)
    Object.assign(filterRoute, { children: filterChildren })
  }

  return hasPermission ? [filterRoute] : []
}