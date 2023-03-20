import { computed } from 'vue'
import { useProjectSettingStore } from '@/store/modules/setting'

export function useSetting() {

  const settingStore = useProjectSettingStore()

  const getScrollMode = computed(() => settingStore.scrollMode)

  const getHeaderConfig = settingStore.getHeader

  const getFooterConfig = settingStore.getFooter

  return {
    settingStore,
    getScrollMode,
    getHeaderConfig,
    getFooterConfig
  }
}
