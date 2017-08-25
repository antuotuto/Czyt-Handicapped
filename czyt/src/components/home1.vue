<template>
<div class="home">
  <div class="home-left">
    <div class="leftMenu" :class="[this.logo ? true : 'active', '']">
      <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="!this.logo" theme="" :router="true" :unique-opened="true">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">Vue.js</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">Sass</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">Vue-router</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">Vuex</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-menu"></i>
          <span slot="title">Element</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-menu"></i>
          <span slot="title">Ant design</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-menu"></i>
          <span slot="title">Echarts</span>
        </el-menu-item>

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
  watch: {
    change() {
      return this.logo
    },
  },
  created() {},
}
</script>

<style scoped lang="scss">
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
    padding-left: 5px;
    box-sizing: border-box;
    .right-content{
      overflow-y: scroll;
      height:100%;
    }
}

.el-menu-item.is-active{
  border-right: 2px solid #39f;
  color:#39f;
}

::-webkit-scrollbar-track-piece {
    background-color: rgba(0, 0, 0, 0);
    border-radius: 0;
}
</style>
