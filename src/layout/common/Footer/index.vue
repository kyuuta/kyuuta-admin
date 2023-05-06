<template>
  <NLayoutFooter
    class="flex-center page-footer bg-white dark:bg-dark text-center text-#999 select-none"
    :position="props.position"
  >
    <SvgIcon
      class="mr-10px cursor-pointer text-26px"
      icon="line-md:github-loop"
      @click="openGithub"
    />

    <span class="select-none">
      Copyright ©2023 Kyuuta Admin
    </span>
  </NLayoutFooter>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    height: string
    position?: 'absolute' | 'static'
  }>(),
  {
    position: 'absolute'
  }
)

const openGithub = () => {
  window.open('https://github.com/kyuuta', '_blank')
}
</script>

<style lang="less" scoped>
.page-footer {
  height: v-bind('props.height');
  flex: 0 0 v-bind('props.height');
  line-height: v-bind('props.height');
}
</style>
