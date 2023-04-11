<template>
  <NLayoutHeader
    class="page-header"
    bordered
    :position="props.position"
  >
    <div
      class="left-controls"
      :style="{
        paddingLeft: menuConfig.collapseType !== 'header'
          ? '20px'
          : null
      }"
    >
      <div
        v-if="menuConfig.collapseType === 'header'"
        class="item"
        @click="setCollapse(!menuConfig.collapse)"
      >
        <NIcon
          v-if="menuConfig.collapse"
          size="22"
          :component="MenuUnfoldOutlined"
        />
        <NIcon
          v-else
          size="22"
          :component="MenuFoldOutlined"
        />
      </div>

      <div class="breadcrumb" v-if="breadcrumbConfig.visible">
        <Breadcrumb />
      </div>
    </div>

    <div class="right-controls">
      <div class="item" @click="setDarkMode(!getDarkMode)">
        <NIcon
          v-if="getDarkMode"
          size="22"
          color="rgb(255, 217, 59)"
          :component="WeatherMoon24Filled"
        />
        <NIcon
          v-else
          size="22"
          color="rgb(250,140,53)"
          :component="WeatherSunny24Filled"
        />
      </div>

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
              color="rgb(171,175,178)"
              :component="Settings20Filled"
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
import { useThemeStore } from '@/store'
import { renderIcon } from '@/utils'
import SettingDrawer from '../SettingDrawer/index.vue'
import Breadcrumb from './components/breadcrumb.vue'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ArrowLeftOutlined as ExitIcon,
  UserOutlined as UserIcon
} from '@vicons/antd'
import {
  Settings20Filled,
  WeatherSunny24Filled,
  WeatherMoon24Filled
} from '@vicons/fluent'

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
  getDarkMode,
  menuConfig,
  breadcrumbConfig,
  setCollapse,
  setDarkMode
} = useThemeStore()
</script>

<style lang="less" scoped>
.page-header {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: v-bind('props.height');

  // .left-controls .item:first-child {
    // padding-left: 15px;
  // }
  .right-controls, .left-controls {
    display: flex;
    height: 100%;
    .item {
      display: flex;
      justify-content: center;
      cursor: pointer;
      padding: 0 10px;
      min-width: 30px;
      &:last-child {
        margin-right: 0;
        // padding-right: 15px;
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

    .breadcrumb {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .avatar {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
}
</style>
