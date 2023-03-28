import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { useUserStore } from './user'
import Router from '@/router'
import RouteMap from '@/router/routeMap'
import { filterAsyncRoutes } from '@/utils'

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
     handleAuthRoute(routes: RouteRecordRaw[]) {
      routes.forEach(route => {
        Router.addRoute(route)
      })
    }
  }
})