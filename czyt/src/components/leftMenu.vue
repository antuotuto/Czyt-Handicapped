<template>
<!--  -->
<div class="leftMenu" :class="[this.logo ? true : 'active', '']">
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="!this.logo" theme="dark" :router="true" :unique-opened="true" >
    <el-menu-item index="1"><i class="el-icon-menu"></i>残疾人基础信息</el-menu-item>
    <el-menu-item index="2"><i class="el-icon-menu"></i>残疾人账号信息维护</el-menu-item>
    <el-menu-item index="3"><i class="el-icon-menu"></i>专职委员管理</el-menu-item>
    <el-submenu index="4">
      <template slot="title">
      <i class="el-icon-upload"></i>
      <span slot="title">个性化计划管理</span>
    </template>
      <el-menu-item index="4-1">个性化计划录入</el-menu-item>
      <el-menu-item index="4-2">添加残疾人</el-menu-item>
      <el-menu-item index="4-3">计划督查</el-menu-item>
      <el-menu-item index="4-4">门店信息复核</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
      <i class="el-icon-upload"></i>
      <span slot="title">个性化服务统计</span>
    </template>
      <el-menu-item index="5-1">残疾人受教育程度查询</el-menu-item>
      <el-menu-item index="5-2">非农业户口家庭情况查询</el-menu-item>
      <el-menu-item index="5-3">农业户口家庭情况查询</el-menu-item>
      <el-menu-item index="5-4">未入学原因查询</el-menu-item>
      <el-menu-item index="5-5">就业扶贫需求查询</el-menu-item>
      <el-menu-item index="5-6">托养服务需求查询</el-menu-item>
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
