<template>
  <NCard size="small" class="wrapper">
    <div class="info">
      <div class="preview">
        <div
          class="img-wrapper border-1px border-#efeff5 dark:border-#ffffff17"
        >
          <n-tag
            class="tag"
            :bordered="false"
            type="warning"
          >
            促销速买
          </n-tag>
          <n-image
            src="https://elife-dev.oss-cn-shanghai.aliyuncs.com/20231030/%E4%BA%AC%E4%B8%9C&33612&20231030133516..jpg"
          />
        </div>
        <div class="flex-center mt-10px">
          <div class="flex-center mr-30px">
            <SvgIcon
              class="text-24px"
              icon="fluent-mdl2:product"
            />
            <p class="text-12px mt-4px">选择免费送货服务</p>
          </div>
          <div class="flex-center">
            <SvgIcon
              class="text-24px"
              icon="tabler:truck-return"
            />
            <p class="text-12px mt-4px"
              >简单免费的退货服务</p
            >
          </div>
        </div>
      </div>
      <div class="detail">
        <div class="name">
          <n-skeleton v-if="loading" width="33%" />
          <template v-else>
            <span v-if="selectedSKU">{{
              selectedSKU.name
            }}</span>
            <span v-else>{{ prodDetail.name }}</span>
          </template>
        </div>

        <template v-if="loading">
          <n-skeleton class="item" />
          <n-skeleton class="item" />
          <n-skeleton class="item" />
          <n-skeleton class="item" />
          <n-skeleton class="item" />
        </template>
        <template v-else>
          <div
            class="item price-wrapper bg-#f5f5f5 dark:bg-#2f2f31"
          >
            <div class="label">价格</div>
            <div class="flex value">
              <n-gradient-text
                v-if="productPrice.selectedPrice"
                :size="24"
                type="danger"
              >
                <span>￥</span>
                {{
                  conversionPrice(
                    productPrice.selectedPrice
                  )
                }}
              </n-gradient-text>

              <n-gradient-text
                v-else
                :size="24"
                type="danger"
              >
                <span>￥</span>
                <span>{{
                  conversionPrice(productPrice.minPrice)
                }}</span>
                <span>~</span>
                <span>{{
                  conversionPrice(productPrice.maxPrice)
                }}</span>
              </n-gradient-text>
            </div>
          </div>

          <div
            v-for="propertie in skuProperties"
            :key="propertie.id"
            class="item"
          >
            <div class="label">{{ propertie.name }}</div>

            <div class="flex value mt--10px">
              <NButton
                v-for="spec in propertie.typeList"
                :key="spec.id"
                class="mr-10px mt-10px min-w-130px"
                :type="
                  selected.includes(skuInPrime[spec.id])
                    ? 'primary'
                    : 'default'
                "
                :disabled="
                  !disabled.includes(skuInPrime[spec.id])
                "
                @click="selectSpec(skuInPrime[spec.id])"
              >
                {{ spec.name }}
              </NButton>
            </div>
          </div>

          <div v-if="selectedSKU" class="item">
            <div class="label">库存</div>
            <div class="value">
              {{ selectedSKU.stockNum }}
            </div>
          </div>

          <div class="item">
            <div class="label">数量</div>
            <div class="value">
              <n-input-number
                v-model:value="purchaseNum"
                :max="
                  selectedSKU ? selectedSKU.stockNum : 10000
                "
                :min="1"
                clearable
              />
            </div>
          </div>
        </template>

        <div class="item operation pl-85px">
          <button
            ref="purchaseButton"
            class="ky-button ky-button-shadow bg-primary"
            @mousemove="handlerMouseMove"
          >
            立即购买
          </button>
        </div>
      </div>
    </div>

    <NDivider />

    <div
      class="desc-list text-12px lh-tight color-#6e6e73 px-20px"
    >
      <p>一些也许无关紧要的描述</p>
      <p>一些也许无关紧要的描述</p>
      <ol>
        <li>一些有关紧要的描述</li>
        <li>一些有关紧要的描述</li>
        <li>一些有关紧要的描述</li>
        <li>一些有关紧要的描述</li>
        <li>一些有关紧要的描述</li>
        <li>一些有关紧要的描述</li>
      </ol>
      <p>一些也许无关紧要的描述</p>
      <p>一些也许无关紧要的描述</p>
      <p>一些也许无关紧要的描述</p>
      <p>一些也许无关紧要的描述</p>
      <p>一些也许无关紧要的描述</p>
      <p>一些也许无关紧要的描述</p>
    </div>
  </NCard>
</template>

<script lang="ts" setup>
import { conversionPrice } from '@/utils'
import { getPrime } from './helpers'
import { cloneDeep } from 'lodash-es'
import {
  getSkuProperties,
  getProductDetail
} from '@/service/api/table'

type ProdDetail = {
  id?: number
  brand?: number
  category?: number
  name: string
  skuList: Sku[]
}
type Sku = {
  name: string
  activityNo: string
  typeId: number
  faceValueId: number
  billId: number
  sellPrice: number
  stockNum: number
  skuPrime?: number[]
  skuPrimeTotal?: number
}
type SkuPropertie = {
  id: number
  name: string
  typeList: {
    id: number
    name: string
  }[]
}
type SkuInPrime = {
  [key: number]: number
}
type primeCoordinate = {
  [key: string]: number[]
}

const route = useRoute()
const tabStore = useTabStore()
const loading = ref<boolean>(false)

const skus = ref<Sku[]>([])
const skuInPrime = ref<SkuInPrime>({})
const primeMatrix = ref<number[][]>([])
const skuPrimeList = ref<number[]>([])
const stateMatrix = ref<number[][]>([])
const skuProperties = ref<SkuPropertie[]>([])
const primeCoordinate = ref<primeCoordinate>({})

const selected = ref<number[]>([])
const disabled = ref<number[]>([])
const purchaseNum = ref<number>(1)

const prodDetail = ref<ProdDetail>({
  name: '',
  skuList: []
})

/** 生成规格质数 */
const generateSpecPrimeDict = (
  properties: SkuPropertie[]
) => {
  const skus = properties
    .map((item) => item.typeList.map((item) => item.id))
    .filter((item) => item)

  const primes = getPrime(skus.flat().length)

  const dict: SkuInPrime = {}
  skus.flat().forEach((item, index) => {
    dict[item] = primes[index]
  })

  skuInPrime.value = dict
  primeMatrix.value = skus.map((specRow) => {
    return specRow.map((spec) => dict[spec])
  })
}

/** 生成sku乘积 */
const generateSKU = (list: Sku[]) => {
  const skuKeys = ['typeId', 'faceValueId', 'billId']
  const skuList = list.map((item) => {
    const prime = Object.entries(item)
      .map(([key, value]) =>
        skuKeys.includes(key)
          ? skuInPrime.value[Number(value)]
          : null
      )
      .filter((item) => item) as number[]

    return {
      ...item,
      skuPrime: prime,
      skuPrimeTotal: eval(prime.join('*'))
    }
  })

  skus.value = skuList
  skuPrimeList.value = skuList
    .map((item) =>
      /** 库存处理 */
      item.stockNum > 0 ? item.skuPrimeTotal : null
    )
    .filter((item) => item)
}

/** 生成质数对应规格坐标 & 生成状态表 */
const generatePathFinder = () => {
  primeMatrix.value.forEach((row, rowIndex) => {
    const state: number[] = []
    row.forEach((item, itemIndex) => {
      primeCoordinate.value[`${item}`] = [
        rowIndex,
        itemIndex
      ]
      state.push(1)
    })

    stateMatrix.value.push(state)
  })
}

const selectSpec = (prime: number) => {
  const isSelect = selected.value.indexOf(prime)
  isSelect > -1 ? removeSpec(prime) : addSpec(prime)
  updateDisabled()
}

const addSpec = (prime: number) => {
  const coordinate = primeCoordinate.value[prime]

  handlingSpecRowState(coordinate)
  selected.value.push(prime)
  stateMatrix.value[coordinate[0]][coordinate[1]] = 2
  updateStateMatrix()
}

const removeSpec = (prime: number) => {
  selected.value.forEach((item, index) => {
    if (item === prime) {
      const coordinate = primeCoordinate.value[item]
      stateMatrix.value[coordinate[0]][coordinate[1]] = 1
      selected.value.splice(index, 1)
    }
  })

  updateStateMatrix()
}

const updateStateMatrix = () => {
  stateMatrix.value.forEach((row, rowIndex) => {
    const isSelected = getRowMultipication(rowIndex)

    row.forEach((item, itemIndex) => {
      if (item !== 2) {
        stateMatrix.value[rowIndex][itemIndex] =
          getSelectState(
            primeMatrix.value[rowIndex][itemIndex],
            isSelected
          )
            ? 1
            : 0
      }
    })
  })
}

const getRowMultipication = (xPath: number) => {
  let ret = 1

  if (selected.value.length) {
    selected.value.forEach((prime) => {
      if (primeCoordinate.value[prime][0] !== xPath) {
        ret *= prime
      }
    })
  }

  return ret
}

const getSelectState = (
  prime: number,
  multiplication: number
) => {
  const val = prime * multiplication

  return skuPrimeList.value.some((item) => {
    if (item % val === 0) {
      return true
    }
  })
}

const updateDisabled = () => {
  const way = cloneDeep(stateMatrix.value)

  stateMatrix.value.forEach((row, rowIndex) => {
    row.forEach((item, itemIndex) => {
      if (item) {
        way[rowIndex][itemIndex] =
          primeMatrix.value[rowIndex][itemIndex]
      }
    })
  })

  disabled.value = way.flat()
}

const handlingSpecRowState = (point: number[]) => {
  selected.value.forEach((item, index) => {
    const coordinate = primeCoordinate.value[item]
    if (coordinate[0] === point[0]) {
      stateMatrix.value[coordinate[0]][coordinate[1]] = 1
      selected.value.splice(index, 1)
    }
  })
}

const loadDetail = () => {
  return new Promise((resolve, reject) => {
    getProductDetail({
      id: +route.params.id
    }).then((res) => {
      prodDetail.value = res.data as ProdDetail
      tabStore.modifyTabMeta(route.fullPath, {
        ...route.meta,
        title: (res.data as ProdDetail).name
      })
      resolve(true)
    })
  })
}

const loadProperties = () => {
  return new Promise((resolve, reject) => {
    getSkuProperties().then((res) => {
      skuProperties.value = res.data
      resolve(true)
    })
  })
}

const initProductConfig = () => {
  loading.value = true
  Promise.all([loadDetail(), loadProperties()]).then(() => {
    generateSpecPrimeDict(skuProperties.value)
    generateSKU(prodDetail.value.skuList)
    generatePathFinder()
    updateStateMatrix()
    updateDisabled()
    loading.value = false
  })
}

const selectedSKU = computed(() => {
  if (
    selected.value.length === skuProperties.value.length
  ) {
    const selectedMultipication = eval(
      selected.value.join('*')
    )
    const index = skus.value.findIndex((sku) => {
      return sku.skuPrimeTotal
        ? sku.skuPrimeTotal === +selectedMultipication
        : false
    })

    if (index > -1) {
      const sku = skus.value[index]

      if (purchaseNum.value > sku.stockNum) {
        purchaseNum.value = sku.stockNum
      }

      return sku
    } else {
      return null
    }
  }
  return null
})

const productPrice = computed(() => {
  const priceList = prodDetail.value.skuList.map(
    (item) => item.sellPrice
  )

  return {
    selectedPrice: selectedSKU.value
      ? selectedSKU.value.sellPrice
      : null,
    minPrice: Math.min(...priceList),
    maxPrice: Math.max(...priceList)
  }
})

const purchaseButton = ref<HTMLElement | null>(null)
const handlerMouseMove = (e: MouseEvent) => {
  if (purchaseButton.value) {
    const rect =
      purchaseButton.value.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    ;(e.target as HTMLElement).style.setProperty(
      '--x',
      `${x}px`
    )
    ;(e.target as HTMLElement).style.setProperty(
      '--y',
      `${y}px`
    )
  }
}

onMounted(() => {
  initProductConfig()
})
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  padding: 20px;
  .info {
    display: flex;
    justify-content: center;
    .preview {
      .img-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 378px;
        width: 460px;
        margin-right: 50px;
        .tag {
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
    .detail {
      min-width: 646px;
      .name {
        font-size: 20px;
        line-height: 1;
        margin-top: -1px;
        font-weight: bold;
      }
      .price-wrapper {
        border-radius: 4px;
        box-sizing: content-box;
      }
      .item {
        display: flex;
        line-height: 1;
        min-height: 34px;
        margin-top: 20px;
        padding-top: 6px;
        padding-bottom: 6px;
        .label {
          position: relative;
          box-sizing: content-box;
          font-size: 14px;
          width: 50px;
          padding: 0 10px;
          margin-right: 16px;
          margin-top: 10px;
          text-align: justify;
          text-justify: distribute-all-lines;
          text-align-last: justify;
          &::after {
            content: ':';
            position: absolute;
            right: 0;
            top: -1px;
            font-size: 14px;
          }
        }
        .value {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
      }
    }
  }

  .ky-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: none;
    color: #fff;
    height: 44px;
    line-height: 44px;
    width: 200px;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border-radius: 34px;
    user-select: none;

    &-shadow {
      &:before {
        --size: 0;
        content: '';
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(
          circle closest-side,
          skyblue,
          transparent
        );
        transform: translate(-50%, -50%);
        transition: width 0.2s ease, height 0.2s ease;
      }
      &:hover::before {
        --size: 400px;
      }
    }
  }
}
</style>
