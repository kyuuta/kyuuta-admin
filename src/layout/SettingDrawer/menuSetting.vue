<template>
  <Item title="折叠类型">
    <NSelect
      class="field"
      :value="collpaseType"
      :options="options"
      @update:value="setCollpaseType"
    />
  </Item>
  <Item title="菜单宽度">
    <NInputNumber
      class="field"
      style="text-align: center"
      :step="10"
      :max="300"
      :value="collapsedWidth"
      button-placement="both"
      @update:value="setCollpasedWidth"
    />
  </Item>
</template>

<script lang="ts" setup>
import Item from './item.vue'
import { useMenu } from '@/hooks/menu'

const options = [{
  label: '不展示',
  value: 'false'
}, {
  label: 'Bar',
  value: 'bar'
}, {
  label: 'ArrowCircle',
  value: 'arrow-circle'
}, {
  label: 'Header',
  value: 'header'
}]

const {
  collpaseType,
  collapsedWidth,
  setCollpaseType,
  setCollpasedWidth
} = useMenu()
</script>

<style lang="less" scoped>
.field {
  width: 120px;
}
</style>