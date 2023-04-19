<template>
  <NLayoutFooter
    class="page-footer bg-white dark:bg-dark"
    :position="props.position"
  >
    KYUUTA
  </NLayoutFooter>
</template>

<script lang="ts" setup>
interface Props {
  height: string
  position?: 'absolute' | 'static'
}
const props = withDefaults(defineProps<Props>(), {
  position: 'absolute'
})
</script>

<style lang="less" scoped>
.page-footer {
  height: v-bind('props.height');
  flex: 0 0 v-bind('props.height');
}
</style>
