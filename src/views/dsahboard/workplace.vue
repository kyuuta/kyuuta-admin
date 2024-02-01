<template>
  <NSpace
    class="flex-auto"
    vertical
    :size="12"
    :wrap-item="false"
  >
    <NCard
      class="rounded-6px shadow-sm"
      :bordered="false"
    >
      <SearchForm
        v-model="formData"
        :dict="dict"
        :loading="loading || dictLoading"
        :formItems="formItems"
        @load="loadData"
        @reset="loadData"
      />
    </NCard>
    <NCard
      class="rounded-6px shadow-sm flex-auto"
      :bordered="false"
    >
      <template #header>
        <NSpace align="center">
          <NButton type="primary">一些功能按钮</NButton>
        </NSpace>
      </template>

      <template #header-extra>
        <NSpace>
          <NButton type="primary">导出</NButton>
        </NSpace>
      </template>

      <NDataTable
        :style="{ height: '100%' }"
        :row-key="(rowData) => rowData.id"
        :loading="loading"
        :columns="columns"
        :data="tableData"
        flexHeight
      />

      <template #footer>
        <Pagination v-model="pagination" @load="loadData" />
      </template>
    </NCard>
  </NSpace>
</template>

<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { getStaffList } from '@/service/api/dashboard'

const { dict, dictLoading, formatDict } = useDict([
  'sex',
  'grade'
])
const loading = shallowRef<boolean>(false)
const formData = shallowRef({})
const formItems: SearchForm.FormItems = [
  { label: '姓名', value: 'name', type: 'input' },
  { label: '年龄', value: 'age', type: 'input' },
  {
    label: '性别',
    value: 'sex',
    type: 'select',
    dictKey: 'sex'
  },
  {
    label: '职位',
    value: 'grade',
    type: 'select',
    dictKey: 'grade'
  },
  {
    label: '创建时间',
    value: 'createTime',
    type: 'date',
    pickerType: 'datetimerange'
  },
  {
    label: '单选',
    value: 'radioVal',
    type: 'radio',
    dictKey: 'sex'
  }
]

const tableData = shallowRef([])
const pagination = shallowReactive({
  page: 1,
  pageSize: 10,
  total: 0
})
const columns: DataTableColumns = [
  { title: 'id', key: 'id' },
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  {
    title: '性别',
    key: 'sex',
    render: (row) => formatDict(row.sex, 'sex')
  },
  {
    title: '职位',
    key: 'grade',
    render: (row) => formatDict(row.grade, 'grade')
  }
]

onMounted(() => loadData())

const loadData = () => {
  loading.value = true
  getStaffList({
    ...formData.value,
    pageParams: {
      page: pagination.page,
      pageSize: pagination.pageSize
    }
  })
    .then((res: any) => {
      tableData.value = res.data
      pagination.total = res.total
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
