import { defineStore } from "pinia"
import { themeConfig } from '@/config/theme'

export interface ISettingStore {
  scrollMode: string,
  header: object,
  footer: object
}

export const useProjectSettingStore = defineStore({
  id: 'project-setting',
  state: (): ISettingStore => ({
    scrollMode: themeConfig.scrollMode,
    header: themeConfig.header,
    footer: themeConfig.footer
  }),
  actions: {
    setScrollMode(value: string): void {
      this.scrollMode = value
    }
  }
})
