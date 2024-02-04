import { http } from '@/service/request'
import { COMMON } from '../serviceConfig'
import { RequestEnum } from '@/enums/http'

// example
// export const getDictionary = (data) =>
//   http.request({
//     url: `${COMMON}/getDictByCodes`,
//     method: RequestEnum.POST,
//     data
//   })

const sleep = (data: any) => {
  return new Promise((resolve) =>
    setTimeout(resolve, 1000, data)
  )
}

export const getDictionary = (data) =>
  sleep([
    {
      type: 'property',
      items: [
        { name: '无属性', value: 0 },
        { name: '火属性', value: 1 },
        { name: '水属性', value: 2 },
        { name: '电属性', value: 3 },
        { name: '草属性', value: 4 },
        { name: '暗属性', value: 5 },
        { name: '龙属性', value: 6 },
        { name: '地属性', value: 7 },
        { name: '冰属性', value: 8 }
      ]
    }
  ])
