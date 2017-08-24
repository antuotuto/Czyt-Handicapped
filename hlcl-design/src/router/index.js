import Vue from 'vue'
import Router from 'vue-router'

import App from '~/App.vue'
import NotFoundComponent from '~/pages/404.vue'


const Home = (resolve) => {
  import ('~/components/home.vue').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/Home'
}, {
  path: '/Home',
  component: Home,
}, {
  path: '*',
  component: NotFoundComponent,
  redirect: '/'
}]

export default new Router({
  mode: 'hash',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return false
  }
})
