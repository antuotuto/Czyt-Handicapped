<template>
<!--  -->
<div class="lobby">
  <el-carousel trigger="click" height="300px">
    <el-carousel-item v-for="item in 3" :key="item" interval="2000">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</div>
<!--  -->
</template>

<script>
export default {
  data() {
    return {
      lun:[
        {
          title:'首页布局',
          value:0,
          content:'这是一个介绍'
        },
        {
          value:1,
          title:'首页布局1',
          content:'这是一个介绍'
        }
      ]
    }
  }
}
</script>

<style scoped>

.el-carousel__item {
     background-color: #fff;
  }
</style>
