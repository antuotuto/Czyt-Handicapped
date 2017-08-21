import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import store from './store'

Vue.use(ElementUI)

// 路由
import router from './router'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
