<template>
  <NConfigProvider
    class="min-h-100vh flex"
    :locale="zhCN"
    :theme="theme.naiveTheme"
    :dateLocale="dateZhCN"
    :themeOverrides="theme.uiThemeOverrides"
  >
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { zhCN, dateZhCN } from 'naive-ui'
import { AppProvider } from '@/components/AppProvider'

const theme = useThemeStore()

useGlobalEvents()
subscribeStore()
</script>
