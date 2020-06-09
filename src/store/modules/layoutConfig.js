export default {
    state: {
        /**
         * 左侧菜单相关参数
         * 目前是若该路由的permission写了多个 只要有一项权限没有拥有则过滤
         * 可改为some调整逻辑 拥有某一个权限即不过滤
         *
         * @param {Boolean} collapsed 收起展开
         * @param {Boolean} fixedSlider 固定
         * @param {Number, String} sliderMenuWidth 展开宽度
         * @param {Number} collapsedSliderMenuWidth 收起宽度
         */
        collapsed: false,
        fixedSlider: true,
        sliderMenuWidth: 256,
        collapsedSliderMenuWidth: 80,
        /**
         * 顶部相关参数
         * @param {Boolean} fixedHeader 固定头部
         */
        fixedHeader: true,
        /**
         * @param {'dark', 'light'} sliderTheme 侧边栏皮肤
         */
        sliderTheme: 'dark'
    },

	mutations: {
		TOGGLE_SLIDEBAR: (state) => {
			state.collapsed = !state.collapsed
		},
		TOGGLE_MENUTHEME: (state, theme) => {
			state.sliderTheme = theme
        },
        TOGGLE_FIXEDSLIDER: (state, isFixed) => {
            state.fixedSlider = isFixed
        },
        TOGGLE_FIXEDHEADER: (state, isFixed) => {
            state.fixedHeader = isFixed
        }
	},

	actions: {
		toggleSideBar({ commit }) {
			commit('TOGGLE_SLIDEBAR')
		},
		toggleMenuTheme({ commit }, theme) {
			commit('TOGGLE_MENUTHEME', theme)
        },
        toggleFixedSlider({ commit }, isFixed) {
            commit('TOGGLE_FIXEDSLIDER', isFixed)
        },
        toggleFixedHeader({ commit }, isFixed) {
            commit('TOGGLE_FIXEDHEADER', isFixed)
        }
	}
}
