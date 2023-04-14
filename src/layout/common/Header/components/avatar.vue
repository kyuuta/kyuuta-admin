<template>
  <TooltipContainer>
    <NDropdown trigger="hover" :options="avatarOptions">
      <div class="avatar">
        <NAvatar round>KYUUTA</NAvatar>
      </div>
    </NDropdown>
  </TooltipContainer>
</template>

<script lang="ts" setup>
import { renderIcon } from '@/utils'
import { ArrowLeftOutlined, UserOutlined } from '@vicons/antd'

const avatarOptions = [
  {
    key: 'userSetting',
    label: '个人设置',
    icon: renderIcon(UserOutlined)
  },
  {
    key: 'logout',
    label: '退出登陆',
    icon: renderIcon(ArrowLeftOutlined)
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
