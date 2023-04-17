<template>
  <NLayoutSider
    class="sider"
    bordered
    :nativeScrollbar="false"
    collapseMode="width"
    :collapsedWidth="64"
    :width="menuConfig.collapsedWidth"
    :collapsed="menuConfig.collapse"
    :showTrigger="
      ['bar', 'arrow-circle'].includes(menuConfig.collapseType)
        ? menuConfig.collapseType
        : undefined
    "
    @update:collapsed="setCollapse"
  >
    <AsideMenu :collapsed="menuConfig.collapse" />
  </NLayoutSider>
</template>

<script lang="ts" setup>
import AsideMenu from '../Menu/index.vue'
import { useThemeStore } from '@/store'

const { menuConfig, setCollapse } = useThemeStore()
</script>

<style lang="less" scoped>
.sider {
  min-height: 100vh;
  ::v-deep(.n-layout-toggle-bar) {
    position: fixed;
    margin-right: -28px;
    right: unset;
  }
  ::v-deep(.n-layout-toggle-button) {
    position: fixed;
    right: unset;
  }
}
</style>
