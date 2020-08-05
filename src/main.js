import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import i18n from './locales'
import './plugins/icons.js'
import './plugins/ant-design-vue.js'

import './permission'
import '@/styles/reset.css'
import '@/styles/default.less'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
