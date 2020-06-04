<template functional>
    <a-sub-menu :key="props.route.name">
        <span slot="title">
            <a-icon
                v-if="props.route.meta.icon"
                :type="props.route.meta.icon"
            />
            <span>{{ props.route.meta.title }}</span>
        </span>
        <template v-for="children in props.route.children">
            <MenuItem
                v-if="
                    (children.children && children.children.length)
                        ? children.children.every(item => typeof item.hidden === 'boolean' ? item.hidden : false)
                        : true"
                :key="children.name"
                :route="children"
            />

            <SubMenu
                v-else
                :key="children.name"
                :route="children"
            />
        </template>
    </a-sub-menu>
</template>

<script>
import MenuItem from './menuItem'

export default {
    name: 'SubMenu',
    components: {
        MenuItem
    },
    props: {
        route: {
            type: Object,
            required: true
        }
    }
}
</script>
