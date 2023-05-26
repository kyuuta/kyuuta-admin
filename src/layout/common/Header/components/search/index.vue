<template>
  <TooltipContainer
    tooltip="搜索"
    @click="searchVisible = true"
  >
    <SvgIcon icon="line-md:search" class="text-21px" />
  </TooltipContainer>
  <SearchModal v-model:visible="searchVisible" />
</template>

<script lang="ts" setup>
import SearchModal from './searchModal.vue'

const searchVisible = ref<boolean>(false)
</script>
