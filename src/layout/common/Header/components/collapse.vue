<template>
  <TooltipContainer
    v-if="menuConfig.showHeaderCollapse"
    @click="theme.setCollapse(!menuConfig.collapse)"
  >
    <SvgIcon
      v-if="menuConfig.collapse || theme.getIsMobile"
      class="text-24px"
      icon="line-md:menu-fold-right"
    />

    <SvgIcon
      v-else
      class="text-24px"
      icon="line-md:menu-fold-left"
    />
  </TooltipContainer>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const theme = useThemeStore()
const { menuConfig } = storeToRefs(theme)
</script>
