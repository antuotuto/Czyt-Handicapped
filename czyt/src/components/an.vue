<template>
<!--  -->
<div class="an">

  <!--工具条-->
  <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
    <el-form :inline="true" :model="filters">
      <el-form-item>
        <el-input v-model="filters.currencyCd" placeholder="位置"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="getUsers">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleAdd">新增</el-button>
      </el-form-item>
    </el-form>
  </el-col>
  <!--  -->

  <!-- 表格 -->
  <el-table :data="list" stripe tooltip-effect="dark" style="width: 100%" @selection-change="selsChange" v-loading="listLoading">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column width="90" label="序号" align="left" @click.native="test(row)">
      <template scope="scope">{{ scope.row.id }}</template>
    </el-table-column>
    <el-table-column width="" prop="currencyCd" label="位置" align="left">
    </el-table-column>
    <el-table-column width="" prop="currencyNm" label="申请情况" align="center">
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

  <!--新增界面-->
  <el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
    <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
      <el-form-item label="姓名" prop="id">
        <el-input v-model="addForm.id" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="位置" prop="currencyCd">
        <el-input v-model="addForm.currencyCd" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="申请情况" prop="currencyNm">
        <el-input v-model="addForm.currencyNm" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click.native="addFormVisible = false">取消</el-button>
      <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
    </div>
  </el-dialog>
  <!--  -->

</div>
<!--  -->
</template>

<script>

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
      currentPage3: 1,
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
      //新增界面数据
      addForm: {
        id: 0,
        currencyCd: '',
        currencyNm: -1,
      },
      addFormVisible: false, //新增界面是否显示
      // 规则
      addFormRules: {
        id: [{
          required: true,
          message: '不能为空',
          trigger: 'blur'
        }]
      },
      addLoading: false,
      filters: {
        currencyCd: ''
      },
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 加载数据
    getUsers() {
      self = this;
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
          pageSize: '10',
          currencyCd: self.filters
        }
      }).then(function(response) {
        self.list = response.data.data.list
        self.pages = response.data.data.pagination
        self.listLoading = false
        self.total = self.pages.totalCount
        self.users = self.pages.totalPage
      });
    },
    // 查找数据
    findUsers() {
      let self = this;
      let name = this.filters.name;
      this.listLoading = true
      this.$http({
        method: 'post',
        url: 'http://192.168.16.75:8800/manager/selectCurrencyById',
        data: {
          names: name
        }
      }).then(function(response) {
        self.list = response.data.data.list
        self.pages = response.data.data.pagination
        self.listLoading = false
        self.total = self.pages.totalCount
        self.users = self.pages.totalPage
      });
    },
    //批量删除
    batchRemove: function() {
      self = this;
      var uuid = this.sels.map(item => item.uuid).toString();
      console.log(uuid);
      this.$confirm('确认删除选中记录吗？', '提示', {
        type: 'warning'
      }).then(() => {
        self.listLoading = true;
        this.$http({
          method: 'post',
          url: 'http://192.168.16.75:8800/manager/deleteCurrency?uuid=' + uuid,
        }).then(function(response) {
          console.log('正确');
          self.listLoading = false;
          self.$message({
            message: '删除成功',
            type: 'success'
          });
          self.getUsers();
        });
      }).catch(() => {

      });
    },
    //编辑
    editSubmit: function() {
      axios.post(this.registerUrl, this.editForm, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    editSubmit: function() {
      let editForm = this.editForm;
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            this.editLoading = true;
            this.$http({
              method: 'post',
              url: 'http://192.168.16.75:8800/manager/updateCurrency',
              data: editForm
            }).then((res) => {
              this.editLoading = false;
              this.$message({
                message: '提交成功',
                type: 'success'
              });
              this.$refs['editForm'].resetFields();
              this.editFormVisible = false;
              this.getUsers();
            });
          });
        }
      });
    },
    //显示新增界面
    handleAdd: function() {
      this.addFormVisible = true;
      this.addForm = {
        id: 111,
        currencyCd: '2112',
        currencyNm: -1,
      };
    },
    addSubmit() {
      let addForm = this.addForm;
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            this.editLoading = true;
            this.$http({
              method: 'post',
              url: 'http://192.168.16.75:8800/manager/saveCurrency',
              data: addForm
            }).then((res) => {
              this.addLoading = false;
              this.$message({
                message: '提交成功',
                type: 'success'
              });
              this.$refs['addForm'].resetFields();
              this.addFormVisible = false;
              this.getUsers();
            });
          });
        }
      });
    },
    // 查找功能
    // findUser() {
    //   let self = this;
    //   let para = {
    //     page: this.page,
    //     name: this.filters.name
    //   };
    //   this.listLoading = true
    //   this.$http({
    //     method: 'post',
    //     url: 'http://192.168.16.75:8800/manager/selectCurrencies',
    //     data: {
    //       pageNo: self.page,
    //       pageSize: '10',
    //       currencyCd: self.filters
    //     }
    //   }).then(function(response) {
    //     self.list = response.data.data.list
    //     self.pages = response.data.data.pagination
    //     self.listLoading = false
    //     self.total = self.pages.totalCount
    //     self.users = self.pages.totalPage
    //   });
    // },
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
      var uuid = row.uuid
      this.editFormVisible = true;
      this.editForm = Object.assign({}, row);
      this.$http({
        method: 'post',
        url: 'http://192.168.16.75:8800/manager/selectCurrencyById?uuid=' + uuid,
      }).then((res) => {
        this.editLoading = false;
        this.getUsers();
      });
    },
  },
  created() {},
  mounted() {
    this.getUsers();
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
