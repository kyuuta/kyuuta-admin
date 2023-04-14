import { useEventListener } from '@vueuse/core'
import { useThemeStore } from '@/store'

/** 全局事件 */
export function useGlobalEvents() {
  const theme = useThemeStore()

  /** 页面卸载、关闭、刷新时调用  */
  useEventListener(window, 'beforeunload', () => {
    theme.cacheThemeSettings()
  })
}
