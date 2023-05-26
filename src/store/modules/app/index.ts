import { defineStore } from 'pinia'

interface IAppStore {
  /** 页面主体内容全屏 */
  contentFull: boolean
  /** 重载页面 */
  reload: boolean
}

export const useAppStore = defineStore('AppStore', {
  state: (): IAppStore => ({
    contentFull: false,
    reload: true
  }),
  actions: {
    /** 设置主体内容全屏 */
    setContentFull(full: boolean) {
      this.contentFull = full
    },
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

      setTimeout(() => {
        document.documentElement.scrollTo({
          left: 0,
          top: 0
        })
      }, 100)
    }
  }
})
