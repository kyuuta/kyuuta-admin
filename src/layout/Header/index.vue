<template>
  <NLayout-header
    class="page-header"
    bordered
    :position="props.position"
  >    
    <NButton @click="router.push('/dashboard/console')">console</NButton>
    <NButton @click="router.push('/dashboard/workplace')">workplace</NButton>
  </NLayout-header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const router = useRouter()

const props = defineProps({
  position: String,
  height: String
})
</script>

<style lang="less" scoped>
.page-header {
  z-index: 1;
  height: v-bind('props.height');
}
</style>