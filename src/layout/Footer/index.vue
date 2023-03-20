<template>
  <NLayout-footer
    class="page-footer"
    :position="props.position"
    bordered
  >
    城府路
  </NLayout-footer>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  height: String,
  position: {
    type: String,
    default: 'absolute'
  }
})
</script>

<style lang="less" scoped>
.page-footer {
  height: v-bind('props.height');
}
</style>