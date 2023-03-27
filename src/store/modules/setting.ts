import { defineStore } from "pinia"
import { layoutConfig } from '@/config/theme'

type LayoutState = Layout.Setting

export const useProjectSettingStore = defineStore({
  id: 'projectSetting',
  state: (): LayoutState => layoutConfig,
  actions: {
    setScrollMode(mode: Layout.scrollMode): void {
      this.scrollMode = mode
    }
  }
})
