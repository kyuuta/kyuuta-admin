<template>
  <NCard size="small">
    <div class="flex">
      <div class="img max-w-50% min-w-50% mr-40px">
        <NAffix class="sticky top-10px mt-10px">
          <img
            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=4000&hei=2444&fmt=jpeg&qlt=90&.v=1671304673202"
            alt=""
          />
          <div class="flex-center flex-col mt-50px">
            <SvgIcon
              class="text-24px"
              icon="fluent-mdl2:product"
            />
            <p class="text-12px mt-4px"
              >选择免费送货服务，或者到 Apple Store
              零售店提取现货商品。</p
            >
          </div>
          <div class="flex-center flex-col mt-14px">
            <SvgIcon
              class="text-24px"
              icon="tabler:truck-return"
            />
            <p class="text-12px mt-4px"
              >简单免费的退货服务</p
            >
          </div>
        </NAffix>
      </div>
      <div class="sku flex-1">
        <div class="text-40px lh-tight">{{
          productDetail.productName
        }}</div>
        <div class="text-24px color-#DE504E">
          {{ productPrice }}
        </div>
        <div
          v-if="selectedSKU"
          class="text-20px c-#6e6e73"
          >{{ selectedSKU.name }}</div
        >
        <div
          v-for="propertie in skuProperties"
          :key="propertie.id"
          class="mt-10px"
        >
          <div class="text-17px font-600 lh-loose">{{
            propertie.name
          }}</div>
          <div class="operations flex flex-col">
            <n-button
              v-for="spec in propertie.typeList"
              :key="spec.id"
              class="h-60px rd-12px mt-10px justify-start text-14px weight-600"
              style="font-weight: 600"
              round
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
              <span
                v-if="
                  ['2', '3'].includes(
                    spec.id.toString().substring(0, 1)
                  )
                "
                class="mr-10px"
                >{{
                  spec.id.toString().substring(0, 1) === '2'
                    ? '固态硬盘'
                    : '统一内存'
                }}</span
              >
              <span class="label">{{ spec.name }}</span>
            </n-button>
          </div>
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
import { skuProperties, productDetail } from './product'
import { ref, onMounted, computed } from 'vue'
import { cloneDeep } from 'lodash-es'
import { getPrime } from './helpers'

type Skus = {
  name: string
  activityNo: string
  colorId: number
  storageId: number
  memoryId: number
  sellPrice: number
  stockNum: number
  skuPrime?: number[]
  skuPrimeTotal?: number
}
type SkuInPrime = {
  [key: number]: number
}
type SkuProperty = {
  id: number
  name: string
  typeList: {
    id: number
    name: string
  }[]
}
type primeCoordinate = {
  [key: string]: number[]
}

const skus = ref<Skus[]>([])
const skuInPrime = ref<SkuInPrime>({})
const primeMatrix = ref<number[][]>([])
const skuPrimeList = ref<number[]>([])
const stateMatrix = ref<number[][]>([])
const primeCoordinate = ref<primeCoordinate>({})

const selected = ref<number[]>([])
const disabled = ref<number[]>([])

/** 生成规格质数相关 */
const generateSpecPrimeDict = (
  properties: SkuProperty[]
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

/** 生成sku质数乘积 */
const generateSKU = (list: Skus[]) => {
  const skuKeys = ['colorId', 'storageId', 'memoryId']
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

  if (isSelect > -1) {
    removeSpec(prime)
  } else {
    addSpec(prime)
  }

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

const initProductConfig = () => {
  generateSpecPrimeDict(skuProperties)
  generateSKU(productDetail.skuList)
  generatePathFinder()
  updateStateMatrix()
  updateDisabled()
}

const selectedSKU = computed(() => {
  if (selected.value.length === skuProperties.length) {
    const selectedMultipication = eval(
      selected.value.join('*')
    )
    const index = skus.value.findIndex((sku) => {
      return sku.skuPrimeTotal
        ? sku.skuPrimeTotal === +selectedMultipication
        : false
    })
    return index > -1 ? skus.value[index] : null
  }
  return null
})

const productPrice = computed(() => {
  const priceList = skus.value.map((item) => item.sellPrice)

  return selectedSKU.value
    ? `￥${selectedSKU.value.sellPrice}`
    : `￥${Math.min(...priceList)} ~ ${Math.max(
        ...priceList
      )}`
})

onMounted(() => {
  initProductConfig()
})
</script>

<style lang="less" scoped>
.desc-list {
  p {
    margin: 10px 0;
  }
  ol {
    list-style: revert;
    padding-left: 30px;
    li {
      margin: 4px 0;
    }
  }
}
</style>
