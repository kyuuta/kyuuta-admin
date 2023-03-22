<template>
  <div class="drawer-item">
    <div class="drawer-item-title">{{ title }}</div>
    <div class="drawer-item-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
}

defineProps<Props>()
</script>

<style lang="less" scoped>
.drawer-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  line-height: 1;
  padding: 12px 0;
  &-title {
    flex: 1;
  }
}
</style>
