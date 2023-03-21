<template>
  <NLayoutHeader
    class="page-header"
    bordered
    :position="props.position"
  >
    <div>
      <NButton @click="router.push('/dashboard/console')">console</NButton>
      <NButton @click="router.push('/dashboard/workplace')">workplace</NButton>
    </div>

    <div class="right-controls">
      <div class="item">
        <NDropdown trigger="hover" :options="avatarOptions">
          <div class="avatar">
            <NAvatar round>KYUUTA</Navatar>
          </div>
        </NDropdown>
      </div>

      <div class="item" @click="openSetting">
        <NTooltip placement="bottom-end">
          <template #trigger>
            <NIcon
              size="24"
              depth="1"
              :component="SettingIcon"
            />
          </template>
          <span>项目配置</span>
        </NTooltip>
      </div>
    </div>

  </NLayoutHeader>

  <SettingDrawer v-model:visible="settingVisible" />
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { NIcon } from 'naive-ui'
import type { Component } from 'vue'
import { useRouter } from 'vue-router'
import {
  ArrowLeftOutlined as ExitIcon,
  UserOutlined as UserIcon,
  SettingOutlined as SettingIcon
} from '@vicons/antd'
import SettingDrawer from './settingDrawer.vue'

const props = defineProps<{
  height: string;
  position: 'absolute' | 'static';
}>()

const settingVisible = ref<boolean>(false)
const openSetting = () => settingVisible.value = true

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}
const avatarOptions = [
  {
    key: 'userSetting',
    label: '个人设置',
    icon: renderIcon(UserIcon)
  },
  {
    key: 'logout',
    label: '退出登陆',
    icon: renderIcon(ExitIcon)
  }
]

const router = useRouter()
</script>

<style lang="less" scoped>
.page-header {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: v-bind('props.height');
  padding: 0 20px;

  .right-controls {
    display: flex;
    height: 100%;
    .item {
      cursor: pointer;
      padding: 0 5px;
      margin-right: 8px;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        transition: background-color .3s;
        background-color: rgba(0, 0, 0, .03);
      }
      .n-icon {
        display: flex;
        align-items: center;
        height: 100%;
      }
    }

    .avatar {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
}
</style>