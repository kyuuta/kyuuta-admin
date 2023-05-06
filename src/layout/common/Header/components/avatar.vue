<template>
  <TooltipContainer>
    <NDropdown trigger="hover" :options="avatarOptions">
      <div class="avatar">
        <Logo />
      </div>
    </NDropdown>
  </TooltipContainer>
</template>

<script lang="ts" setup>
import { useIconRender } from '@/composables'
import { Logo } from '@/layout/common'

const { iconRender } = useIconRender()
const avatarOptions = [
  {
    key: 'userSetting',
    label: '个人设置',
    icon: iconRender({
      icon: 'line-md:account',
      fontSize: 20
    })
  },
  {
    key: 'logout',
    label: '退出登陆',
    icon: iconRender({
      icon: 'line-md:arrow-left-circle',
      fontSize: 20
    })
  }
]
</script>

<style lang="less" scoped>
.avatar {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
