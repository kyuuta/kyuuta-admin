import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CreateAxiosOptions
  extends AxiosRequestConfig {
  transform?: AxiosTransform
  requestOptions?: RequestOptions
}

export abstract class AxiosTransform {
  /**
   * @description: 请求之前处理配置
   * @description: Process configuration before request
   */
  beforeRequestHook?: (
    config: AxiosRequestConfig,
    options: RequestOptions
  ) => AxiosRequestConfig

  /**
   * @description: 请求成功处理
   */
  transformRequestData?: (
    res: AxiosResponse<Result>,
    options: RequestOptions
  ) => any

  /**
   * @description: 请求失败处理
   */
  requestCatch?: (e: Error) => Promise<any>

  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptors?: (
    config: AxiosRequestConfig,
    options: CreateAxiosOptions
  ) => AxiosRequestConfig

  /**
   * @description: 请求之后的拦截器
   */
  responseInterceptors?: (
    res: AxiosResponse<any>
  ) => AxiosResponse<any>

  /**
   * @description: 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void

  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void
}

export interface RequestOptions {
  // 请求参数拼接到url
  joinParamsToUrl?: boolean
  // 格式化请求参数时间
  formatDate?: boolean
  // 是否显示提示信息
  isShowMessage?: boolean
  // 是否解析成JSON
  isParseToJson?: boolean
  // 成功的文本信息
  successMessageText?: string
  // 是否显示成功信息
  isShowSuccessMessage?: boolean
  // 是否显示失败信息
  isShowErrorMessage?: boolean
  // 错误的文本信息
  errorMessageText?: string
  // 是否加入url
  joinPrefix?: boolean
  // 接口地址， 不填则使用默认apiUrl
  apiUrl?: string
  // 请求拼接路径
  urlPrefix?: string
  // 错误消息提示类型
  errorMessageMode?: 'none' | 'modal'
  // 是否添加时间戳
  joinTime?: boolean
  // 不进行任何处理，直接返回
  isTransformResponse?: boolean
  // 是否返回原生响应头
  isReturnNativeResponse?: boolean
  //忽略重复请求
  ignoreCancelToken?: boolean
  // 是否携带token
  withToken?: boolean
}

export interface Result<T = any> {
  code: number
  type?: 'success' | 'error' | 'warning'
  data: any
  message: string
  result?: T
}
