import { computed } from 'vue'
import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'
import { localStorage } from '@/utils'
import {
  getUIThemeOverrides,
  initThemeSetting
} from './helpers'

type ThemeState = Theme.Setting

export const useThemeStore = defineStore({
  id: 'ThemeStore',
  state: (): ThemeState => initThemeSetting(),
  getters: {
    /** naiveUI的主题配置 */
    uiThemeOverrides(state) {
      return getUIThemeOverrides({
        primary: state.themeColor,
        ...state.themeColorList
      })
    },
    /** naiveUI暗黑模式主题 */
    naiveTheme(state) {
      return state.darkMode ? darkTheme : undefined
    },
    getDarkMode(state) {
      return state.darkMode
    },
    /** 滚动模式 */
    getScrollMode(state) {
      return state.scrollMode
    },
    /** 头部配置 */
    headerConfig(state) {
      return state.header
    },
    /** 底部配置 */
    footerConfig(state) {
      return state.footer
    },
    /** 菜单配置 */
    menuConfig(state) {
      return state.menu
    },
    /** 面包屑配置 */
    breadcrumbConfig(state) {
      return state.breadcrumb
    }
  },
  actions: {
    /** 设置主题色 */
    setThemeColor(themeColor: string) {
      this.themeColor = themeColor
    },
    /** 设置开启暗黑模式 */
    setDarkMode(darkMode: boolean) {
      this.darkMode = darkMode
    },
    /** 设置滚动模式 */
    setScrollMode(mode: Theme.ScrollMode) {
      this.scrollMode = mode
      if (mode === 'main') {
        this.setFooterFixed(false)
      }
    },
    /** 头部设置 */
    setHeaderVisible(visible: boolean) {
      this.header.visible = visible
    },
    setHeaderHeight(height: number) {
      this.header.height = height
    },
    /** 底部设置 */
    setFooterVisible(visible: boolean) {
      this.footer.visible = visible
    },
    setFooterHeight(height: number) {
      this.footer.height = height
    },
    setFooterFixed(isFixed: boolean) {
      this.footer.fixed = isFixed
    },
    /** 设置展开菜单状态 */
    setCollapse(collapse: boolean) {
      this.menu.collapse = collapse
    },
    /** 设置展开收起操作模式 */
    setCollapseType(type: Theme.MenuCollpaseType) {
      this.menu.collapseType = type
    },
    /** 设置菜单展开宽度 */
    setCollapsedWidth(width: number) {
      this.menu.collapsedWidth = width
    },
    /** 设置是否显示面包屑 */
    setBreadcrumbVisible(visible: boolean) {
      this.breadcrumb.visible = visible
    },
    /** 设置是否显示面包屑icon */
    setBreadcrumbShowIcon(show: boolean) {
      this.breadcrumb.showIcon = show
    },
    /** 缓存主题相关配置 */
    cacheThemeSettings() {
      localStorage.set('themeSettings', this.$state)
    },
    /** 清除缓存 重置store状态 */
    resetThemeStore() {
      localStorage.remove('themeSettings')
      this.$reset()
    }
  }
})
