<template>
  <TooltipContainer
    tooltip="项目配置"
    placement="bottom-end"
    @click="openSetting"
  >
    <NIcon
      size="22"
      color="rgb(171,175,178)"
      :component="Settings20Filled"
    />
  </TooltipContainer>

  <SettingDrawer v-model:visible="settingVisible" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Settings20Filled } from '@vicons/fluent'
import SettingDrawer from '@/layout/common/SettingDrawer/index.vue'

const settingVisible = ref<boolean>(false)
const openSetting = () => settingVisible.value = true
</script>
