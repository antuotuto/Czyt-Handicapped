<template>
<div id="app">
  <header>
    <div class="header-left" :class="{'active':!logo}">
      <div class="logo" @click="menuOn">
        <img src="./assets/logo_hai.png" alt="" :class="{'cantSee':logo}">
        <p v-show="logo">海南残联后台管理系统</p>
      </div>
    </div>
    <div class="header-right">
      <el-col class="navbar">
        <el-menu theme="light" default-active="1" mode="horizontal" :router='true' >
          <el-menu-item index="1" :route="{path:'/topMenu'}">个性化服务系统</el-menu-item>
          <el-menu-item index="2" :route="{path:'/excl'}">基金会系统</el-menu-item>
          <el-menu-item index="3" :route="{path:'/excl1'}">资金管理系统</el-menu-item>
          <el-menu-item index="4" :route="{path:'/excl1'}">志愿者服务系统</el-menu-item>
          <el-menu-item index="5" :route="{path:'/excl1'}">基础平台系统</el-menu-item>
        </el-menu>
      </el-col>
    </div>
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

export default {
  data() {
      return {
        logo: true,
      }
  },
  methods:{
    menuOn(){
      if(this.logo == false){
        this.logo = true
        this.setSinger(true)
      }else{
        this.logo = false
        this.setSinger(false)
      }
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  }
}
</script>

<style>
#app{
  height:100%;
}
body {
  font-family: Helvetica, sans-serif;
}

a {
  text-decoration: none;
  color: #000;
}

header {
  height: 60px;
  position: relative;
  z-index: 1000;
}

.cantSee{
  display: none
}

.header-left {
  text-align: center;
  width: 200px;
  height: 60px;
  float: left;
  background-color: #eef1f6;
  transition: .4s;
}

.logo{
  height:100%;
  width:100%;
  line-height: 60px;
  cursor: default;
  overflow: hidden;
  background: #324157;
}

.logo p{
  color:#fff;
}

.header-left.active{
  width:64px;
}

.header-left a {
  padding-top: 0;
  box-sizing: border-box;
}

.header-left img {
  height: 40px;
  margin-top: 10px;
}

.header-right {
  overflow: hidden;
}

.navbar .el-menu-item.is-active {
  border-bottom: 5px solid #20a0ff;
  background-color: #eef1f6;
}

/*.header-right .el-menu {
  background: #fff;
}*/

::-webkit-scrollbar {
  width: 5px;
  height:5px;
  background: rgba(0, 0, 0, .08);
}

 ::-webkit-scrollbar-thumb {
  background: #a4a4a4;
  border-radius: 100px;
  border-radius: 0;
}

main{
  height:100%;
  width:100%;
  padding-top: 60px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top:0;
}
</style>
