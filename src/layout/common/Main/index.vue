<template>
  <RouterView>
    <template #default="{ Component, route }">
      <transition name="fade" mode="out-in" appear>
        <keep-alive :include="[]">
          <component
            :is="Component"
            v-if="app.reload"
            :key="route.fullPath"
          />
        </keep-alive>
      </transition>
    </template>
  </RouterView>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store'

const app = useAppStore()
</script>
