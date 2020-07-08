import Vue from 'vue'
import CustomIcon from './customIcons'
import {
    Col,
    Row,
    Tag,
    Card,
    Icon,
    Menu,
    Input,
    Modal,
    Table,
    Avatar,
    Button,
    Drawer,
    Layout,
    Result,
    Select,
    Switch,
    Divider,
    Tooltip,
    Message,
    Dropdown,
    FormModel,
    Notification,
    ConfigProvider
} from 'ant-design-vue'

const components = {
    Col,
    Row,
    Tag,
    Card,
    Icon,
    Menu,
    Input,
    Modal,
    Table,
    Avatar,
    Button,
    Drawer,
    Layout,
    Result,
    Select,
    Switch,
    Divider,
    Tooltip,
    Message,
    Dropdown,
    FormModel,
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
