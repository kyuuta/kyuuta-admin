import tableData from './basicTable'
import {
  prodList,
  skuProperties,
  productDetail
} from './productList'
import { sleep, filterParam } from '../mockData/mockUtil'

export const getBasicTableData: Promise = (params) => {
  const { page, pageSize } = params.pageParams
  const result = filterParam(
    tableData,
    params,
    (value, param, key) => {
      if (key === 'fallDown') {
        return value.split(',').includes(param)
      } else if (['property', 'adaptive'].includes(key)) {
        return param.every((fieldKey) =>
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

export const getProductList: Promise = (params) => {
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

export const getSkuProperties: Promise = () => {
  return sleep({
    data: skuProperties
  })
}

export const getProductDetail: Promise = (params) => {
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
