<template>
  <NAvatar
    round
    :size="36"
    :src="theme.darkMode ? AvatarDark : AvatarLight"
  />
</template>

<script lang="ts" setup>
import AvatarDark from '@/assets/images/avatar_dark.jpg'
import AvatarLight from '@/assets/images/avatar_light.jpg'
import { useThemeStore } from '@/store'

const theme = useThemeStore()
</script>

<style lang="scss" scoped></style>
