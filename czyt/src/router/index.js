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
  path: '/Home0',
  component: Home0,
  children: [{
      path: '',
      redirect: '1'
    },
    {
      path: '1',
      component: Lobby
    }, {
      path: '2',
      component: DesignCode
    }, {
      path: '3',
      component: Lobby0
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
