<template>
    <a-locale-provider :locale="zh_CN">
        <div id="app">
            <div>
                <a-button type="primary">
                    Primary
                </a-button>
                <a-pagination size="small" :total="50" show-size-changer show-quick-jumper />
            </div>
            <HelloWorld msg="Welcome to Your Vue.js App" />
        </div>
    </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
    name: 'App',
    data() {
        return {
            zh_CN
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
