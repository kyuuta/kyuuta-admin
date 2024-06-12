import { isNumber, isNaN } from 'lodash-es'
import BigNumber from 'bignumber.js'

/**
 * 数字单位换算
 * @description 将数字、字符串数字转换进制
 * @param value {number, string} 数字或者字符串数字值
 * @param binary {number} 进制如10进制将除以10
 * @param thousandBitSeparator {boolean} 是否转为结果为千分号格式
 * @returns number | string
 * @example
 *  conversionPrice('100000000') => '1,0000'
 *  conversionPrice('200000000', 1000) => 200000
 */
export function conversionPrice(
  value: number | string,
  binary = 10000,
  thousandBitSeparator = true
): number | string {
  const amount = isNumber(value) ? value : Number(value)

  if (isNaN(amount)) {
    return console.error(
      'function[conversionPrice]: value is not a number!'
    )
  }

  const result = new BigNumber(amount)
    .div(binary)
    .toNumber()

  if (thousandBitSeparator) {
    return result.toLocaleString()
  }

  return result
}
