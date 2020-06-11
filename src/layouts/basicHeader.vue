<template>
    <div>
        <a-layout-header
            class="ky-layout-header"
            :style="[styles, menuMode === 'top' ? headerLayoutStyles : null]"
        >
            <div
                class="ky-layout-header-main"
                :style="{
                    maxWidth: menuMode === 'side' ? 'unset' : '1200px',
                }"
            >
                <span
                    v-if="menuMode === 'side'"
                    class="toggle-icon-wrapper"
                    @click="toggleSlideBar"
                >
                    <a-icon
                        class="trigger"
                        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    />
                </span>

                <RouterMenu
                    v-if="menuMode === 'top'"
                    style="flex: 0 0 100%"
                />
            </div>
        </a-layout-header>

        <a-layout-header
            v-if="fixedHeader"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import RouterMenu from './routerMenu'

export default {
    name: 'BasicHeader',
    components: {
        RouterMenu
    },
    inject: ['reload'],
    computed: {
        ...mapState({
            menuMode: state => state.layoutConfig.menuMode,
            collapsed: state => state.layoutConfig.collapsed,
            fixedHeader: state => state.layoutConfig.fixedHeader,
            sliderTheme: state => state.layoutConfig.sliderTheme
        }),
        styles() {
            return {
                width: this.fixedHeader && this.menuMode === 'side'
                    ? this.collapsed
                        ? `calc(100% - 80px)` : `calc(100% - 256px)`
                    : '100%',
                position: this.fixedHeader ? 'fixed' : 'relative'
            }
        },
        headerLayoutStyles() {
            return {
                backgroundColor: this.sliderTheme === 'dark' ? '#001529' : '#fff'
            }
        }
    },
    methods: {
        toggleSlideBar() {
            this.$store.dispatch('toggleSideBar')
        }
    }
}
</script>

<style lang="less" scoped>
    .ky-layout-header {
        z-index: 9;
        top: 0;
        right: 0;
        padding: 0;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
        transition: width .2s;
        background-color: #fff;

        &-main {
            display: flex;
            margin: 0 auto;
        }

        .toggle-icon-wrapper {
            cursor: pointer;
            padding: 0 24px;
            height: 64px;
            line-height: 64px;
            font-size: 20px;
            box-sizing: border-box;
            transition: all .2s;
            &:hover {
                background-color: rgba(0,0,0,.025);
            }
        }
    }
</style>
