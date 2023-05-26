<template>
  <NDropdown
    :show="modalVisible"
    :options="options"
    placement="bottom-start"
    :x="x"
    :y="y"
    @clickoutside="handleClose"
    @select="handleDropdown"
  />
</template>

<script lang="ts" setup>
import { DropdownOption } from 'naive-ui'

const { iconRender } = useIconRender()

type dropdownKey =
  | 'full-content'
  | 'reload-current'
  | 'close-current'
  | 'close-other'
  | 'close-left'
  | 'close-right'
  | 'close-all'
type Option = DropdownOption & {
  key: dropdownKey
}

const options = computed<Option[]>(() => [
  {
    label: '内容全屏',
    key: 'full-content',
    disabled: false,
    icon: iconRender({ icon: 'gridicons-fullscreen' })
  },
  {
    label: '重新加载',
    key: 'reload-current',
    disabled: false,
    icon: iconRender({ icon: 'ant-design:reload-outlined' })
  },
  {
    label: '关闭',
    key: 'close-current',
    disabled:
      props.currentPath === tabStore.homeTab.fullPath,
    icon: iconRender({ icon: 'ant-design:close-outlined' })
  },
  {
    label: '关闭其他',
    key: 'close-other',
    disabled: false,
    icon: iconRender({
      icon: 'ant-design:column-width-outlined'
    })
  },
  {
    label: '关闭左侧',
    key: 'close-left',
    disabled: false,
    icon: iconRender({
      icon: 'mdi:format-horizontal-align-left'
    })
  },
  {
    label: '关闭右侧',
    key: 'close-right',
    disabled: false,
    icon: iconRender({
      icon: 'mdi:format-horizontal-align-right'
    })
  },
  {
    label: '关闭所有',
    key: 'close-all',
    disabled: false,
    icon: iconRender({ icon: 'ant-design:line-outlined' })
  }
])

const appStore = useAppStore()
const tabStore = useTabStore()
const actionMap = new Map<dropdownKey, () => void>([
  [
    'full-content',
    () => {
      appStore.setContentFull(true)
    }
  ],
  [
    'reload-current',
    () => {
      appStore.reloadPage()
    }
  ],
  [
    'close-current',
    () => {
      tabStore.removeTab(props.currentPath)
    }
  ],
  [
    'close-other',
    () => {
      tabStore.clearTab([props.currentPath])
    }
  ],
  [
    'close-left',
    () => {
      tabStore.clearLeftTab(props.currentPath)
    }
  ],
  [
    'close-right',
    () => {
      tabStore.clearRightTab(props.currentPath)
    }
  ],
  [
    'close-all',
    () => {
      tabStore.clearAllTab()
    }
  ]
])

const props = withDefaults(
  defineProps<{
    /** 是否可见 */
    visible?: boolean
    /** 当前路由路径 */
    currentPath?: string
    /** 所在x坐标 */
    x: number
    /** 所在y坐标 */
    y: number
  }>(),
  {
    visible: false,
    currentPath: ''
  }
)
const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()
const { modalVisible } = useModalState(props, emit)

const handleClose = () => {
  modalVisible.value = false
}

const handleDropdown = (optionKey: string) => {
  const key = optionKey as dropdownKey
  const actionFunc = actionMap.get(key)
  if (actionFunc) {
    actionFunc()
  }

  handleClose()
}
</script>
