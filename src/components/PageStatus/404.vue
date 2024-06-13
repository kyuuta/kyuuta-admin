<template>
  <NCard
    :bordered="false"
    size="small"
    class="flex-1 rounded-16px shadow-sm"
  >
    <div class="flex flex-col flex-center h-100% pb-10%">
      <img class="w-500px" :src="errorImg" />
      <p class="text-16px">抱歉，您访问的页面不存在</p>
      <NButton
        class="mt-20px"
        type="primary"
        @click="
          routerPush({ name: PageConfig.BASE_HOME_NAME })
        "
        >回到首页</NButton
      >
    </div>
  </NCard>
</template>

<script setup>
import { PageConfig } from '@/config/page'
import errorImg from '@/assets/images/404.png'

const { routerPush } = useRouterPush()
</script>
