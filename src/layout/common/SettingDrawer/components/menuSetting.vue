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
      class="field"
      :value="menuConfig.collapseType"
      :options="options"
      @update:value="setCollapseType"
    />
  </Item>
  <Item title="菜单宽度">
    <NInputNumber
      class="field"
      style="text-align: center"
      :step="10"
      :max="300"
      :value="menuConfig.collapsedWidth"
      button-placement="both"
      @update:value="setCollapsedWidth"
    />
  </Item>
</template>

<script lang="ts" setup>
import Item from './item.vue'
import { useThemeStore } from '@/store'

const options = [{
  label: '不展示',
  value: 'false'
}, {
  label: 'Bar',
  value: 'bar'
}, {
  label: 'ArrowCircle',
  value: 'arrow-circle'
}, {
  label: 'Header',
  value: 'header'
}]

const {
  menuConfig,
  breadcrumbConfig,
  setCollapseType,
  setCollapsedWidth,
  setBreadcrumbVisible,
  setBreadcrumbShowIcon
} = useThemeStore()
</script>

<style lang="less" scoped>
.field {
  width: 120px;
}
</style>