import type {
  NavigationGuardNext,
  RouteLocationNormalized
} from 'vue-router'

export function createCacheComponents(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) {
  const fullPath = to.fullPath
  const tabStore = useTabStore()
  const keepAliveFullPaths = tabStore.keepAliveFullPaths

  if (
    fullPath &&
    !keepAliveFullPaths.includes(fullPath) &&
    to.meta?.keepAlive
  ) {
    keepAliveFullPaths.push(fullPath)
  } else if (!to.meta?.keepAlive) {
    const index = tabStore.keepAliveFullPaths.findIndex(
      (path) => path === fullPath
    )

    if (index !== -1) {
      keepAliveFullPaths.splice(index, 1)
    }
  }

  tabStore.setKeepAliveFullPaths(keepAliveFullPaths)
}
