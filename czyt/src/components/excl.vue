<template>
<!-- 按钮功能表格  -->
<div class="excl">
  <el-table :data="tableData" stripe tooltip-effect="dark" style="width: 100%" @selection-change="">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column width="90" label="序号" align="left" @click.native="test(row)">
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
    <el-table-column width="" label="距离" prop="" align="center">
      <template scope="scope">{{ scope.row.date }}</template>
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
</div>
<!--  -->
</template>

<script>
import {
  table
} from '~/data';

export default {
  components: {},
  data() {
    return {
      tableData: table,
    }
  },
  methods: {

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>


</style>
