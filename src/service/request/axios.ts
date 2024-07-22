import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import type {
  CreateAxiosOptions,
  RequestOptions,
  Result
} from '@/typings/request'
import { AxiosCanceler } from './cancel'

import { cloneDeep, isFunction } from 'lodash-es'

export class KAxios {
  private axiosInstance: AxiosInstance
  private options: CreateAxiosOptions

  constructor(options: CreateAxiosOptions) {
    this.options = options
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }

  private createAxios(config: CreateAxiosOptions): void {
    this.axiosInstance = axios.create(config)
  }

  private getTransform() {
    const { transform } = this.options
    return transform
  }

  /**
   * @description: 设置通用header
   */
  setHeader(headers: any): void {
    if (!this.axiosInstance) {
      return
    }
    Object.assign(
      this.axiosInstance.defaults.headers,
      headers
    )
  }

  getAxios(): AxiosInstance {
    return this.axiosInstance
  }

  /**
   * @description: 文件商船
   */
  uploadFile() {}

  /**
   * @description: 请求方法
   */
  request<T = any>(
    config: AxiosRequestConfig,
    options?: object
  ): Promise<T> {
    // 处理options 以及请求参数
    let conf: AxiosRequestConfig = cloneDeep(config)
    const transform = this.getTransform()
    const { requestOptions } = this.options

    const opt: RequestOptions = Object.assign(
      {},
      requestOptions,
      options
    )

    const {
      beforeRequestHook,
      requestCatch,
      transformRequestData
    } = transform || {}

    if (
      beforeRequestHook &&
      isFunction(beforeRequestHook)
    ) {
      conf = beforeRequestHook(conf, opt)
    }

    // @ts-ignore
    conf.requestOptions = opt

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          // 请求是否被取消
          const isCancel = axios.isCancel(res)

          if (
            transformRequestData &&
            isFunction(transformRequestData) &&
            !isCancel
          ) {
            try {
              const ret = transformRequestData(res, opt)
              resolve(ret)
            } catch (err) {
              reject(err || new Error('request error'))
            }
            return
          }

          resolve(res as unknown as Promise<T>)
        })
        .catch((e: Error) => {
          if (requestCatch && isFunction(requestCatch)) {
            reject(requestCatch(e))
            return
          }
          reject(e)
        })
    })
  }

  /**
   * @description: 拦截器配置
   */
  private setupInterceptors() {
    const transform = this.getTransform()
    if (!transform) return

    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch
    } = transform

    const axiosCanceler = new AxiosCanceler()

    // 请求拦截器配置处理
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const {
          headers: { ignoreCancelToken }
        } = config
        const ignoreCancel =
          ignoreCancelToken !== undefined
            ? ignoreCancelToken
            : this.options.requestOptions?.ignoreCancelToken
        ignoreCancel && axiosCanceler.addPending(config)

        if (
          requestInterceptors &&
          isFunction(requestInterceptors)
        ) {
          return requestInterceptors(
            config,
            this.options
          ) as InternalAxiosRequestConfig
        }

        return config
      },
      undefined
    )

    // 请求拦截器错误捕获
    if (
      requestInterceptorsCatch &&
      isFunction(requestInterceptorsCatch)
    ) {
      this.axiosInstance.interceptors.request.use(
        undefined,
        requestInterceptorsCatch
      )
    }

    // 响应结果拦截器处理
    this.axiosInstance.interceptors.response.use(
      (res: AxiosResponse<any>) => {
        res && axiosCanceler.removePending(res.config)

        if (
          responseInterceptors &&
          isFunction(responseInterceptors)
        ) {
          res = responseInterceptors(res)
        }
        return res
      },
      undefined
    )

    // 响应结果拦截器错误捕获
    if (
      responseInterceptorsCatch &&
      isFunction(responseInterceptorsCatch)
    ) {
      this.axiosInstance.interceptors.response.use(
        undefined,
        responseInterceptorsCatch
      )
    }
  }

  /**
   * @description: 重新配置axios
   */
  resetConfigAxios(config: CreateAxiosOptions) {
    if (!this.axiosInstance) {
      return
    }
    this.createAxios(config)
  }
}
