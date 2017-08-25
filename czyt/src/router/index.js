import Vue from 'vue'
import Router from 'vue-router'

import App from '~/App.vue'
import NotFoundComponent from '~/pages/404.vue'

const Home = (resolve) => {
  import ('~/components/home.vue').then((module) => {
    resolve(module)
  })
}

const Home0 = (resolve) => {
  import ('~/components/home0.vue').then((module) => {
    resolve(module)
  })
}

const Home1 = (resolve) => {
  import ('~/components/home1.vue').then((module) => {
    resolve(module)
  })
}

const Personalized = (resolve) => {
  import ('~/components/personalized.vue').then((module) => {
    resolve(module)
  })
}

const HcTaHicpinfo = (resolve) => {
  import ('~/components/hcTaHicpinfo.vue').then((module) => {
    resolve(module)
  })
}

const PersonalizedAdmin = (resolve) => {
  import ('~/components/personalizedAdmin.vue').then((module) => {
    resolve(module)
  })
}

const Echarts = (resolve) => {
  import ('~/components/echarts.vue').then((module) => {
    resolve(module)
  })
}

const EducationHandicapped = (resolve) => {
  import ('~/components/educationHandicapped.vue').then((module) => {
    resolve(module)
  })
}

const EducationHandicapped0 = (resolve) => {
  import ('~/components/educationHandicapped0.vue').then((module) => {
    resolve(module)
  })
}

const EducationHandicapped1 = (resolve) => {
  import ('~/components/educationHandicapped1.vue').then((module) => {
    resolve(module)
  })
}

const EducationHandicapped2 = (resolve) => {
  import ('~/components/educationHandicapped2.vue').then((module) => {
    resolve(module)
  })
}


const Admin = (resolve) => {
  import ('~/components/admin.vue').then((module) => {
    resolve(module)
  })
}


// 首页

const Lobby = (resolve) => {
  import ('~/components/lobby.vue').then((module) => {
    resolve(module)
  })
}

const Lobby0 = (resolve) => {
  import ('~/components/lobby0.vue').then((module) => {
    resolve(module)
  })
}

const DesignCode = (resolve) => {
  import ('~/components/designCode.vue').then((module) => {
    resolve(module)
  })
}

// 前端优化

const VueJs = (resolve) => {
  import ('~/components/vueJs.vue').then((module) => {
    resolve(module)
  })
}

const Sass = (resolve) => {
  import ('~/components/sass.vue').then((module) => {
    resolve(module)
  })
}

const VueRouter = (resolve) => {
  import ('~/components/vueRouter.vue').then((module) => {
    resolve(module)
  })
}

const Vuex = (resolve) => {
  import ('~/components/vuex.vue').then((module) => {
    resolve(module)
  })
}

const Element = (resolve) => {
  import ('~/components/element.vue').then((module) => {
    resolve(module)
  })
}

const AntDesign = (resolve) => {
  import ('~/components/antDesign.vue').then((module) => {
    resolve(module)
  })
}

const Echart = (resolve) => {
  import ('~/components/echart.vue').then((module) => {
    resolve(module)
  })
}


Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/Home0'
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
},{
  path: '/Personalized',
  component: Home,
  children: [{
      path: '',
      redirect: '1'
    },
    {
      path: '1',
      component: HcTaHicpinfo
    }, {
      path: '2',
      component: PersonalizedAdmin
    }, {
      path: '3',
      component: Echarts
    }, {
      path: '4-4-1',
      component: EducationHandicapped
    },{
      path: '4-4-2',
      component: EducationHandicapped0
    },{
      path: '4-4-3',
      component: EducationHandicapped1
    },{
      path: '4-4-4',
      component: EducationHandicapped2
    },{
      path: '4-4-5',
      component: EducationHandicapped
    }, {
      path: '*',
      component: NotFoundComponent
    }
  ]
},{
  path: '/Home1',
  component: Home1,
  children: [{
      path: '',
      redirect: '1'
    },
    {
      path: '1',
      component: VueJs
    }, {
      path: '2',
      component: Sass
    }, {
      path: '3',
      component: VueRouter
    }, {
      path: '4',
      component: Vuex
    },{
      path: '5',
      component: Element
    },{
      path: '6',
      component: AntDesign
    },{
      path: '7',
      component: Echart
    },{
      path: '8',
      component: EducationHandicapped
    }, {
      path: '*',
      component: NotFoundComponent
    }
  ]
},{
  path: '/Home0',
  component: Home0,
},{
  path: '/DesignCode',
  component: DesignCode,
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
