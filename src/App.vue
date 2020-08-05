<template>
    <a-config-provider :locale="locale">
        <div id="app">
            <transition :name="transitionName">
                <router-view v-if="isRouterAlive" />
            </transition>
        </div>
    </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { domTitle, setDocumentTitle } from '@/utils/domUtil'
import { i18nRender } from '@/locales'

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
    computed: {
        locale() {
            // 只是为了切换语言时，更新标题
            const route = this.$route

            if (route.meta && typeof route.meta.title !== 'undefined') {
                setDocumentTitle(`${i18nRender(route.meta.title)} - ${domTitle}`)
            }

            return this.$i18n.getLocaleMessage(this.$store.getters.lang).antLocale
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
