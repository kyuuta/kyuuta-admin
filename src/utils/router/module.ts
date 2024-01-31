import { orderBy } from 'lodash-es'
import type { RouteRecordRaw } from 'vue-router'

/**
 * 权限路由排序
 * @param routes - 权限路由
 */
export function sortRoutes(routes: RouteRecordRaw[]) {
  return orderBy(routes, ['meta.order']).map((i) => {
    if (i.children) sortRoutes(i.children)
    return i
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

  Object.keys(modules).forEach((key) => {
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
 * 获取所有ConstantRouteMap的路由Name集合
 * @param routes - 固定路由表
 */
export function getConstantRouteMapNames(
  routes: RouteRecordRaw[]
) {
  const names = []
  const stack = [...routes]
  while (stack.length) {
    const obj = stack.pop() as RouteRecordRaw
    names.push(obj.name)
    if (obj.children) stack.push(...obj.children)
  }
  return names
}
