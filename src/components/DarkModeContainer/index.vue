<template>
  <div
    class="dark:bg-dark dark:text-white dark:text-opacity-82 transition-all"
    :class="
      inverted
        ? 'bg-#001428 text-white'
        : 'bg-white text-#333639'
    "
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'DarkModeContainer' })

withDefaults(
  defineProps<{
    inverted?: boolean
  }>(),
  {
    inverted: false
  }
)
</script>
