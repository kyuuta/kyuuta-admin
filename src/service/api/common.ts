import { http } from '@/service/request'
import { COMMON } from '../serviceConfig'
import { RequestEnum } from '@/enums/http'

import dictData from './mockData/dict'
import { sleep } from './mockData/mockUtil'

// example
// export const getDictionary = (data) =>
//   http.request({
//     url: `${COMMON}/getDictByCodes`,
//     method: RequestEnum.POST,
//     data
//   })

export const getDictionary = (data) => {
  return sleep(
    data.reduce((prev, next) => {
      return prev.concat({
        type: next,
        items: dictData[next]
      })
    }, [])
  )
}
