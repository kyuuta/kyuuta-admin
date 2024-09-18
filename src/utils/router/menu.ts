import type { RouteRecordRaw } from 'vue-router'

/**
 * 将路由表过滤提供给各种menu&breadcrumb用
 * @param routes - 路由
 */
export function transformRouteToMenu(
  routes: RouteRecordRaw[]
): RouteRecordRaw[] {
  const menu: RouteRecordRaw[] = []

  routes.forEach((route) => {
    const { meta } = route
    let menuChildren: RouteRecordRaw[] | undefined

    if (
      route.children &&
      route.children.length &&
      !route.children?.every((item) => item.meta?.hide)
    ) {
      menuChildren = transformRouteToMenu(route.children)
    }

    if (!meta?.hide) {
      menu.push({
        ...route,
        children: menuChildren
      } as RouteRecordRaw)
    }
  })

  return menu
}

/**
 * 获取当前路由所在菜单的paths
 * @param activeKey - 当前路由的Key
 * @param menus - 菜单数据
 */
export function getActiveKeyPathsOfMenus(
  activeKey: string,
  menus: RouteRecordRaw[]
) {
  const keys = menus
    .map((menu) => getActiveKeyPathsOfMenu(activeKey, menu))
    .flat(1)
  return keys
}

function getActiveKeyPathsOfMenu(
  activeKey: string,
  menu: RouteRecordRaw
) {
  const keys: string[] = []
  if (activeKey.startsWith(menu.name as string)) {
    keys.push(menu.name as string)
  }

  if (menu.children) {
    keys.push(
      ...menu.children
        .map((item) =>
          getActiveKeyPathsOfMenu(activeKey, item)
        )
        .flat(1)
    )
  }

  return keys
}

/**
 * 获取当前菜单的子路由
 * @param activeKey - 当前路由的Key
 * @param menus - 菜单数据
 */

export function getActiveMenuChild(
  activeKey: string,
  menu: RouteRecordRaw[]
) {
  const menus: RouteRecordRaw[] = []
  menu.some((item) => {
    const flag =
      item.name ===
        getActiveKeyPathsOfMenus(activeKey, menu)[0] &&
      Boolean(item.children?.length)
    if (flag) {
      menus.push(...(item.children || []))
    }
    return flag
  })
  return menus
}
