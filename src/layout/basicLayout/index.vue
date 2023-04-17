<template>
  <NLayout position="absolute">
    <NLayout hasSider :position="position">
      <Sider />
      <NLayout>
        <Header v-if="headerConfig.visible" :position="position" :height="headerHeight" />

        <NLayout
          :nativeScrollbar="false"
          :position="position"
          :class="[
            'wrapper-layout',
            {
              'has-footer': footerConfig.visible && footerConfig.fixed,
              'fix-header': getScrollMode === 'content' && headerConfig.visible
            }
          ]"
        >
          <Main />

          <Footer
            v-if="footerConfig.visible && !footerConfig.fixed"
            position="static"
            :height="footerHeight"
          />
        </NLayout>

        <Footer v-if="footerConfig.visible && footerConfig.fixed" :height="footerHeight" />
      </NLayout>
    </NLayout>
  </NLayout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useThemeStore } from '@/store'
import { Header, Footer, Sider, Main } from '../common'
const { getScrollMode, headerConfig, footerConfig } = useThemeStore()

const headerHeight = computed(() => `${headerConfig.value.height}px`)
const footerHeight = computed(() => `${footerConfig.value.height}px`)

const position = computed<'absolute' | 'static'>(() =>
  getScrollMode.value === 'content' ? 'absolute' : 'static'
)
</script>

<style lang="less" scoped>
.fix-header {
  padding-top: v-bind(headerHeight);
}

.has-footer {
  padding-bottom: v-bind(footerHeight);
}

.wrapper-layout {
  ::v-deep(.n-layout-scroll-container) {
    display: flex;
    flex-direction: column;
  }
}
</style>
