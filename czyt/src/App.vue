<template>
<div id="app">
  <div class="loading" id="loading">
    <div class="dont-wor">
      <p>财资易通正在加载 <i class="el-icon-loading"></i></p>
    </div>
  </div>
  <header  :class="[this.logo ? true : 'active', '']" >
    <p  :class="[this.logo ? true : 'active', '']" >海南残联管理系统</p>
    <button type="button" name="button" @click="menuOn"  :class="[this.logo ? true : 'active', '']" >
      <i class="" :class="{'el-icon-menu':currentView == 'view-main','el-icon-close':currentView != 'view-main'}"></i>
    </button>
    <el-col class="navbar" >
      <el-menu theme="light" default-active="1" mode="horizontal" :router="true">
        <el-menu-item index="1" :route="{path:'/home'}">个性化服务系统</el-menu-item>
        <el-menu-item index="2" :route="{path:'/excl'}">基金会系统</el-menu-item>
        <el-menu-item index="3" :route="{path:'/excl1'}">资金管理系统</el-menu-item>
        <el-menu-item index="4" :route="{path:'/excl1'}">志愿者服务系统</el-menu-item>
        <el-menu-item index="5" :route="{path:'/excl1'}">基础平台系统</el-menu-item>
      </el-menu>
    </el-col>
  </header>
  <main>
    <router-view></router-view>
  </main>
</div>
</template>

<script>
import {
  mapMutations
} from 'vuex'

import {
  mapGetters
} from 'vuex'

export default {
  data() {
    return {
      currentView: 'view-main',
    }
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
    ...mapMutations({
      setLogo: 'SET_LOGO'
    })
  },
  computed: {
    ...mapGetters([
      'logo'
    ])
  },
  components: {}
}
</script>

<style lang="scss">
#app {
    font-family: Helvetica, sans-serif;
    height: 100%;
    background: #eef1f6;
}

header {
    height: 60px;
    padding-left: 260px;
    position: relative;
    z-index: 1000;
    background: #fff;
    transition: 0.5s;
    &.active{
      padding-left: 120px;
    }
    p {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 61px;
        line-height: 60px;
        text-align: center;
        background: #324157;
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
        background: #fff;
    }
    button {
        height: 60px;
        width: 60px;
        font-size: 16px;
        color: #48576a;
        position: absolute;
        left: 200px;
        top: 0;
        background: #E5E9F2;
        border: 0;
        outline: none;
        transition: 0.5s;
        &:hover{
          background: #8492A6;
          color:#fff;
        }
        &.active{
          left:64px;
        }
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

.navbar .el-menu-item.is-active {
    border-bottom: 5px solid #20a0ff;
    background-color: #eef1f6;
}

::-webkit-scrollbar {
    width: 4px;
    background: rgba(0, 0, 0, 0.08);
}

::-webkit-scrollbar-thumb {
    background: #a4a4a4;
    border-radius: 0;
}


.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100000;
  background: #1D8CE0;
  text-align: center;
  line-height: 200px;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dont-wor p {
  font-size: 15px;
  height: 65px;
  line-height: 65px;
  width: 200px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(27, 55, 75, 0.08);
  text-align: center;
  font-weight: bold;
  color: #777;
}

.hidden {
  display: none;
}



</style>
