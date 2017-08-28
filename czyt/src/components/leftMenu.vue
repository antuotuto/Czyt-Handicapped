<template>
<!--  -->
<div class="leftMenu" :class="[this.logo ? true : 'active', '']">
  <el-menu :default-active="$route.path" unique-opened router class="el-menu-vertical-demo" :collapse="!this.logo" theme="" :router="true" :unique-opened="true">
      <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
        <el-submenu  :index="index+''" v-if="!item.leaf">
          <template slot="title">
            <i :class="item.iconCls"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
        </el-submenu>
        
        <el-menu-item v-if="item.leaf&&item.children.length>0"  :index="item.children[0].path">
          <i :class="item.iconCls"></i>
          <span slot="title">{{item.children[0].name}}</span>
        </el-menu-item>

      </template>
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
    height: 100%;
    background: #fff;
    .el-menu {
        background: #fff;
    }
    &.active {
        width: 64px;
    }
    .el-menu-item {
        font-weight: 300;
    }
}

.an {
    }
</style>
