<template>
  <RouterView v-slot="{ Component, route }">
    <transition
      :name="
        theme.animation.visible ? theme.animation.mode : ''
      "
      mode="out-in"
      appear
    >
      <keep-alive :include="routeStore.cacheRoutes">
        <component
          :is="Component"
          v-if="app.reload"
          :key="route.fullPath"
          class="flex-auto bg-#f6f9f8 dark:bg-#101014"
        />
      </keep-alive>
    </transition>
  </RouterView>
</template>

<script lang="ts" setup>
import {
  useAppStore,
  useThemeStore,
  useRouteStore
} from '@/store'

const app = useAppStore()
const theme = useThemeStore()
const routeStore = useRouteStore()
</script>
