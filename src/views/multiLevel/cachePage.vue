<template>
  <NCard
    size="small"
    class="flex"
    :title="`页面缓存(${pageName})`"
  >
    <span class="color-warning"
      >该页面内容会被缓存，重新进入后页面将缓存数据，不会触发onMounted()。但若关闭了顶部tab，下次重新打开后将重载。</span
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
