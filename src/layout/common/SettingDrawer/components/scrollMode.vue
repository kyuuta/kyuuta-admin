<template>
  <Item title="滚动模式">
    <NSwitch
      :value="getScrollMode"
      :railStyle="switchStyle"
      checkedValue="content"
      uncheckedValue="main"
      @update:value="setScrollMode"
    >
      <template #checked>内容滚动</template>
      <template #unchecked>整体滚动</template>
    </NSwitch>
  </Item>
</template>

<script lang="ts" setup>
import Item from './item.vue'
import { CSSProperties } from 'vue'
import { useThemeStore } from '@/store'

const { getScrollMode, setScrollMode } = useThemeStore()

const switchStyle = ({ focused, checked }: { focused: boolean; checked: boolean }) => {
  const style: CSSProperties = {}
  if (checked) {
    style.background = '#1890ff'
    style.boxShadow = '0 0 0 2px rgba(24, 144, 255, .2)'
  } else {
    style.background = '#8a2be2'
    style.boxShadow = '0 0 0 2px rgba(138, 43, 226, .2)'
  }
  return style
}
</script>
