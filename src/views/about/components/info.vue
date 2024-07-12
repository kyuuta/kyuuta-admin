<template>
  <NCard
    title="项目信息"
    :bordered="false"
    size="small"
    class="rounded-16px shadow-sm"
  >
    <NDescriptions
      label-placement="left"
      bordered
      size="small"
      :column="2"
    >
      <NDescriptionsItem label="版本">
        <NTag type="primary">{{ version }}</NTag>
      </NDescriptionsItem>
      <NDescriptionsItem label="最后构建时间">
        <NTag type="primary">{{ lastBuildTime }}</NTag>
      </NDescriptionsItem>
    </NDescriptions>
  </NCard>
</template>

<script lang="ts" setup>
import { pkgJson } from './model'

const { version } = pkgJson
// @ts-ignore
const lastBuildTime = PROJECT_BUILD_TIME
</script>

<style lang="scss" scoped></style>
