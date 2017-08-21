<template>
<!--  -->
<div class="paging">

  <el-row :gutter="20">
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
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  watch: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  directives: {},
  created() {},
  mounted() {}
}
</script>

<style scoped>
.paging {
  margin: 15px 0;
}

.content-paging {
  text-align: right;
}
</style>
