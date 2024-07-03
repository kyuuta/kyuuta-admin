import type { RouteRecordRaw } from 'vue-router'

/**
 * 权限菜单树扁平
 *
 * @param {Array} treeArr 权限树
 * @returns {Array} 组装后返回唯一值routeName的权限数组
 */
export function menuTreeFlat(treeArr): string[] {
  return [].concat(
    ...treeArr.map((v) => {
      // v.type:0 是判断权限是菜单还是按钮级
      return v.type === 0
        ? v.list && v.list.length
          ? [].concat(v.code, ...menuTreeFlat(v.list))
          : [].concat(v.code)
        : []
    })
  )
}

/**
 * 权限按钮树扁平
 * @param {Array} treeArr 权限树
 * @returns {Array} 组装后返回唯一值code的权限数组
 */
export function buttonTreeFlat(treeArr): string[] {
  return treeArr.reduce((result, item) => {
    if (item.type === 1) {
      result.push(item.code)
    }
    if (item.list.length > 0) {
      result.push(...buttonTreeFlat(item.list))
    }
    return result
  }, [] as number[])
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
  return routes
    .map((route) => filterRoutePermisson(route, permission))
    .flat(1)
}

/**
 * 判断该路由是否权限
 * @param route - 路由
 * @param permission - 权限
 */
export function getPermission(
  route: RouteRecordRaw,
  permission: string[]
): boolean {
  if (route.meta && route.meta.permissions) {
    const { permissions } = route.meta

    return typeof permissions === 'string'
      ? permission.includes(permissions)
      : permissions.every((id) => {
          return permission.includes(id)
        })
  }
  return true
}

/**
 * 根据用户权限过滤单个路由
 * @param route - 路由
 * @param permission - 权限
 */
export function filterRoutePermisson(
  route: RouteRecordRaw,
  permission: string[]
) {
  const filterRoute = { ...route }
  const hasPermission = getPermission(route, permission)

  if (filterRoute.children) {
    const filterChildren = filterRoute.children
      .map((item) => filterRoutePermisson(item, permission))
      .flat(1)
    Object.assign(filterRoute, { children: filterChildren })
  }

  return hasPermission ? [filterRoute] : []
}
