<template>
  <TooltipContainer
    :tooltip="t('system.projectConfiguration')"
    placement="bottom-end"
    @click="openSetting"
  >
    <SvgIcon class="text-22px" icon="lucide:settings" />
  </TooltipContainer>

  <SettingDrawer v-model:visible="settingVisible" />
</template>

<script lang="ts" setup>
import SettingDrawer from '@/layout/common/SettingDrawer/index.vue'

const { t } = useI18n()
const settingVisible = ref<boolean>(false)
const openSetting = () => (settingVisible.value = true)
</script>
