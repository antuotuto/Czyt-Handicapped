<template>
<div class="content-box">
  <div class="">
    <div class="content-echarts-box">
      <div class="card-header">
        <span>基金会人员请假统计</span>
      </div>
      <div class="echarts-excl" id="main">

      </div>
    </div>

    <div class="content-echarts-box">
      <div class="card-header">
        <span>基金会人员请假统计</span>
      </div>
      <div class="echarts-excl" id="main1">

      </div>
    </div>
  </div>
</div>
</template>

<script>
// ECharts模块全部引入
import echarts from "echarts/lib/echarts";

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
        data: ["王安安", "孙瑶瑶", "王易", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });

    let myChart2 = echarts.init(document.getElementById('main1'));
    myChart2.setOption({
      series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        data: [{
            value: 235,
            name: '视频广告'
          },
          {
            value: 274,
            name: '联盟广告'
          },
          {
            value: 310,
            name: '邮件营销'
          },
          {
            value: 335,
            name: '直接访问'
          },
          {
            value: 400,
            name: '搜索引擎'
          }
        ]
      }]
    })
  },
  components: {}
}
</script>

<style media="screen">

</style>
