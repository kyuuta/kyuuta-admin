<template>
  <NLayout position="absolute">
    <NLayout hasSider :position="position">
      <Sider v-if="theme.layoutMode !== 'horizontal'" />
      <NLayout class="flex-layout">
        <Header
          v-if="headerConfig.visible"
          :position="position"
          :height="headerHeight"
        />

        <NLayout
          :position="position"
          :class="[
            'flex-layout',
            'bg-#f6f9f8 dark:bg-dark',
            {
              'has-footer':
                footerConfig.visible && footerConfig.fixed,
              'fix-header':
                theme.getScrollMode === 'content' &&
                headerConfig.visible
            }
          ]"
        >
          <Main />

          <Footer
            v-if="
              footerConfig.visible && !footerConfig.fixed
            "
            position="static"
            :height="footerHeight"
          />
        </NLayout>

        <Footer
          v-if="footerConfig.visible && footerConfig.fixed"
          :height="footerHeight"
        />
      </NLayout>
    </NLayout>
  </NLayout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/store'
import { Header, Footer, Sider, Main } from '../common'

const theme = useThemeStore()
const { headerConfig, footerConfig } = storeToRefs(theme)

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
.fix-header {
  padding-top: v-bind(headerHeight);
}

.has-footer {
  padding-bottom: v-bind(footerHeight);
}

.flex-layout {
  ::v-deep(.n-layout-scroll-container) {
    display: flex;
    flex-direction: column;
  }
}
</style>
