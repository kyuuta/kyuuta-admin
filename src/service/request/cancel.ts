import qs from 'qs'
import axios, { AxiosRequestConfig, Canceler } from 'axios'
import { isFunction } from 'lodash-es'

let pendingMap = new Map<string, Canceler>()

export const getPendingUrl = (config: AxiosRequestConfig) =>
  [
    config.method,
    config.url,
    qs.stringify(config.data),
    qs.stringify(config.params)
  ].join('&')

export class AxiosCanceler {
  /**
   * 加入队列
   * @param {Object} config
   */
  addPending(config: AxiosRequestConfig) {
    this.removePending(config)

    const url = getPendingUrl(config)
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel)
        }
      })
  }

  /**
   * 移出队列
   * @param {Object} config
   */
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)

    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url)
      cancel && cancel(url)
      pendingMap.delete(url)
    }
  }

  /**
   * 清空队列
   * @param {Object} config
   */
  clearPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel()
    })
    pendingMap.clear()
  }

  /**
   * 重置
   */
  reset(): void {
    pendingMap = new Map<string, Canceler>()
  }
}
