<template>
  <TooltipContainer
    :tooltip="t('system.darkmode')"
    @click="setDarkMode(!theme.getDarkMode)"
  >
    <SvgIcon
      v-if="theme.getDarkMode"
      :style="{ fontSize: `${iconSize}px` }"
      color="rgb(255, 217, 59)"
      icon="line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition"
    />

    <SvgIcon
      v-else
      :style="{ fontSize: `${iconSize}px` }"
      color="rgb(250,140,53)"
      icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
    />
  </TooltipContainer>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    iconSize?: number
  }>(),
  {
    iconSize: 24
  }
)

const { t } = useI18n()
const theme = useThemeStore()
const { setDarkMode } = theme
</script>
