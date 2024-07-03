import type { RouterScrollBehavior } from 'vue-router'

export const scrollBehavior: RouterScrollBehavior = (
  to,
  from
) => {
  return new Promise((resolve) => {
    const tab = useTabStore()

    if (to.hash) {
      resolve({
        el: to.hash,
        behavior: 'smooth'
      })
    }

    const { left, top } = tab.getTabScrollPosition(
      to.fullPath
    )
    const scrollPosition = {
      left,
      top
    }

    const { scrollLeft, scrollTop } =
      document.documentElement

    const isFormCached = Boolean(from.meta.keepAlive)
    if (isFormCached) {
      tab.recordTabScrollPosition(from.path, {
        left: scrollLeft,
        top: scrollTop
      })
    }

    const duration =
      !scrollPosition.left && !scrollPosition.top ? 0 : 350

    setTimeout(() => {
      resolve(scrollPosition)
    }, duration)
  })
}
