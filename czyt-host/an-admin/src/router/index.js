import Vue from 'vue'
import Router from 'vue-router'

import Job from '~/components/job.vue'
import TopMenu from '~/components/topMenu.vue'
import LeftMenu from '~/components/leftMenu.vue'
import NotFoundComponent from '~/pages/404.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/topMenu'
    },{
        path: '/topMenu',
        component: TopMenu,
        children: [
            {
                path: '',
                redirect: '1'
            },
            {
                path: '1',
                component: LeftMenu
            }, {
                path: '2',
                component: LeftMenu
            }, {
                path: '3',
                component: LeftMenu
            },{
                path: '4',
                component: LeftMenu
            },{
                path: '*',
                component: NotFoundComponent
            }
        ]
    },{
        path: '*',
        component: NotFoundComponent
    }
]

export default new Router({
    mode: 'hash',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return false
    }
})
