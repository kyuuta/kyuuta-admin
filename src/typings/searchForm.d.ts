interface Item {
  label: string
  value: string
  /**
   * 表单项类型
   * - input: 输入框
   * - select: 下拉选择框
   * - date: 日期
   * - radio: 单选组
   * - inputNumber: 数字输入框
   */
  type:
    | 'input'
    | 'select'
    | 'date'
    | 'radio'
    | 'inputNumber'
  /** 表单项名称的宽度 */
  labelWidth?: string | number
  /** 栅格化布局列 默认为占位1列 */
  span?: number
  /** 用于继承组件源生的一些属性 */
  props?: {
    [key: string]: any
  }

  // Select生效
  /** 该Select Options在字典中的字段名 */
  dictKey?: string
  /** dictLabelField 选项的label的字段名 */
  dictLabelField?: string
  /** dictValueField 选项的value的字段名 */
  dictValueField?: string
  /**
   * @desc renderLabel 选项标签渲染值
   * 例如 ['name', 'value']
   * 会按照数组顺序拼接为label 具体用法同naiui select render-label渲染函数
   */
  renderLabel?: string[]
  /** 指定renderLabel以何种字符进行拼接 默认为 " - " */
  renderLabelHyphen?: string

  // Date生效
  pickerType?:
    | 'date'
    | 'daterange'
    | 'datetime'
    | 'datetimerange'
    | 'month'
    | 'monthrange'
}

declare namespace SearchForm {
  type FormItem = Item
  type FormItems = Item[]

  type dictItem = {
    name: number | string
    value: number | string
  }
  type dict = {
    [key: string | number]: dictItem[]
  }
}
