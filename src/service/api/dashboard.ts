import { isNull, isUndefined } from 'lodash-es'
import mockData from './mockData'

const sleep = (data: any) => {
  return new Promise((resolve) =>
    setTimeout(resolve, 1000, data)
  )
}

const filterParam = (data: [], params = {}) => {
  const paramKeys = Object.keys(params).filter(
    (item) => item !== 'pageParams'
  )

  if (!paramKeys.length) {
    return data
  }

  return data.filter((item) => {
    return paramKeys.every((key) => {
      if (isNull(params[key]) || isUndefined(params[key])) {
        return true
      }
      return item[key].includes(params[key])
    })
  })
}

export const getStaffList: Promise = (params) => {
  const { page, pageSize } = params.pageParams
  const result = filterParam(mockData, params)

  return sleep({
    data: result.slice(
      (page - 1) * pageSize,
      page * pageSize
    ),
    total: mockData.length
  })
}
