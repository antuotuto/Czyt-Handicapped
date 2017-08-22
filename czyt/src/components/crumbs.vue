<template>
<!--  -->
<div class="crumbs">
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '1' }">{{crumbs[0]}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{crumbs[1]}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{crumbs[2]}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{crumbs[3]}}</el-breadcrumb-item>
  </el-breadcrumb>
</div>
<!--  -->
</template>

<script>

export default {
    data() {
        return {

        }
    },
    props:["crumbs"]
}
</script>

<style scoped>
  .crumbs{
    padding: 15px ;
    background: #fff;
    margin-bottom: 10px;
  }

</style>
