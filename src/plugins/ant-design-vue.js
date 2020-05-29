import Vue from 'vue'
import {
    Button,
    ConfigProvider,
    Icon
} from 'ant-design-vue'

const components = {
    Button,
    ConfigProvider,
    Icon
}

Object.keys(components).forEach(key => {
    Vue.use(components[key])
})
