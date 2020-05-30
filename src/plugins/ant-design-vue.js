import Vue from 'vue'
import {
    Icon,
    Menu,
    Button,
    Drawer,
    Layout,
    ConfigProvider
} from 'ant-design-vue'

const components = {
    Icon,
    Menu,
    Button,
    Drawer,
    Layout,
    ConfigProvider
}

Object.keys(components).forEach(key => {
    Vue.use(components[key])
})
