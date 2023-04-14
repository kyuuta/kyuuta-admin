function createStorage() {
  /** 默认缓存期限为7天 */
  const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7 * 1000

  function set(key: string, value: any, expire: number | null = DEFAULT_CACHE_TIME) {
    const storageData = {
      value,
      expire: expire !== null ? new Date().getTime() + expire : null
    }

    window.localStorage.setItem(key, JSON.stringify(storageData))
  }

  function get(key: string) {
    const json = window.localStorage.getItem(key)
    if (json) {
      const { value, expire } = JSON.parse(json)

      // 在有效期内直接返回
      if (expire === null || expire >= Date.now()) {
        return value
      }

      remove(key)
      return null
    }
    return null
  }

  function remove(key: string) {
    window.localStorage.removeItem(key)
  }

  function clear() {
    window.localStorage.clear()
  }

  return {
    set,
    get,
    remove,
    clear
  }
}

export const localStorage = createStorage()
