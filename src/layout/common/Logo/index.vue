<template>
  <transition name="fade" mode="out-in" :appear="true">
    <icon-local-logo
      v-if="
        ['vertical-mix'].includes(theme.layoutMode) ||
        theme.menuConfig.collapse
      "
      :style="`font-size: ${size}px`"
    />
    <icon-local-logo-full
      v-else
      :style="`font-size: ${fullSize}px`"
    />
  </transition>
</template>

<script lang="ts" setup>
const theme = useThemeStore()

withDefaults(
  defineProps<{
    fullSize?: number
    size?: number
  }>(),
  {
    fullSize: 110,
    size: 36
  }
)
</script>
