import { localStorage } from '@/utils'

const tabCacheKey = 'tabCache'

/** 缓存标签页数据 */
export function setTabCache(data: GlobalTabRoute[]) {
  localStorage.set(tabCacheKey, data)
}

/** 获取标签页数据 */
export function getTabCache() {
  const routes: GlobalTabRoute[] = []
  const cacheData = localStorage.get(tabCacheKey)

  if (cacheData) {
    const defaultTabRoutes = cacheData.map((item: any) => ({
      ...item,
      scrollPosition: {
        left: 0,
        top: 0
      }
    }))
    routes.push(...defaultTabRoutes)
  }
  return routes
}

/** 清空多页签数据 */
export function clearTabCache() {
  setTabCache([])
}
