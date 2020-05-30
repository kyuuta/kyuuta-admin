<template>
    <div class="login">
        <!-- <div class="logo">
            <logo class="admin-logo" />
            <p class="tit">
                GoodTasteAdmin
            </p>
        </div> -->

        <div class="login-wrapper">
            <div class="main">
                <kyTabs v-model="activeIndex" :tab-list="tabList" />

                <h2 class="login-tit">
                    Welcome
                </h2>
                <p class="login-prompt">
                    {{ activeIndex === 0 ? 'Plase login to your account.' : 'Plase enter your detail.' }}
                </p>

                <transition-group v-show="activeIndex === 0" name="list" class="login-form" tag="div">
                    <kyFloatIpt
                        v-show="activeIndex === 0"
                        :key="1"
                        v-model.trim="loginForm.username"
                        type="text"
                        label="Username"
                    />
                    <kyFloatIpt
                        v-show="activeIndex === 0"
                        :key="2"
                        v-model.trim="loginForm.password"
                        type="password"
                        label="Password"
                    />

                    <kyButton
                        v-show="activeIndex === 0"
                        :key="3"
                        :loading="loginBtnState"
                        @click="login"
                    >
                        Ok
                    </kyButton>
                </transition-group>

                <transition-group v-show="activeIndex === 1" name="list" class="regis-form" tag="div">
                    <kyFloatIpt
                        v-show="activeIndex === 1"
                        :key="1"
                        v-model="regisForm.username"
                        type="text"
                        label="Username"
                    />
                    <kyFloatIpt
                        v-show="activeIndex === 1"
                        :key="2"
                        v-model="regisForm.password"
                        type="text"
                        label="Password"
                    />
                    <kyFloatIpt
                        v-show="activeIndex === 1"
                        :key="3"
                        v-model="regisForm.phone"
                        type="text"
                        label="Phone"
                    />
                    <kyFloatIpt
                        v-show="activeIndex === 1"
                        :key="4"
                        v-model="regisForm.code"
                        type="text"
                        label="Code"
                    />
                    <kyButton v-show="activeIndex === 1" :key="5">
                        Ok
                    </kyButton>
                </transition-group>
            </div>
            <div class="footer">
                <a-icon class="icon" type="github" />
                <div class="info">
                    <div class="item">
                        FE <a href="https://github.com/kyuuta" target="_blank">KYUUTA</a>
                    </div>
                    <div class="item">
                        Power By <a href="https://antdv.com/" target="_blank">AntDesignVue</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import kyTabs from '@/components/kyTabs'
import kyFloatIpt from '@/components/kyFloatIpt'
import kyButton from '@/components/kyButton'
// import logo from '@/components/logo'

export default {
    name: 'Login',
    components: {
        kyTabs,
        kyFloatIpt,
        // logo,
        kyButton
    },
    routeInfo: {
        meta: '',
        permission: {}
    },
    data() {
        return {
            activeIndex: null,
            tabList: [{
                label: 'Login'
            }, {
                label: 'Registration'
            }],
            loginForm: {
                username: '',
                password: '',
                code: ''
            },
            regisForm: {
                username: '',
                password: '',
                phone: '',
                code: ''
            },
            loginBtnState: false
        }
    },
    mounted() {
        this.activeIndex = 0
        // this.$store.dispatch('generateRoutes')
    },
    methods: {
        login() {
            console.log('123')

            this.loginBtnState = true
            setTimeout(() => {
                this.$router.push('/dashboard')
            }, 2000)
            // try {
            //     if (this.loginForm.username === '') throw new Error('请输入用户名')
            //     if (this.loginForm.password === '') throw new Error('请输入密码')
            // } catch (err) {
            //     this.$Message.warning(err.message)
            //     return false
            // }
            // // this.$router.push({ name: 'Store' })
            // // this.loginBtnState = true

            // this.$store
            //     .dispatch('Login', this.loginForm)
            //     .then(() => {
            //         this.loginBtnState = false
            //         this.$Message.success('登录成功')
            //         console.log(this.$store)
            //         this.$router.push({ name: 'Store' })
            //     })
            //     .catch(() => {
            //         this.loginBtnState = false
            //     })
        }
    }
}
</script>
<style lang="less" scoped>
     @import '~@/styles/theme.less';

    .login {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        flex: 1;
        height: 100%;
        // background-image: url('~@/assets/images/xiaoye.jpg');
        // background-repeat: no-repeat;
        // background-size: cover;
        overflow:  hidden;
        transition: all .6s;
        background-position-x: 70%;
        // background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);
        // background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);
        background: -webkit-linear-gradient(to right, #91B0E4, #D2F6FF);
        background: linear-gradient(to right, #91B0E4, #D2F6FF);
        // 640
        .logo{
            position: relative;
            flex: 1;
            text-align: center;
            .tit {
                position: absolute;
                left: 72%;
                top: 70%;
                font-family: FanolSong-Bold;
                color: #fff;
                font-size: 16px;
                margin-top: 10px;
            }
            .admin-logo {
                position: absolute;
                left: 73%;
                top: 58%;
            }
        }
        &-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 36vw;
            height: 100%;
            background-color: rgba(255,255,255,.4);
            padding: 6.7vh 6.5vw 5vh;
            transition: all .5s;
            .main {
                display: flex;
                flex-direction: column;
            }
        }
        &-tit {
            font-size: 38px;
            margin-top: 6vh;
            color: @primary-color;
        }
        &-prompt {
            color: #515a6e;
        }
        .login-form, .regis-form {
            display: flex;
            flex-direction: column;
            margin-top: 5vh;
        }
        .login-form {
            & > div {
                margin-bottom: 4vh;
            }
        }
        .regis-form {
            & > div {
                margin-bottom: 2vh;
            }
        }

        .footer {
            display: flex;
            text-align: left;
            align-self: center;
            align-items: center;
            .icon {
                font-size: 32px;
            }
            .info {
                display: flex;
                flex-direction: column;
                align-content: center;
                text-align: center;
                font-weight: 500;
                margin-left: 12px;
                span {
                    display: inline-block;
                    width: 26px;
                }
                a {
                    color: #2d8cf0;
                }
            }
        }

        .list-enter-active:nth-child(1) {
            transition-delay: .1s;
        }
        .list-enter-active:nth-child(2) {
            transition-delay: .3s;
        }
        .list-enter-active:nth-child(3) {
            transition-delay: .5s;
        }
        .list-enter-active:nth-child(4) {
            transition-delay: .7s;
        }
        .list-enter-active:nth-child(5) {
            transition-delay: .9s;
        }
        .list-enter {
            opacity: 0;
            transform: translateY(100%);
        }
        .list-enter-active {
            transition: .3s;
        }
    }
</style>

