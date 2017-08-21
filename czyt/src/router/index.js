import Vue from 'vue'
import Router from 'vue-router'

import App from '~/App.vue'
import Home from '~/components/home.vue'
import Admin from '~/components/admin.vue'
import NotFoundComponent from '~/pages/404.vue'

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: Home,
  children: [{
      path: '',
      redirect: '1'
    },
    {
      path: '1',
      component: Admin
    }, {
      path: '2',
      component: Admin
    }, {
      path: '3',
      component: Admin
    }, {
      path: '4',
      component: Admin
    }, {
      path: '*',
      component: NotFoundComponent
    }
  ]
}, {
  path: '*',
  component: NotFoundComponent
}]

export default new Router({
  mode: 'hash',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return false
  }
})
