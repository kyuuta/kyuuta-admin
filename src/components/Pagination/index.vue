<template>
  <div class="flex justify-end">
    <n-pagination
      showSizePicker
      :page="modelValue.page"
      :page-size="modelValue.pageSize"
      :prefix="() => `共 ${modelValue.total} 条`"
      :page-sizes="props.pageSizes"
      :item-count="modelValue.total"
      @update:page="handleChangePage"
      @update:page-size="handleChangePageSize"
    />
  </div>
</template>

<script lang="ts" setup>
type PaginationType = {
  page: number
  pageSize: number
  total: number
}

const emit = defineEmits<{
  (e: 'load'): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue: PaginationType
    pageSizes?: number[]
  }>(),
  {
    pageSizes: () => [10, 30, 50, 100, 200]
  }
)

const handleChangePage = (page: number) => {
  const { page: propsPage } = toRefs(props.modelValue)
  propsPage.value = page

  emit('load')
}

const handleChangePageSize = (pageSize: number) => {
  const { page, pageSize: propsPageSize } = toRefs(
    props.modelValue
  )
  page.value = 1
  propsPageSize.value = pageSize

  emit('load')
}
</script>
