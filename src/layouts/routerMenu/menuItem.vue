<template functional>
    <a-menu-item :key="props.route.name">
        <router-link :to="{ path: props.route.path }">
            <a-icon v-if="props.route.meta.icon" :type="props.route.meta.icon" />
            <span>{{ props.route.meta.title }}</span>
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
        }
    }
}
</script>
