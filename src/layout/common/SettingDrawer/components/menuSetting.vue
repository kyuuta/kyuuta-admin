<template>
  <Item :title="t('system.tabs')">
    <NSwitch
      :value="tabConfig.visible"
      @update:value="setTabVisible"
    />
  </Item>
  <Item :title="t('system.tabsCache')">
    <NSwitch
      :value="tabConfig.isCache"
      @update:value="setTabCache"
    />
  </Item>
  <Item :title="t('system.breadcrumbs')">
    <NSwitch
      :value="breadcrumbConfig.visible"
      @update:value="setBreadcrumbVisible"
    />
  </Item>
  <Item :title="t('system.breadcrumbsIcon')">
    <NSwitch
      :value="breadcrumbConfig.showIcon"
      @update:value="setBreadcrumbShowIcon"
    />
  </Item>
  <Item :title="t('system.headerFoldIcon')">
    <NSwitch
      :value="menuConfig.showHeaderCollapse"
      @update:value="setHeaderCollapseVisible"
    />
  </Item>
  <Item :title="t('system.sidebarAccordionMode')">
    <NSwitch
      :value="menuConfig.accordion"
      @update:value="setSiderAccordion"
    />
  </Item>
  <Item :title="t('system.sidebarCollapseButton')">
    <NSwitch
      :value="menuConfig.showSiderCollapse"
      @update:value="setSiderCollapseVisible"
    />
  </Item>
  <Item :title="t('system.sidebarCollapseType')">
    <NSelect
      class="w120px"
      :value="menuConfig.collapseType"
      :options="menuConfig.collapseTypeList"
      @update:value="setCollapseType"
    />
  </Item>
  <Item :title="t('system.menuWidth')">
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

const { t } = useI18n()
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
