<template>
  <RouterView v-slot="{ Component, route }">
    <transition
      :name="
        theme.animation.visible ? theme.animation.mode : ''
      "
      mode="out-in"
      appear
    >
      <keep-alive :include="[]">
        <component
          :is="Component"
          v-if="app.reload"
          :key="route.fullPath"
        />
      </keep-alive>
    </transition>
  </RouterView>
</template>

<script lang="ts" setup>
import { useAppStore, useThemeStore } from '@/store'

const app = useAppStore()
const theme = useThemeStore()
</script>
