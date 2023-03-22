<template>
  <NDrawer v-model:show="modalVisible">
    <NDrawerContent title="项目配置" :native-scrollbar="false">
      <div class="drawer">
        <!-- <NDivider title-placement="centner">主题</NDivider> -->
        <!-- Dark/Light Mode --> 

        <NDivider title-placement="centner">系统主题</NDivider>
        <ThemeColor />

        <NDivider title-placement="centner">界面功能</NDivider>
        <ScrollMode />
      </div>
    </NDrawerContent>
  </NDrawer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import ScrollMode from './scrollMode.vue'
import ThemeColor from './themeColor.vue'

const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{(e: 'update:visible', visible: boolean): void }>()

const modalVisible = computed<boolean>({
  get() { return props.visible },
  set(visible) { emit('update:visible', visible) }
})
</script>

<style lang="less" scoped>
.drawer {
  .n-divider:not(.n-divider--vertical) {
    margin: 10px 0;
  }
}
</style>