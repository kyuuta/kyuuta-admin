import { isNull, isUndefined, isArray } from 'lodash-es'
import { getDictionary } from '@/service/api/common'

export function useDict(dictKeys?: Array = []) {
  const dict: SearchForm.dict = ref({})
  const dictLoading = ref(false)

  if (dictKeys.length) {
    dictLoading.value = true
    getDictionary(dictKeys)
      .then((res) => {
        dict.value = res.reduce((prev, next) => {
          prev[next.type] = next.items
          return prev
        }, {})
      })
      .finally(() => {
        dictLoading.value = false
      })
  }

  /**
   * @description 过滤字典值 类似于Vue filter的实现
   * @param {String|Number} value 值
   * @param {Array} targetDictName 字典名或字典数组值
   * @param {String} labelField 字典中label字段名
   * @param {String} valueField 字典中value字段名
   */
  const formatDict = (
    value,
    targetDictName: string | SearchForm.dictItem[],
    labelField = 'name',
    valueField = 'value'
  ) => {
    if (isNull(value) || isUndefined(value)) {
      return '-'
    }

    const targetDict = isArray(targetDictName)
      ? targetDictName
      : dict.value[targetDictName]

    if (targetDict && targetDict.length) {
      const target = targetDict.find(
        (item) => item[valueField] === value
      )
      return target ? target[labelField] : value
    } else {
      return value
    }
  }

  return {
    dict,
    dictLoading,
    formatDict
  }
}
