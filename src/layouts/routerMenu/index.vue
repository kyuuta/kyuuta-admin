<template>
    <a-menu
        :theme="sliderTheme"
        :mode="menuMode === 'side' ? 'inline' : 'horizontal'"
        :inline-collapsed="menuMode === 'side' ? collapsed : null"
        :selected-keys="selectedKeys"
        :open-keys="openKeys"
        :style="{
            lineHeight: menuMode === 'side' ? '46px' : '64px'
        }"
        @openChange="onOpenChange"
    >
        <template v-for="route in menuRouteList">
            <MenuItem
                v-if="hasShowChildren(route.children)"
                :key="route.name"
                :route="route"
                :i18n-render="i18nRender"
            />

            <SubMenu
                v-else
                :key="route.name"
                :route="route"
                :i18n-render="i18nRender"
            />
        </template>
    </a-menu>
</template>

<script>
import { mapState } from 'vuex'
import { i18nRender } from '@/locales'

import MenuItem from './menuItem'
import SubMenu from './subMenu'
import config from '@/config'

export default {
    components: {
        MenuItem,
        SubMenu
    },
    data() {
        return {
            selectedKeys: [],
            openKeys: []
        }
    },
    computed: {
        ...mapState({
            menuMode: state => state.layoutConfig.menuMode,
            collapsed: state => {
                if (state.layoutConfig.menuMode === 'top') {
                    return false
                }
                return state.layoutConfig.collapsed
            },
            sliderTheme: state => state.layoutConfig.sliderTheme,
            menuRouteList: state => {
                return state.permission.addRouters.find(item => item.path === '')
                    ? state.permission.addRouters[0].children
                    : []
            }
        })
    },
    watch: {
        '$route'(val) {
            this.initMenuOpen()
            this.setMenuActive()
        },
        // 左侧菜单模式并收起状态下 清空menu的展开
        collapsed(val) {
            if (val) {
                this.openKeys = []
            } else {
                this.initMenuOpen()
            }
        }
    },
    mounted() {
        if (this.menuMode !== 'top' && !this.collapsed) {
            this.initMenuOpen()
        }
        this.setMenuActive()
    },
    methods: {
        i18nRender,
        // 默认展开所处的路由菜单
        initMenuOpen() {
            const routeMatched = this.$route.matched
            this.openKeys = this.getOpenKeys(routeMatched[routeMatched.length - 1])
        },
        // 设置选中的路由
        setMenuActive() {
            const route = this.$route.matched.concat()
            this.selectedKeys = [route.pop().name]
        },
        // 获取展开keys
        getOpenKeys(route, openKeys = []) {
            if (route.parent && route.parent.name) {
                openKeys.push(route.parent.name)
                this.getOpenKeys(route.parent, openKeys)
            }
            return openKeys
        },
        // 只展开一组菜单时生效
        onOpenChange(openKeys) {
            if (config.onlyOneExpandSlider) {
                const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)

                if (this.menuRouteList.map(item => item.name).includes(latestOpenKey)) {
                    this.openKeys = latestOpenKey
                        ? [latestOpenKey]
                        : []
                } else {
                    this.openKeys = openKeys
                }
            }
        },
        // 判断是否有可展示的children
        hasShowChildren(children = []) {
            const showingChildren = children.filter(item => {
                return typeof item.hidden === 'boolean' ? !item.hidden : true
            })

            return !showingChildren.length
        }
    }
}
</script>
