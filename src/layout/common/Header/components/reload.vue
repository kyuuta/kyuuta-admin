<template>
  <TooltipContainer
    :tooltip="t('system.reload')"
    @click="reloadPage()"
  >
    <SvgIcon class="text-22px" icon="ion:reload" />
  </TooltipContainer>
</template>

<script lang="ts" setup>
const { t } = useI18n()
const { reloadPage } = useAppStore()
</script>
