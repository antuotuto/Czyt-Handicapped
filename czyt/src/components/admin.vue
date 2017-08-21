<template>
<!--  -->
<div class="admin">
  <!-- 面包屑 -->
  <crumbs></crumbs>
  <!--  -->
  <!-- 业务 -->
  <div class="content-business">
    <!-- <div class="content-header">
      残疾人信息
    </div> -->
    <!-- 表格 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="first">
        <span slot="label">
          <i class="el-icon-search"></i> 查找</span>
        <!-- 搜索框 -->
        <div class="content-find">
          <el-row :gutter="20" class="seach">
            <el-col :span="5">
              <el-input v-model="input" placeholder="请输入内容" :disabled="true"></el-input>
            </el-col>
            <el-col :span="6" :offset="1">
              <dateBox></dateBox>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <selectComponents></selectComponents>
              </div>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" icon="search" :loading="false">搜索</el-button>
            </el-col>
          </el-row>
          <!--  -->
          <!-- 表格 -->
          <excl></excl>
          <!--  -->
          <!-- 分页 -->
          <paging></paging>
          <!--  -->
        </div>

      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <span slot="label">
          <i class="el-icon-plus"></i> 新增</span>
        <!-- 新增表单 -->
        <el-row :gutter="20">
          <el-col :span="13" :offset="1">
            <div class="grid-content bg-purple">
              <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" ref="numberValidateForm">
                <el-form-item label="名称 :">
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域 :">
                  <el-input v-model="formLabelAlign.region"></el-input>
                </el-form-item>
                <el-form-item label="活动形式 :">
                  <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
                <el-form-item label="活动地点 :">
                  <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                  <el-button @click="resetForm('numberValidateForm')">重置</el-button>
                </el-form-item>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <!--  -->
      </el-tab-pane>
    </el-tabs>
  </div>
  <!--  -->




</div>
<!--  -->
</template>

<script>
import excl from '~/components/excl.vue'
import crumbs from '~/components/crumbs.vue'
import paging from '~/components/paging.vue'
import selectComponents from '~/components/selectComponents.vue'
import dateBox from '~/components/dateBox.vue'


export default {
  components: {
    excl,
    crumbs,
    paging,
    selectComponents,
    dateBox
  },
  data() {
    return {
      labelPosition: 'top',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      activeName: 'first',
      input: ''
    }
  },
  watch: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  },
  directives: {},
  created() {},
  mounted() {}
}
</script>

<style scoped>
.admin {
  padding-right: 15px;
  overflow-y: scroll;
  height: 100%;
}

.el-row {
  margin-bottom: 15px;
}

.button-on {
  padding-left: 5px;
}

.content-business {
  background: #fff;
  border-top: 3px solid #20A0FF;
}

.content-header {
  background: #20A0FF;
  color: #fff;
  padding: 15px;
}

.el-tabs__item {
  padding: 0 300px !important;
}





.content-find {
  margin: 0 15px;
}
</style>
