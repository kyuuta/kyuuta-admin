import { RouteRecordRaw } from 'vue-router'

/**
 * 权限路由排序
 * @param routes - 权限路由
 */
export function sortRoutes(
  routes: RouteRecordRaw[]
) {
  return routes
    .sort((next, pre) => Number(next.meta?.order) - Number(pre.meta?.order))
    .map(route => {
      if (route.children) sortRoutes(route.children)
      return route
    })
}

/**
 * 处理全部导入的路由模块
 * @param modules - 路由模块
 */
export function handleModuleRoutes(
  modules: RouteModule.Modules
) {
  const routes: RouteRecordRaw[] = []
  
  Object.keys(modules).forEach(key => {
    const item = modules[key].default

    if (item) {
      routes.push(...item)
    } else {
      window.console.error(`路由模块解析出错: key = ${key}`)
    }
  })

  return sortRoutes(routes)
}

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