<template>
  <TooltipContainer
    tooltip="项目配置"
    placement="bottom-end"
    @click="openSetting"
  >
    <SvgIcon class="text-22px" icon="lucide:settings" />
  </TooltipContainer>

  <SettingDrawer v-model:visible="settingVisible" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SettingDrawer from '@/layout/common/SettingDrawer/index.vue'

const settingVisible = ref<boolean>(false)
const openSetting = () => (settingVisible.value = true)
</script>
