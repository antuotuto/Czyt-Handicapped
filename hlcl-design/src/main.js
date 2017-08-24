import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

import './assets/css/delay.css'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

// 路由
import router from './router'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
