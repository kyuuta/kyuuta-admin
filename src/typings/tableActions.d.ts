import { NButton as NaiveUIButton } from 'naive-ui'

// 定义扩展的属性
export interface ActionItem extends NaiveUIButton {
  onClick?: Fn
  label?: string
  type?:
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'primary'
    | 'default'
  disabled?: boolean
  text?: boolean
  auth?: string | string[]
  ifShow?: boolean | ((action: ActionItem) => boolean)
}
declare namespace Table {
  type Action = ActionItem
  type Actions = ActionItem[]
}
