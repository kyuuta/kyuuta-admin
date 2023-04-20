<template>
  <Item class="operations">
    <NButton type="warning" @click="resetThemeStore">
      重置主题配置
    </NButton>
  </Item>
</template>

<script lang="ts" setup>
import Item from './item.vue'
import { useThemeStore } from '@/store'

const { resetThemeStore } = useThemeStore()
</script>

<style lang="less" scoped>
.operations {
  ::v-deep(.drawer-item-content) {
    flex: auto;
  }
  ::v-deep(.n-button) {
    width: 100%;
  }
}
</style>
