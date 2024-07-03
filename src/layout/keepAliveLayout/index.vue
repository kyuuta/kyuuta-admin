<template>
  <div class="flex flex-col-stretch flex-auto">
    <RouterView v-slot="{ Component, route }">
      <transition
        :name="
          theme.animationConfig.visible
            ? theme.animationConfig.mode
            : undefined
        "
        mode="out-in"
        appear
      >
        <keep-alive :include="tabStore.keepAliveFullPaths">
          <component
            :is="formatComponentInstance(Component, route)"
            :key="route.fullPath"
          />
        </keep-alive>
      </transition>
    </RouterView>
  </div>
</template>

<script lang="ts" setup>
import type { RouteLocationNormalizedLoaded } from 'vue-router'

const theme = useThemeStore()

const wrapperMap = new Map<
  string,
  ReturnType<typeof defineComponent>
>()
const tabStore = useTabStore()

function formatComponentInstance(
  component: ReturnType<typeof defineComponent> | null,
  route: RouteLocationNormalizedLoaded
) {
  let wrapper:
    | ReturnType<typeof defineComponent>
    | undefined

  if (component) {
    const wrapperName = route.fullPath
    if (wrapperMap.has(wrapperName)) {
      wrapper = wrapperMap.get(wrapperName)
    } else {
      wrapper = {
        name: wrapperName,
        render() {
          return h(component)
        }
      }
      wrapperMap.set(wrapperName, wrapper)
    }

    return h(wrapper)
  }
}
</script>
