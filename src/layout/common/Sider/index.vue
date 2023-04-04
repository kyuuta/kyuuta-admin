<template>
  <NLayoutSider
    class="sider"
    bordered
    :native-scrollbar="false"
    collapse-mode="width"
    :collapsed-width="64"
    :width="collapsedWidth"
    :collapsed="collapse"
    :show-trigger="['bar','arrow-circle'].includes(collpaseType) ? collpaseType : false"
    @update:collapsed="setCollapse"
  >
    <AsideMenu :collapsed="collapse"/>
  </NLayoutSider>
</template>

<script lang="ts" setup>
import AsideMenu from '../Menu/index.vue'
import { useMenu } from '@/hooks/menu'

const {
  collapse,
  collpaseType,
  collapsedWidth,
  setCollapse
} = useMenu()
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