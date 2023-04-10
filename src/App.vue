<template>
  <NConfigProvider
    :locale="zhCN"
    :theme="naiveTheme"
    :date-locale="dateZhCN"
    :theme-overrides="uiThemeOverrides"
  >
    <AppProvider>
      <RouterView />
    </AppProvider>

    <NGlobalStyle />
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { useThemeStore } from '@/store'
import { zhCN, dateZhCN } from "naive-ui"
import { AppProvider } from "@/components/AppProvider"

const { naiveTheme, uiThemeOverrides } = useThemeStore()
</script>

<style lang="less">
@import "styles/common.less";
@import "styles/anime.less";
</style>