import subscribeAppStore from './app'
import subscribeThemeStore from './theme'

/** 订阅Store */
export function subscribeStore() {
  subscribeAppStore()
  subscribeThemeStore()
}
