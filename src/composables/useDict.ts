import { isNull, isUndefined, isArray } from 'lodash-es'
import { getDictionary } from '@/service/api/common'

interface DictResponse {
  type: string
  items?: SearchForm.dictItem[]
}

export function useDict(dictKeys: string[] | [] = []) {
  const dict: Ref<SearchForm.dict> = ref({})
  const dictLoading = ref(false)

  if (dictKeys.length) {
    dictLoading.value = true
    getDictionary(dictKeys)
      .then((res: DictResponse[]) => {
        dict.value = res.reduce(
          (prev: SearchForm.dict, next: DictResponse) => {
            if (next.items && next.items.length > 0) {
              prev[next.type] = next.items
            }
            return prev
          },
          {} as SearchForm.dict
        )
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
    value: string | number,
    targetDictName: string | SearchForm.dictItem[],
    labelField: keyof SearchForm.dictItem = 'name',
    valueField: keyof SearchForm.dictItem = 'value'
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
