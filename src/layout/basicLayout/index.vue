<template>
  <NLayout position="absolute">
    <NLayout :position="positionStyle.position" has-sider>
      <Sider />
      <NLayout :native-scrollbar="false">
        <Header
          v-if="headerConfig.visible"
          :position="positionStyle.position"
          :height="headerHeight"
        />

        <NLayout
          :position="positionStyle.position"
          :class="['wrapper-layout', {
            'has-footer': footerConfig.visible && footerConfig.fixed,
            'fix-header':
              getScrollMode === 'content' && headerConfig.visible,
          }]"
        >
          <Main />

          <Footer
            v-if="footerConfig.visible && !footerConfig.fixed"
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
import { ref, unref, computed } from "vue"
import { useThemeStore } from "@/store"
import {
  Header,
  Footer,
  Sider,
  Main
} from '../common'

const {
  getScrollMode,
  headerConfig,
  footerConfig
} = useThemeStore()

const headerHeight = computed(() => `${headerConfig.height}px`)
const footerHeight = computed(() => `${footerConfig.height}px`)

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