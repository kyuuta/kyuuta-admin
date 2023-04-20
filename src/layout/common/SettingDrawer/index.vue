<template>
  <NDrawer v-model:show="modalVisible" :defaultWidth="300">
    <NDrawerContent
      title="项目配置"
      :nativeScrollbar="false"
    >
      <div class="drawer">
        <NDivider titlePlacement="center">主题</NDivider>
        <Theme />

        <NDivider titlePlacement="center">
          系统主题
        </NDivider>
        <ThemeColor />

        <NDivider titlePlacement="center">
          界面功能
        </NDivider>
        <ScrollMode />

        <NDivider titlePlacement="center">
          菜单相关
        </NDivider>
        <MenuSetting />

        <NDivider titlePlacement="center">
          主题配置
        </NDivider>
        <Operations />
      </div>
    </NDrawerContent>
  </NDrawer>
</template>

<script lang="ts" setup>
import { useModalState } from '@/composables'
import {
  Theme,
  ThemeColor,
  ScrollMode,
  MenuSetting,
  Operations
} from './components/index'

const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()
const { modalVisible } = useModalState(props, emit)
</script>

<style lang="less" scoped>
.drawer {
  .n-divider:not(.n-divider--vertical) {
    margin: 10px 0;
  }
}
</style>
