<template>
  <TooltipContainer tooltip="刷新" @click="reloadPage">
    <NIcon size="22" :component="ReloadOutlined" />
  </TooltipContainer>
</template>

<script lang="ts" setup>
import { ReloadOutlined } from '@vicons/antd'
import { useAppStore } from '@/store'

const { reloadPage } = useAppStore()
</script>
