<template>
  <TooltipContainer
    tooltip="暗黑模式"
    @click="setDarkMode(!theme.getDarkMode)"
  >
    <SvgIcon
      v-if="theme.getDarkMode"
      class="text-24px"
      color="rgb(255, 217, 59)"
      icon="line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition"
    />

    <SvgIcon
      v-else
      class="text-24px"
      color="rgb(250,140,53)"
      icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
    />
  </TooltipContainer>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store'

const theme = useThemeStore()
const { setDarkMode } = theme
</script>
