<template>
    <div ref="tab" class="ky-tabs">
        <div
            v-for="(item, index) in tabList"
            :key="index"
            :class="[
                'items',
                {'items-active': tabIndex == index}
            ]"
            @click="handlerClick(item, index)"
        >
            {{ item.label }}
        </div>

        <div class="ink" :style="inkStyle" />
    </div>
</template>

<script>
export default {
    name: 'KyTabs',
    props: {
        value: {
            type: [String, Number],
            default: 0
        },
        tabList: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            tabIndex: this.value,
            tabWidth: []
        }
    },
    computed: {
        inkStyle() {
            if (!this.tabWidth.length) return
            const tabOffset = this.tabWidth.reduce((prev, next, index) => {
                return index <= this.tabIndex - 1 ? prev + next : prev + 0
            }, 0)
            return {
                'width': `${this.tabWidth[this.tabIndex]}px`,
                'transform': `translate3d(${tabOffset}px, 0, 0)`
            }
        }
    },
    watch: {
        value(val) {
            this.tabIndex = val
        }
    },
    mounted() {
        this.updateBar()
    },
    methods: {
        updateBar() {
            this.$nextTick(() => {
                if (!this.tabList.length) return
                this.$refs.tab.querySelectorAll('.items').forEach((item, index) => {
                    this.tabWidth.push(item.offsetWidth)
                })
            })
        },
        handlerClick(item, index) {
            this.$emit('input', index)
            this.$emit('change', item)
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~@/styles/theme.less';

    .ky-tabs {
        position: relative;
        display: flex;
        .items {
            display: inline-block;
            position: relative;
            cursor: pointer;
            height: 44px;
            padding: 0 40px;
            line-height: 44px;
            color: #515a6e;
            z-index: 2;
            transition: color .2s;
            user-select: none;
            &-active {
            color: #fff;
            }
        }
        .ink {
            position: absolute;
            height: 44px;
            z-index: 1;
            left: 0;
            background-color: @primary-color;
            transition: all .2s ease-out;
            border-radius: 34px;
        }
    }
</style>
