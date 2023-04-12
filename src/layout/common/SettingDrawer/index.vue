<template>
  <NDrawer v-model:show="modalVisible" :default-width="300">
    <NDrawerContent title="项目配置" :native-scrollbar="false">
      <div class="drawer">
        <NDivider title-placement="centner">主题</NDivider>
        <Theme />

        <NDivider title-placement="centner">系统主题</NDivider>
        <ThemeColor />

        <NDivider title-placement="centner">界面功能</NDivider>
        <ScrollMode />

        <NDivider title-placement="centner">菜单相关</NDivider>
        <MenuSetting />

        <NDivider title-placement="centner">主题配置</NDivider>
        <Operations />
      </div>
    </NDrawerContent>
  </NDrawer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useModalState } from '@/composables'
import {
  Theme,
  ThemeColor,
  ScrollMode,
  MenuSetting,
  Operations
} from './components/index'

const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{(e: 'update:visible', visible: boolean): void }>()
const { modalVisible } = useModalState(props, emit)
</script>

<style lang="less" scoped>
.drawer {
  .n-divider:not(.n-divider--vertical) {
    margin: 10px 0;
  }
}
</style>
