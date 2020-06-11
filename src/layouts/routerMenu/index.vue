<template>
    <a-menu
        :theme="sliderTheme"
        :mode="menuMode === 'side' ? 'inline' : 'horizontal'"
        :inline-collapsed="collapsed"
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
            />

            <SubMenu
                v-else
                :key="route.name"
                :route="route"
            />
        </template>
    </a-menu>
</template>

<script>
import { mapState } from 'vuex'

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
            this.setMenuActive()
        }
    },
    mounted() {
        this.initMenuOpen()
        this.setMenuActive()
    },
    methods: {
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
