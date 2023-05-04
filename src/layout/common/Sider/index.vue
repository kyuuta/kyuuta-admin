<template>
  <VerticalMixSider
    v-if="theme.layoutMode === 'vertical-mix'"
    :hasDrawer="false"
  />
  <VerticalSider v-else />
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store'
import {
  VerticalSider,
  VerticalMixSider
} from './components'

const theme = useThemeStore()
</script>
