<template>
    <a-layout-sider
        v-model="collapsed"
        class="ky-layout-slider"
        :theme="sliderTheme"
        collapsible
        :trigger="null"
        :class="classes"
        :width="sliderMenuWidth"
        :collapsed-width="collapsedSliderMenuWidth"
    >
        <div class="logo" />

        <a-menu
            :theme="sliderTheme"
            mode="inline"
            :inline-collapsed="collapsed"
            :selected-keys="selectedKeys"
            :open-keys="openKeys"
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
    </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'
import MenuItem from './routerMenu/menuItem'
import SubMenu from './routerMenu/subMenu'
import config from '@/config'

export default {
    name: 'SliderMenu',
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
            collapsed: state => state.layoutConfig.collapsed,
            fixedSlider: state => state.layoutConfig.fixedSlider,
            sliderMenuWidth: state => state.layoutConfig.sliderMenuWidth,
            sliderTheme: state => state.layoutConfig.sliderTheme,
            collapsedSliderMenuWidth: state => state.layoutConfig.collapsedSliderMenuWidth,
            menuRouteList: state => {
                return state.permission.addRouters.find(item => item.path === '')
                    ? state.permission.addRouters[0].children
                    : []
            }
        }),
        classes() {
            return {
                'ky-layout-slider-fixed': this.fixedSlider
            }
        }
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

<style lang="less" scoped>
    .ky-layout-slider {
        &-fixed {
            overflow: auto;
            position: fixed;
            left:0;
            height: 100vh;
        }
        .logo {
            height: 32px;
            background: rgba(255, 255, 255, 0.2);
            margin: 16px;
        }
    }
</style>
