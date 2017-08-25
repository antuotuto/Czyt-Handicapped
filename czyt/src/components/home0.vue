<template>
<!--  -->
<div class="home0">
  <el-carousel height="350px">
    <el-carousel-item v-for="item in 4" :key="item" interval="2000">
      <h3>财资易通设计规范</h3>
      <p>美好的设计是必须的元素</p>
    </el-carousel-item>
  </el-carousel>

  <div class="ui">
    <el-row>
      <el-col :span="12">
        <div class="img-box-1">

        </div>
      </el-col>
      <el-col :span="12">
        <div class="text-box-1">
          <h4>关于设计</h4>
          <p>设计是整个网页的重点</p>
        </div>
      </el-col>
    </el-row>
  </div>

  <div class="functional">
    <el-row>
      <el-col :span="12">
        <div class="text-box-1">
          <h4>前端优化</h4>
          <p>设计是整个网页的重点</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="img-box-1">

        </div>
      </el-col>
    </el-row>
  </div>

  <div class="strongPoint">
    <el-row>
      <el-col :span="12">
        <div class="img-box-1">

        </div>
      </el-col>
      <el-col :span="12">
        <div class="text-box-1">
          <h4>系统体验</h4>
          <p>设计是整个网页的重点</p>
        </div>
      </el-col>
    </el-row>
  </div>

  <div class="optimize">
    <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName" border >
      <el-table-column label="前端优化内容" align="center">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>

  <div class="end">
    <p>Copyright © 2017 财资易通 Inc. All rights reserved.</p>
  </div>
</div>
<!--  -->
</template>


<script>
export default {
  methods: {
    tableRowClassName(row, index) {
      if (index === 1) {
        return 'info-row';
      } else if (index === 3) {
        return 'positive-row';
      }
      return '';
    }
  },
  data() {
    return {
      tableData2: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>

<style scoped lang="scss">
.home0 {
    background: #fff;
    height: 100%;
    overflow-y: scroll;
}

.el-carousel {
    background-color: #2b83f9;
    background-image: linear-gradient(143deg,#2945cb 20%,#2b83f9 81%,#3a9dff);
    color: #fff;
    h3 {
        padding-top: 100px;
        font-size: 50px;
        padding-left: 80px;
        font-weight: 200;
    }
    p {
        font-size: 18px;
        padding-top: 10px;
        width: 200px;
        padding-left: 80px;
        font-weight: 100;
    }
}

.ui {
    width: 1000px;
    margin: 0 auto;
    padding: 100px 0;
    border-bottom: 2px solid #eee;
    .img-box-1 {
        height: 300px;
        background-color: #2b83f9;
    }
    .text-box-1 {
        padding-left: 200px;
        h4{
          padding-top: 50px;
          font-size: 30px;
        }
        p{
          padding-top: 10px;
          font-size: 15px;
          opacity:.8;
        }
    }
}

.functional {
    width: 1000px;
    margin: 0 auto;
    padding: 100px 0;
    border-bottom: 2px solid #eee;
    .img-box-1 {
        height: 300px;
        background-color: #2b83f9;
    }
    .text-box-1 {
    }
}

.strongPoint {
    width: 1000px;
    margin: 0 auto;
    padding: 100px 0;
    .img-box-1 {
        height: 300px;
        background-color: #2b83f9;
    }
    .text-box-1 {
        padding-left: 200px;
    }
}

.optimize {
    width: 1000px;
    padding-bottom: 100px;
    margin: 0 auto;
}

.end{
  background-color: #2b83f9;
  p{
    text-align: center;
    line-height: 50px;
    font-size: 12px;
    color:#fff;
    font-weight: 300;
  }
}
</style>
