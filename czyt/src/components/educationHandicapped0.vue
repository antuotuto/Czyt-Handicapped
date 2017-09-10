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

    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
      xAxisData.push('an' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    myChart2.setOption({
      title: {
        text: ''
      },
      legend: {
        data: ['bar', 'bar2'],
        align: 'left'
      },
      toolbox: {
        // y: 'bottom',
        feature: {
          magicType: {
            type: ['stack', 'tiled']
          },
          dataView: {},
          saveAsImage: {
            pixelRatio: 2
          }
        }
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {},
      series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function(idx) {
          return idx * 10;
        }
      }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function(idx) {
          return idx * 10 + 100;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function(idx) {
        return idx * 5;
      }
    });
  },
  components: {}
}
</script>

<style media="screen">

</style>
