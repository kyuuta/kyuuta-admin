import tableData from './basicTable'
import {
  prodList,
  skuProperties,
  productDetail
} from './productList'
import { sleep, filterParam } from '../mockData/mockUtil'

interface PageParams {
  pageParams: {
    page: number
    pageSize: number
  }
}

interface Params {
  [key: string]: any
}

export const getBasicTableData = (
  params: PageParams & Params
) => {
  const { page, pageSize } = params.pageParams
  const result = filterParam(
    tableData,
    params,
    (value, param, key) => {
      if (key === 'fallDown') {
        return value.split(',').includes(param)
      } else if (['property', 'adaptive'].includes(key)) {
        return param.every((fieldKey: string) =>
          value.split(',').includes(fieldKey)
        )
      } else {
        return value === param
      }
    }
  )

  return sleep({
    data: result.slice(
      (page - 1) * pageSize,
      page * pageSize
    ),
    total: result.length
  })
}

export const getProductList = (params: Params) => {
  const result = filterParam(
    prodList,
    params,
    (value, param, key) => {
      return key === 'name'
        ? value.includes(param)
        : value === param
    }
  )

  return sleep({
    data: result
  })
}

export const getSkuProperties = () => {
  return sleep({
    data: skuProperties
  })
}

export const getProductDetail = (params: Params) => {
  const detail = filterParam(
    productDetail,
    params,
    (value, param) => {
      return value === param
    }
  )

  return sleep({
    data: detail.length ? detail[0] : {}
  })
}
