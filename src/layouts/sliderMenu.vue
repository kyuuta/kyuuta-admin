<template>
    <a-layout-sider
        v-model="collapsed"
        class="ky-layout-slider"
        theme="dark"
        collapsible
        :trigger="null"
        :class="classes"
        :width="sliderMenuWidth"
        :collapsed-width="collapsedSliderMenuWidth"
    >
        <div class="logo" />

        <a-menu
            theme="dark"
            mode="inline"
            :inline-collapsed="collapsed"
        >
            <template
                v-for="route in menuRouteList"
            >
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

export default {
    name: 'SliderMenu',
    components: {
        MenuItem,
        SubMenu
    },
    computed: {
        ...mapState({
            collapsed: state => state.layoutConfig.collapsed,
            fixedSlider: state => state.layoutConfig.fixedSlider,
            sliderMenuWidth: state => state.layoutConfig.sliderMenuWidth,
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
    methods: {
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
