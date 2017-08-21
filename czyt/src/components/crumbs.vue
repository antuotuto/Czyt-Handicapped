<template>
<!--  -->
<div class="crumbs">
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/topMenu' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</div>
<!--  -->
</template>

<script>

export default {
    name: 'crumbs',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
  .crumbs{
    padding: 15px ;
    background: #fff;
    margin-bottom: 10px;
  }




</style>
