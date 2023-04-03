import { storeToRefs } from 'pinia'
import { useLayoutStore } from '@/store'

export function useLayout() {
  const layoutStore = useLayoutStore()
  const {
    header,
    footer,
    scrollMode
  } = storeToRefs(layoutStore)

  const getScrollMode = scrollMode
  const getHeaderConfig = header.value
  const getFooterConfig = footer.value

  return {
    layoutStore,
    getScrollMode,
    getHeaderConfig,
    getFooterConfig
  }
}
