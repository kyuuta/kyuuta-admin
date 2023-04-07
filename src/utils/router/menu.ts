import { RouteRecordRaw } from 'vue-router'
import type { MenuOption } from 'naive-ui'

/**
 * 将路由表转换成Naive Menu格式&Breadcrumb格式
 * @param routes - 路由
 */
export function transformRouteToMenu(
  routes: RouteRecordRaw[]
) {
  const menu: MenuOption[] = []

  routes.forEach(route => {
    const { name, path, meta } = route
    const routeName = name as string
    let menuChildren: MenuOption[] | undefined

    if (route.children && route.children.length) {
      menuChildren = transformRouteToMenu(route.children)
    }

    const menuItem: MenuOption = {
      key: routeName,
      label: meta?.title || routeName,
      routeName,
      routePath: path,
      icon: meta?.icon,
      children: menuChildren
    }

    if (!Boolean(meta?.hide)) {
      menu.push(menuItem)
    }
  })

  return menu
}