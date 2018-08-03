import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import FastClick from 'fastclick'
import store from './store'
import './mock/mock.js'
import 'lib-flexible'
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
    mounted () {
        if ('addEventListener' in document) {
          document.addEventListener('DOMContentLoaded', function () {
            FastClick.attach(document.body)
          }, false)
        }
    },
    router,
    store
})
