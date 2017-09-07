import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

// axios
import axios from 'axios'
Vue.prototype.$http = axios

// 网页加载进度条
import VueProgressBar from 'vue-progressbar'

const options = {
  color: '#f1fc1b',
  failedColor: '#f6740a',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.7s',
    termination: 800
  },
  autoRevert: true,
  location: 'top',
  inverse: true
}

Vue.use(VueProgressBar, options)



// 默认css样式
import './assets/css/delay.css'

// 自定义样式
import './assets/css/iboot.css'

// 自定义样式
import './assets/font_rtlpub24qcymbo6r/iconfont.css'

// echarts
import echarts from "echarts"

// scss规范
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
}).$mount('#app')
