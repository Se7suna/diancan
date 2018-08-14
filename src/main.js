import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick'
import router from './router/index'
import store from './store'
import './mock/mock.js'
import 'lib-flexible'
new Vue({
    el: '#app',
    // 渲染函数
    render: h => h(App),
    mounted () {
        // 移动端快速点击
        if ('addEventListener' in document) {
          document.addEventListener('DOMContentLoaded', function () {
            FastClick.attach(document.body)
          }, false)
        }
        // 异步获取首页数据
        this.$store.dispatch('getAddress')
        this.$store.dispatch('getFoodType')
        this.$store.dispatch('getShops')
    },
    router,
    store
})
