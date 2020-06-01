export const errorStatus = status => {
    switch (status) {
        case 400:
            return '[CODE:400]：请求错误'
        case 401:
            return '[CODE:401]：未授权，请重新登录'
        case 403:
            return '[CODE:403]：拒绝访问'
        case 404:
            return '[CODE:404]：请求出错'
        case 408:
            return '[CODE:408]：请求超时'
        case 500:
            return '[CODE:500]：服务器错误'
        case 501:
            return '[CODE:501]：服务未实现'
        case 502:
            return '[CODE:502]：网络错误'
        case 503:
            return '[CODE:503]：服务不可用'
        case 504:
            return '[CODE:504]：网络超时'
        case 505:
            return '[CODE:505]：HTTP版本不受支持'
        default:
            return `连接出错(${status})!`
    }
}
