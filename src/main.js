import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './plugins/icons.js'
import './plugins/ant-design-vue.js'

import './permission'
import '@/styles/reset.css'

import './mock'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
