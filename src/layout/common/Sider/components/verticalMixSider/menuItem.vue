<template>
  <div
    :class="[
      'cursor-pointer',
      'flex-y-center flex-col justify-between',
      'py-6px',
      'rd',
      'transition-colors duration-300 ease-in-out',
      { 'text-primary !bg-primary_active': isActive },
      { 'text-primary': isHover },
      {
        'defaultHoverBg h-55px mb-4px': mode === 'vertical'
      },
      {
        'w-55px mx-4px': mode === 'horizontal',
        'flex-1': mode === 'vertical'
      }
    ]"
    @mouseenter="setTrue"
    @mouseleave="setFalse"
  >
    <component :is="icon" v-if="icon" />
    <span
      class="text-12px w-full text-center px-4px text-ellipsis text-nowrap w-60px overflow-hidden transition-height duration-300 ease-in-out"
    >
      {{ t(label) }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { VNodeChild } from 'vue'
import type { RouteRecordNameGeneric } from 'vue-router'
import { useBoolean } from '@/hooks'

const { t } = useI18n()
const props = withDefaults(
  defineProps<{
    /** 路由名称 */
    routeName: RouteRecordNameGeneric
    /** 路由名称文本 */
    label: string
    /** 当前激活状态的理由名称 */
    activeRouteName: RouteRecordNameGeneric
    /** 路由图标 */
    icon?: () => VNodeChild
    /** 布局模式 */
    mode?: 'horizontal' | 'vertical'
  }>(),
  {
    icon: undefined,
    mode: 'vertical'
  }
)

const { bool: isHover, setTrue, setFalse } = useBoolean()
const isActive = computed(
  () => props.routeName === props.activeRouteName
)
</script>
