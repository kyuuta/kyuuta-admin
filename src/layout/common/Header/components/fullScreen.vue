<template>
  <TooltipContainer
    :tooltip="t('system.fullscreen')"
    @click="toggle"
  >
    <SvgIcon
      v-if="isFullscreen"
      class="text-22px"
      icon="fluent:full-screen-minimize-24-filled"
    />

    <SvgIcon
      v-else
      class="text-22px"
      icon="fluent:full-screen-maximize-24-filled"
    />
  </TooltipContainer>
</template>

<script lang="ts" setup>
const { t } = useI18n()
const { isFullscreen, toggle } = useFullscreen()
</script>
