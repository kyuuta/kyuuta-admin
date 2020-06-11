import Vue from 'vue'
import CustomIcon from './customIcons'
import {
    Icon,
    Menu,
    Input,
    Modal,
    Avatar,
    Button,
    Drawer,
    Layout,
    Result,
    Switch,
    Divider,
    Tooltip,
    Message,
    Dropdown,
    Notification,
    ConfigProvider
} from 'ant-design-vue'

const components = {
    Icon,
    Menu,
    Input,
    Modal,
    Avatar,
    Button,
    Drawer,
    Layout,
    Result,
    Switch,
    Divider,
    Tooltip,
    Message,
    Dropdown,
    Notification,
    ConfigProvider
}

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$message = Message
Vue.prototype.$notification = Notification

Vue.component('CustomIcon', CustomIcon)
Object.keys(components).forEach(key => {
    Vue.use(components[key])
})
