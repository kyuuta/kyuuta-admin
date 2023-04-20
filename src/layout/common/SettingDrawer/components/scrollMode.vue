<template>
  <Item title="滚动模式">
    <NSwitch
      :value="theme.getScrollMode"
      :railStyle="switchStyle"
      checkedValue="content"
      uncheckedValue="main"
      @update:value="setScrollMode"
    >
      <template #checked>内容滚动</template>
      <template #unchecked>整体滚动</template>
    </NSwitch>
  </Item>
  <Item title="显示头部">
    <NSwitch
      :value="headerConfig.visible"
      @update:value="setHeaderVisible"
    />
  </Item>
  <Item title="头部高度">
    <NInputNumber
      class="w120px text-center"
      :step="10"
      :max="300"
      :value="headerConfig.height"
      buttonPlacement="both"
      @update:value="height => setHeaderHeight(height as number)"
    />
  </Item>
  <Item title="显示底部">
    <NSwitch
      :value="footerConfig.visible"
      @update:value="setFooterVisible"
    />
  </Item>
  <Item title="底部高度">
    <NInputNumber
      class="w120px text-center"
      :step="10"
      :max="300"
      :value="footerConfig.height"
      buttonPlacement="both"
      @update:value="height => setFooterHeight(height as number)"
    />
  </Item>
  <Item title="固定底部">
    <NSwitch
      :value="footerConfig.fixed"
      :disabled="theme.getScrollMode === 'main'"
      @update:value="setFooterFixed"
    />
  </Item>
</template>

<script lang="ts" setup>
import Item from './item.vue'
import { storeToRefs } from 'pinia'
import { CSSProperties } from 'vue'
import { useThemeStore } from '@/store'

const theme = useThemeStore()
const {
  setScrollMode,
  setHeaderVisible,
  setHeaderHeight,
  setFooterVisible,
  setFooterHeight,
  setFooterFixed
} = theme
const { headerConfig, footerConfig } = storeToRefs(theme)

const switchStyle = ({
  focused,
  checked
}: {
  focused: boolean
  checked: boolean
}) => {
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
