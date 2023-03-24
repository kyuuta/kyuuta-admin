import { defineStore } from "pinia"
import { getUIThemeOverrides, initThemeSetting } from './colorUtils'

type ThemeState = Theme.Setting

export const useThemeStore = defineStore({
  id: 'theme-store',
  state: (): ThemeState => initThemeSetting(),
  getters: {
    uiThemeOverrides(state) {
      const overrides = getUIThemeOverrides({
        primary: state.themeColor,
        ...state.otherColor
      })
      return overrides
    }
  },
  actions: {
    setThemeColor(themeColor: string) {
      this.themeColor = themeColor
    }
  }
})

