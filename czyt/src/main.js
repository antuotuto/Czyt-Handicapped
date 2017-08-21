import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

// 默认css样式
import './assets/css/delay.css'

// 路由
import router from './router'

// vuex
import store from './store'


Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
