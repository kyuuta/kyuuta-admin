<template>
  <NSpace>
    <template
      v-for="action in getActions"
      :key="`${action.label}`"
    >
      <NButton v-bind="action">
        {{ action.label }}
      </NButton>
    </template>
  </NSpace>
</template>

<script lang="ts" setup>
import { isBoolean, isFunction } from 'lodash-es'
import { Table } from '~/src/typings/tableActions'

const { hasPermission } = usePermissions()

const props = defineProps<{
  actions: Table.Actions
}>()

const isIfShow = (action: Table.Action): boolean => {
  const ifShow = action.ifShow
  let isIfShow = true

  if (isBoolean(ifShow)) {
    isIfShow = ifShow
  }
  if (isFunction(ifShow)) {
    isIfShow = ifShow(action)
  }
  return isIfShow
}

const getActions = computed(() => {
  return toRaw(props.actions || [])
    .filter((action: Table.Action) => {
      return (
        (action.auth ? hasPermission(action.auth) : true) &&
        isIfShow(action)
      )
    })
    .map((action: Table.Action) => {
      return {
        size: 'small',
        text: true,
        ...action
      }
    })
})
</script>
