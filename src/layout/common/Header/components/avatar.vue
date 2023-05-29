<template>
  <NPopover
    trigger="hover"
    style="padding: 0; border-radius: 6px"
  >
    <template #trigger>
      <TooltipContainer>
        <div class="avatar">
          <Logo />
        </div>
      </TooltipContainer>
    </template>
    <DarkModeContainer class="p-24px rd-6px">
      <div class="min-w-280px text-1.125rem">
        <div class="flex flex-y-center">
          <Logo :size="90" />
          <div
            class="flex flex-col ml-20px text-0.825rem color-#2a3547 dark:color-#fff"
          >
            <span class="text-1rem font-700">KYUUTA</span>
            <span class="color-#304362 dark:color-#999"
              >Manager</span
            >
            <span class="color-#304362 dark:color-#999"
              >kyuutaaa3@gmail.com</span
            >
          </div>
        </div>
      </div>
      <NDivider />
      <div
        v-for="(item, index) in avatarOptions"
        :key="index"
        class="flex mb-20px cursor-pointer"
      >
        <div
          class="flex-center w-45px h-45px bg-#ebf0ff dark:bg-#242f55 rd-5px mr-15px"
        >
          <component :is="item.icon" />
        </div>
        <div
          class="flex flex-col lh-none justify-between py-4px"
        >
          <div>{{ item.title }}</div>
          <div class="c-bluegray">{{ item.desc }}</div>
        </div>
      </div>
      <n-button
        class="w-100% mt-20px rd-8px"
        size="large"
        type="primary"
        round
        ghost
        @click="handleLogout"
      >
        {{ t('system.logout') }}
      </n-button>
    </DarkModeContainer>
  </NPopover>
</template>

<script lang="ts" setup>
import { Logo } from '@/layout/common'

const { t } = useI18n()
const userStore = useUserStore()
const { iconRender } = useIconRender()

const avatarOptions = [
  {
    title: 'My Profile',
    desc: 'Account Settings',
    icon: iconRender({
      localIcon: 'user',
      fontSize: 24
    })
  },
  {
    title: 'My Inbox',
    desc: 'Message & Emails',
    icon: iconRender({
      localIcon: 'inbox',
      fontSize: 24
    })
  },
  {
    title: 'My Task',
    desc: 'To-do and Daily Tasks',
    icon: iconRender({
      localIcon: 'tasks',
      fontSize: 24
    })
  }
]

const handleLogout = () => {
  window.$dialog?.info({
    title: t('system.prompt'),
    content: t('system.promptText'),
    positiveText: t('system.confirm'),
    negativeText: t('system.cancel'),
    onPositiveClick: () => {
      userStore.resetUserStore()
    }
  })
}
</script>

<style lang="less" scoped>
.avatar {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
