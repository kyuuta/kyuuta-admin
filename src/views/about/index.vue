<template>
  <NSpace vertical :size="16">
    <Info />
    <Dependency />
    <DevDependency />
  </NSpace>
</template>

<script lang="ts" setup>
import Info from './components/info.vue'
import Dependency from './components/dependency.vue'
import DevDependency from './components/devDependency.vue'
</script>

<style lang="scss" scoped></style>
