<template>
    <a-layout-header
        class="ky-layout-header"
        :style="{
            width: fixedHeader
                ? collapsed
                    ? `calc(100% - 80px)` : `calc(100% - 256px)`
                : '100%',
            position: fixedHeader ? 'fixed' : 'unset'
        }"
    >
        <span
            class="toggle-icon-wrapper"
            @click="toggleSlideBar"
        >
            <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            />
        </span>
    </a-layout-header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            collapsed: state => state.layoutConfig.collapsed,
            fixedHeader: state => state.layoutConfig.fixedHeader
        })
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
        right: 0;
        padding: 0;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
        transition: all .2s;
        background-color: #fff;

        .toggle-icon-wrapper {
            cursor: pointer;
            padding: 19px 24px;
            height: 64px;
            font-size: 20px;
            box-sizing: border-box;
            transition: all .2s;
            &:hover {
                background-color: rgba(0,0,0,.025);
            }
        }
    }
</style>
