<template>
<!--  -->
<div class="an">

  <plan job="1"></plan>

  <p @click="antuotuo">anan</p>



</div>
<!--  -->
</template>

<script>
import plan from './plan.vue'

import {
  items
} from '~/data'

export default {
  data() {
    return {
      an:null
    }
  },
  methods: {
    antuotuo() {
      this.$http({
        method: 'post',
        url: 'http://192.168.16.75:8800/manager/selectCurrencies',
        data: {
          name: 'xiaoming',
          info: '12'
        }
      }).then(function(response) {
        console.log(response.data);
        this.an = response.data
        console.log(this.an);
      });
    },
  },
  components: {
    plan
  }
}
</script>

<style scoped>
.an {
  padding: 15px;
}
</style>
