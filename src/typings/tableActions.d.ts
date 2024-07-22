import { NButton } from 'naive-ui'

// 定义扩展的属性
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

export interface ActionItem
  extends Partial<InstanceType<typeof NButton>> {
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
