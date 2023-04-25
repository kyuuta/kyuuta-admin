<template>
  <NLayoutHeader
    class="page-header"
    bordered
    :position="props.position"
  >
    <div
      v-if="theme.layoutMode !== 'horizontal'"
      class="left-controls"
    >
      <Collapse />
      <Reload />
      <Breadcrumb />
    </div>

    <div v-else class="menu">
      <n-scrollbar x-scrollable>
        <Menu :collapsed="false" />
      </n-scrollbar>
    </div>

    <div class="right-controls">
      <Search />
      <FullScreen />
      <DarkMode />
      <Avatar />
      <Setting />
    </div>
  </NLayoutHeader>
</template>

<script lang="ts" setup>
import {
  Avatar,
  Breadcrumb,
  Collapse,
  DarkMode,
  FullScreen,
  Reload,
  Search,
  Setting
} from './components'
import Menu from '../Menu/index.vue'
import { useThemeStore } from '@/store'

const theme = useThemeStore()
const props = defineProps<{
  height: string
  position: 'absolute' | 'static'
}>()
</script>

<style lang="less" scoped>
.page-header {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: v-bind('props.height');

  .right-controls {
    padding-right: 10px;
  }
  .right-controls,
  .left-controls {
    display: flex;
    height: 100%;
  }

  .menu {
    flex: auto;
    // background-color: skyblue;
  }
}
</style>
