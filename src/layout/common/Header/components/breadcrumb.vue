<template>
  <NBreadcrumb
    v-if="breadcrumbConfig.visible"
    class="breadcrumb"
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
          @select="(key) => routerPush({ name: key })"
        >
          <span class="flex-y-center">
            <component
              :is="breadcrumb.icon"
              v-if="breadcrumb.icon"
              class="mr-4px"
            />
            <span>{{ breadcrumb.label }}</span>
          </span>
        </NDropdown>

        <template v-else>
          <span class="flex-y-center">
            <component
              :is="breadcrumb.icon"
              v-if="breadcrumb.icon"
              class="mr-4px"
            />
            <span>{{ breadcrumb.label }}</span>
          </span>
        </template>
      </NBreadcrumbItem>
    </template>
  </NBreadcrumb>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { transformRouteToMenu as transformRouteToBreadcrumb } from '@/utils'

const route = useRoute()
const { routerPush } = useRouterPush()

const theme = useThemeStore()
const { breadcrumbConfig } = storeToRefs(theme)

const breadcrumbs = computed(() =>
  transformRouteToBreadcrumb(route.matched)
)
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
