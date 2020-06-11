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

        <routeMenu />
    </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'
import routeMenu from './routerMenu'

export default {
    name: 'SliderMenu',
    components: {
        routeMenu
    },
    data() {
        return {}
    },
    computed: {
        ...mapState({
            collapsed: state => state.layoutConfig.collapsed,
            fixedSlider: state => state.layoutConfig.fixedSlider,
            sliderMenuWidth: state => state.layoutConfig.sliderMenuWidth,
            sliderTheme: state => state.layoutConfig.sliderTheme,
            collapsedSliderMenuWidth: state => state.layoutConfig.collapsedSliderMenuWidth
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
