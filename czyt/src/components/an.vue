<template>
<!--  -->
<div class="an">
  <!-- 面包屑 -->
  <crumbs></crumbs>
  <!--  -->

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

  <!-- 选择表格项目 -->
  <div class="checkbox-table">
    <el-checkbox-group v-model="checkboxVal">
      <el-checkbox label="currencyCd">currencyCd</el-checkbox>
      <el-checkbox label="createDt">createDt</el-checkbox>
      <el-checkbox label="sn">sn</el-checkbox>
      <el-checkbox label="uuid">uuid</el-checkbox>
    </el-checkbox-group>
  </div>
  <!--  -->

  <!-- 表格 -->
  <el-table :data="list" stripe tooltip-effect="dark" style="width: 100%" @selection-change="selsChange" v-loading="listLoading">
    <el-table-column type="selection" width="">
    </el-table-column>
    <el-table-column width="" label="序号" align="left" @click.native="test(row)">
      <template scope="scope">{{ scope.row.id }}</template>
    </el-table-column>
    <el-table-column width="" prop="currencyCd" label="位置" align="left" sortable>
    </el-table-column>
    <el-table-column :key='currencyNm' v-for='(currencyNm,index) in formThead' :label="currencyNm" align="center" sortable>
      <template scope="scope">
        {{scope.row[currencyNm]}}
      </template>
    </el-table-column>
    </el-table-column>
    <el-table-column label="操作" width="180" align="center">
      <template scope="scope">
     <el-button
       size="small"
       type="primary"
       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
     <el-button
       size="small"
       type="danger"
       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
   </template>
    </el-table-column>
  </el-table>
  <!--  -->

  <!--工具条-->
  <el-col :span="24" class="toolbar">
    <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" style="float:right;">
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
import crumbs from '~/components/crumbs.vue'

const defaultFormThead = ['currencyCd', 'sn', 'uuid']; // 默认选中项
export default {
  components: {
    crumbs
  },
  data() {
    return {
      // 列表
      list: null,
      pages: null,
      pageSize: 10,
      users: [],
      total: 0,
      page: 1,
      currentPage3: 1,
      listLoading: false,
      // 全选框
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
      //新增界面是否显示
      addFormVisible: false,
      // 规则
      addFormRules: {
        id: [{
          required: true,
          message: '不能为空',
          trigger: 'blur'
        }]
      },
      addLoading: false,
      // 查找
      filters: {
        currencyCd: ''
      },
      // 表头显示
      key: 1, // table key
      checkboxVal: defaultFormThead, // checkboxVal
      formThead: defaultFormThead, // 默认表头
      formTheadOptions: ['currencyCd', 'createDt', 'sn', 'uuid'], // 可选择表头
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.getUsers();
    },
    // 加载数据
    getUsers() {
      self = this;
      let currencyCds = this.filters.currencyCd
      this.listLoading = true
      this.$http({
        method: 'post',
        headers: {
          'Content-Type': 'application/JSON'
        },
        url: 'http://192.168.16.75:8800/manager/selectCurrencies',
        data: JSON.stringify({
          pageNo: self.page,
          pageSize: self.pageSize,
          currencyCd: currencyCds,
          order: 'desc',
          property: 'sn'
        })
      }).then(function(response) {
        self.list = response.data.data.list
        self.pages = response.data.data.pagination
        self.total = self.pages.totalCount
        self.users = self.pages.totalPage
        self.listLoading = false
      });
    },
    // 查找数据
    findUsers() {
      self = this;
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
      this.$confirm('确认删除选中记录吗？', '提示', {
        type: 'warning'
      }).then(() => {
        self.listLoading = true;
        this.$http({
          method: 'post',
          url: 'http://192.168.16.75:8800/manager/deleteCurrency?uuid=' + uuid,
        }).then(function(response) {
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
      let editForm = this.editForm;
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            this.editLoading = true;
            this.$http({
              method: 'post',
              headers: {
                'Content-Type': 'application/JSON'
              },
              url: 'http://192.168.16.75:8800/manager/updateCurrency',
              data: JSON.stringify(editForm)
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
        id: '',
        currencyCd: '',
        currencyNm: '',
      };
    },
    // 新增
    addSubmit() {
      self = this
      let addForm = this.addForm;
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            this.editLoading = true;
            this.$http({
              method: 'post',
              headers: {
                'Content-Type': 'application/JSON'
              },
              url: 'http://192.168.16.75:8800/manager/saveCurrency',
              data: JSON.stringify(addForm)
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
  watch: {
    checkboxVal(valArr) {
      this.formThead = this.formTheadOptions.filter(i => valArr.indexOf(i) >= 0);
      // table 每次都会重渲
      this.key = this.key + 1;
    }
  },
  mounted() {
    this.getUsers();
  }
}
</script>

<style scoped>
.an {
  padding: 15px;
  padding-bottom: 100px;
  background: #fff;
}

.toolbar {
  padding: 15px 0;
}

.crumbs {
  padding: 15px 0 0 0;
}

.checkbox-table {
  padding-bottom: 15px;
}
</style>
