/** 全局事件 */
export function useGlobalEvents() {
  const theme = useThemeStore()
  const tab = useTabStore()

  /** 页面卸载、关闭、刷新时调用  */
  useEventListener(window, 'beforeunload', () => {
    theme.cacheThemeSettings()
    tab.cacheTabs()
  })
}
