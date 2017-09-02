<template>
<!--  -->
<div class="an">


  <el-table :data="an" stripe tooltip-effect="dark" style="width: 100%" @selection-change="selsChange" v-loading="listLoading">
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

  <!--工具条-->
  <!-- <el-col :span="24" class="toolbar">
    <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
    <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
    </el-pagination>
  </el-col> -->

  <!--编辑界面-->
  <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
    <el-form :model="editForm" label-width="80px"  ref="editForm">
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



</div>
<!--  -->
</template>

<script>
import plan from './plan.vue'
export default {
  data() {
    return {
      an: null,
      filters: {
        name: ''
      },
      users: [],
      total: 0,
      page: 1,
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
    getUsers() {
      let self = this;
      // this.$Progress.start()
      this.listLoading = true
      this.$http({
        method: 'post',
        url: 'http://192.168.16.75:8800/manager/selectCurrencies',
        data: {
          pageNo: '1',
          pageSize: '10'
        }
      }).then(function(response) {
        self.an = response.data.data.list
        // this.$Progress.finish()
        self.listLoading = false
      });
      // this.$Progress.fail()
    },
    selsChange: function(sels) {
      this.sels = sels;
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getUsers();
    },
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
</style>
