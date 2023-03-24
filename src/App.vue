<template>
  <NConfigProvider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="themeStore.uiThemeOverrides"
  >
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { useThemeStore } from '@/store'
import { zhCN, dateZhCN } from "naive-ui"
import { AppProvider } from "@/components/AppProvider"

const themeStore = useThemeStore()
</script>

<style lang="less">
@import "styles/common.less";
@import "styles/anime.less";
</style>