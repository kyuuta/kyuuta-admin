<template>
  <div
    v-if="app.reload"
    class="flex flex-col-stretch flex-auto p-[14px]"
  >
    <KeepAliveLayout />
  </div>
</template>

<script lang="ts" setup>
import KeepAliveLayout from '@/layout/keepAliveLayout/index.vue'

const app = useAppStore()
</script>
