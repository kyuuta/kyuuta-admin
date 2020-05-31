<template>
    <a-config-provider :locale="zhCN">
        <div id="app">
            <transition :name="transitionName">
                <router-view />
            </transition>
        </div>
    </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN'

export default {
    name: 'App',
    data() {
        return {
            zhCN,
            transitionName: ''
        }
    },
    watch: {
        $route(to, from) {
            this.transitionName = from.path === '/' ? '' : 'show'
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~@/styles/default.less';

    @keyframes show {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    .show-enter-active {
        animation: show .5s;
    }
    .show-leave-active, .show-leave-to  {
        display: none !important;
    }
    .show-enter {
        opacity: 0;
    }
</style>
