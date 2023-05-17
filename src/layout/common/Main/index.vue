<template>
  <div
    class="flex flex-col-stretch flex-auto transition duration-300 ease-in-out"
  >
    <RouterView v-slot="{ Component, route }">
      <transition
        :name="
          theme.animation.visible
            ? theme.animation.mode
            : ''
        "
        mode="out-in"
        :appear="true"
      >
        <keep-alive :include="routeStore.cacheRoutes">
          <component
            :is="Component"
            v-if="app.reload"
            :key="route.fullPath"
            class="rounded-16px"
          />
        </keep-alive>
      </transition>
    </RouterView>
  </div>
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
