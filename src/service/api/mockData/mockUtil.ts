import { isNull, isUndefined } from 'lodash-es'

export const sleep = (data: any) => {
  return new Promise((resolve) =>
    setTimeout(resolve, 1000, data)
  )
}

export const filterParam = (
  data: [],
  params = {},
  fn: (value: any, param: any, key: string) => boolean
) => {
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

      return fn ? fn(item[key], params[key], key) : true
    })
  })
}
