<template>
  <NBreadcrumb>
    <template v-for="breacrumb in breacrumbs" :key="breacrumb.name">
      
      <NBreadcrumbItem>
        <span>{{ breacrumb?.meta?.title || breacrumb.name }}</span>
      </NBreadcrumbItem>
    </template>
  </NBreadcrumb>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breacrumbs = computed(() => route.matched)

console.log(breacrumbs)

</script>
