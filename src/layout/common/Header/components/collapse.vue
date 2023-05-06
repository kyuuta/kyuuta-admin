<template>
  <TooltipContainer
    v-if="menuConfig.showHeaderCollapse"
    @click="theme.setCollapse(!menuConfig.collapse)"
  >
    <SvgIcon
      v-if="menuConfig.collapse"
      class="text-24px"
      icon="line-md:menu-fold-left"
    />

    <SvgIcon
      v-else
      class="text-24px"
      icon="line-md:menu-fold-right"
    />
  </TooltipContainer>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/store'

const theme = useThemeStore()
const { menuConfig } = storeToRefs(theme)
</script>
