<template>
  <NModal
    v-model:show="modalVisible"
    class="w-600px custom-modal"
    title="创建帕鲁"
    preset="card"
    @after-leave="clear"
  >
    <div class="mx-auto max-w-500px pr-40px">
      <NForm
        ref="formRef"
        :model="form"
        :rules="rules"
        label-placement="left"
        label-width="100"
        label-align="right"
      >
        <NFormItem label="名称" path="name">
          <NInput v-model:value="form.name" />
        </NFormItem>
        <NFormItem label="属性" path="property">
          <n-select
            v-model:value="form.property"
            multiple
            :options="dict"
            label-field="name"
          />
        </NFormItem>
        <NFormItem label="进食量" path="quantityFood">
          <NInputNumber
            v-model:value="form.quantityFood"
            :show-button="false"
            :precision="0"
            clearable
          />
        </NFormItem>
        <NFormItem label="工作适应性" path="adaptive">
          <NInput v-model:value="form.adaptive" />
        </NFormItem>
        <NFormItem label="掉落物" path="fallDown">
          <NInput v-model:value="form.fallDown" />
        </NFormItem>
      </NForm>
    </div>

    <template #footer>
      <NSpace justify="center">
        <NButton
          class="w-70px"
          type="primary"
          :loading="loading"
          @click="handleSubmit"
          >确定</NButton
        >
        <NButton class="w-70px" @click="handleClose"
          >取消</NButton
        >
      </NSpace>
    </template>
  </NModal>
</template>

<script lang="ts" setup>
import type { FormRules, FormInst } from 'naive-ui'
import { cloneDeep } from 'lodash-es'

type formType = {
  name?: string
  property?: string[]
  quantityFood?: number
  adaptive?: string
  fallDown?: string
}

const props = defineProps<{
  visible: boolean
  dict: SearchForm.dictItem[]
}>()
const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
  (e: 'success'): void
}>()
const { modalVisible } = useModalState(props, emit)

const loading = shallowRef<boolean>(false)
const form = ref<formType>({})
const rules: FormRules = {
  name: {
    type: 'string',
    required: true,
    message: '请输入名称',
    trigger: ['input', 'blur']
  },
  property: {
    type: 'array',
    required: true,
    message: '请选择属性',
    trigger: ['input', 'blur']
  },
  quantityFood: {
    type: 'number',
    required: true,
    message: '请输入进食量',
    trigger: ['input', 'blur']
  },
  adaptive: {
    type: 'string',
    required: true,
    message: '请输入工作适应性',
    trigger: ['input', 'blur']
  }
}
const initForm = cloneDeep(form.value)
const formRef = ref<FormInst | null>(null)

const handleSubmit = () => {
  formRef.value?.validate((error) => {
    if (!error) {
      loading.value = true
      setTimeout(() => {
        handleClose()
        loading.value = false
        emit('success')
      }, 1000)
    }
  })
}

const clear = () => {
  form.value = cloneDeep(initForm)
}

const handleClose = () => {
  modalVisible.value = false
}
</script>
