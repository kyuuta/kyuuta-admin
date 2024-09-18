<template>
  <NSpace :wrapItem="false">
    <div class="flex-1 mr-[20px]">
      <NForm
        :showFeedback="false"
        label-placement="left"
        :label-width="labelWidth"
      >
        <NGrid
          x-gap="18"
          y-gap="10"
          :cols="`2 800:${cols}`"
          :collapsed="expand"
          :collapsed-rows="3"
        >
          <NGi
            v-for="item in formItems"
            :key="item.value"
            :span="
              item.span
                ? item.span
                : item.pickerType &&
                  item?.pickerType.includes('range')
                ? 2
                : 1
            "
          >
            <NFormItem
              :label="item.label"
              :labelWidth="item.labelWidth"
            >
              <NInput
                v-if="item.type === 'input'"
                v-bind="item.props"
                clearable
                :value="getValue(item.value)"
                @update:value="
                  updateModel(item.value, $event)
                "
              />

              <NInputNumber
                v-if="item.type === 'inputNumber'"
                v-bind="item.props"
                class="flex-1"
                clearable
                :value="getValue(item.value)"
                @update:value="
                  updateModel(item.value, $event)
                "
              />

              <NSelect
                v-if="
                  item.type === 'select' &&
                  dict &&
                  item.dictKey
                "
                v-bind="item.props"
                filterable
                clearable
                :value="getValue(item.value)"
                :options="getDict(item.dictKey)"
                :value-field="
                  item.dictValueField || 'value'
                "
                :filter="
                  (pattern: string, option: object) =>
                    selectFilter(item, pattern, option)
                "
                :render-label="
                  (option: SelectOption) =>
                    selectRenderLabel(item, option)
                "
                @update:value="
                  updateModel(item.value, $event)
                "
              />

              <NDatePicker
                v-if="item.type === 'date'"
                v-bind="item.props"
                class="flex-1"
                clearable
                value-format="yyyy-MM-dd HH:mm:ss"
                :formatted-value="getValue(item.value)"
                :type="item.pickerType"
                @update:formatted-value="
                  updateModel(item.value, $event)
                "
              />

              <NRadioGroup
                v-if="item.type === 'radio'"
                v-bind="item.props"
                :value="getValue(item.value)"
                @update:value="
                  updateModel(item.value, $event)
                "
              >
                <NSpace v-if="dict && item.dictKey">
                  <NRadio
                    v-for="radioItem in getDict(
                      item.dictKey
                    )"
                    :key="radioItem.value"
                    :value="radioItem.value"
                  >
                    {{ radioItem.name }}
                  </NRadio>
                </NSpace>
              </NRadioGroup>
            </NFormItem>
          </NGi>
        </NGrid>
      </NForm>
    </div>
    <div class="operations">
      <NSpace
        style="gap: 10px 12px"
        :vertical="formRows > 1"
      >
        <NButton
          class="w-[80px]"
          type="primary"
          :loading="loading"
          @click="emit('load', 'search')"
        >
          <template #icon>
            <SvgIcon
              class="text-16px"
              icon="icon-park-outline:search"
            />
          </template>
          查询
        </NButton>
        <NButton
          class="w-[80px]"
          :loading="loading"
          @click="reset"
        >
          <template #icon>
            <SvgIcon
              class="text-16px"
              icon="system-uicons:reset-alt"
            />
          </template>
          重置
        </NButton>

        <div
          v-if="formRows > 3"
          class="flex justify-center items-center cursor-pointer select-none h-[34px]"
        >
          <NButton
            text
            type="primary"
            icon-placement="right"
            @click="expand = !expand"
          >
            {{ expand ? '展开' : '收起' }}
            <template #icon>
              <SvgIcon
                :icon="`icon-park-outline:${
                  expand ? 'down' : 'up'
                }`"
              />
            </template>
          </NButton>
        </div>
      </NSpace>
    </div>
  </NSpace>
</template>

<script lang="ts" setup>
import type { VNodeChild } from 'vue'
import { isNumber, isNull, isUndefined } from 'lodash-es'
import type {
  SelectOption,
  SelectGroupOption
} from 'naive-ui'
const expand = shallowRef<boolean>(true)
const formRows = shallowRef<number>(0)

const props = withDefaults(
  defineProps<{
    modelValue: Record<string, any>
    formItems: SearchForm.FormItems
    dict?: SearchForm.dict
    labelWidth?: number | string | 'auto' | undefined
    loading?: boolean
    cols?: number
  }>(),
  {
    labelWidth: undefined,
    loading: false,
    cols: 4,
    dict: undefined
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: object): void
  (e: 'load', trigger: string): void
  (e: 'reset', trigger: string): void
}>()

onMounted(() => {
  computedRows()
})

const getValue = (valueKey: string) => {
  const val = props.modelValue[valueKey]
  return isNull(val) || isUndefined(val) ? null : val
}

const getDict = (dictKey: string) => {
  return dictKey && props.dict ? props.dict[dictKey] : []
}

const computedRows = () => {
  const spanCount = props.formItems.reduce((prev, next) => {
    return (
      prev +
      (next.span
        ? next.span
        : next.pickerType &&
          next?.pickerType.includes('range')
        ? 2
        : 1)
    )
  }, 0)

  formRows.value = Math.ceil(spanCount / props.cols)
}

const selectFilter = (
  item: SearchForm.FormItem,
  pattern: string,
  option: Record<string, any>
): boolean => {
  return item.renderLabel
    ? item.renderLabel.some((key) =>
        option[key].includes(pattern)
      )
    : option[item.dictLabelField || 'name'].includes(
        pattern
      )
}

const selectRenderLabel = (
  item: SearchForm.FormItem,
  option: SelectOption
): VNodeChild => {
  return h('span', null, {
    default: () =>
      item.renderLabel
        ? item.renderLabel
            .map((key: string) => option[key])
            .join(item.renderLabelHyphen || '-')
        : option[item.dictLabelField || 'name']
  })
}

const updateModel = (key: string, value: any) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [key]: !value && !isNumber(value) ? null : value
  })
}

const reset = () => {
  emit('update:modelValue', {})
  emit('reset', 'search')
}
</script>
