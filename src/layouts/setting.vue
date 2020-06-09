<template>
    <a-drawer
        width="300"
        placement="right"
        :visible="visible"
        :drawer-style="{ position: 'absolute' }"
        style="position: fixed"
        @close="setVisible(false)"
    >
        <div class="setting-drawer">
            <a-divider>Slider Style</a-divider>
            <div class="slider-config">
                <a-tooltip placement="top">
                    <template slot="title">
                        <span>Dark Style</span>
                    </template>
                    <div
                        :class="['config-item',{
                            'config-item-checked': sliderTheme === 'dark'
                        }]"
                        @click="changeMenuTheme('dark')"
                    >
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" alt="dark">
                    </div>
                </a-tooltip>
                <a-tooltip placement="top">
                    <template slot="title">
                        <span>Light Style</span>
                    </template>
                    <div
                        :class="['config-item',{
                            'config-item-checked': sliderTheme === 'light'
                        }]"
                        @click="changeMenuTheme('light')"
                    >
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" alt="light">
                    </div>
                </a-tooltip>
            </div>
            <a-divider>Navigation Mode</a-divider>
            <div class="navigation-item">
                <span>Fixed Slidebar</span>
                <a-switch
                    size="small"
                    :default-checked="fixedSlider"
                    @change="changeFixedSlider"
                />
            </div>
            <div class="navigation-item">
                <span>Fixed Header</span>
                <a-switch
                    size="small"
                    :default-checked="fixedHeader"
                    @change="changeFixedHeader"
                />
            </div>
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
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            visible: false
        }
    },
    computed: {
        ...mapState({
            sliderTheme: state => state.layoutConfig.sliderTheme,
            fixedHeader: state => state.layoutConfig.fixedHeader,
            fixedSlider: state => state.layoutConfig.fixedSlider
        })
    },
    methods: {
        setVisible(state) {
            this.visible = state || !this.visible
        },
        changeMenuTheme(style) {
            this.$store.dispatch('toggleMenuTheme', style)
        },
        changeFixedSlider(checked) {
            this.$store.dispatch('toggleFixedSlider', checked)
        },
        changeFixedHeader(checked) {
            this.$store.dispatch('toggleFixedHeader', checked)
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~@/styles/animation.less';

    .slider-config {
        display: flex;
        margin-top: 10px;
        .config-item {
            margin-right: 1em;
            cursor: pointer;
            &::after {
                content: '';
                display: block;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                margin: 4px auto 0;
                background-color: #52c41a;
                opacity: 0;
            }
            &-checked::after {
                opacity: 1;
                transition: opacity .3s;
            }
        }
    }

    .navigation-item {
        display: flex;
        justify-content: space-between;
        height: 30px;
        align-items: center;
    }

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
