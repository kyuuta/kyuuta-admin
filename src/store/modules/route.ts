import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'

interface IRouteStore {
  menus: RouteRecordRaw[],
  routers:  RouteRecordRaw[]
}

export const useRouteStore = defineStore({
  id: 'appRoute',
  state: (): IRouteStore => ({
    menus: [],
    routers: []
  })
})