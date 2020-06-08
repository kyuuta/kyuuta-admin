<template>
    <a-config-provider>
        <a-layout>
            <Setting />
            <SliderMenu />

            <a-layout
                :style="{
                    marginLeft: collapsed ? `${collapsedSliderMenuWidth}px` : `${sliderMenuWidth}px`,
                    transition: 'all .2s',
                    minHeight: '100vh'
                }"
            >
                <a-layout-header
                    v-if="fixedHeader"
                    style="background-color: #fff"
                />

                <BasicHeader />

                <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
                    <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
                        <router-view />
                    </div>
                </a-layout-content>

                <a-layout-footer :style="{ textAlign: 'center' }">
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
import SliderMenu from './SliderMenu'
import BasicHeader from './BasicHeader'

export default {
    name: 'BasicLayout',
    components: {
        Setting,
        SliderMenu,
        BasicHeader
    },
    computed: {
        ...mapState({
            collapsed: state => state.layoutConfig.collapsed,
            fixedHeader: state => state.layoutConfig.fixedHeader,
            sliderMenuWidth: state => state.layoutConfig.sliderMenuWidth,
            collapsedSliderMenuWidth: state => state.layoutConfig.collapsedSliderMenuWidth
        })
    }
}
</script>
