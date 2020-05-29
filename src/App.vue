<template>
    <a-config-provider :locale="zhCN">
        <div id="app">
            <router-view />
        </div>
    </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN'

export default {
    name: 'App',
    data() {
        return {
            zhCN
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~@/styles/default.less';
    @import '~@/styles/reset.css';
</style>
