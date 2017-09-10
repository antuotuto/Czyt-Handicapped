<template>
<!--  -->
<div class="hcTaHicpinfo content-box" v-loading="listLoading">
  <!-- 搜索条件  -->
  <div class="content-excl-box">
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

    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-search"></i> 查找用户</span>
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
            <el-col :span="24">
              <el-button type="primary" icon="search" v-on:click="getUsers">搜 索</el-button>
              <el-button>重 置</el-button>

            </el-col>
          </el-row>
        </div>

        <!-- 常用搜索框 -->
        <el-row :gutter="20" class="content-top">
          <el-col :span="24">
            <el-cascader :options="options" v-model="selectedOptions3"></el-cascader>
          </el-col>
        </el-row>
        <!--  -->

        <div class="filter-container content-top">
          <el-checkbox-group v-model="checkboxVal">
            <el-checkbox label="apple">apple</el-checkbox>
            <el-checkbox label="banana">banana</el-checkbox>
            <el-checkbox label="orange">orange</el-checkbox>
            <el-checkbox label="an">an</el-checkbox>
          </el-checkbox-group>
        </div>

        <!-- 表格 -->
        <el-table :data="tableData" stripe tooltip-effect="dark" style="width: 100%" @selection-change="selsChange" class="content-top" highlight-current-row>
          <el-table-column type="selection" width="">
          </el-table-column>
          <el-table-column width="90" label="序号" align="center" @click.native="test(row)">
            <template scope="scope">
              wangan
                  </template>
          </el-table-column>

          <el-table-column :key='fruit' v-for='(fruit,index) in formThead' :label="fruit" align="center">
            <template scope="scope">
              {{scope.row[fruit]}}
            </template>
          </el-table-column>

          <el-table-column label="操作" width="" align="center">
            <template scope="scope">
           <el-button
             size="small"
             @click="handleEdit(scope.$index, scope.row)">查看</el-button>
           <el-button
             size="small"
             type="primary"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
         </template>
          </el-table-column>
        </el-table>
        <!--  -->
        <!-- 分页 -->
        <el-row :gutter="20" class="content-top">
          <el-col :span="6">
            <el-button type="danger" icon="delete" @click="batchRemove" :disabled="this.sels.length===0">删除</el-button>
          </el-col>
          <el-col :span="18" class="content-paging">
            <el-pagination class="pagination" :small="true" @size-change="" @current-change="" :current-page="2" :page-size="10" layout="total, prev, pager, next, jumper" :total="100">
            </el-pagination>
          </el-col>
        </el-row>
        <!--  -->
      </el-tab-pane>
      <el-tab-pane label="消息中心">
        <span slot="label"><i class="el-icon-plus"></i> 新增用户</span>
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

  <!-- 表格 -->

  <!--  -->

  <!--编辑界面-->
  <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
    <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="editForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="editForm.sex">
          <el-radio class="radio" :label="1">男</el-radio>
          <el-radio class="radio" :label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
      </el-form-item>
      <el-form-item label="生日">
        <el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
      </el-form-item>
      <el-form-item label="地址">
        <el-input type="textarea" v-model="editForm.apple"></el-input>
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
import {
  table
} from '~/data';

const defaultFormThead = ['apple', 'banana']; // 默认选中项

export default {
  data() {
    return {
      sels: [], //列表选中列
      listLoading: false,
      //
      //
      editFormVisible: false, //编辑界面是否显示
      editLoading: false,
      editFormRules: {
        name: [{
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        }]
      },
      addFormVisible: false, //新增界面是否显示
      //编辑界面数据
      editForm: {
        id: 0,
        name: '',
        sex: -1,
        age: 0,
        birth: '',
        addr: ''
      },
      editLoading: false,
      //
      key: 1, // table key
      formTheadOptions: ['apple', 'banana', 'orange', 'an'], // 可选择表头
      checkboxVal: defaultFormThead, // checkboxVal
      formThead: defaultFormThead, // 默认表头
      tableData: [{
          name: 'fruit-1',
          apple: 'apple-10',
          banana: 'banana-10',
          orange: 'orange-10',
          an: '1'
        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20',
          an: '1'

        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20',
          an: '1'

        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20',
          an: '1'

        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20',
          an: '1'

        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20',
          an: '1'

        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20',
          an: '1'

        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20',
          an: '1'

        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20',
          an: '1'

        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20',
          an: '1'

        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20',
          an: '1'

        }
      ],
      //
      visible2: false,
      labelPosition: 'top',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
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
      input: '',
      input2: '',
      //
      // 表格
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }],
      selectedOptions3: ['zujian', 'data', 'tag'],
      activeName: 'first'
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
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    selsChange: function(sels) {
      this.sels = sels;
    },
    batchRemove: function() {
      var ids = this.sels.map(item => item.id).toString();
      this.$confirm('确认删除选中记录吗？', '提示', {
        type: 'warning'
      }).then(() => {
        this.listLoading = true;
        this.visible2 = false;
        //NProgress.start();
        let para = {
          ids: ids
        };
        this.listLoading = false;
        //NProgress.done();
        this.$message({
          message: '删除成功',
          type: 'success'
        });
      }).catch(() => {

      });
    },
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
    //显示编辑界面
    handleEdit: function(index, row) {
      this.editFormVisible = true;
      this.editForm = Object.assign({}, row);
    },
    //编辑
    editSubmit: function() {
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            this.editLoading = true;
            //NProgress.start();
            let para = Object.assign({}, this.editForm);
            this.editLoading = false;
            //NProgress.done();
            this.$message({
              message: '提交成功',
              type: 'success'
            });
            this.$refs['editForm'].resetFields();
            this.editFormVisible = false;
            console.log('编辑成功');
          });
        }
      });
    },
    // 删除
    delect() {
      this.visible2 = false;
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    },
    //获取用户列表
    getUsers() {
      let para = {
        page: this.page,
        name: this.input
      };
      this.listLoading = true;
      //NProgress.start();
      getUserListPage(para).then((res) => {
        this.total = res.data.total;
        this.users = res.data.users;
        this.listLoading = false;
        //NProgress.done();
      });
    },
  },
  watch: {
    checkboxVal(valArr) {
      this.formThead = this.formTheadOptions.filter(i => valArr.indexOf(i) >= 0);
      this.key = this.key + 1; // 为了保证table 每次都会重渲 （牺牲性能保证效果，当然也可以不用）
    }
  }
}
</script>

<style scoped>

</style>
