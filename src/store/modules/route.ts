import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { useUserStore } from './user'
import Router from '@/router'
import RouteMap from '@/router/routeMap'
import ConstantRouteMap from '@/router/constantRouteMap'
import { PageConfig } from '@/config/page'
import { filterAsyncRoutes, getConstantRouteMapNames } from '@/utils'

interface IRouteStore {
  isInitAuthRoute: boolean
  menus: RouteRecordRaw[]
  routers:  RouteRecordRaw[]
}

export const useRouteStore = defineStore({
  id: 'appRoute',
  state: (): IRouteStore => ({
    isInitAuthRoute: false,
    menus: [],
    routers: []
  }),
  actions: {
    /** 初始化动态路由 */
    async initAuthRoute() {
      this.initStaticRoute()
    },
    async initStaticRoute() {
      const userStore = useUserStore() 
      const routes = filterAsyncRoutes(RouteMap, userStore.role)
      this.handleAuthRoute(routes)
      this.isInitAuthRoute = true
    },
    /**
     * 处理权限路由
     * @param routes - 权限路由
     */
    async handleAuthRoute(routes: RouteRecordRaw[]) {
      await routes.forEach(route => {
        Router.addRoute(route)
      })
      console.log(Router.getRoutes())
    },
    /**
     * 判断路由是否ConstantRoute
     * @param routeName - 路由name
     */
    validConstantRoute(routeName: string) {
      return getConstantRouteMapNames(ConstantRouteMap).includes(routeName) 
        && routeName !== PageConfig.NOT_FOUNT_NAME
    }
  }
})