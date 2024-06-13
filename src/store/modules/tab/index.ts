import type {
  Router,
  RouteMeta,
  RouteLocationNormalizedLoaded
} from 'vue-router'
import { defineStore } from 'pinia'
import { useThemeStore } from '../theme'
import { PageConfig } from '@/config/page'
import {
  setTabCache,
  getTabCache,
  clearTabCache
} from '@/utils'
import {
  isInTabRoutes,
  getIndex,
  getRouteByTab,
  getIndexByName
} from './helpers'

interface ITabStore {
  /** 多页签数据 */
  tabs: GlobalTabRoute[]
  /** 多页签首页 */
  homeTab: GlobalTabRoute
  /** 当前激活状态的页签(路由path) */
  activeTab: string
  /** 缓存的路由fullPath */
  keepAliveFullPaths: string[]
}

export const useTabStore = defineStore('TabStore', {
  state: (): ITabStore => ({
    tabs: [],
    homeTab: {
      name: 'root',
      fullPath: '/',
      meta: {
        title: 'root'
      },
      scrollPosition: {
        left: 0,
        top: 0
      }
    },
    activeTab: '',
    keepAliveFullPaths: []
  }),
  getters: {
    /** 当前所在页签索引 */
    activeTabIndex(state) {
      const { tabs, activeTab } = state
      return tabs.findIndex(
        (tab) => tab.fullPath === activeTab
      )
    }
  },
  actions: {
    /** 初始化TabStore状态 */
    initTabStore(
      currentRoute: RouteLocationNormalizedLoaded
    ) {
      const theme = useThemeStore()
      const tabs: GlobalTabRoute[] = theme.tabConfig.isCache
        ? getTabCache()
        : []

      const hasHome =
        getIndexByName(tabs, this.homeTab.name) > -1
      if (!hasHome && this.homeTab.name !== 'root') {
        tabs.unshift(this.homeTab)
      }

      const isHome =
        currentRoute.fullPath === this.homeTab.fullPath
      const index = getIndexByName(tabs, currentRoute.name)

      if (
        !isHome &&
        currentRoute.name !== PageConfig.ERROR_PAGE_NAME
      ) {
        const currentTab = getRouteByTab(currentRoute)

        if (!currentRoute.meta.multiTab) {
          if (index > -1) {
            tabs.splice(index, 1, currentTab)
          } else {
            tabs.push(currentTab)
          }
        } else {
          const hasCurrent = isInTabRoutes(
            tabs,
            currentRoute.fullPath
          )
          if (!hasCurrent) {
            tabs.push(currentTab)
          }
        }
      }

      this.tabs = tabs
      this.setActiveTab(currentRoute.fullPath)
    },
    /**
     * 初始化首页页签路由
     * @param routeHomeName - 路由首页的name
     * @param router - 路由实例
     */
    initHomeTab(routeHomeName: string, router: Router) {
      const routes = router.getRoutes()
      const findHome = routes.find(
        (item) => item.name === routeHomeName
      )

      if (findHome) {
        this.homeTab = getRouteByTab(findHome)
      }
    },
    /** 缓存标签页数据 */
    cacheTabs() {
      setTabCache(this.tabs)
    },
    clearCacheTabs() {
      clearTabCache()
    },
    /**
     * 添加多页签
     * @param route - 路由
     */
    addTab(route: RouteLocationNormalizedLoaded) {
      const tab = getRouteByTab(route)

      if (isInTabRoutes(this.tabs, tab.fullPath)) {
        return
      }

      const index = getIndexByName(this.tabs, route.name)

      if (index === -1) {
        this.tabs.push(tab)
        return
      }

      const { multiTab = false } = route.meta
      if (!multiTab) {
        this.tabs.splice(index, 1, tab)
        return
      }

      this.tabs.push(tab)
    },
    /**
     * 删除标页签
     * @param fullPath - 路由fullPath
     */
    async removeTab(fullPath: string) {
      const { routerPush } = useRouterPush(false)
      this.removeKeepAliveFullPaths([fullPath])
      const isActive = this.activeTab === fullPath
      const updateTabs = this.tabs.filter(
        (tab) => tab.fullPath !== fullPath
      )
      if (!isActive) {
        this.tabs = updateTabs
      }
      if (isActive && updateTabs.length) {
        const activePath =
          updateTabs[updateTabs.length - 1].fullPath
        const navigationFailure = await routerPush(
          activePath
        )
        if (!navigationFailure) {
          this.tabs = updateTabs
          this.setActiveTab(activePath)
        }
      }
    },
    /**
     * 清空多页签(多页签首页保留)
     * @param excludes - 保留的多页签path
     */
    async clearTab(excludes: string[] = []) {
      const { routerPush } = useRouterPush(false)

      const homePath = this.homeTab.fullPath
      const remain = [homePath, ...excludes]
      const hasActive = remain.includes(this.activeTab)
      const updateTabs = this.tabs.filter((tab) =>
        remain.includes(tab.fullPath)
      )
      this.removeKeepAliveFullPaths(remain)

      if (hasActive) this.tabs = updateTabs
      if (!hasActive && updateTabs.length) {
        const activePath =
          updateTabs[updateTabs.length - 1].fullPath
        const navigationFailure = await routerPush(
          activePath
        )
        if (!navigationFailure) {
          this.tabs = updateTabs
          this.setActiveTab(activePath)
        }
      }
    },
    /**
     * 清除左边多页签
     * @param fullPath - 路由fullPath
     */
    clearLeftTab(fullPath: string) {
      const index = getIndex(this.tabs, fullPath)

      if (index > -1) {
        const excludes = this.tabs
          .slice(index)
          .map((item) => item.fullPath)
        this.clearTab(excludes)
      }
    },
    /**
     * 清除右边多页签
     * @param fullPath - 路由fullPath
     */
    clearRightTab(fullPath: string) {
      const index = getIndex(this.tabs, fullPath)
      if (index > -1) {
        const excludes = this.tabs
          .slice(0, index + 1)
          .map((item) => item.fullPath)
        this.clearTab(excludes)
      }
    },
    /** 清除所有多页签 */
    clearAllTab() {
      this.clearTab()
    },
    /**
     * 点击单个tab
     * @param fullPath - 路由fullPath
     */
    async handleClickTab(fullPath: string) {
      const { routerPush } = useRouterPush(false)

      const isActive = this.activeTab === fullPath
      if (!isActive) {
        const navigationFailure = await routerPush(fullPath)
        if (!navigationFailure) this.setActiveTab(fullPath)
      }
    },
    /**
     * 获取tab滚动位置
     * @param fullPath - 路由fullPath
     */
    getTabScrollPosition(fullPath: string) {
      const position = {
        left: 0,
        top: 0
      }
      const index = getIndex(this.tabs, fullPath)
      if (index > -1) {
        Object.assign(
          position,
          this.tabs[index].scrollPosition
        )
      }
      return position
    },
    /**
     * 记录tab滚动位置
     * @param fullPath - 路由fullPath
     * @param position - tab当前页的滚动位置
     */
    recordTabScrollPosition(
      fullPath: string,
      position: { left: number; top: number }
    ) {
      const index = getIndex(this.tabs, fullPath)
      if (index > -1) {
        this.tabs[index].scrollPosition = position
      }
    },
    /**
     * 设置当前路由对应的页签为激活状态
     * @param fullPath - 路由fullPath
     */
    setActiveTab(fullPath: string) {
      this.activeTab = fullPath
    },
    /**
     * 修改tab的meta
     * @description 修改tab的meta 覆盖式
     * @param fullPath {string} 路由路径
     * @param meta {RouteMeta} 路由meta
     * @example
     *  origin: [
     *    {
     *      fullPath: '/table/product/12',
     *      meta: {
     *        multiTab: true,
     *        title: '商品详情'
     *      }
     *    }
     *  ]
     *  modifyTabMeta('/table/product/12', { title: 'ProductDetail 12' })
     *  => meta: { multiTab: true, title: 'ProductDetail 12' }
     */
    modifyTabMeta(fullPath: string, meta: RouteMeta) {
      const index = this.tabs.findIndex(
        (item) => item.fullPath === fullPath
      )

      if (index < -1) {
        console.error(
          '请确认传入的FullPath存在于tabs.Make</br>Sure that the passed-in fullPath exists in tabs.'
        )
        return
      } else {
        this.tabs[index].meta = {
          ...this.tabs[index].meta,
          ...meta
        }
      }
    },
    /**
     * 覆盖缓存数组
     * @param routePaths 需要覆盖的Paths
     */
    setKeepAliveFullPaths(routePaths: string[] = []) {
      this.keepAliveFullPaths = routePaths
    },
    /**
     * 向缓存中添加path
     * @param path {string} 需要添加的path
     */
    addKeepAliveFullPath(path: string) {
      if (this.keepAliveFullPaths.includes(path)) {
        return
      } else {
        this.keepAliveFullPaths.push(path)
      }
    },
    /**
     * 向缓存中删除path
     * @param include {string[]} 需要删除的paths
     */
    removeKeepAliveFullPaths(include: string[] = []) {
      this.setKeepAliveFullPaths(
        this.keepAliveFullPaths.filter(
          (item) => !include.includes(item)
        )
      )
    }
  }
})
