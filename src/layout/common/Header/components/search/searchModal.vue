<template>
  <NModal
    v-model:show="modalVisible"
    preset="card"
    :closable="false"
    :style="modalStyle.body"
    :footer-style="{ padding: '10px 25px' }"
    :segmented="{ footer: true }"
    @after-leave="clear"
  >
    <NInput
      clearable
      placeholder="请输入关键词搜索"
      v-model:value="searchKey"
      @input="handleSearch"
    >
      <template #prefix>
        <NIcon :component="Search20Filled" />
      </template>
    </NInput>

    <div class="page-list">
      <NScrollbar v-if="resultOptions.length">
        <div
          v-for="(menu, index) in resultOptions"
          :key="menu.routeName"
          :class="['item', {
            'item-active': activeIndex === index
          }]"
          @click="handleEnter"
          @mouseenter="activeIndex = index"
        >
          <div class="info">
            <component v-if="menu.icon" :is="menu.icon" size="22" />
            <span>{{ menu.label }} -{{ index }}</span>
          </div>
          <NIcon size="20" color="#fff" :component="ArrowEnterLeft20Regular" />
        </div>
      </NScrollbar>
      <NEmpty v-else description="没找到你想要的页面捏"></NEmpty>
    </div>
    <template #footer>
      <div class="operations">
        <div class="item">
          <img src="~@/assets/images/enter.png" alt="keyboard enter" />
          <span>确定</span>
        </div>
        <div class="item">
          <img src="~@/assets/images/up.png" style="margin-right: 0" alt="keyboard up" />
          <img src="~@/assets/images/down.png" alt="keyboard down" />
          <span>切换</span>
        </div>
        <div class="item">
          <img src="~@/assets/images/esc.png" alt="keyboard esc" />
          <span>关闭</span>
        </div>
      </div>
    </template>
  </NModal>
</template>

<script lang="ts" setup>
import { ref, shallowRef, computed } from "vue"
import { RouteRecordRaw, useRoute } from "vue-router"
import { useRouteStore } from "@/store"
import { useRouterPush, useModalState } from '@/composables'
import { onKeyStroke, useDebounceFn } from "@vueuse/core"
import { Search20Filled, ArrowEnterLeft20Regular } from "@vicons/fluent"


const { name } = useRoute()
const searchKey = ref("")
const routeStore = useRouteStore()
const resultOptions = shallowRef<RouteRecordRaw[]>([])
const activeIndex = ref(null)
const { routerPush } = useRouterPush()

const flattenArray = arr => {
  const result = []

  const processChildren = item => {
    if (item.children && item.children.length > 0) {
      result.push({ ...item, children: [] })
      item.children.forEach(processChildren)
    } else {
      result.push(item)
    }
  }

  arr.forEach(processChildren)

  return result
}
const searchPage = () => {
  resultOptions.value = flattenArray(routeStore.menu).filter(
    (menu) =>
      searchKey.value &&
        menu.label
          .toLocaleLowerCase()
          .includes(searchKey.value.toLocaleLowerCase().trim())
  )

  if(resultOptions.value.length) {
    activeIndex.value = 0
  } else {
    activeIndex.value = null
  }
}
const handleDown = () => {
  const { length } = resultOptions.value
  if(length === 0) return

  if(activeIndex.value + 1 === length) {
    activeIndex.value = 0
  } else {
    activeIndex.value++
  }
}
const handleUp = () => {
  const { length } = resultOptions.value
  if(length === 0) return

  if(activeIndex.value === 0) {
    activeIndex.value = length - 1
  } else {
    activeIndex.value--
  }
}
const handleEnter = () => {
  const { routeName } = resultOptions.value[activeIndex.value]
  routerPush({ name: routeName })
  handleClose()
}
const handleSearch = useDebounceFn(searchPage, 300)

const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{ (e: "update:value", visible: boolean): void }>()
const { modalVisible } = useModalState(props, emit)
const handleClose = () => {
  modalVisible.value = false
}

const clear = () => {
  resultOptions.value = []
  searchKey.value = ''
}

const modalStyle = {
  body: {
    width: "600px",
    position: "fixed",
    top: "100px",
    left: 0,
    right: 0,
  }
}
onKeyStroke('Enter', handleEnter)
onKeyStroke('ArrowUp', handleUp)
onKeyStroke('ArrowDown', handleDown)
</script>

<style lang="less" scoped>
.page-list {
  padding-top: var(--n-padding-top);
  .item {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
    padding: 0 14px;
    color: var(--n-text-color);
    border-radius: var(--n-border-radius);
    background-color: var(--n-color);
    &-active, &:hover {
      transition: background-color .3s;
      background-color: var(--color-test);
    }
    .info {
      display: flex;
      align-items: center;
      ::v-deep(.n-icon) {
        margin-right: 4px;
      }
    }
  }
}
.operations {
  display: flex;
  .item {
    display: flex;
    align-items: center;
    margin-right: 20px;
    img {
      display: inline-block;
      width: 45px;
      height: 45px;
      margin-right: 5px;
    }
  }
}
</style>