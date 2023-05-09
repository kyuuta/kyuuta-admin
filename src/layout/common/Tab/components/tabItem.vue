<template>
  <div
    class="relative flex-y-center h-34px px-20px -mr-18px cursor-pointer select-none"
    :class="{
      'z-10 color-primary': isActive,
      'z-9': isHover
    }"
    @mouseenter="setTrue"
    @mouseleave="setFalse"
  >
    <div
      class="absolute left-0 top-0 wh-full overflow-hidden"
    >
      <svg class="wh-full">
        <defs>
          <symbol id="geometry-left" viewBox="0 0 214 36">
            <path
              d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z"
            />
          </symbol>
          <symbol id="geometry-right" viewBox="0 0 214 36">
            <use xlink:href="#geometry-left" />
          </symbol>
          <clipPath>
            <rect width="100%" height="100%" x="0" />
          </clipPath>
        </defs>
        <svg width="52%" height="100%">
          <use
            xlink:href="#geometry-left"
            width="214"
            height="36"
            :fill="fill"
          />
        </svg>
        <g transform="scale(-1, 1)">
          <svg width="52%" height="100%" x="-100%" y="0">
            <use
              xlink:href="#geometry-right"
              width="214"
              height="36"
              :fill="fill"
            />
          </svg>
        </g>
      </svg>
    </div>
    <span class="relative whitespace-nowrap z-2 pr-6px">
      <slot />
    </span>
    <div
      v-if="closable"
      @mouseenter="setCloseTrue"
      @mouseleave="setCloseFalse"
    >
      <div
        :class="[
          'relative flex-center w-17px h-17px text-14px b-rd-50% transition-all p-2px',
          {
            'hover:bg-[#BABBC0] dark:hover:!bg-[#343438]':
              closeHover
          }
        ]"
      >
        <SvgIcon
          icon="line-md:close"
          class="text-14px"
          :color="closeHover ? '#fff' : '#BABBC0'"
          @click="handleClose"
        />
      </div>
    </div>
    <NDivider
      v-if="!isHover && !props.isActive"
      vertical
      class="absolute right-0 !bg-[#a4abb8] z-2"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBoolean } from '@/hooks'
import { mixColor } from '@/utils'

const props = withDefaults(
  defineProps<{
    /** 激活状态 */
    isActive?: boolean
    /** 主题颜色 */
    primaryColor?: string
    /** 是否显示关闭图标 */
    closable?: boolean
    /** 暗黑模式 */
    darkMode?: boolean
  }>(),
  {
    isActive: false,
    primaryColor: '#409EFF',
    closable: true,
    darkMode: false
  }
)
const emit = defineEmits<{
  (e: 'close'): void
}>()

const { bool: isHover, setTrue, setFalse } = useBoolean()
const {
  bool: closeHover,
  setTrue: setCloseTrue,
  setFalse: setCloseFalse
} = useBoolean()

const handleClose = (e: MouseEvent) => {
  e.stopPropagation()
  emit('close')
}

/** 填充的背景颜色： [默认颜色, 暗黑主题颜色] */
type FillColor = [string, string]
const defaultColor: FillColor = ['#fff', '#18181c']
const hoverColor: FillColor = ['#F5F5F6', '#3f3c37']
const mixColors: FillColor = ['#ffffff', '#000000']

const fill = computed(() => {
  const index = Number(props.darkMode)
  let color = defaultColor[index]

  if (isHover.value) {
    color = hoverColor[index]
  }
  if (props.isActive) {
    const alpha = props.darkMode ? 0.1 : 0.15
    color = mixColor(
      mixColors[index],
      props.primaryColor,
      alpha
    )
  }
  return color
})
</script>
