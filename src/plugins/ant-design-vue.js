import Vue from 'vue'
import {
    Pagination,
    Button,
    ConfigProvider,
    Icon
} from 'ant-design-vue'

const components = {
    Pagination,
    Button,
    ConfigProvider,
    Icon
}

Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
})
