<template>
<!--  -->
<div class="hcTaHicpinfo content-box">
  <!-- 面包屑 -->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Personalized' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  <!--  -->

  <!-- 手风琴树 -->
    <div class="content-tree">
      <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>
    </div>
  <!--  -->

  <!-- 搜索条件  -->
  <div class="content-search">
    <el-row :gutter="20">
        <el-col :span="6">
            <el-input v-model="input" placeholder="请输入内容"></el-input>

        </el-col>
        <el-col :span="6">
          <el-input v-model="input" placeholder="请输入内容"></el-input>

        </el-col>
        <el-col :span="6">
          <el-input v-model="input" placeholder="请输入内容"></el-input>

        </el-col>
        <el-col :span="6">
          <el-input v-model="input" placeholder="请输入内容"></el-input>

        </el-col>
    </el-row>
    <el-row :gutter="20" class="content-top">
        <el-col :span="6">
            <el-button type="primary" icon="search">搜 索</el-button>

        </el-col>
        <el-col :span="6">

        </el-col>
        <el-col :span="6">

        </el-col>
        <el-col :span="6">

        </el-col>
    </el-row>

    <!-- 表格 -->
    <el-table :data="tableData" stripe tooltip-effect="dark" style="width: 100%" @selection-change=""  class="content-top" >
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column width="90" label="序号" align="left" @click.native="test(row)" fixed>
        <template scope="scope">
          wangan
              </template>
      </el-table-column>
      <el-table-column width="" prop="" label="位置" align="left">
        <template scope="scope">
          就是这样的
              </template>
      </el-table-column>
      <el-table-column width="" prop="" label="申请情况" align="center">
        <template scope="scope">
          确认
              </template>
      </el-table-column>
      <el-table-column width="" label="姓名" prop="admin" align="center">
      </el-table-column>
      <el-table-column width="" label="年龄" prop="city" align="center">
      </el-table-column>
      <el-table-column width="" label="喜欢" prop="" align="center">
        <template scope="scope">{{ scope.row.status }}</template>
      </el-table-column>
      </el-table-column>
      <el-table-column label="操作" width="140" align="center">
        <template scope="scope">
       <el-button
         size="small"
         @click="handleEdit(scope.$index, scope.row)">查看</el-button>
       <el-button
         size="small"
         type="primary"
         @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
     </template>
      </el-table-column>
    </el-table>
    <!--  -->

    <el-row :gutter="20" class="content-top">
      <el-col :span="6">
        <el-button type="danger" icon="delete">删除</el-button>
      </el-col>
      <el-col :span="18" class="content-paging">
        <el-pagination class="pagination" :small="true" @size-change="" @current-change="" :current-page="2" :page-size="10" layout="total, prev, pager, next, jumper" :total="100">
        </el-pagination>
      </el-col>
    </el-row>

  </div>

  <!--  -->

  <!-- 表格 -->

  <!--  -->






</div>
<!--  -->
</template>

<script>
import {
  table
} from '~/data';

export default {
  data() {
    return {
      // 手风琴
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      //
      // 表单
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      input:'',
      //
      // 表格
      tableData: table,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style scoped>

</style>
