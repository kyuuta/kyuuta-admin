<template>
    <div class="tags-main">
        <a-icon
            v-show="!showMoveBtn"
            class="move-btn"
            type="left"
            @click="handleScroll(1)" />
        <div
            ref="scrollOuter"
            class="tag-wrapper"
            @DOMMouseScroll="DOMhandleScroll"
            @mousewheel="DOMhandleScroll">
            <div
                ref="scrollBody"
                class="tag-content"
                :style="{
                    'transform': `translateX(-${tagBodyLeft}px)`
                }">
                <div
                    :class="[
                        'tag',
                        {
                            'tag-active': tag.name === $route.name
                        }
                    ]"
                    v-for="tag in visitedViews"
                    :key="tag.name"
                    :ref="tag.name"
                    @click="handleClickTag(tag.name)">
                    <span>{{ $t(tag.meta.title) }}</span>
                    <div class="close-btn" @click.stop="delTag(tag)">
                        <a-icon type="close" />
                    </div>
                </div>
            </div>
        </div>
        <a-icon
            v-show="!showMoveBtn"
            class="move-btn"
            type="right"
            @click="handleScroll(-1)" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { throttle } from '@/utils'

export default {
    name: 'TagsView',
    data() {
        return {
            tagBodyLeft: 0,
            outerWidth: 0,
            bodyWidth: 0,
            showMoveBtn: false
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
            this.initElWidth()
        },
        outerWidth(newval, oldval) {
            if ((oldval + this.tagBodyLeft) === this.bodyWidth) {
                this.tagBodyLeft = this.bodyWidth - newval
            }
        }
    },
    mounted() {
        this.initElWidth()
        window.addEventListener('resize', () => {
            this.initElWidth()
            if (this.bodyWidth < this.outerWidth) {
                this.tagBodyLeft = 0
            }
        })
    },
    methods: {
        initElWidth: throttle(function () {
            this.setMoveBtnState()
            this.$nextTick(() => {
                this.outerWidth = this.$refs.scrollOuter.offsetWidth
                this.bodyWidth = this.$refs.scrollBody.offsetWidth
            })
        }, 56),
        setMoveBtnState() {
            this.showMoveBtn = this.bodyWidth <= this.outerWidth
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
        handleScroll(offset, movingDistance = this.bodyWidth) {
            if (offset > 0) {
                this.tagBodyLeft = Math.max(0, this.tagBodyLeft - movingDistance)
            } else {
                const translateX = this.tagBodyLeft + movingDistance
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
                    .then(exists => {
                        if (exists) {
                            this.setMoveBtnState()
                            this.$nextTick(() => {
                                this.moveTag(name)
                            })
                        } else {
                            this.$nextTick(() => {
                                this.bodyWidth = this.$refs.scrollBody.offsetWidth
                                this.tagBodyLeft = this.bodyWidth - this.outerWidth
                            })
                        }
                    })
            }

            return false
        },
        delTag(tag) {
            this.$store.dispatch('DeleteView', tag.name)
                .then(visitedViews => {
                    if (tag.path === this.$route.path) {
                        const latestView = visitedViews.slice(-1)[0]
                        if (latestView) {
                            this.$router.push(latestView.fullPath)
                        } else {
                            this.$router.push('/dashboard')
                        }
                    }
                })
        },
        handleClickTag(name) {
            this.moveTag(name)

            if (name !== this.$route.name) {
                this.$router.push({
                    name: name
                })
            }
        },
        moveTag(name) {
            const elOffsetLeft = this.$refs[name][0].offsetLeft
            const elOffsetWidth = this.$refs[name][0].offsetWidth
            const targetOffsetLeft = elOffsetLeft + elOffsetWidth
            const passedArea = this.tagBodyLeft + this.outerWidth

            // 标签在可视区域
            if ((elOffsetLeft > this.tagBodyLeft) &&
                (targetOffsetLeft < passedArea)) {
                return false
            }

            // 标签移动到可视范围内最后一个或最前一个
            if (this.tagBodyLeft > elOffsetLeft) {
                this.tagBodyLeft = elOffsetLeft
            } else if (targetOffsetLeft > passedArea) {
                this.tagBodyLeft = Math.abs(passedArea - targetOffsetLeft) + this.tagBodyLeft
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .tags-main {
        position: fixed;
        top: 64px;
        padding: 6px 8px;
        display: flex;
        z-index: 8;
        width: 100%;
        background-color: #f0f2f5;
        .move-btn {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            padding: 0 3px;
            color: #515a6e;
        }
        .tag-wrapper {
            flex: 1;
            height: 100%;
            overflow: hidden;
            white-space: nowrap;
            .tag-content {
                height: 100%;
                float: left;
                display: flex;
                align-items: center;
                transition: transform .5s ease-in-out;
                .tag {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    height: 32px;
                    border-radius: 3px;
                    margin-right: 6px;
                    padding: 5px 14px;
                    background-color: #fff;
                    color: #808695;
                    box-sizing: border-box;
                    transition: color .3s ease-in-out;
                    &:hover {
                        color: #515a6e;
                    }
                    &-active {
                        color: #2d8cf0 !important;
                    }
                    span {
                        margin-right: 3px;

                    }
                    .close-btn {
                        height: 20px;
                        line-height: 20px;
                        font-size: 14px;
                        color: #999;
                        transition: color .3s ease-in-out;
                        &:hover {
                            color: #515a6e;
                        }
                    }
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>
