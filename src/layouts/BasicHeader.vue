<template>
    <div class="basic-header">
        <a-layout-header
            class="ky-layout-header"
            :style="[LayoutHeaderStyles, menuMode === 'top' ? LayoutThemeStyles : null]"
        >
            <div
                class="ky-layout-header-main"
                :style="{
                    maxWidth: menuMode === 'side' ? 'unset' : '1200px',
                }"
            >
                <!-- 头部左侧内容 -->
                <div class="lf-content">
                    <span
                        v-if="menuMode === 'side'"
                        class="toggle-icon-wrapper"
                        @click="toggleSlideBar"
                    >
                        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
                    </span>

                    <RouterMenu
                        v-if="menuMode === 'top'"
                        style="flex: 1 1 0"
                    />
                </div>

                <!-- 头部右侧内容 -->
                <div class="rg-content">
                    <div class="operation-list">
                        <span class="item" @click="changeFullScreen">
                            <a-icon
                                v-show="!fullScreen"
                                class="full-screen"
                                type="fullscreen"
                            />
                            <a-icon
                                v-show="fullScreen"
                                class="full-screen"
                                type="fullscreen-exit"
                            />
                        </span>
                    </div>

                    <a-dropdown>
                        <div class="user-info">
                            <a-avatar size="large" :src="userAvatar" />
                            <span class="name">{{ userName }}</span>
                        </div>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <div style="text-align: center" @click="logout">
                                    <a-icon type="logout" />
                                    <span>退出登录</span>
                                </div>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>

                    <a-dropdown>
                        <CustomIcon class="icon-earth" type="iconearth2" />
                        <a-menu
                            slot="overlay"
                            :selectedKeys="[currentLang]"
                            @click="changeLang">
                            <a-menu-item
                                v-for="(lang, index) in languageList"
                                :key="index">
                                <a href="javascript:;">
                                    <span style="margin-left: 4px">{{ lang.icon }}</span>
                                    <span>{{ lang.label }}</span>
                                </a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
            </div>
        </a-layout-header>

        <a-layout-header
            v-if="fixedHeader"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import RouterMenu from './routerMenu'

export default {
    name: 'BasicHeader',
    inject: ['reload'],
    components: {
        RouterMenu
    },
    data() {
        return {
            languageList: {
                'zh-CN': {
                    icon: '🇨🇳',
                    label: '简体中文'
                },
                'en-US': {
                    icon: '🇺🇸',
                    label: 'English'
                }
            }
        }
    },
    computed: {
        ...mapState({
            userName: state => state.user.name,
            userAvatar: state => state.user.avatar,
            menuMode: state => state.layoutConfig.menuMode,
            collapsed: state => state.layoutConfig.collapsed,
            fixedHeader: state => state.layoutConfig.fixedHeader,
            sliderTheme: state => state.layoutConfig.sliderTheme,
            fullScreen: state => state.layoutConfig.fullScreen,
            currentLang: state => state.layoutConfig.lang
        }),
        LayoutHeaderStyles() {
            return {
                width: this.fixedHeader && this.menuMode === 'side'
                    ? this.collapsed
                        ? `calc(100% - 80px)`
                        : `calc(100% - 256px)`
                    : '100%',
                position: this.fixedHeader
                    ? 'fixed'
                    : 'relative'
            }
        },
        LayoutThemeStyles() {
            return {
                backgroundColor: this.sliderTheme === 'dark'
                    ? '#001529'
                    : '#fff'
            }
        },
        menuList() {
            return this.$route.matched
        }
    },
    methods: {
        changeFullScreen() {
            if (this.fullScreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen()
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen()
                }
            } else {
                const element = document.documentElement
                if (element.requestFullscreen) {
                    element.requestFullscreen()
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen()
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen()
                } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullScreen()
                }
            }
            this.$store.dispatch('toggleFullScreen')
        },
        logout() {
            this.$confirm({
                title: '退出登录确认',
                content: '您确定退出登录当前账户吗？打开的标签页和个人设置将会保存。',
                onOk: () => {
                    return new Promise((resolve, reject) => {
                        this.$store.dispatch('Logout')
                            .then(res => {
                                this.$message.success(res.message)
                                this.$router.push('/login')
                                resolve()
                            })
                            .catch(e => {
                                reject(e)
                            })
                    })
                }
            })
        },
        changeLang({ key }) {
            this.$store.dispatch('setLang', key)
        },
        toggleSlideBar() {
            this.$store.dispatch('toggleSideBar')
        }
    }
}
</script>

<style lang="less" scoped>
    .basic-header {
        .ky-layout-header {
            z-index: 9;
            top: 0;
            right: 0;
            padding: 0;
            box-shadow: 0 1px 4px rgba(0,21,41,.08);
            transition: width .2s;
            background-color: #fff;

            &-main {
                display: flex;
                margin: 0 auto;
                justify-content: space-between;
                .lf-content {
                    .toggle-icon-wrapper {
                        display: inline-block;
                        height: 64px;
                    }
                }

                .rg-content {
                    display: flex;
                    align-items: center;
                    padding-right: 16px;
                    height: 64px;
                    line-height: 64px;
                    .icon-earth {
                        height: 100%;
                        padding: 0 6px;
                        font-size: 20px;
                        color: #515a6e;
                        line-height: 67px;
                        transition: all .2s;
                        &:hover {
                            background-color: rgba(0,0,0,.025);
                        }
                    }
                    .operation-list {
                        height: 100%;
                        display: flex;
                        line-height: 1;
                        .item {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 36px;
                            height: 100%;
                            text-align: center;
                            transition: all .2s;
                            cursor: pointer;
                            &:hover {
                                background-color: rgba(0,0,0,.025);
                            }
                            .full-screen {
                                font-size: 20px;
                                color: #515a6e;
                            }
                        }
                    }
                    .user-info {
                        display: flex;
                        align-items: center;
                        padding: 0 10px;
                        cursor: pointer;
                        transition: all .2s;
                        &:hover {
                            background-color: rgba(0,0,0,.025);
                        }
                        .name {
                            margin-left: 8px;
                        }
                    }
                }
            }

            .toggle-icon-wrapper {
                cursor: pointer;
                padding: 0 24px;
                height: 64px;
                line-height: 64px;
                font-size: 20px;
                box-sizing: border-box;
                transition: all .2s;
                &:hover {
                    background-color: rgba(0,0,0,.025);
                }
            }
        }
    }
</style>
