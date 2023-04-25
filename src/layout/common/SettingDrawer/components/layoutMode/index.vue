<template>
  <n-space
    justify="space-around"
    :wrap="true"
    :size="24"
    class="p-12px"
  >
    <Item
      v-for="mode in layoutModeList"
      :key="mode.value"
      :label="mode.label"
      :checked="theme.layoutMode === mode.value"
      :placement="mode.placement"
      @click="setLayoutMode(mode.value)"
    >
      <template v-if="mode.value === 'vertical'">
        <div class="w-18px h-full bg-primary rd-4px" />
        <div class="flex flex-1 flex-col gap-6px">
          <div class="h-16px bg-primary:70 rd-4px" />
          <div class="flex-1 bg-primary:25 rd-4px" />
        </div>
      </template>
      <template v-else-if="mode.value === 'horizontal'">
        <div class="flex flex-1 flex-col gap-6px">
          <div class="h-16px bg-primary rd-4px" />
          <div class="flex-1 bg-primary:25 rd-4px" />
        </div>
      </template>
      <template v-else-if="mode.value === 'vertical-mix'">
        <div class="w-8px h-full bg-primary rd-4px" />
        <div class="w-14px h-full bg-primary rd-4px" />
        <div class="flex flex-1 flex-col gap-6px">
          <div class="h-16px bg-primary:70 rd-4px" />
          <div class="flex-1 bg-primary:25 rd-4px" />
        </div>
      </template>
      <div v-else-if="mode.value === 'horizontal-mix'"
        >顶部菜单混合模式</div
      >
    </Item>
  </n-space>
</template>

<script lang="ts" setup>
import Item from './Item.vue'
import { useThemeStore } from '@/store'
import type { PopoverPlacement } from 'naive-ui'

const theme = useThemeStore()
const { setLayoutMode } = theme

type layoutMode = {
  value: Theme.LayoutMode
  label: string
  placement: PopoverPlacement
}

const layoutModeList: Array<layoutMode> = [
  {
    placement: 'top-start',
    value: 'vertical',
    label: '左侧菜单模式'
  },
  {
    placement: 'top-end',
    value: 'horizontal',
    label: '顶部菜单模式'
  },
  {
    placement: 'bottom-start',
    value: 'vertical-mix',
    label: '左侧菜单混合模式'
  },
  {
    placement: 'bottom-end',
    value: 'horizontal-mix',
    label: '顶部菜单混合模式'
  }
]
</script>
