import type { ProxyOptions } from 'vite'

type ProxyItem = [string, string]
type ProxyList = ProxyItem[]
type ProxyTargetList = Record<
  string,
  ProxyOptions & { rewrite: (path: string) => string }
>

const httpsRE = /^https:\/\//

/**
 * 设置网络代理
 * @param isOpenProxy - 是否开启代理
 * @param list - ProxyList
 */
export function createViteProxy(
  isOpenProxy = false,
  list: ProxyList = []
) {
  if (!isOpenProxy) return undefined

  const ret: ProxyTargetList = {}

  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target)

    ret[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) =>
        path.replace(new RegExp(`^${prefix}`), ''),
      ...(isHttps ? { secure: false } : {})
    }
  }

  return ret
}
