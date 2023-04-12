<template>
  <TooltipContainer tooltip="搜索" @click="searchVisible = true">
    <NIcon
      size="22"
      :component="Search20Filled"
    />
  </TooltipContainer>
  <SearchModal v-model:visible="searchVisible" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SearchModal from './searchModal.vue'
import { Search20Filled } from '@vicons/fluent'

const searchVisible = ref<boolean>(false)
</script>
