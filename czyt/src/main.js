import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'


// 默认css样式
import './assets/css/delay.css'

// 自定义样式
import './assets/css/iboot.css'

// 自定义样式
import './assets/font_rtlpub24qcymbo6r/iconfont.css'

// echarts
import echarts from "echarts"

// import './assets/styles/main/main.scss'

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
