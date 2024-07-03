<template>
  <NBreadcrumb
    v-if="
      breadcrumbConfig.visible &&
      !route?.meta?.hideBreadcrumb
    "
    class="breadcrumb ml-10px"
  >
    <template
      v-for="breadcrumb in breadcrumbs"
      :key="breadcrumb.key"
    >
      <NBreadcrumbItem>
        <NDropdown
          v-if="breadcrumb?.children?.length"
          placement="bottom-start"
          :options="breadcrumb.children"
          :render-icon="renderDropdownIcon"
          :render-label="renderDropdownLabel"
          @select="(key) => routerPush({ name: key })"
        >
          <span class="flex-y-center">
            <component
              :is="breadcrumb.icon"
              v-if="breadcrumb.icon"
              class="mr-4px"
            />
            <span>{{ t(breadcrumb.label) }}</span>
          </span>
        </NDropdown>

        <template v-else>
          <span class="flex-y-center">
            <component
              :is="breadcrumb.icon"
              v-if="breadcrumb.icon"
              class="mr-4px"
            />
            <span>{{ t(breadcrumb.label) }}</span>
          </span>
        </template>
      </NBreadcrumbItem>
    </template>
  </NBreadcrumb>
</template>

<script lang="ts" setup>
import type { DropdownOption } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { transformRouteToMenu as transformRouteToBreadcrumb } from '@/utils'

const { t } = useI18n()
const route = useRoute()
const { routerPush } = useRouterPush()

const theme = useThemeStore()
const { breadcrumbConfig } = storeToRefs(theme)

const breadcrumbs = computed(() =>
  transformRouteToBreadcrumb(route.matched)
)

const renderDropdownIcon = (option: DropdownOption) => {
  if (!option.icon) return
  return h(option.icon, {
    class:
      route.name === option.routeName ? 'color-primary' : ''
  })
}
const renderDropdownLabel = (option: DropdownOption) => {
  return h(
    'span',
    {
      class:
        route.name === option.routeName
          ? 'color-primary'
          : ''
    },
    {
      default: () => t(option.label as string)
    }
  )
}
</script>

<style lang="less" scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  height: 100%;
  ::v-deep(ul) {
    display: flex;
    align-items: center;
  }
}
.breadcrumb-icon {
  margin-right: 4px;
}
</style>
