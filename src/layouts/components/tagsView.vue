<template>
    <div class="tabs-main">
        <a-button
            icon="left"
            size="large"
            @click="handleScroll(1)"/>
        <div
            ref="scrollOuter"
            class="test-wrapper"
            @DOMMouseScroll="DOMhandleScroll"
            @mousewheel="DOMhandleScroll">
            <div
                ref="scrollBody"
                class="test-content"
                :style="{
                    'transform': `translateX(-${tagBodyLeft}px)`
                }">
                <div
                    class="tag"
                    v-for="tag in visitedViews"
                    :key="tag.name"
                    @click="handleClickTag($event)">{{ $t(tag.meta.title) }}</div>
            </div>
        </div>
        <a-button
            icon="right"
            size="large"
            @click="handleScroll(-1)"/>

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'TagsView',
    data() {
        return {
            tagBodyLeft: 0,
            outerWidth: 0,
            bodyWidth: 0
        }
    },
    computed: {
        ...mapState({
            visitedViews: state => state.tagsView.visitedViews
        })
    },
    watch: {
        $route() {
            this.addTags()
        },
        outerWidth(newval, oldval) {
            if ((oldval + this.tagBodyLeft) === this.bodyWidth) {
                this.tagBodyLeft = this.bodyWidth - newval
            }
        }
    },
    mounted() {
        this.initElWidth()
        console.log(this.visitedViews)
        window.addEventListener('resize', () => {
            this.initElWidth()
            if (this.bodyWidth < this.outerWidth) {
                this.tagBodyLeft = 0
            }
        })
    },
    methods: {
        initElWidth() {
            this.outerWidth = this.$refs.scrollOuter.offsetWidth
            this.bodyWidth = this.$refs.scrollBody.offsetWidth
        },
        DOMhandleScroll(e) {
            e.preventDefault()
            var type = e.type
            let delta = 0
            if (type === 'DOMMouseScroll' || type === 'mousewheel') {
                delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
            }
            this.handleScroll(delta)
        },
        handleScroll(offset) {
            if (offset > 0) {
                this.tagBodyLeft = Math.max(0, this.tagBodyLeft - 240)
            } else {
                const translateX = this.tagBodyLeft + 240
                if (this.outerWidth < this.bodyWidth) {
                    if (translateX > this.bodyWidth - this.outerWidth) {
                        this.tagBodyLeft = this.bodyWidth - this.outerWidth
                    } else {
                        this.tagBodyLeft = translateX
                    }
                } else {
                    this.tagBodyLeft = 0
                }
            }
        },
        addTags() {
            const { name } = this.$route

            if (name) {
                this.$store.dispatch('AddView', this.$route)

                this.$nextTick(() => {
                    this.bodyWidth = this.$refs.scrollBody.offsetWidth
                    this.tagBodyLeft = this.bodyWidth - this.outerWidth
                })
            }

            return false
        },
        handleClickTag(e) {
            const targetOffsetLeft = e.target.offsetLeft + e.target.offsetWidth
            const passedArea = this.tagBodyLeft + this.outerWidth

            if ((e.target.offsetLeft > this.tagBodyLeft) &&
                (targetOffsetLeft < passedArea)) {
                return false
            }

            if (this.tagBodyLeft > e.target.offsetLeft) {
                this.tagBodyLeft = e.target.offsetLeft
            } else if (targetOffsetLeft > passedArea) {
                this.tagBodyLeft = Math.abs(passedArea - targetOffsetLeft) + this.tagBodyLeft
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .tabs-main {
        position: relative;
        background-color: #f5f7f9;
        padding: 6px 10px;
        display: flex;
        .test-wrapper {
            background-color: skyblue;
            flex: 1;
            height: 100%;
            margin: 0 10px;
            overflow: hidden;
            white-space: nowrap;
            .test-content {
                height: 100%;
                float: left;
                display: flex;
                transition: transform .5s ease-in-out;
                .tag {
                    border: 1px solid red;
                    height: 100%;
                    padding: 0 10px;
                    margin-right: 5px;
                    line-height: 40px;
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>
