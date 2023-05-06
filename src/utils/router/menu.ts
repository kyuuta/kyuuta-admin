import { useIconRender } from '@/composables'
import { RouteRecordRaw } from 'vue-router'

/**
 * 将路由表转换成Naive Menu格式&Breadcrumb格式
 * @param routes - 路由
 */
export function transformRouteToMenu(
  routes: RouteRecordRaw[]
) {
  const menu: App.GlobalMenuOption[] = []

  routes.forEach((route) => {
    const { name, path, meta } = route
    const routeName = name as string
    let menuChildren: App.GlobalMenuOption[] | undefined

    if (route.children && route.children.length) {
      menuChildren = transformRouteToMenu(route.children)
    }

    const menuItem: App.GlobalMenuOption = addPartialProps({
      key: routeName,
      label: meta?.title || routeName,
      routeName,
      routePath: path,
      icon: meta?.icon,
      localIcon: meta?.localIcon,
      children: menuChildren
    })

    if (!meta?.hide) {
      menu.push(menuItem)
    }
  })

  return menu
}

/**
 * 将路由表转换为只有一级路由
 * @param routes - 路由
 */
export function transformFirstDegreeMenu(
  routes: RouteRecordRaw[]
) {
  return routes.map((route) => {
    const { name, label, meta, redirect } = route
    const icon = route?.icon
    const hasChildren = Boolean(
      route.children && route.children.length
    )

    const menuItem = addPartialProps({
      routeName: name,
      label: meta?.title || name,
      redirect,
      icon: meta?.icon,
      localIcon: meta?.localIcon,
      hasChildren
    })

    return menuItem
  })
}

/**
 * 获取当前路由所在菜单的paths
 * @param activeKey - 当前路由的Key
 * @param menus - 菜单数据
 */
export function getActiveKeyPathsOfMenus(
  activeKey: string,
  menus: App.GlobalMenuOption[]
) {
  const keys = menus
    .map((menu) => getActiveKeyPathsOfMenu(activeKey, menu))
    .flat(1)
  return keys
}

function getActiveKeyPathsOfMenu(
  activeKey: string,
  menu: App.GlobalMenuOption
) {
  const keys: string[] = []
  if (activeKey.startsWith(menu.routeName)) {
    keys.push(menu.routeName)
  }

  if (menu.children) {
    keys.push(
      ...menu.children
        .map((item) =>
          getActiveKeyPathsOfMenu(
            activeKey,
            item as App.GlobalMenuOption
          )
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
  menu: App.GlobalMenuOption[]
) {
  const menus: App.GlobalMenuOption[] = []
  menu.some((item) => {
    const flag =
      item.routeName ===
        getActiveKeyPathsOfMenus(activeKey, menu)[0] &&
      Boolean(item.children?.length)
    if (flag) {
      menus.push(...(item.children || []))
    }
    return flag
  })
  return menus
}

/** 给菜单添加可选属性 */
function addPartialProps(config: {
  menu: App.GlobalMenuOption
  icon?: string
  localIcon?: string
}) {
  const { iconRender } = useIconRender()

  const item = { ...config }

  const { icon, localIcon } = config

  if (localIcon) {
    Object.assign(item, { icon: iconRender({ localIcon }) })
  }

  if (icon) {
    Object.assign(item, { icon: iconRender({ icon }) })
  }

  return item
}
