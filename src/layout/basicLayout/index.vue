<template>
  <NLayout hasSider :position="position">
    <template v-if="!app.contentFull">
      <Sider v-if="theme.layoutMode !== 'horizontal'" />
      <NLayout class="flex-layout">
        <Header
          v-if="headerConfig.visible"
          :height="headerHeight"
        />

        <Tab v-if="tabConfig.visible" />

        <NLayout embedded>
          <Main />
          <Footer
            v-if="
              footerConfig.visible && !footerConfig.fixed
            "
            :height="footerHeight"
          />
        </NLayout>
        <Footer
          v-if="footerConfig.visible && footerConfig.fixed"
          :height="footerHeight"
        />
      </NLayout>
    </template>

    <Main v-else />
  </NLayout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore, useThemeStore } from '@/store'
import { Header, Footer, Sider, Main, Tab } from '../common'

const app = useAppStore()
const theme = useThemeStore()
const { headerConfig, footerConfig, tabConfig } =
  storeToRefs(theme)

const headerHeight = computed(
  () => `${headerConfig.value.height}px`
)
const footerHeight = computed(
  () => `${footerConfig.value.height}px`
)

const position = computed<'absolute' | 'static'>(() =>
  theme.getScrollMode === 'content' ? 'absolute' : 'static'
)
</script>

<style lang="less" scoped>
.flex-layout {
  ::v-deep(.n-layout-scroll-container) {
    display: flex;
    flex-direction: column;
  }
}
</style>
