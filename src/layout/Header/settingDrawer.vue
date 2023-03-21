<template>
  <NDrawer v-model:show="modalVisible">
    <NDrawerContent title="项目配置" :native-scrollbar="false">
      <div class="drawer">
        <!-- <NDivider title-placement="centner">主题</NDivider> -->
        <!-- Dark/Light Mode -->

        <!-- <NDivider title-placement="centner">系统主题</NDivider> -->
        <!-- 主题色 -->

        <NDivider title-placement="centner">界面功能</NDivider>
        <div class="drawer-item">
          <div class="drawer-item-title">滚动模式</div>
          <div class="drawer-item-content">
            <NSwitch
              :value="getScrollMode"
              :railStyle="switchStyle"
              checkedValue="content"
              uncheckedValue="main"
              @update:value="handleChangeScrollMode"
            >
              <template #checked>
                内容滚动
              </template>
              <template #unchecked>
                整体滚动
              </template>
            </NSwitch>
          </div>
        </div>
      </div>
    </NDrawerContent>
  </NDrawer>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { useSetting } from '@/hooks/setting'
import { useProjectSettingStore } from '@/store/modules/setting'

const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{(e: 'update:visible', visible: boolean): void }>()

const { getScrollMode } = useSetting()
const { setScrollMode } = useProjectSettingStore()
const handleChangeScrollMode = val => setScrollMode(val)
const switchStyle = ({ 
  focused,
  checked 
}: { 
  focused: boolean,
  checked: boolean
}) => {
  const style: CSSProperties = {}
  if(checked) {
    style.background = "#1890ff"
    style.boxShadow = '0 0 0 2px rgba(24, 144, 255, .2)'
  } else {
    style.background = "#8a2be2"
    style.boxShadow = "0 0 0 2px rgba(138, 43, 226, .2)"
  }
  return style
}

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

  &-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    line-height: 1;
    padding: 12px 0;
    &-title {
      flex: 1;
    }
  }
}
</style>