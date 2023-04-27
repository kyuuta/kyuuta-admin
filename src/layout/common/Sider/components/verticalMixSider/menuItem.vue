<template>
  <div
    :class="[
      'cursor-pointer',
      'flex-y-center flex-col justify-between',
      'h-55px',
      'py-6px mx-4px mb-4px',
      'rd',
      'hover:bg-#ececed hover:dark-bg-#343438',
      'transition-colors duration-300 ease-in-out',
      { 'text-primary !bg-primary_active': isActive },
      { 'text-primary': isHover }
    ]"
    @mouseenter="setTrue"
    @mouseleave="setFalse"
  >
    <component :is="icon" />
    <span
      class="text-12px overflow-hidden transition-height duration-300 ease-in-out"
    >
      {{ label }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { VNodeChild } from 'vue'
import { useBoolean } from '@/hooks'

const props = withDefaults(
  defineProps<{
    /** 路由名称 */
    routeName: string
    /** 路由名称文本 */
    label: string
    /** 当前激活状态的理由名称 */
    activeRouteName: string
    /** 路由图标 */
    icon?: () => VNodeChild
  }>(),
  {
    icon: undefined
  }
)

const { bool: isHover, setTrue, setFalse } = useBoolean()
const isActive = computed(
  () => props.routeName === props.activeRouteName
)
</script>
