<template>
<div class="home">
  <div class="home-left">
    <leftMenu></leftMenu>
  </div>
  <div class="home-right">
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import leftMenu from '~/components/leftMenu.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    leftMenu
  },
  methods: {

  },
  watch: {},
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

::-webkit-scrollbar-track-piece {
    background-color: rgba(0, 0, 0, 0);
    border-radius: 0;
}
</style>
