<template>
  <NConfigProvider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="getThemeOverrides"
  >
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { zhCN, dateZhCN } from "naive-ui"
import { AppProvider } from "@/components/AppProvider"

const getThemeOverrides = computed(() => {
  return {
    common: {
      primaryColor: "#1890ff",
      primaryColorHover: "#40a9ff",
      primaryColorPressed: "#096dd9",
      primaryColorSuppl: "rgba(24, 144, 255, .2)"
    }
  }
})
</script>

<style lang="less">
@import "styles/common.less";
@import "styles/anime.less";
</style>