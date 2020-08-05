<template functional>
    <a-menu-item :key="props.route.name">
        <router-link class="a-menu-item-router-link" :to="{ path: props.route.path }">
            <a-icon v-if="props.route.meta.icon" :type="props.route.meta.icon" />
            <span>{{ props.i18nRender(props.route.meta.title) }}</span>
        </router-link>
    </a-menu-item>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
        route: {
            type: Object,
            required: true
        },
        i18nRender: {
            type: Function,
            required: true
        }
    }
}
</script>

<style lang="less" scoped>
    // fix no icon text-overflow
    .a-menu-item-router-link {
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>
