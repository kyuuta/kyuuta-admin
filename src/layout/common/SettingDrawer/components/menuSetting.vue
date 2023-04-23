<template>
  <Item title="显示面包屑">
    <NSwitch
      :value="breadcrumbConfig.visible"
      @update:value="setBreadcrumbVisible"
    />
  </Item>
  <Item title="显示面包屑图标">
    <NSwitch
      :value="breadcrumbConfig.showIcon"
      @update:value="setBreadcrumbShowIcon"
    />
  </Item>
  <Item title="折叠类型">
    <NSelect
      class="w120px"
      :value="menuConfig.collapseType"
      :options="options"
      @update:value="setCollapseType"
    />
  </Item>
  <Item title="菜单宽度">
    <NInputNumber
      class="w120px text-center"
      :step="10"
      :max="300"
      :value="menuConfig.collapsedWidth"
      buttonPlacement="both"
      @update:value="(width) => setCollapsedWidth(width as number)"
    />
  </Item>
</template>

<script lang="ts" setup>
import Item from './item.vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/store'

const options = [
  {
    label: '不展示',
    value: 'false'
  },
  {
    label: 'Bar',
    value: 'bar'
  },
  {
    label: 'ArrowCircle',
    value: 'arrow-circle'
  },
  {
    label: 'Header',
    value: 'header'
  }
]

const theme = useThemeStore()
const { menuConfig, breadcrumbConfig } = storeToRefs(theme)
const {
  setCollapseType,
  setCollapsedWidth,
  setBreadcrumbVisible,
  setBreadcrumbShowIcon
} = theme
</script>

<style lang="less" scoped>
.field {
  width: 120px;
}
</style>
