<template>
  <NLayoutFooter
    class="flex-center page-footer bg-white dark:bg-dark text-center text-#999"
    :position="props.position"
  >
    <NIcon
      size="26"
      :component="GithubFilled"
      class="mr-10px cursor-pointer"
      @click="openGithub"
    />
    <span> Copyright ©2023 Kyuuta Admin </span>
  </NLayoutFooter>
</template>

<script lang="ts" setup>
import { GithubFilled } from '@vicons/antd'

interface Props {
  height: string
  position?: 'absolute' | 'static'
}
const props = withDefaults(defineProps<Props>(), {
  position: 'absolute'
})

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
