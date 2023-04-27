<template>
  <TooltipContainer
    v-if="menuConfig.showHeaderCollapse"
    @click="theme.setCollapse(!menuConfig.collapse)"
  >
    <NIcon
      v-if="menuConfig.collapse"
      size="22"
      :component="MenuUnfoldOutlined"
    />
    <NIcon v-else size="22" :component="MenuFoldOutlined" />
  </TooltipContainer>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/store'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@vicons/antd'

const theme = useThemeStore()
const { menuConfig } = storeToRefs(theme)
</script>
