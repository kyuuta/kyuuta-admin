<template>
  <NAvatar
    round
    :size="size"
    :src="theme.darkMode ? AvatarDark : AvatarLight"
  />
</template>

<script lang="ts" setup>
import AvatarDark from '@/assets/images/avatar_dark.jpg'
import AvatarLight from '@/assets/images/avatar_light.jpg'

const theme = useThemeStore()
withDefaults(
  defineProps<{
    size?: number
  }>(),
  {
    size: 36
  }
)
</script>
