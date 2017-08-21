<template>
<!--  -->
<div class="leftMenu" :class="[this.logo ? true : 'active', '']">
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="!this.logo" theme="dark" :router="true" :unique-opened="true" >
    <el-submenu index="1">
      <template slot="title">
      <i class="el-icon-upload"></i>
      <span slot="title">门店信息管理</span>
    </template>
      <el-menu-item index="1-1">门店信息查询</el-menu-item>
      <el-menu-item index="1-2">门店信息新增</el-menu-item>
      <el-menu-item index="1-3">门店信息修改</el-menu-item>
      <el-menu-item index="1-4">门店信息复核</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
      <i class="el-icon-edit"></i>
      <span slot="title">数据源管理</span>
    </template>
      <el-menu-item index="2-1">数据源查询</el-menu-item>
      <el-menu-item index="2-2">数据源新增</el-menu-item>
      <el-menu-item index="2-3">数据源修改</el-menu-item>
      <el-menu-item index="2-4">数据源作废</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
      <i class="el-icon-setting"></i>
      <span slot="title">数据清洗规则</span>
    </template>
      <el-menu-item index="3-1">清洗规则查询</el-menu-item>
      <el-menu-item index="3-2">清洗规则新增</el-menu-item>
      <el-menu-item index="3-3">清洗规则修改</el-menu-item>
      <el-menu-item index="3-4">清洗规则删除</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
      <i class="el-icon-star-on"></i>
      <span slot="title">稽核场景策略管理</span>
    </template>
      <el-menu-item index="4-1">稽核策略查询</el-menu-item>
      <el-menu-item index="4-2">稽核策略新增</el-menu-item>
      <el-menu-item index="4-3">稽核策略修改</el-menu-item>
      <el-menu-item index="4-4">稽核策略复核</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
      <i class="el-icon-time"></i>
      <span slot="title">营收稽核管理</span>
    </template>
      <el-menu-item index="5-1">总额稽核</el-menu-item>
      <el-menu-item index="5-2">明细稽核</el-menu-item>
      <el-menu-item index="5-3">差异处理</el-menu-item>
      <el-menu-item index="5-4">稽核结果查询</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">
      <i class="el-icon-share"></i>
      <span slot="title">稽核报表</span>
    </template>
      <el-menu-item index="6-1">门店业务量统计表</el-menu-item>
      <el-menu-item index="6-2">稽核结果报表</el-menu-item>
      <el-menu-item index="6-3">差异报表</el-menu-item>
      <el-menu-item index="6-4">稽核明细查询</el-menu-item>
    </el-submenu>
  </el-menu>
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
    return {}
  },
  methods: {
  },
  created() {
    console.log(this.logo);
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
  directives: {},
  mounted() {}
}
</script>

<style scoped lang="scss">
.leftMenu {
    width: 200px;
    transition: 0.5s;
    height:100%;
    &.active {
        width: 64px;
    }
}
</style>
