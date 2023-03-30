<template>
登录

<NButton @click="submit">登录</NButton>
<NButton @click="test">test</NButton>
</template>

<script lang="ts" setup>
import router from '@/router'
import { useUserStore } from '@/store'

const userStore = useUserStore()

const test = () => {
console.log(router.getRoutes())
}

const submit = () => {
  userStore.login('KYUUTA', 'password1')
}
</script>

<style lang="scss" scoped>
</style>