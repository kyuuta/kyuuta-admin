<template>
  <NLayout hasSider :position="position">
    <template v-if="!app.contentFull">
      <Sider
        v-if="
          theme.layoutMode !== 'horizontal' && !getIsMobile
        "
      />

      <NDrawer
        v-else
        v-model:show="getSiderDrawerVisible"
        :width="
          theme.layoutMode === 'vertical-mix'
            ? '70px'
            : menuConfig.collapsedWidth
        "
        placement="left"
        @update:show="setSiderDrawerVisible"
      >
        <Sider />
      </NDrawer>

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
import { storeToRefs } from 'pinia'
import { debounce } from 'lodash-es'
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

const { menuConfig } = storeToRefs(theme)
const { setIsMobile, setSiderDrawerVisible } = theme
const { getIsMobile, getSiderDrawerVisible } =
  storeToRefs(theme)
const watchWidth = debounce(() => {
  const Width = document.body.clientWidth
  setIsMobile(Width <= 950)
}, 80)

onMounted(() => {
  watchWidth()
  window.addEventListener('resize', watchWidth)
})
</script>

<style lang="less" scoped>
.flex-layout {
  ::v-deep(.n-layout-scroll-container) {
    display: flex;
    flex-direction: column;
  }
}
</style>
