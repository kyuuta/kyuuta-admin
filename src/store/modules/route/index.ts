import type { RouteRecordRaw } from 'vue-router'
import { defineStore } from 'pinia'
import Router from '@/router'
import RouteMap from '@/router/routeMap'
import { useUserStore } from '../user'
import { useTabStore } from '../tab'
import { PageConfig } from '@/config/page'
import ConstantRouteMap from '@/router/constantRouteMap'
import {
  getCacheRoutes,
  filterAsyncRoutes,
  getConstantRouteMapNames,
  transformRouteToMenu,
  transformFirstDegreeMenu
} from '@/utils'

interface IRouteStore {
  /** 是否初始化了权限路由 */
  isInitAuthRoute: boolean
  /** 路由首页name */
  routeHomeName: string
  /** 菜单 */
  menu: App.GlobalMenuOption[]
  /** 一级菜单 */
  firstDegreeMenus: App.GlobalMenuOption[]
  /** 缓存的路由名称 */
  cacheRoutes: string[]
}

export const useRouteStore = defineStore({
  id: 'RouteStore',
  state: (): IRouteStore => ({
    isInitAuthRoute: false,
    routeHomeName: 'DashboardConsole',
    menu: [],
    firstDegreeMenus: [],
    cacheRoutes: []
  }),
  actions: {
    /** 初始化动态路由 */
    async initAuthRoute() {
      this.initStaticRoute()
    },
    async initStaticRoute() {
      const { initHomeTab } = useTabStore()

      const userStore = useUserStore()
      const routes = filterAsyncRoutes(
        RouteMap,
        userStore.role
      )
      this.handleAuthRoute(routes)

      initHomeTab(this.routeHomeName, Router)

      this.isInitAuthRoute = true
    },
    /**
     * 处理权限路由
     * @param routes - 权限路由
     */
    handleAuthRoute(routes: RouteRecordRaw[]) {
      this.menu = transformRouteToMenu(routes)
      this.firstDegreeMenus =
        transformFirstDegreeMenu(routes)

      routes.forEach((route) => {
        Router.addRoute(route)
      })

      this.cacheRoutes = getCacheRoutes(routes)
    },
    /**
     * 判断路由是否ConstantRoute
     * @param routeName - 路由name
     */
    validConstantRoute(routeName: string) {
      return (
        getConstantRouteMapNames(ConstantRouteMap).includes(
          routeName
        ) && routeName !== PageConfig.NOT_FOUNT_NAME
      )
    }
  }
})
