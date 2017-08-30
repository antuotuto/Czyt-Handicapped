import Vue from 'vue'
import Router from 'vue-router'

import App from '~/App.vue'
import NotFoundComponent from '~/pages/404.vue'

const Home = (resolve) => {
  import ('~/components/home.vue').then((module) => {
    resolve(module)
  })
}

const Crumbs = (resolve) => {
  import ('~/components/crumbs.vue').then((module) => {
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

const Login = (resolve) => {
  import ('~/components/login.vue').then((module) => {
    resolve(module)
  })
}


Vue.use(Router)

const routes = [{
    path: '/',
    component: Login,
    name: '登录',
    hidden: true
  }, {
    path: '/home',
    name: '表格组件',
    iconCls: 'el-icon-message',
    component: Home,
    children: [{
        path: '/main',
        component: Echart,
        name: '主页',
        hidden: true
      },
      {
        path: '/table',
        component: HcTaHicpinfo,
        name: '功能表格'
      },
      {
        path: '/personalizedAdmin',
        component: PersonalizedAdmin,
        name: '查找表格'
      },
      {
        path: '/admin',
        component: Admin,
        name: '表格设计'
      }
    ]
  },
  {
    path: '/home',
    name: '空余表格',
    iconCls: 'el-icon-message',
    component: Home,
    children: [{
        path: '/lobby',
        component: Admin,
        name: '空余表格1',
      },
      {
        path: '/table1',
        component: Lobby0,
        name: '空余表格2'
      },
    ]
  },
  {
    path: '/home',
    name: 'Echarts',
    iconCls: 'el-icon-message',
    component: Home,
    children: [{
        path: '/educationHandicapped0',
        component: EducationHandicapped0,
        name: '线性表格',
      },
      {
        path: '/educationHandicapped1',
        component: EducationHandicapped1,
        name: '圆形表格'
      },
      {
        path: '/educationHandicapped2',
        component: EducationHandicapped2,
        name: '玫瑰图'
      },
    ]
  },
  {
    path: '/designCode',
    component: DesignCode,
    name: '',
    iconCls: 'el-icon-message',
    hidden: true,
    leaf: true,
  },
  {
    path: '/404',
    component: NotFoundComponent,
    name: '',
    hidden: true
  },
  {
    path: '*',
    hidden: true,
    redirect: {
      path: '/404'
    }
  }
]

export default new Router({
  mode: 'hash',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return false
  }
})
