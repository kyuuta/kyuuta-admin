<template>
  <TooltipContainer tooltip="全屏" @click="toggle">
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
const { isFullscreen, toggle } = useFullscreen()
</script>
