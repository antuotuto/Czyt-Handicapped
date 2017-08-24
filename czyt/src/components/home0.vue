<template>
<div class="home">
  <div class="home-left ">
    <div class="leftMenu" :class="[this.logo ? true : 'active', '']">
      <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="!this.logo" theme="" :router="true" :unique-opened="true">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">残疾人基础信息</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">残疾人账号信息维护</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">专职委员管理</span>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
          <i class="el-icon-upload"></i>
          <span slot="title">个性化计划管理</span>
        </template>
          <el-menu-item index="4-4-1">个性化计划录入</el-menu-item>
          <el-menu-item index="4-4-2">添加残疾人</el-menu-item>
          <el-menu-item index="4-4-3">计划督查</el-menu-item>
          <el-menu-item index="4-4-4">门店信息复核</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
          <i class="el-icon-upload"></i>
          <span slot="title">个性化服务统计</span>
        </template>
          <el-menu-item index="5-5-1">残疾人受教育程度查询</el-menu-item>
          <el-menu-item index="5-5-2">非农业户口家庭情况查询</el-menu-item>
          <el-menu-item index="5-5-3">农业户口家庭情况查询</el-menu-item>
          <el-menu-item index="5-5-4">未入学原因查询</el-menu-item>
          <el-menu-item index="5-5-5">就业扶贫需求查询</el-menu-item>
          <el-menu-item index="5-5-6">托养服务需求查询</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
  <div class="home-right">
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'logo'
    ])
  },
  methods: {

  },
  watch: {
    change() {
      return this.logo
    },
  },
  created() {},
}
</script>

<style scoped lang="scss">
.home {
    height: 100%;
    overflow: hidden;
}
.home-left {
    float: left;
    height: 100%;
    background: #324157;
}
.home-right {
    overflow: hidden;
    height: 100%;
    padding: 15px 0 15px 15px;
    box-sizing: border-box;
    .right-content{
      overflow-y: scroll;
      padding-right: 15px;
      height:100%;
    }
}

.leftMenu {
    width: 200px;
    transition: 0.5s;
    height: 100%;
    background: #fff;
    .el-menu{
      background: #fff;
    }
    &.active {
        width: 64px;
    }
    .el-menu-item{
      font-weight: 300;
    }
}

::-webkit-scrollbar-track-piece {
    background-color: rgba(0, 0, 0, 0);
    border-radius: 0;
}
</style>
