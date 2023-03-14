<template>
  Life is move
  <router-view />

  <button @click="linkTo('/a')">a</button>
  <button @click="linkTo('/b')">b</button>

  {{ userStore.getUserName }}
  <!-- {{ userStore.state.test }} -->
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/modules/user'

const router = useRouter()
const userStore = useUserStore()

const linkTo = (pathName: string): void => {
  router.push(pathName)
} 
</script>

<style lang="scss" scoped>

</style>