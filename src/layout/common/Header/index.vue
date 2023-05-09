<template>
  <NLayoutHeader class="page-header" bordered>
    <div class="left-controls">
      <div
        v-if="theme.layoutMode === 'horizontal'"
        class="flex-center w-80px h-60px"
      >
        <Logo />
      </div>
      <Collapse
        v-if="
          ['vertical', 'horizontal-mix'].includes(
            theme.layoutMode
          )
        "
      />
      <Reload />
      <Breadcrumb
        v-if="
          ['vertical', 'vertical-mix'].includes(
            theme.layoutMode
          )
        "
      />
    </div>

    <NScrollbar
      v-if="
        ['horizontal', 'horizontal-mix'].includes(
          theme.layoutMode
        )
      "
      class="flex-1 overflow-hidden flex-y-center h-full menu-wrapper"
      x-scrollable
    >
      <div class="h-full flex-y-center">
        <Menu
          v-if="theme.layoutMode === 'horizontal'"
          :collapsed="false"
          mode="horizontal"
        />
        <HorizontalMix
          v-if="theme.layoutMode === 'horizontal-mix'"
        />
      </div>
    </NScrollbar>

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
import { useThemeStore } from '@/store'
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
import Logo from '../Logo/index.vue'
import Menu from '../Menu/index.vue'
import HorizontalMix from '../Menu/horizontalMix.vue'

const theme = useThemeStore()
const props = defineProps<{
  height: string
  // position: 'absolute' | 'static'
}>()
</script>

<style lang="less" scoped>
.page-header {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: v-bind('props.height');
  flex: 0 0 v-bind('props.height');

  .right-controls {
    padding-right: 10px;
  }
  .right-controls,
  .left-controls {
    display: flex;
    height: 100%;
  }

  ::v-deep(.menu-wrapper) {
    margin-left: 10px;
    .n-scrollbar-content {
      height: 100%;
      .n-menu-item-content {
        padding-left: 0;
        padding-right: 18px;
      }
      .n-menu-item-content-header {
        overflow: unset;
        text-overflow: unset;
      }
    }
  }
}
</style>
