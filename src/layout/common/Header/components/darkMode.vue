<template>
  <TooltipContainer tooltip="暗黑模式" @click="setDarkMode(!theme.getDarkMode)">
    <NIcon
      v-if="theme.getDarkMode"
      size="22"
      color="rgb(255, 217, 59)"
      :component="WeatherMoon24Filled"
    />
    <NIcon v-else size="22" color="rgb(250,140,53)" :component="WeatherSunny24Filled" />
  </TooltipContainer>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store'
import { WeatherSunny24Filled, WeatherMoon24Filled } from '@vicons/fluent'

const theme = useThemeStore()
const { setDarkMode } = theme
</script>
