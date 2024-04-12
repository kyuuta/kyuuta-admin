<template>
  <NModal
    v-model:show="modalVisible"
    preset="card"
    :closable="false"
    :style="modalStyle.body"
    :footerStyle="{ padding: '10px 25px' }"
    :segmented="{ footer: true }"
    @after-leave="clear"
  >
    <NInput
      v-model:value="searchKey"
      clearable
      :placeholder="t('system.searchPlaceholder')"
      @input="handleSearch"
    >
      <template #prefix>
        <SvgIcon icon="line-md:search" class="text-21px" />
      </template>
    </NInput>

    <div class="page-list">
      <NScrollbar
        v-if="resultOptions.length"
        class="max-h-300px"
      >
        <div
          v-for="(menu, index) in resultOptions"
          :key="menu.key"
          :class="[
            'item',
            'bg-#e5e7eb',
            'dark:bg-dark',
            {
              'item-active': activeIndex === index
            }
          ]"
          @click="handleEnter"
          @mouseenter="activeIndex = index"
        >
          <div class="info">
            <component
              :is="menu.icon"
              v-if="menu.icon"
              class="mr-6px"
            />
            <span>{{ t(menu.label) }}</span>
          </div>
          <SvgIcon
            icon="fluent:arrow-enter-left-20-filled"
            class="text-20px"
          />
        </div>
      </NScrollbar>
      <NEmpty v-else description="没找到你想要的页面捏" />
    </div>
    <template #footer>
      <div class="operations">
        <div class="item">
          <SvgIcon
            class="text-22px mr-6px"
            icon="streamline:computer-keyboard-return-3-enter-return-keyboard"
          />
          <span>{{ t('system.confirm') }}</span>
        </div>
        <div class="item">
          <SvgIcon
            class="text-20px"
            icon="streamline:interface-arrows-up-arrow-up-keyboard"
          />
          <SvgIcon
            class="text-20px mr-4px"
            icon="streamline:interface-arrows-down-arrow-down-keyboard"
          />
          <span>{{ t('system.toggle') }}</span>
        </div>
        <div class="item">
          <SvgIcon
            class="text-22px mr-6px"
            icon="mdi:keyboard-esc"
          />
          <span>{{ t('system.close') }}</span>
        </div>
      </div>
    </template>
  </NModal>
</template>

<script lang="ts" setup>
const searchKey = ref('')
const routeStore = useRouteStore()
const resultOptions = shallowRef<App.GlobalMenuOption[]>([])
const activeIndex = ref<number>()
const { t } = useI18n()
const { routerPush } = useRouterPush()

const flattenArray = (
  arr: App.GlobalMenuOption[]
): App.GlobalMenuOption[] => {
  const result: App.GlobalMenuOption[] = []
  const processChildren = (item: App.GlobalMenuOption) => {
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
  resultOptions.value = flattenArray(
    routeStore.menu
  ).filter(
    (menu) =>
      searchKey.value &&
      t(menu.label)
        .toLocaleLowerCase()
        .includes(
          searchKey.value.toLocaleLowerCase().trim()
        )
  )

  if (resultOptions.value.length) {
    activeIndex.value = 0
  } else {
    activeIndex.value = undefined
  }
}
const handleDown = () => {
  const { length } = resultOptions.value
  if (length === 0 || activeIndex.value === undefined)
    return

  if (activeIndex.value + 1 === length) {
    activeIndex.value = 0
  } else {
    activeIndex.value++
  }
}
const handleUp = () => {
  const { length } = resultOptions.value
  if (length === 0 || activeIndex.value === undefined)
    return

  if (activeIndex.value === 0) {
    activeIndex.value = length - 1
  } else {
    activeIndex.value--
  }
}
const handleEnter = () => {
  if (activeIndex.value === undefined) return
  const { routeName } =
    resultOptions.value[activeIndex.value]
  routerPush({ name: routeName })
  handleClose()
}
const handleSearch = useDebounceFn(searchPage, 300)

const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()
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
    width: '600px',
    position: 'fixed',
    top: '100px',
    left: 0,
    right: 0
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
    border-radius: var(--n-border-radius);
    &-active {
      color: #fff;
      transition: background-color 0.3s;
      background-color: rgb(var(--primary-color));
    }
    &:last-child {
      margin-bottom: 0;
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
