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
          :class="{
            'has-footer': getFooterConfig.visible && getFooterConfig.fixed,
            'fix-header': getScrollMode === 'content' && getHeaderConfig.visible
          }"
        >
          <MainContainer />

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
import { ref, unref, computed } from 'vue'
import { useLayout } from '@/hooks/layout'
import Header from './Header/index'
import Footer from './Footer/index'
import Sider from './Sider/index'
import MainContainer from './Main/index'

const { 
  getScrollMode,
  getHeaderConfig,
  getFooterConfig
} = useLayout()

const headerHeight = computed(() => `${getHeaderConfig.height}px`)
const footerHeight = computed(() => `${getFooterConfig.height}px`)

const positionStyle = computed(() => 
  getScrollMode.value === 'content'
    ? { 
      position: 'absolute',
      paddingTop: footerHeight
    }
    : { position: 'static' }
)
</script>

<style lang="less" scoped>
.fix-header {
  padding-top: v-bind(headerHeight);
}

.has-footer {
  padding-bottom: v-bind(footerHeight);
}
</style>