<template>
  <NCard
    title="运行依赖"
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
        v-for="item in dependencies"
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

const { dependencies } = pkgJson
</script>
