<template>
  <NBreadcrumb
    v-if="
      breadcrumbConfig.visible &&
      !route?.meta?.hideBreadcrumb
    "
    class="breadcrumb ml-10px"
  >
    <NBreadcrumbItem
      v-for="breadcrumb in breadcrumbs"
      :key="breadcrumb.name"
    >
      <NDropdown
        v-if="breadcrumb?.children?.length"
        key-field="name"
        placement="bottom-start"
        :options="(breadcrumb.children as any)"
        :renderIcon="
            (option: any) => renderIcon(option as RouteRecordRaw, true)
          "
        :renderLabel="
            (option: any) => renderLabel(option  as RouteRecordRaw, true)
          "
        @select="(name: string) => routerPush({ name: name })"
      >
        <span class="flex-y-center">
          <component
            :is="renderIcon(breadcrumb)"
            class="mr-4px"
          />
          <component :is="renderLabel(breadcrumb)" />
        </span>
      </NDropdown>

      <template v-else>
        <span class="flex-y-center">
          <component
            :is="renderIcon(breadcrumb)"
            class="mr-4px"
          />
          <component :is="renderLabel(breadcrumb)" />
        </span>
      </template>
    </NBreadcrumbItem>
  </NBreadcrumb>
</template>

<script lang="ts" setup>
import { some } from 'lodash-es'
import { storeToRefs } from 'pinia'
import { transformRouteToMenu } from '@/utils'
import { RouteRecordRaw } from 'vue-router'
import { VNodeChild } from 'vue'
import { RouteRecordNameGeneric } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const { routerPush } = useRouterPush()

const theme = useThemeStore()
const { breadcrumbConfig } = storeToRefs(theme)

const breadcrumbs = computed(() =>
  transformRouteToMenu(route.matched)
)

const hasName = (
  data: RouteRecordRaw,
  targetName: RouteRecordNameGeneric
): boolean => {
  return (
    data.name === targetName ||
    some(data.children, (child) =>
      hasName(child, targetName)
    )
  )
}

const renderLabel = (
  option: RouteRecordRaw,
  deepFind = false
): VNodeChild => {
  const flag = deepFind
    ? hasName(option, route.name)
    : route.name === option.name

  return h(
    'span',
    {
      class:
        flag || route.meta?.activeMenu === option.name
          ? 'color-primary'
          : ''
    },
    {
      default: () => t(option.meta?.title || '')
    }
  )
}
const renderIcon = (
  option: RouteRecordRaw,
  deepFind = false
) => {
  const { iconRender } = useIconRender()
  const { icon, localIcon } = option?.meta || {}
  const flag = deepFind
    ? hasName(option, route.name)
    : route.name === option.name

  const className =
    flag || route.meta?.activeMenu === option.name
      ? 'color-primary'
      : ''

  return iconRender({
    icon,
    localIcon,
    className
  })()
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
