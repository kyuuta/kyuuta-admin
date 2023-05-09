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

    <NGlobalStyle />
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { useThemeStore, subscribeStore } from '@/store'
import { zhCN, dateZhCN } from 'naive-ui'
import { useGlobalEvents } from '@/composables'
import { AppProvider } from '@/components/AppProvider'

const theme = useThemeStore()

useGlobalEvents()
subscribeStore()
</script>
