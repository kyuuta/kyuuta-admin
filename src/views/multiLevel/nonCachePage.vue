<template>
  <NCard
    size="small"
    class="flex"
    :title="`页面缓存(${pageName})`"
  >
    <span class="color-warning"
      >该页面内容将不会缓存。</span
    >
    <NInput v-model:value="str" class="mt-10px" />
  </NCard>
</template>

<script lang="ts" setup>
const route = useRoute()
const paths = route.path.split('/')
const pageName = paths[paths.length - 1]
const str = shallowRef<string>('')
</script>
