<template>
<!--  -->
<div class="an">
  <!-- 表格 -->
  <el-table :data="list" stripe tooltip-effect="dark" style="width: 100%" @selection-change="selsChange" v-loading="listLoading">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column width="90" label="序号" align="left" @click.native="test(row)">
      <template scope="scope">{{ scope.row.id }}</template>
    </el-table-column>
    <el-table-column width="" prop="currencyCd" label="位置" align="left">
    </el-table-column>
    <el-table-column width="" prop="currencyNm" label="申请情况" align="center" @click="handleEdit(scope.$index, scope.row)">
    </el-table-column>
    <el-table-column width="" label="姓名" prop="createDt" align="center">
    </el-table-column>
    <el-table-column width="" label="年龄" prop="sn" align="center">
    </el-table-column>
    <el-table-column width="" label="喜欢" prop="uuid" align="center">
    </el-table-column>
    </el-table-column>
    <el-table-column label="操作" width="180" align="center">
      <template scope="scope">
     <el-button
       size="small"
       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
     <el-button
       size="small"
       type="primary"
       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
   </template>
    </el-table-column>
  </el-table>
  <!--  -->

  <!--工具条-->
  <el-col :span="24" class="toolbar">
    <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="10" layout="total, prev, pager, next, jumper" :total="total" style="float:right;">
    </el-pagination>
  </el-col>
  <!--  -->

  <!--编辑界面-->
  <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
    <el-form :model="editForm" label-width="80px" ref="editForm">
      <el-form-item label="姓名" prop="id">
        <el-input v-model="editForm.id" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="位置" prop="currencyCd">
        <el-input v-model="editForm.currencyCd" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="申请情况" prop="currencyNm">
        <el-input v-model="editForm.currencyNm" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click.native="editFormVisible = false">取消</el-button>
      <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
    </div>
  </el-dialog>
  <!--  -->

</div>
<!--  -->
</template>

<script>
import plan from './plan.vue'
export default {
  data() {
    return {
      list: null,
      pages: null,
      filters: {
        name: ''
      },
      users: [],
      total: 0,
      page: 1,
      currentPage3: 5,
      listLoading: false,
      sels: [],
      // 查看框
      editFormVisible: false,
      //编辑界面数据
      editForm: {
        id: 0,
        currencyCd: '',
        currencyNm: -1,
      },
      editLoading: false,
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 加载数据
    getUsers() {
      let self = this;
      let para = {
        page: this.page,
        name: this.filters.name
      };
      this.listLoading = true
      this.$http({
        method: 'post',
        url: 'http://192.168.16.75:8800/manager/selectCurrencies',
        data: {
          pageNo: self.page,
          pageSize: '10'
        }
      }).then(function(response) {
        console.log(response.data);
        self.list = response.data.data.list
        self.pages = response.data.data.pagination
        self.listLoading = false
        self.total = self.pages.totalCount
        self.users = self.pages.totalPage
      });
    },
    //批量删除
    batchRemove: function() {
      var ids = this.sels.map(item => item.uuid).toString();
      console.log(ids);
      this.$confirm('确认删除选中记录吗？', '提示', {
        type: 'warning'
      }).then(() => {
        this.listLoading = true;
        console.log(1);
        this.$http({
          method: 'post',
          url: 'http://192.168.16.75:8800/manager/deleteCurrency',
          data: {
            ids: "e4f6435bb4c34510948dcc48d66bdf53"
          }
        }).then(function(response) {
          console.log(1);
          this.listLoading = false;
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.getUsers();
        });
      }).catch(() => {

      });
    },
    // 多选
    selsChange: function(sels) {
      this.sels = sels;
    },
    // 切页
    handleCurrentChange(val) {
      this.page = val;
      this.getUsers();
    },
    // 新增页面
    handleEdit: function(index, row) {
      this.editFormVisible = true;
      this.editForm = Object.assign({}, row);
    },
  },
  created() {

  },
  mounted() {
    this.getUsers();
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

.toolbar {
  padding: 15px 0;
}
</style>
