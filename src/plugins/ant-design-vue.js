import Vue from 'vue'
import {
    Icon,
    Menu,
    Button,
    Drawer,
    Layout,
    ConfigProvider,
    Message,
    Notification
} from 'ant-design-vue'

const components = {
    Icon,
    Menu,
    Button,
    Drawer,
    Layout,
    ConfigProvider,
    Message,
    Notification
}

Object.keys(components).forEach(key => {
    Vue.use(components[key])
})
