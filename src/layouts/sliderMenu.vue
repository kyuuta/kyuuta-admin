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
        <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
            <a-menu-item key="1">
                <a-icon type="user" />
                <span class="nav-text">nav 1</span>
            </a-menu-item>
            <a-menu-item key="2">
                <a-icon type="video-camera" />
                <span class="nav-text">nav 2</span>
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="upload" />
                <span class="nav-text">nav 3</span>
            </a-menu-item>
            <a-menu-item key="4">
                <a-icon type="bar-chart" />
                <span class="nav-text">nav 4</span>
            </a-menu-item>
            <a-menu-item key="5">
                <a-icon type="cloud-o" />
                <span class="nav-text">nav 5</span>
            </a-menu-item>
            <a-menu-item key="6">
                <a-icon type="appstore-o" />
                <span class="nav-text">nav 6</span>
            </a-menu-item>
            <a-menu-item key="7">
                <a-icon type="team" />
                <span class="nav-text">nav 7</span>
            </a-menu-item>
            <a-menu-item key="8">
                <a-icon type="shop" />
                <span class="nav-text">nav 8</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            collapsed: state => state.layoutConfig.collapsed,
            fixedSlider: state => state.layoutConfig.fixedSlider,
            sliderMenuWidth: state => state.layoutConfig.sliderMenuWidth,
            collapsedSliderMenuWidth: state => state.layoutConfig.collapsedSliderMenuWidth
        }),
        classes() {
            return {
                'ky-layout-slider-fixed': this.fixedSlider
            }
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
