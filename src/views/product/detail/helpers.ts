/**
 * 检查是否为质数
 * @param number 数字
 * @returns boolean
 */
function isPrime(number: number) {
  for (let ii = 2; ii < number; ++ii) {
    if (number % ii === 0) {
      return false
    }
  }
  return true
}

/**
 * 生成对应数量的质数
 * @param total 质数数量
 * @returns [2, 3, 5, 7, 11, ....]
 */
export function getPrime(total: number) {
  let i = 2
  const arr = []

  for (i; arr.length < total; i++) {
    if (isPrime(i)) {
      arr.push(i)
    }
  }

  return arr
}
