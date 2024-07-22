import { KAxios } from './axios'
import type {
  CreateAxiosOptions,
  AxiosTransform,
  RequestOptions,
  Result
} from '@/typings/request'
import { ContentTypeEnum, ResultEnum } from '@/enums/http'

import { merge, isString } from 'lodash-es'
import { isUrl } from '@/utils'
import axios, { AxiosResponse } from 'axios'

const transform: AxiosTransform = {
  // 请求前处理Config
  beforeRequestHook: (config, options) => {
    const { apiUrl, joinPrefix, urlPrefix } = options

    const isUrlStr = isUrl(config.url as string)

    if (!isUrlStr && joinPrefix) {
      config.url = `${urlPrefix}${config.url}`
    }

    if (!isUrlStr && apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`
    }

    // restful风格处理 get时间戳等
    // formData支持 url携带参数等等

    return config
  },
  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config, options) => {
    // 携带token
    const userStore = useUserStore()
    const token = userStore.getToken

    if (token && options?.requestOptions?.withToken) {
      ;(config as Common.Recordable).headers.Authorization =
        token
    }

    return config
  },
  // 处理响应数据
  transformRequestData: (
    res: AxiosResponse<Result>,
    options: RequestOptions
  ) => {
    // 根据我司风格护理返回数据 服务端返回错误 报错等等
    const {
      isShowMessage = true,
      isShowErrorMessage,
      isShowSuccessMessage,
      successMessageText,
      errorMessageText,
      isTransformResponse,
      isReturnNativeResponse
    } = options

    if (isReturnNativeResponse) {
      return res
    }

    if (!isTransformResponse) {
      return res.data
    }

    const $dialog = window['$dialog']
    const $message = window['$message']
    const { code, data, message } = res.data

    // 判断是否请求成功
    const hasSuccess =
      Reflect.has(res.data, 'code') &&
      code === ResultEnum.SUCCESS

    if (isShowMessage) {
      if (
        hasSuccess &&
        (successMessageText || isShowSuccessMessage)
      ) {
        $message &&
          $message.success(
            successMessageText || message || '操作成功!'
          )
      } else if (
        !hasSuccess &&
        (errorMessageText || isShowErrorMessage)
      ) {
        $message &&
          $message.error(
            data?.errors ||
              message ||
              errorMessageText ||
              '操作失败!'
          )
      } else if (
        !hasSuccess &&
        options.errorMessageMode === 'modal'
      ) {
        $dialog &&
          $dialog.info({
            title: '提示',
            content: message,
            positiveText: '确定',
            onPositiveClick: () => {}
          })
      }
    }

    if (code === ResultEnum.SUCCESS) {
      return data
    }

    const errorMsg = message

    // 处理错误
    switch (code) {
      case ResultEnum.ERROR:
        $message && $message.error(message)
        break
      case ResultEnum.LOGINEXPIRED:
        const { resetUserStore } = useUserStore()
        resetUserStore()
        break
    }

    throw new Error(errorMsg)
  },
  /**
   * @description: 响应错误处理
   */
  responseInterceptorsCatch: (error: any) => {
    const $dialog = window['$dialog']
    const $message = window['$message']
    const { response, code, message } = error || {}

    // const msg: string =
    //   response && response.data && response.data.message
    //     ? response.data.message
    //     : ''

    const err: string = error.toString()
    try {
      if (
        code === 'ECONNABORTED' &&
        message.indexOf('timeout') !== -1
      ) {
        $message &&
          $message.error('接口请求超时，请刷新页面重试!')
        return
      }
      if (err && err.includes('Network Error')) {
        $dialog &&
          $dialog.info({
            title: '网络异常',
            content: '请检查您的网络连接是否正常',
            positiveText: '确定',
            closable: false,
            maskClosable: false,
            onPositiveClick: () => {},
            onNegativeClick: () => {}
          })
        return Promise.reject(error)
      }
    } catch (error) {
      throw new Error(error as any)
    }

    const isCancel = axios.isCancel(error)
    if (!isCancel) {
      console.log(error)
      // checkStatus msg
    } else {
      console.warn(error, '请求被取消')
    }

    return Promise.reject(response?.data)
  }
}

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new KAxios(
    merge(
      {
        timeout: 10 * 1000,
        authenticationScheme: '',
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 数据处理方式
        transform,
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 接口地址
          // apiUrl: '/proxy-pattern',
          // 默认将prefix 添加到url
          joinPrefix: true,
          // 接口拼接地址
          urlPrefix: '/proxy-pattern',
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: true,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          // formatDate: true,
          // 消息提示类型
          errorMessageMode: 'none',
          // 是否加入时间戳
          // joinTime: true,
          isShowMessage: true,
          isShowErrorMessage: true,
          // 忽略重复请求
          ignoreCancelToken: true,
          // 是否携带token
          withToken: true
        },
        withCredentials: false
      },
      opt || {}
    )
  )
}

export const http = createAxios()

export const promptHttp = createAxios({
  requestOptions: {
    isShowMessage: true,
    isShowSuccessMessage: true
  }
})

export const formDataHttp = createAxios({
  headers: {
    'Content-Type': ContentTypeEnum.FORM_DATA
  },
  requestOptions: {
    isShowMessage: true,
    isShowSuccessMessage: true
  }
})
