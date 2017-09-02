<template>
<div id="app">
  <header :class="[this.logo ? true : 'active', '']">
    <router-link to="/">
      <p :class="[this.logo ? true : 'active', '']">海南残联管理系统</p>
    </router-link>
    <button type="button" name="button" @click="menuOn" :class="[this.logo ? true : 'active', '']">
      <i class="" :class="{'el-icon-caret-left':currentView == 'view-main','el-icon-menu':currentView != 'view-main'}"></i>
    </button>

    <el-col class="navbar">
      <el-menu theme="light" default-active="1" mode="horizontal" :router="true">
        <el-menu-item index="1" :route="{path:'/home'}">首页展示</el-menu-item>
        <el-menu-item index="2" :route="{path:'/designCode'}">关于设计</el-menu-item>
        <el-menu-item index="3" :route="{path:'/Home1'}">前端优化</el-menu-item>
        <el-menu-item index="4" :route="{path:'/excl1'}">后期修改</el-menu-item>
        <el-menu-item index="5" :route="{path:'/personalized'}">系统体验</el-menu-item>
      </el-menu>
    </el-col>

    <ul class="admin-right">
      <li>
        <screenfull class='screenfull'></screenfull>
      </li>
      <li>王安安</li>
      <li><i class="el-icon-close"></i></li>
    </ul>
  </header>
  <main>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </main>

  <el-dialog title="新增功能" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose">
    <span class="new">新增 <span>表格可选择显示</span> 功能 见：系统体验 / 残疾人基础信息</span>
    <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>

  <!-- set progressbar -->
  <vue-progress-bar></vue-progress-bar>

</div>
</template>


<script>
import screenfull from '~/components/screenfull.vue';


import {
  mapMutations
} from 'vuex'

import {
  mapGetters
} from 'vuex'

export default {
  data() {
    return {
      dialogVisible: false,
      currentView: 'view-down',
      options: [{
        value: '选项1',
        label: '个性化服务'
      }, {
        value: '选项2',
        label: '残疾人管理'
      }, {
        value: '选项3',
        label: '普通人'
      }, {
        value: '选项4',
        label: '菜单管理'
      }, {
        value: '选项5',
        label: '人员管理'
      }],
      value: '选项1'
    }
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  },
  methods: {
    menuOn() {
      if (this.currentView == 'view-main') {
        this.currentView = 'view-down'
        this.setLogo(false)
      } else {
        this.currentView = 'view-main'
        this.setLogo(true)
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    ...mapMutations({
      setLogo: 'SET_LOGO'
    })
  },
  computed: {
    ...mapGetters([
      'logo'
    ])
  },
  components: {
    screenfull,
  }
}
</script>

<style lang="scss">
.new {
    line-height: 20px;
    span {
        color: red;
    }
}
#app {
    font-family: Helvetica, sans-serif;
    height: 100%;
    background: #F2F2F2;
}

header {
    height: 60px;
    padding-left: 260px;
    position: relative;
    z-index: 1000;
    transition: 0.5s;
    .admin-right {
        position: absolute;
        right: 0;
        top: 0;
        li {
            height: 60px;
            line-height: 60px;
            list-style: none;
            display: inline-block;
            padding: 0 20px;
            color: #fff;
            font-weight: 300;
        }
    }
    &.active {
        padding-left: 120px;
    }
    p {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background-color: #2945cb;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        transition: 0.5s;
        overflow: hidden;
        &.active {
            width: 64px;
        }
    }
    .el-menu {
        background-color: #2b83f9;
        background-image: linear-gradient(143deg,#2945cb 20%,#2b83f9 81%,#3a9dff);
    }
    button {
        height: 60px;
        width: 60px;
        font-size: 16px;
        color: #fff;
        position: absolute;
        left: 200px;
        top: 0;
        background: #2945cb;
        border: 0;
        outline: none;
        transition: 0.5s;
        &:hover {
            background: #2b83f9;
        }
        &.active {
            left: 64px;
        }
    }
}

.screenfull {}

.selectionSystem {
    padding: 5px;
    input {
        height: 40px;
        width: 300px;
    }
    span {
        font-size: 14px;
        padding-left: 50px;
    }
}

main {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 60px;
    box-sizing: border-box;
}

.navbar .el-menu-item {
    color: #fff;
    opacity: 0.69;
    font-weight: 300;
}

.navbar .el-menu-item.is-active {
    border-bottom: 5px solid #4fe3c1;
    opacity: 1;
}
.navbar .el-menu-item:hover {
    background-color: #2945cb;
    border-bottom: 5px solid #4fe3c1;
}

::-webkit-scrollbar {
    width: 4px;
    background: rgba(0, 0, 0, 0.08);
}

::-webkit-scrollbar-thumb {
    background: #a4a4a4;
    border-radius: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.4s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
