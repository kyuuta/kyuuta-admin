<template>
  <Item title="标签页">
    <NSwitch
      :value="tabConfig.visible"
      @update:value="setTabVisible"
    />
  </Item>
  <Item title="标签页缓存">
    <NSwitch
      :value="tabConfig.isCache"
      @update:value="setTabCache"
    />
  </Item>
  <Item title="面包屑">
    <NSwitch
      :value="breadcrumbConfig.visible"
      @update:value="setBreadcrumbVisible"
    />
  </Item>
  <Item title="面包屑图标">
    <NSwitch
      :value="breadcrumbConfig.showIcon"
      @update:value="setBreadcrumbShowIcon"
    />
  </Item>
  <Item title="头部折叠图标">
    <NSwitch
      :value="menuConfig.showHeaderCollapse"
      @update:value="setHeaderCollapseVisible"
    />
  </Item>
  <Item title="侧边栏手风琴">
    <NSwitch
      :value="menuConfig.accordion"
      @update:value="setSiderAccordion"
    />
  </Item>
  <Item title="侧边栏折叠按钮">
    <NSwitch
      :value="menuConfig.showSiderCollapse"
      @update:value="setSiderCollapseVisible"
    />
  </Item>
  <Item title="侧边栏折叠类型">
    <NSelect
      class="w120px"
      :value="menuConfig.collapseType"
      :options="menuConfig.collapseTypeList"
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

const theme = useThemeStore()
const { menuConfig, tabConfig, breadcrumbConfig } =
  storeToRefs(theme)
const {
  setCollapseType,
  setCollapsedWidth,
  setBreadcrumbVisible,
  setBreadcrumbShowIcon,
  setSiderAccordion,
  setSiderCollapseVisible,
  setTabCache,
  setTabVisible,
  setHeaderCollapseVisible
} = theme
</script>

<style lang="less" scoped>
.field {
  width: 120px;
}
</style>
