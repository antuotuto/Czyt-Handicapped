<template>
<div id="app">
  <header  :class="[this.logo ? true : 'active', '']" >
    <router-link to="/home">
      <p  :class="[this.logo ? true : 'active', '']" >海南残联管理系统</p>
    </router-link>
    <button type="button" name="button" @click="menuOn"  :class="[this.logo ? true : 'active', '']" >
      <i class="" :class="{'el-icon-menu':currentView == 'view-main','el-icon-close':currentView != 'view-main'}"></i>
    </button>
    <el-col class="navbar" >
      <el-menu theme="light" default-active="1" mode="horizontal" :router="true">
        <el-menu-item index="1" :route="{path:'/personalized'}">个性化服务系统</el-menu-item>
        <el-menu-item index="2" :route="{path:'/home'}">基金会系统</el-menu-item>
        <el-menu-item index="3" :route="{path:'/excl1'}">资金管理系统</el-menu-item>
        <el-menu-item index="4" :route="{path:'/excl1'}">志愿者服务系统</el-menu-item>
        <el-menu-item index="5" :route="{path:'/excl1'}">基础平台系统</el-menu-item>
      </el-menu>
    </el-col>
    <ul class="admin-right">
      <li>王安安</li><li><i class="el-icon-share"></i></li>
    </ul>
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
    .admin-right{
      position: absolute;
      right:0;
      top:0;
      li{
        height:60px;
        line-height: 60px;
        list-style: none;
        display: inline-block;
        padding: 0 25px;
        background: #E5E9F2;
      }
    }
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
</style>
