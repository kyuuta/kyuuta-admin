<template>
  <NLayout position="absolute">
    <NLayout :position="positionStyle.position" has-sider>
      <Sider />
      <NLayout :native-scrollbar="false">
        <Header
          v-if="getHeaderConfig.visible"
          :position="positionStyle.position"
          :height="headerHeight"
        />

        <NLayout
          :position="positionStyle.position"
          :class="['wrapper-layout', {
            'has-footer': getFooterConfig.visible && getFooterConfig.fixed,
            'fix-header':
              getScrollMode === 'content' && getHeaderConfig.visible,
          }]"
        >
          <Main />

          <Footer
            v-if="getFooterConfig.visible && !getFooterConfig.fixed"
            position="static"
            :height="footerHeight"
          />
        </NLayout>

        <Footer
          v-if="getFooterConfig.visible && getFooterConfig.fixed"
          :height="footerHeight"
        />
      </NLayout>
    </NLayout>
  </NLayout>
</template>

<script lang="ts" setup>
import { ref, unref, computed } from "vue"
import { useLayout } from "@/hooks/layout"
import {
  Header,
  Footer,
  Sider,
  Main
} from '../common'

const { getScrollMode, getHeaderConfig, getFooterConfig } = useLayout()

const headerHeight = computed(() => `${getHeaderConfig.height}px`)
const footerHeight = computed(() => `${getFooterConfig.height}px`)

const positionStyle = computed(() =>
  getScrollMode.value === "content"
    ? {
        position: "absolute",
        paddingTop: footerHeight,
      }
    : { position: "static" }
);
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