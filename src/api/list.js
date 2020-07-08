import { request } from '@/utils/request'

/**
 * @description 获取tableList列表
 */
export const getTableList = data => {
    return request({
        url: '/list/table-list',
        method: 'post',
        params: data
    })
}
