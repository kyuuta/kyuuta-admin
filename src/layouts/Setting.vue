<template>
    <div class="setting-drawer">
        <a-drawer
            width="300"
            placement="right"
            :closable="false"
            :visible="visible"
            :drawer-style="{ position: 'absolute' }"
            style="position: fixed"
            @close="setVisible(false)"
        >
            <div>
                <h3>Slider Style</h3>
                <a-tooltip placement="top">
                    <template slot="title">
                        <span>Dark Style</span>
                    </template>
                    <div>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" alt="dark">
                    </div>
                </a-tooltip>
                <a-tooltip placement="top">
                    <template slot="title">
                        <span>Dark Style</span>
                    </template>
                    <div>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" alt="light">
                    </div>
                </a-tooltip>
            </div>

            <a-button
                slot="handle"
                class="setting-drawer-index-handle"
                type="primary"
                @click="setVisible"
            >
                <transition name="elTranslateX" mode="out-in">
                    <div v-if="visible">
                        <a-icon v-if="visible" type="close" />
                    </div>
                    <a-icon v-else type="setting" />
                </transition>
            </a-button>
        </a-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    methods: {
        setVisible(state) {
            this.visible = state || !this.visible
        },
        changeMenuTheme(style) {
            this.$store.dispatch('toggleMenuTheme', style)
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~@/styles/animation.less';

    .setting-drawer-index-handle {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 300px;
        top: 15vh;
        width: 50px;
        height: 50px;
        padding: 0;
        border-radius: 8px 0 0 8px;
        i {
            font-size: 26px;
            margin-top: 2.5px;
        }
    }
</style>
