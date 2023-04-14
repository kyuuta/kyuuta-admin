<template>
  <NBreadcrumb class="breadcrumb" v-if="breadcrumbConfig.visible">
    <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.key">
      <NBreadcrumbItem>
        <NDropdown
          v-if="breadcrumb?.children?.length"
          placement="bottom-start"
          :options="breadcrumb.children"
          @select="(key) => routerPush({ name: key })"
        >
          <span>
            <component
              v-if="breadcrumbConfig.showIcon"
              class="breadcrumb-icon"
              :is="breadcrumb.icon"
            />
            <span>{{ breadcrumb.label }}</span>
          </span>
        </NDropdown>

        <template v-else>
          <span>
            <component
              v-if="breadcrumbConfig.showIcon"
              class="breadcrumb-icon"
              :is="breadcrumb.icon"
            />
            <span>{{ breadcrumb.label }}</span>
          </span>
        </template>
      </NBreadcrumbItem>
    </template>
  </NBreadcrumb>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRouterPush } from '@/composables'
import { useThemeStore } from '@/store'
import { transformRouteToMenu as transformRouteToBreadcrumb } from '@/utils'

const route = useRoute()
const { routerPush } = useRouterPush()

const { breadcrumbConfig } = useThemeStore()

const breadcrumbs = computed(() => transformRouteToBreadcrumb(route.matched))
</script>

<style lang="less" scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  height: 100%;
}
.breadcrumb-icon {
  margin-right: 4px;
}
</style>
