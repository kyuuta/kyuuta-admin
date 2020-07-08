<template>
    <a-card
        class="table-list"
        :bordered="false"
    >
        <div class="table-page-search-wrapper">
            <a-form-model
                ref="form"
                :model="searchForm"
                layout="inline"
            >
                <a-row :gutter="[24, 0]">
                    <a-col :md="8" :sm="24">
                        <a-form-model-item label="角色名称：" prop="name">
                            <a-input v-model="searchForm.name" placeholder="请输入角色名称" />
                        </a-form-model-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-model-item label="账号状态：" prop="status">
                            <a-select
                                v-model="searchForm.status"
                                placeholder="请选择账号状态"
                            >
                                <a-select-option value="1">
                                    正常
                                </a-select-option>
                                <a-select-option value="0">
                                    封禁
                                </a-select-option>
                            </a-select>
                        </a-form-model-item>
                    </a-col>
                    <a-col
                        :md="8"
                        :sm="24"
                        style="display: flex;justify-content: flex-end;"
                    >
                        <a-button
                            type="primary"
                            :loading="loading"
                            style="margin-right: 5px"
                            @click="loadData"
                        >
                            查询
                        </a-button>
                        <a-button @click="reset">
                            重置
                        </a-button>
                        <a-button
                            type="link"
                            @click="expand = !expand"
                        >
                            {{ expand ? '收起' : '展开' }}
                            <a-icon :type="expand ? 'up' : 'down'" />
                        </a-button>
                    </a-col>
                </a-row>
            </a-form-model>

            <a-table
                row-key="id"
                :loading="loading"
                :columns="columns"
                :data-source="tableData"
                :pagination="pagination"
                @change="handleTableChange"
            >
                <div slot="sex" slot-scope="sex">
                    <CustomIcon
                        :class="[
                            'icon-sex',
                            sex ? 'icon-nan' : 'icon-nv'
                        ]"
                        :type="`iconxingbie-${sex ? 'nan' : 'nv'}`"
                    />
                </div>

                <span slot="tags" slot-scope="tags">
                    <a-tag
                        v-for="tag in tags"
                        :key="tag"
                        :color="
                            tag === '恋爱'
                                ? 'orange'
                                : tag === '青春'
                                    ? 'green'
                                    : 'blue'"
                    >
                        {{ tag }}
                    </a-tag>
                </span>
                <span slot="action" slot-scope="row">
                    <div class="operations">
                        <a @click="addItem(row)">添加</a>
                        <a-divider type="vertical" />
                        <a @click="deleteItem(row)">删除</a>
                        <a-divider type="vertical" />
                        <a @click="editItem(row)">编辑</a>
                    </div>
                </span>
            </a-table>
        </div>
    </a-card>
</template>

<script>
import {
    getTableList
} from '@/api/list'

export default {
    name: 'TableList',
    data() {
        return {
            expand: false,
            loading: false,

            searchForm: {},
            tableData: [],
            pagination: {
                showTotal: (total) => `共 ${total} 条`,
                showSizeChanger: true
            },
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                    width: 150
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                    width: 80
                },
                {
                    title: '性别',
                    dataIndex: 'sex',
                    key: 'sex',
                    scopedSlots: { customRender: 'sex' },
                    width: 80,
                    align: 'center'
                },
                {
                    title: '来源自动漫',
                    dataIndex: 'sourceAnimation',
                    key: 'sourceAnimation',
                    width: 170
                },
                {
                    title: '描述',
                    dataIndex: 'description',
                    key: 'description',
                    ellipsis: true,
                    minWidth: 150
                },
                {
                    title: 'Tags',
                    key: 'tags',
                    dataIndex: 'tags',
                    scopedSlots: { customRender: 'tags' }
                },
                {
                    title: 'Action',
                    key: 'action',
                    scopedSlots: { customRender: 'action' }
                }
            ]
        }
    },
    mounted() {
        this.loadData()
    },
    methods: {
        loadData() {
            this.loading = true
            getTableList()
                .then(res => {
                    const pagination = { ...this.pagination }
                    pagination.total = res.result.length
                    this.tableData = res.result
                    this.pagination = pagination
                }).finally(() => {
                    this.loading = false
                })
        },
        reset() {
            this.$refs.form.resetFields()
        },
        addItem(row) {
            console.log(row)
        },
        deleteItem() {},
        editItem() {},
        handleTableChange(pagination, filters, sorter) {
            console.log(pagination)
        }
    }
}
</script>

<style lang="less" scoped>
    .table-list {
        .icon-sex {
            font-size: 22px;
        }
        .icon-nan {
            color: #7BAFE2;
        }
        .icon-nv {
            color: #F191AF;
        }
    }
</style>
