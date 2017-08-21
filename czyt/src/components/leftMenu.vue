<template>
<!--  -->
<div class="leftMenu" :class="[this.logo ? true : 'active', '']">
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo"  :collapse="!this.logo" theme="dark">
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
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
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
    return {
    }
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
  watch:{
    change(){
      return this.logo
    },
  },
  directives: {},
  mounted() {}
}
</script>

<style scoped lang="scss">
.leftMenu{
  width:200px;
  transition: .5s;
  &.active{
    width:64px;
  }
}

</style>
