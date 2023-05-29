<template>
  <VerticalMixSider
    v-if="theme.layoutMode === 'vertical-mix'"
    :hasDrawer="false"
  />
  <VerticalSider v-else />
</template>

<script lang="ts" setup>
import {
  VerticalSider,
  VerticalMixSider
} from './components'

const theme = useThemeStore()
</script>
