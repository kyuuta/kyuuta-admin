<template>
  <div>
    {{ route.params.id }}
    <n-input
      v-model:value="value"
      type="text"
      placeholder="基本的 Input"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({ name: 'DashboardConsoleDetail' })

const route = useRoute()

const value = ref('')

onMounted(() => {
  console.log('remonted')
})
</script>
