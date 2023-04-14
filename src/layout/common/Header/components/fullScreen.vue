<template>
  <TooltipContainer tooltip="全屏" @click="toggle">
    <NIcon v-if="isFullscreen" size="22" :component="FullScreenMinimize24Filled" />
    <NIcon v-else size="22" :component="FullScreenMaximize24Filled" />
  </TooltipContainer>
</template>

<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'
import { FullScreenMaximize24Filled, FullScreenMinimize24Filled } from '@vicons/fluent'

const { isFullscreen, toggle } = useFullscreen()
</script>
