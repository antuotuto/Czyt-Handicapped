<template>
<!--  -->
<div class="an">

  <plan job="1"></plan>

  <p @click="antuotuo">anan</p>

  <ul >
    <li v-for="item in an">
      {{ item.list }}
    </li>
  </ul>


</div>
<!--  -->
</template>

<script>
import plan from './plan.vue'

export default {
  data() {
    return {
      an:null
    }
  },
  methods: {
    antuotuo() {
      self = this
      this.$http({
        method: 'post',
        url: 'http://192.168.16.75:8800/manager/selectCurrencies',
        data: {
          name: 'xiaoming',
          info: '12'
        }
      }).then(function(response) {
        console.log(response.data);
        self.an = response.data
        console.log(self.an);
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
