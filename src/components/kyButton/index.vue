<template>
    <button
        v-waves="{color: 'rgba(255, 255, 255, .25)'}"
        :class="classes"
        :disabled="disabled"
        @click="handlerClick"
        @mousemove="handlerMouseMove"
    >
        <a-icon v-show="loading" type="loading" class="ky-button-loading-icon" />
        <slot />
    </button>
</template>

<script>
import Waves from '@/framework/driective/wave'

export default {
    name: 'KyButton',
    directives: { Waves },
    props: {
        loading: Boolean,
        disabled: Boolean
    },
    computed: {
        classes() {
            return [
                'ky-button',
                {
                    'ky-button-disabled': this.disabled != null && this.disabled,
                    'ky-button-loading': this.loading != null && this.loading,
                    'ky-button-shadow': !this.loading && !this.disabled
                }
            ]
        }
    },
    methods: {
        handlerMouseMove(e) {
            const x = e.pageX - e.target.offsetLeft
            const y = e.pageY - e.target.offsetTop
            e.target.style.setProperty('--x', `${x}px`)
            e.target.style.setProperty('--y', `${y}px`)
        },
        handlerClick(e) {
            this.$emit('click', e)
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~@/styles/animation.less';
    @import '~@/styles/theme.less';

    .ky-button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background: @primary-color;
        border: none;
        color: white;
        height: 44px;
        line-height: 44px;
        width: 100%;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        border-radius: 34px;
        margin-top: 3vh;
        user-select: none;
        span {
            position: relative;
            pointer-events: none;
        }

        &-disabled {
            cursor: not-allowed;
            &::after {
                position: absolute;
                content: '';
                left: -1px;
                top: -1px;
                right: -1px;
                bottom: -1px;
                border-radius: inherit;
                background-color: hsla(0, 0%, 100%, .35);
            }
        }
        &-loading {
            pointer-events: none;
            &::after {
                position: absolute;
                content: '';
                left: -1px;
                top: -1px;
                right: -1px;
                bottom: -1px;
                border-radius: inherit;
                background-color: hsla(0, 0%, 100%, .35);
            }
            &-icon {
                margin-right: 4px;
                animation: rotateDeg 1s linear infinite;
            }
        }
        &-shadow {
            &::before {
                --size: 0;
                content: '';
                position: absolute;
                left: var(--x);
                top: var(--y);
                width: var(--size);
                height: var(--size);
                background: radial-gradient(circle closest-side, @primary-gradual-color, transparent);
                transform: translate(-50%, -50%);
                transition: width .2s ease, height .2s ease;
            }
            &:hover::before {
                --size: 400px;
            }
        }
    }
</style>

