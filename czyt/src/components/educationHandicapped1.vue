<template>
<div class="content-box">
  <div class="">

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
    let myChart2 = echarts.init(document.getElementById('main1'));

    myChart2.setOption({
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [{
            value: 335,
            name: '直接访问'
          },
          {
            value: 310,
            name: '邮件营销'
          },
          {
            value: 234,
            name: '联盟广告'
          },
          {
            value: 135,
            name: '视频广告'
          },
          {
            value: 1548,
            name: '搜索引擎'
          }
        ]
      }]
    });
  },
  components: {}
}
</script>

<style media="screen">

</style>
