<template>
  <NCard
    title="开发依赖"
    :bordered="false"
    size="small"
    class="rounded-16px shadow-sm"
  >
    <NDescriptions
      label-placement="left"
      bordered
      size="small"
    >
      <NDescriptionsItem
        v-for="item in devDependencies"
        :key="item.name"
        :label="item.name"
      >
        {{ item.version }}
      </NDescriptionsItem>
    </NDescriptions>
  </NCard>
</template>

<script setup lang="ts">
import { pkgJson } from './model'

const { devDependencies } = pkgJson
</script>
