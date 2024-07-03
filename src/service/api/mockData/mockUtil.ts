import { isNull, isUndefined } from 'lodash-es'

export const sleep = <T>(data: T): Promise<T> =>
  new Promise((resolve) =>
    setTimeout(() => resolve(data), 1000)
  )

export const filterParam = <
  T extends Record<string, any>,
  P extends Record<string, any>
>(
  data: T[],
  params: P = {} as P,
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
