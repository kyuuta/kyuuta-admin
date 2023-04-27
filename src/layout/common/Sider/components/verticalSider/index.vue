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
      menuConfig.showSiderCollapse
        ? menuConfig.collapseType
        : menuConfig.showSiderCollapse
    "
    @update:collapsed="setCollapse"
  >
    <div class="flex-center h-60px">
      <Logo />
    </div>
    <AsideMenu :collapsed="menuConfig.collapse" />
  </NLayoutSider>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/store'
import { Logo } from '@/layout/common'
import AsideMenu from '@/layout/common/Menu/index.vue'

const theme = useThemeStore()
const { menuConfig } = storeToRefs(theme)
const { setCollapse } = useThemeStore()
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
