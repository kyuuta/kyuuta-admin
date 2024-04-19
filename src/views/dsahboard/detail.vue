<template>
  <div>
    {{ route.params.id }}
    <n-icon
      v-model:value="value"
      type="text"
      placeholder="基本的 Input"
    />
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'DashboardConsoleDetail' })

const route = useRoute()

const value = ref('')

onMounted(() => {
  console.log('remonted')
})
</script>
