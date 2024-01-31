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
      type: 'grade',
      items: new Array(4).fill().map((item, index) => {
        return { name: `P${index + 6}`, value: index + 1 }
      })
    },
    {
      type: 'sex',
      items: [
        { name: '男', value: 1 },
        { name: '女', value: 0 }
      ]
    }
  ])
