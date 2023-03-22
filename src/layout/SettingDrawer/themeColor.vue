<template>
  <div class="color-picker">
    <NColorPicker
      size="large"
      :modes="['hex']"
      :show-alpha="false"
      @update:value="handleChangeColor"
    />
  </div>
</template>

<script lang="ts" setup>
const handleChangeColor = val => {
  console.log(val)
}
</script>

<style lang="less" scoped>
.color-picker {
  padding: 12px 0;
}
</style>