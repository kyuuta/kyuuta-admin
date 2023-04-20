import { defineStore } from 'pinia'
import { nextTick } from 'vue'

interface IAppStore {
  /** 重载页面 */
  reload: boolean
}

export const useAppStore = defineStore('AppStore', {
  state: (): IAppStore => ({
    reload: true
  }),
  actions: {
    /**
     * 重载页面
     * @param duration - 重载delay时间(ms)
     */
    async reloadPage(duration = 0) {
      this.reload = false
      await nextTick()
      if (duration) {
        setTimeout(() => {
          this.reload = true
        }, duration)
      } else {
        this.reload = true
      }
    }
  }
})
