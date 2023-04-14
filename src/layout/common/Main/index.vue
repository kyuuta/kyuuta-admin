<template>
  <RouterView>
    <template #default="{ Component, route }">
      <transition name="fade" mode="out-in" appear>
        <keep-alive v-if="[]" :include="[]">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>

        <component v-else :is="Component" :key="route.fullPath" />
      </transition>
    </template>
  </RouterView>
</template>
