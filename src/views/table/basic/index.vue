<template>
  <NSpace
    class="flex-auto"
    vertical
    :size="12"
    :wrap-item="false"
  >
    <NCard
      class="rounded-[6px] shadow-sm"
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
      class="rounded-[6px] shadow-sm flex-auto"
      :bordered="false"
    >
      <template #header>
        <NSpace align="center">
          <NButton
            type="primary"
            @click="detailVisible = true"
            >创建</NButton
          >
        </NSpace>
      </template>

      <template #header-extra>
        <NSpace>
          <NButton-group>
            <NButton type="primary">导出</NButton>
            <NDropdown
              trigger="hover"
              :options="exportBtnList"
              @select="handleExport"
            >
              <NButton
                type="primary"
                class="w-[40px]"
                ghost
              >
                <template #icon>
                  <SvgIcon
                    icon="octicon:arrow-down-16"
                    class="text-[16px]"
                  />
                </template>
              </NButton>
            </NDropdown>
          </NButton-group>
        </NSpace>
      </template>

      <NDataTable
        ref="tableRef"
        :style="{ height: '100%' }"
        :row-key="(rowData) => rowData.id"
        :loading="loading"
        :columns="mergeTableColumn(columns)"
        :data="tableData"
        flexHeight
      />

      <template #footer>
        <Pagination v-model="pagination" @load="loadData" />
      </template>
    </NCard>

    <DetailModal
      v-model:visible="detailVisible"
      :dict="dict['property']"
    />
  </NSpace>
</template>

<script lang="ts" setup>
import type {
  DataTableColumns,
  DataTableInst
} from 'naive-ui'
import DetailModal from './detailModal.vue'
import { mergeTableColumn } from '@/utils/table'
import { getStaffList } from '@/service/api/dashboard'

type rowType = {
  property: string
}

const { dict, dictLoading, formatDict } = useDict([
  'property',
  'adaptive'
])

const loading = shallowRef<boolean>(false)
const formData = shallowRef({})
const formItems: SearchForm.FormItems = [
  { label: '编号', value: 'id', type: 'input' },
  { label: '名字', value: 'name', type: 'input' },
  {
    label: '属性',
    value: 'property',
    type: 'select',
    dictKey: 'property',
    props: {
      multiple: true
    }
  },
  {
    label: '进食量',
    value: 'quantityFood',
    type: 'inputNumber',
    props: {
      showButton: false,
      precision: 0
    }
  },
  {
    label: '工作适应性',
    value: 'adaptive',
    type: 'select',
    dictKey: 'adaptive',
    props: {
      multiple: true
    }
  },
  { label: '掉落物', value: 'fallDown', type: 'input' },
  {
    label: '创建时间',
    value: 'createTime',
    type: 'date',
    pickerType: 'datetimerange'
  }
]
const tableData = shallowRef([])
const pagination = shallowReactive({
  page: 1,
  pageSize: 10,
  total: 0
})
const columns: DataTableColumns = [
  { title: '编号', key: 'id' },
  { title: '名称', key: 'name' },
  {
    title: '属性',
    key: 'property',
    render: (row) => {
      return (row as rowType).property
        .split(',')
        .map((item) => formatDict(item, 'property'))
        .toString()
    }
  },
  { title: '进食量', key: 'quantityFood' },
  {
    title: '工作适应性',
    key: 'adaptive',
    render: (row) => {
      return (row as rowType).adaptive
        .split(',')
        .map((item) => formatDict(item, 'adaptive'))
        .toString()
    }
  },
  { title: '掉落物', key: 'fallDown' }
  // {
  //   title: '年龄',
  //   key: 'age',
  //   sorter: (prevRow, nextRow) =>
  //     (prevRow as rowType).age - (nextRow as rowType).age
  // },
  // {
  //   title: '性别',
  //   key: 'sex',
  //   filterMode: 'or',
  //   filterOptions: [
  //     {
  //       label: '男',
  //       value: 1
  //     },
  //     {
  //       label: '女',
  //       value: 0
  //     }
  //   ],
  //   render: (row) => formatDict(row.sex, 'sex'),
  //   filter: (value: string | number, row: object) => {
  //     return (row as rowType).sex === value
  //   }
  // },
  // {
  //   title: '职位',
  //   key: 'grade',
  //   render: (row) => formatDict(row.grade, 'grade')
  // }
]

const exportBtnList = [
  {
    label: '导出CSV(原始数据)',
    key: 'original'
  },
  {
    label: '导出CSV(展示数据)',
    key: 'show'
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
      console.log(res)
      tableData.value = res.data
      pagination.total = res.total
    })
    .finally(() => {
      loading.value = false
    })
}

const detailVisible = shallowRef<boolean>(false)

const tableRef = ref<DataTableInst>()
const handleExport = (key: string) => {
  console.log(key)

  if (key === 'show') {
    tableRef.value?.downloadCsv({
      fileName: '基础表格展示数据',
      keepOriginalData: true
    })
  } else if (key === 'original') {
    tableRef.value?.downloadCsv({
      fileName: '基础表格原始数据'
    })
  }
}
</script>
