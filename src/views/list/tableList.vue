<template>
    <a-card :bordered="false">
        <div class="table-page-search-wrapper">
            <a-form layout="inline">
                <a-row :gutter="[24, 0]">
                    <a-col :md="8" :sm="24">
                        <a-form-item label="用户姓名：">
                            <a-input v-model="searchForm.name" placeholder="请输入姓名" />
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-item label="账号状态：">
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
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-button
                            type="primary"
                        >
                            查询
                        </a-button>
                        <a-button>重置</a-button>
                        <a-button type="link">
                            展开
                        </a-button>
                    </a-col>
                </a-row>
            </a-form>
        </div>
    </a-card>
</template>

<script>
export default {
    name: 'TableList',
    data() {
        return {
            searchForm: {}
        }
    }
}
</script>
