<template>
    <div class="ky-input" :class="{'float': float}">
        <div class="ky-input-label">
            {{ label }}
        </div>
        <input
            class="ky-input-main"
            :type="iptType"
            :value="inputValue"
            autocomplete="off"
            @focus="handleFocus"
            @input="handleInput"
            @blur="handleBlur"
        >
        <transition v-if="type === 'password' && inputValue" name="show" mode="out-in">
            <div v-if="!showPassword" class="eye" @click="passwordVisible">
                <a-icon 
                    class="icon" 
                    type="eye-invisible" />
            </div>
            <a-icon 
                v-if="showPassword"
                class="eye icon"
                @click="passwordVisible"
                type="eye" />
        </transition>
        <hr class="ky-input-line">
    </div>
</template>

<script>
export default {
    name: 'KyFloatInput',
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        label: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isFocused: false,
            showPassword: false,
            inputValue: this.value
        }
    },
    computed: {
        float() {
            return !this.isFocused && !this.inputValue
        },
        iptType() {
            return this.type === 'text' ? this.type : this.showPassword ? 'text' : 'password'
        }
    },
    watch: {
        value(val) {
            this.inputValue = val
        }
    },
    methods: {
        passwordVisible(e) {
            e.stopPropagation()
            this.showPassword = !this.showPassword
        },
        handleFocus(e) {
            this.isFocused = true
            this.$emit('focus', e)
        },
        handleBlur(e) {
            this.isFocused = false
            this.$emit('blur', e)
        },
        handleInput(e) {
            this.inputValue = e.target ? e.target.value : e
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~@/styles/animation.less';
    @import '~@/styles/theme.less';

    .ky-input {
        display: inline-block;
        position: relative;
        width: 100%;
        text-align: left;
        color: #cacaca;
        &-label {
            line-height: 20px;
            z-index: 1;
            cursor: text;
            font-size: 16px;
            transition: all .2s ease-in-out;
            transform: translate3d(0, 0, 0) scale(.75);
            transform-origin: left top;
            user-select: none;
            pointer-events: none;
            backface-visibility: hidden;
            color: @primary-color;
        }
        .eye {
            position: absolute;
            right: 0;
            bottom: 4px;
        }
        &::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: @primary-color;
            transition: all .2s;
            z-index: 2;
        }
        &-line {
            margin: 0;
            height: 1px;
            border: none;
            background-color: rgba(255, 255, 255, .6);
            position: absolute;
            left: 0;
            right: 0;
            margin-top: -1px;
        }
        &-main {
            appearance: none;
            outline: none;
            border: none;
            background: transparent;
            border-radius: 0 0 0 0;
            box-shadow: 0;
            display: block;
            padding: 0;
            margin: 0;
            width: 100%;
            height: 32px;
            color: #636363;
            position: relative;
        }
        .icon {
            color: #2d8cf0;
            font-size: 18px;
            cursor: pointer;
        }
    }
    .float {
        .ky-input-label {
            transform: translate3d(0, 28px, 0) scale(1) !important;
        }
        &::before {
            width: 0;
        }
    }

    @keyframes show {
        0% {
            opacity: 0;
            right: 32px;
        }
        100% {
            opacity: 1;
            right: 0;
        }
    }
    @keyframes hide {
        0% {
            opacity: 1;
            right: 0;
        }
        100% {
            opacity: 0;
            right: -32px;
        }
    }
    .show-enter-active {
        animation: show .3s;
    }
    .show-leave-active {
        animation: hide .3s;
    }
    .show-enter, .show-leave-to {
        opacity: 0;
    }
</style>
