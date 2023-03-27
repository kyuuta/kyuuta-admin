import { storeToRefs } from 'pinia'
import { useProjectSettingStore } from '@/store'

export function useSetting() {

  const settingStore = useProjectSettingStore()
  const {
    header,
    footer,
    scrollMode
  } = storeToRefs(settingStore)

  const getScrollMode = scrollMode
  const getHeaderConfig = header.value
  const getFooterConfig = footer.value

  return {
    settingStore,
    getScrollMode,
    getHeaderConfig,
    getFooterConfig
  }
}
