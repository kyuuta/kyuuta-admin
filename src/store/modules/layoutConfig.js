export default {
    state: {
        /*
         * 左侧菜单相关参数
         * 参数|说明|类型
         * collapsed 收起展开 Boolean
         * fixedSlider 固定 Boolean
         * sliderMenuWidth 展开宽度 [Number, String]
         * collapsedSliderMenuWidth 收起宽度 Number
         */
        collapsed: false,
        fixedSlider: true,
        sliderMenuWidth: 256,
        collapsedSliderMenuWidth: 80,
        /*
         * 顶部相关参数
         * 参数|说明|类型
         * fixedHeader 固定 Boolean
         */
        fixedHeader: true
    },

    mutations: {
        TOGGLE_SLIDEBAR: state => {
            state.collapsed = !state.collapsed
        }
    },

    actions: {
        toggleSideBar({ commit }) {
            commit('TOGGLE_SLIDEBAR')
        }
    }
}
