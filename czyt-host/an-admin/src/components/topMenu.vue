<template>
<!--  -->
<div class="excl">
  <!-- <div class="left-menu"> -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="!this.singer" theme="dark">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-3">
          <span slot="title">选项1</span>
          <el-menu-item index="1-3-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-4">
          <span slot="title">选项2</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-5">
          <span slot="title">选项3</span>
          <el-menu-item index="1-5-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-6">
          <span slot="title">选项4</span>
          <el-menu-item index="1-6-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  <!-- </div> -->
  <div class="navbar-right">
    <router-view></router-view>
  </div>
</div>
<!--  -->
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  components: {},
  data() {
    return {

    }
  },
  computed:{
    ...mapGetters([
      'singer'
    ])
  },
  methods: {
    buyy() {
      if (this.singer == false) {
        this.singer = true
      } else {
        this.singer = false
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    console.log(this.singer);
  },
  watch:{
    change(){
      return this.singer
    }
  },
  mounted() {}
}
</script>

<style scoped>
.excl {
  height: 100%;
  width: 100%;
}

.el-menu-vertical-demo {
  height: 100%;
  float: left;
  width: 200px;
}

.left-menu {
  height: 100%;
  float: left;
}

.el-menu {
  border-radius: 0;
}

.el-menu--collapse {
  width: 64px;
}

.navbar-right {
  overflow: hidden;
  height:100%;
}

.el-menu-item {
  padding-left: 30px !important;
}
</style>
