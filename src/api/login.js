import { request } from '@/utils/request'

/**
 * @description 登录
 */
export const userLogin = data => {
    return request({
        url: '/user/login',
        method: 'get',
        params: data
    })
}

/**
 * @description 获取用户信息
 */
export const getUserInfo = params => {
    return request({
        url: '/user/info',
        method: 'post',
        params: {
            ...params
        }
    })
}
