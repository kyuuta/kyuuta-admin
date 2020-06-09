<template>
    <a-config-provider :locale="zhCN">
        <div id="app">
            <transition :name="transitionName">
                <router-view v-if="isRouterAlive" />
            </transition>
        </div>
    </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN'

export default {
    name: 'App',
    provide() {
        return {
            reload: this.reload
        }
    },
    data() {
        return {
            zhCN,
            transitionName: '',
            isRouterAlive: true
        }
    },
    watch: {
        $route(to, from) {
            this.transitionName = from.path === '/' ? '' : 'show'
        }
    },
    methods: {
        reload() {
            this.transitionName = ''
            this.isRouterAlive = false
            this.$nextTick(() => {
                this.isRouterAlive = true
            })
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
