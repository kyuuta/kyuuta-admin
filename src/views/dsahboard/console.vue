<template>
  <div class="test-wrapper" style="padding: 20px">
    <NButton type="primary">Primary</NButton>
    <NButton type="info">Info</NButton>
    <NButton type="success">Success</NButton>
    <NButton type="warning">Warning</NButton>
    <NButton type="error">Error</NButton>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.test-wrapper {
  flex: auto;
  .n-button {
    margin-right: 10px;
  }
}
</style>