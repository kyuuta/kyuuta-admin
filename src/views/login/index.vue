<template>
  <div
    class="wrapper flex-1 flex-center flex-col bg-#f6f6f6 dark:bg-dark"
  >
    <DarkMode
      class="absolute right-10px top-10px h-46px"
      :iconSize="32"
    />
    <div class="container max-w-384px min-w-320px">
      <div class="flex-center flex-col mb-50px">
        <icon-local-logo-full
          class="w-340px text-340px h-80px"
        />
      </div>
      <NForm
        ref="formRef"
        :model="form"
        :rules="rules"
        label-placement="left"
        size="large"
      >
        <NFormItem path="username">
          <NInput
            v-model:value="form.username"
            :placeholder="t('routes.login.username')"
          >
            <template #prefix>
              <SvgIcon
                icon="ph:user-bold"
                class="text-18px color-#808695"
              />
            </template>
          </NInput>
        </NFormItem>
        <NFormItem path="password">
          <NInput
            v-model:value="form.password"
            type="password"
            showPasswordOn="click"
            :placeholder="t('routes.login.password')"
          >
            <template #prefix>
              <SvgIcon
                icon="mdi:password"
                class="text-18px color-#808695"
              />
            </template>
          </NInput>
        </NFormItem>
        <NFormItem path="code">
          <NInput
            v-model:value="form.code"
            :placeholder="t('routes.login.captcha')"
          />
          <NSpin :show="captchaLoading" class="ml-20px">
            <img
              class="h-38px cursor-pointer"
              :src="captcha"
              :alt="t('routes.login.captcha')"
              @click="refreshCaptcha"
            />
          </NSpin>
        </NFormItem>
        <NFormItem>
          <NButton
            type="primary"
            size="large"
            :loading="loading"
            block
            @click="submit"
            >{{ t('routes.login.index') }}</NButton
          >
        </NFormItem>
      </NForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FormInst, FormRules } from 'naive-ui'
import { getLoginCaptcha } from '@/service/api/user'
import DarkMode from '@/layout/common/Header/components/darkMode.vue'

const { t } = useI18n()

onMounted(() => {
  getCaptcha()
})

const captcha = shallowRef<string>('')
const captchaLoading = shallowRef<boolean>(false)
const getCaptcha = () => {
  captchaLoading.value = true
  getLoginCaptcha()
    .then((res) => {
      captcha.value = res as string
    })
    .finally(() => {
      captchaLoading.value = false
    })
}
const refreshCaptcha = () => {
  getCaptcha()
}

const formRef = ref<FormInst | null>(null)
const form = ref({
  username: 'dev',
  password: 'devdev',
  code: '7565',
  uuid: ''
})
const rules: FormRules = {
  username: {
    type: 'string',
    required: true,
    trigger: ['input'],
    message: `${t('prompt.enter')} ${t(
      'routes.login.username'
    )}`
  },
  password: {
    type: 'string',
    required: true,
    trigger: ['input'],
    message: `${t('prompt.enter')} ${t(
      'routes.login.password'
    )}`
  },
  code: {
    type: 'string',
    required: true,
    trigger: ['input'],
    message: `${t('prompt.enter')} ${t(
      'routes.login.captcha'
    )}`
  }
}

const userStore = useUserStore()
const loading = shallowRef<boolean>(false)

const submit = () => {
  formRef.value?.validate((error) => {
    if (!error) {
      loading.value = true
      userStore.login(form.value).finally(() => {
        loading.value = false
      })
    }
  })
}
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
  background-image: url('@/assets/images/login.svg');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
}
</style>
