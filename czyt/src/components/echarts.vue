<template>
<div class="content-box">
  <div class="">
    <div class="content-echarts-box">
      <div class="card-header">
        <span>基金会人员请假统计</span>
      </div>
      <div class="excl" id="main">

      </div>
    </div>

    <div class="content-echarts-box">
      <div class="card-header">
        <span>基金会人员请假统计</span>
      </div>
      <div class="excl" id="main1">

      </div>
    </div>
  </div>
</div>
</template>

<script>
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/lines";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/toolbox";

export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    let myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      title: {
        text: ''
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  },
  components: {}
}
</script>

<style media="screen">
.excl {
  height: 500px;
  background: #fff;
  background: #fff !important;
  padding: 40px 15px;
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: -25px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
}

.card-header {
  background: linear-gradient(60deg, #66bb6a, #43a047);
  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4);
  text-align: center;
  color: #fff;
  margin: 0 auto;
  border-radius: 3px;
  letter-spacing: 2px;
  padding: 15px;
  position: relative;
  z-index: 500;
  width: 250px;
}

.card-header span {
  font-size: 16px;
}

.content-echarts-box{
  margin-top: 15px;
}
</style>
