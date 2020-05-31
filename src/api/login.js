import { request } from '@/utils/request'

/**
 * @description 登录
 */
export const userLogin = data => {
    return request({
        url: '/login',
        method: 'get',
        params: data
    })
}
