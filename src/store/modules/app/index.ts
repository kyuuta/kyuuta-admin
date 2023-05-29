import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAppStore = defineStore('AppStore', () => {
  /** 重载页面 */
  const reload = ref<boolean>(true)
  /** 页面主体内容全屏 */
  const contentFull = ref<boolean>(false)
  const { isFullscreen, toggle } = useFullscreen()

  watch(
    () => contentFull.value,
    () => {
      toggleContentFull()
    }
  )

  watch(
    () => isFullscreen.value,
    (val) => {
      if (!val) {
        setContentFull(false)
      }
    }
  )

  function toggleContentFull() {
    if (contentFull.value && !isFullscreen.value) {
      toggle()
    }
    if (!contentFull.value && isFullscreen.value) {
      toggle()
    }
  }

  /** 设置主体内容全屏 */
  function setContentFull(full: boolean) {
    contentFull.value = full
  }

  /**
   * 重载页面
   * @param duration - 重载delay时间(ms)
   */
  async function reloadPage(duration = 0) {
    reload.value = false
    await nextTick()
    if (duration) {
      setTimeout(() => {
        reload.value = true
      }, duration)
    } else {
      reload.value = true
    }

    setTimeout(() => {
      document.documentElement.scrollTo({
        left: 0,
        top: 0
      })
    }, 0)
  }

  return {
    reload,
    contentFull,
    setContentFull,
    reloadPage
  }
})

if (import.meta.hot)
  import.meta.hot.accept(
    acceptHMRUpdate(useAppStore as any, import.meta.hot)
  )
