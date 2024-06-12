<template>
  <NCard class="rounded-6px shadow-sm" :bordered="false">
    <NSpin :show="dictLoading">
      <NForm label-placement="left" :showFeedback="false">
        <NFormItem class="mb-6px" label="商品名称">
          <n-input-group>
            <n-input
              v-model:value="params.name"
              :style="{ width: '20%' }"
              placeholder="请输入商品名称"
              clearable
              @keyup.enter="loadData"
            />
            <n-button type="primary" @click="loadData">
              搜索
            </n-button>
          </n-input-group>
        </NFormItem>
        <NFormItem class="mb-6px" label="商品类目:">
          <NSpace>
            <NTag
              v-for="category in dict['category']"
              :key="category.value"
              checkable
              :checked="params.category === category.value"
              @click="changeVal('category', category.value)"
              >{{ category.name }}</NTag
            >
          </NSpace>
        </NFormItem>
        <NFormItem label="商品品牌:">
          <NSpace>
            <NTag
              v-for="brand in dict['brand']"
              :key="brand.value"
              checkable
              :checked="params.brand === brand.value"
              @click="changeVal('brand', brand.value)"
              >{{ brand.name }}</NTag
            >
          </NSpace>
        </NFormItem>
      </NForm>
    </NSpin>

    <NDivider />

    <NSpin class="min-h-100px" :show="loading">
      <NGrid x-gap="24" :cols="5">
        <NGi v-for="prod in list" :key="prod.id">
          <NCard
            class="cursor-pointer"
            :title="prod.name"
            @click="goDetail(prod.id)"
          >
            <template #cover>
              <NImage
                previewDisabled
                lazy
                :src="AvatarDark"
              />
            </template>
            <p class="price">
              <span>￥</span>
              <span class="count">{{
                conversionPrice(prod.minSellPrice)
              }}</span>
              <span>起</span>
            </p>
          </NCard>
        </NGi>
      </NGrid>
    </NSpin>
  </NCard>
</template>

<script lang="ts" setup>
import { getProductList } from '@/service/api/table'
import { conversionPrice } from '@/utils'
import AvatarDark from '@/assets/images/avatar_dark.jpg'

defineOptions({ name: 'TableProductIndex' })

const aaa = ref(0)
const { routerPush } = useRouterPush()
const { dict, dictLoading, formatDict } = useDict([
  'brand',
  'category'
])

const loading = shallowRef<boolean>(false)
const params = ref({
  brand: null,
  category: null,
  name: null
})
const list = shallowRef([])

onMounted(() => loadData())

const goDetail = (index) => {
  routerPush({
    path: `/table/product/detail/${index}`
  })
}

const loadData = () => {
  loading.value = true
  getProductList(params.value)
    .then((res) => {
      list.value = res.data
    })
    .finally(() => {
      loading.value = false
    })
}

const changeVal = (target, checkedVal) => {
  params.value[target] =
    params.value[target] === checkedVal
      ? undefined
      : checkedVal
  loadData()
}
</script>

<style lang="less" scoped>
.price {
  font-size: 16px;
  .count {
    color: #e88080;
    font-size: 24px;
    margin-right: 4px;
  }
}
</style>
