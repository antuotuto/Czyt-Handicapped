<template>
<!--  -->
<div class="dateBox">
  <!-- 日期框 -->
  <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
  </el-date-picker>
  <!--  -->
</div>
<!--  -->
</template>

<script>
export default {
  data() {
    return {
      pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
      value1: '',
    };
  }
};
</script>

<style scoped>


</style>
