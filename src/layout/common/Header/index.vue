<template>
  <NLayoutHeader
    class="page-header"
    bordered
    :position="props.position"
  >
    <div class="left-controls">
      <div
        v-if="collpaseType === 'header'"
        class="item"
        @click="setCollapse(!collapse)"
      >
        <NIcon v-if="collapse" size="22">
          <MenuUnfoldOutlined />
        </NIcon>
        <NIcon v-else size="22">
          <MenuFoldOutlined />
        </NIcon>
      </div>
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
              size="22"
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
import { ref } from 'vue'
import { useMenu } from '@/hooks/menu'
import { renderIcon } from '@/utils'
import SettingDrawer from '../SettingDrawer/index.vue'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ArrowLeftOutlined as ExitIcon,
  UserOutlined as UserIcon,
  SettingOutlined as SettingIcon,
} from '@vicons/antd'

const props = defineProps<{
  height: string
  position: 'absolute' | 'static'
}>()

const settingVisible = ref<boolean>(false)
const openSetting = () => settingVisible.value = true

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

const {
  collapse,
  collpaseType,
  setCollapse
} = useMenu()
</script>

<style lang="less" scoped>
.page-header {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: v-bind('props.height');

  .left-controls .item:first-child {
    padding-right: 20px;
  }
  .right-controls, .left-controls {
    display: flex;
    height: 100%;
    .item {
      cursor: pointer;
      padding: 0 10px;
      &:last-child {
        margin-right: 0;
        padding: 0 20px;
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
