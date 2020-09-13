<template>
    <a-config-provider>
        <a-layout>
            <Setting />
            <SliderMenu v-if="layoutConfig.menuMode === 'side'" />

            <a-layout :style="styles">
                <BasicHeader />

                <TagsView />

                <a-layout-content :style="{ margin: '44px 16px 0', overflow: 'initial' }">
                    <router-view />
                </a-layout-content>

                <a-layout-footer :style="{ textAlign: 'center', lineHeight: 1.5 }">
                    <p>FE - KYUUTA</p>
                    <p>Power By - Ant Desing Vue</p>
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </a-config-provider>
</template>

<script>
import { mapState } from 'vuex'
import Setting from './Setting'
import BasicHeader from './BasicHeader'
import SliderMenu from './SliderMenu'
import TagsView from './components/tagsView'

export default {
    name: 'BasicLayout',
    components: {
        Setting,
        TagsView,
        BasicHeader,
        SliderMenu
    },
    computed: {
        ...mapState({
            layoutConfig: state => state.layoutConfig
        }),
        styles() {
            return {
                marginLeft:
                    this.layoutConfig.fixedSlider &&
                    this.layoutConfig.menuMode === 'side'
                        ? this.layoutConfig.collapsed
                            ? `${this.layoutConfig.collapsedSliderMenuWidth}px`
                            : `${this.layoutConfig.sliderMenuWidth}px`
                        : '0',
                transition: 'width .2s',
                minHeight: '100vh'
            }
        }
    }
}
</script>
