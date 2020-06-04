import Vue from 'vue'
import {
    Icon,
    Menu,
    Input,
    Button,
    Drawer,
    Layout,
    Result,
    Message,
    Notification,
    ConfigProvider
} from 'ant-design-vue'

const components = {
    Icon,
    Menu,
    Input,
    Button,
    Drawer,
    Layout,
    Result,
    Message,
    Notification,
    ConfigProvider
}

Object.keys(components).forEach(key => {
    Vue.use(components[key])
})
