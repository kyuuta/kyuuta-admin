import axios from 'axios'
import config from '@/config'
import NProgress from 'nprogress'

NProgress.configure({
    showSpinner: false
})
const pendingRequestList = []
const baseUrl = process.env.NODE_ENV === 'development'
    ? config.baseUrl.dev
    : config.baseUrl.pro

const instance = axios.create({
    baseURL: baseUrl,
    timeout: config.requestTimeOut,
    headers: {
        Authorization: 'Authorization kyuuta',
        'Micro-Auth': 'Micro-Auth kyuuta',
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        post: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }
})

const pendingTesting = config => {
    const requestMark = `${config.method}${config.url}`
    const markIndex = pendingRequestList.findIndex(item => {
        return item.name === requestMark
    })

    // 处理重复请求
    if (markIndex > -1) {
        pendingRequestList[markIndex].cancel()
        pendingRequestList.splice(markIndex, 1)
    }

    const CancelToken = axios.CancelToken.source()
    config.cancelToken = CancelToken.token
    config.requestMark = requestMark
    config.routeChangeCancel = true

    /**
     * @param name 请求拼接名
     * @param cancel 取消请求
     * @param routeChangeCancel 切换路由取消
     */
    pendingRequestList.push({
        name: requestMark,
        cancel: CancelToken.cancel,
        routeChangeCancel: config.routeChangeCancel
    })
}

// 请求拦截
instance.interceptors.request.use(config => {
    NProgress.start()
    pendingTesting(config)

    return config
}, err => {
    return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use(response => {
    const markIndex = pendingRequestList.findIndex(item => {
        return item.name === response.config.requestMark
    })
    markIndex > -1 && pendingRequestList.splice(markIndex, 1)

    NProgress.done()

    return Promise.resolve(response.data)
}, err => {
    NProgress.done()

    if (err.message.includes('timeout')) {
        // 超时
    } else {
        // 网络错误
    }

    return Promise.reject(err)
})

export {
    pendingRequestList,
    instance as request
}
