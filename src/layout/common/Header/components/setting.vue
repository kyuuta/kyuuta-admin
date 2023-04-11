<template>
  <TooltipContainer
    tooltip="项目配置"
    placement="bottom-end"
    @click="openSetting"
  >
    <NIcon
      size="22"
      :component="Settings32Regular"
    />
  </TooltipContainer>

  <SettingDrawer v-model:visible="settingVisible" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Settings32Regular } from '@vicons/fluent'
import SettingDrawer from '@/layout/common/SettingDrawer/index.vue'

const settingVisible = ref<boolean>(false)
const openSetting = () => settingVisible.value = true
</script>
