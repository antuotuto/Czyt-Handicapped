<template>
<div class="navs">
  <ul :class="active">
    <li>菜单一</li>
    <li>菜单二</li>
    <li>菜单三</li>
    <li>菜单四</li>
  </ul>
  <p>王安安</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: ''
    }
  },
  components: {

  },
  methods: {
    navActive(){
      if(this.active == 'active'){
        this.active = ''
      }else{
        this.active = 'active'
      }
    }
  },
  watch: {},
  created() {},
}
</script>

<style scoped lang="scss">

@media screen and (min-width:900px) {
  .navs {
    height:50px;
    width:100%;
    background: #eee;
    position: absolute;
    top:0;
    left:0;
    button{
      position: absolute;
      top:5px;
      right:5px;
      height:40px;
      width:40px;
      background: #777;
      border: 0;
      border-radius: 3px;
    }
    p{
      position: absolute;
      top:5px;
      left:10px;
      height:40px;
      line-height: 40px;
    }
    ul{
      transition: .3s;
      background: #eee;
      &.active{
        transform: translate3d(0,0,0);
      }
      li{
        padding:0 20px;
        list-style: none;
        line-height: 50px;
        width:50px;
        float: right;
        &:hover{
          background: #000;
        }
      }
    }
  }
}
</style>
