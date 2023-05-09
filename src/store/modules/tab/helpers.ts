import type {
  RouteRecordNormalized,
  RouteLocationNormalizedLoaded
} from 'vue-router'

/**
 * 判断路由是否有fullPath属性
 * @param route 路由
 */
function hasFullPath(
  route:
    | RouteRecordNormalized
    | RouteLocationNormalizedLoaded
): route is RouteLocationNormalizedLoaded {
  return Boolean(
    (route as RouteLocationNormalizedLoaded).fullPath
  )
}

/**
 * 根据vue路由获取tab路由
 * @param route
 */
export function getRouteByTab(
  route:
    | RouteRecordNormalized
    | RouteLocationNormalizedLoaded
) {
  const fullPath = hasFullPath(route)
    ? route.fullPath
    : route.path

  const tabRoute: lobalTabRoute = {
    name: route.name,
    fullPath,
    meta: route.meta,
    scrollPosition: {
      left: 0,
      top: 0
    }
  }
  return tabRoute
}

/**
 * 根据路由名称获取该页签在多页签数据中的索引
 * @param tabs - 多页签数据
 * @param routeName - 路由名称
 */
export function getIndexByName(
  tabs: GlobalTabRoute[],
  routeName: string
) {
  return tabs.findIndex((tab) => tab.name === routeName)
}

/**
 * 获取该页签在多页签数据中的索引
 * @param tabs - 多页签数据
 * @param fullPath - 该页签的路径
 */
export function getIndex(
  tabs: GlobalTabRoute[],
  fullPath: string
) {
  return tabs.findIndex((tab) => tab.fullPath === fullPath)
}

/**
 * 判断该页签是否在多页签数据中
 * @param tabs - 多页签数据
 * @param fullPath - 该页签的路径
 */
export function isInTabRoutes(
  tabs: GlobalTabRoute[],
  fullPath: string
) {
  return getIndex(tabs, fullPath) > -1
}
