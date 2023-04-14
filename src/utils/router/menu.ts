import { RouteRecordRaw } from 'vue-router'

/**
 * 将路由表转换成Naive Menu格式&Breadcrumb格式
 * @param routes - 路由
 */
export function transformRouteToMenu(routes: RouteRecordRaw[]) {
  const menu: App.GlobalMenuOption[] = []

  routes.forEach((route) => {
    const { name, path, meta } = route
    const routeName = name as string
    let menuChildren: App.GlobalMenuOption[] | undefined

    if (route.children && route.children.length) {
      menuChildren = transformRouteToMenu(route.children)
    }

    const menuItem: App.GlobalMenuOption = {
      key: routeName,
      label: (meta?.title || routeName) as string,
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
