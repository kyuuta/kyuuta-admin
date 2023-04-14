<template>
  <div class="color-picker">
    <NColorPicker
      size="large"
      :modes="['hex']"
      :showAlpha="false"
      :value="themeStore.themeColor"
      @update:value="themeStore.setThemeColor"
    />
  </div>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store'
const themeStore = useThemeStore()
</script>

<style lang="less" scoped>
.color-picker {
  padding: 12px 0;
}
</style>
