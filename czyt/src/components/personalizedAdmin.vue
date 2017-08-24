<template>
<!--  -->
<div class="hcTaHicpinfo content-box">
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

    <div class="content-search ">
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
          <el-button type="primary" icon="search">搜 索</el-button>
          <el-button>重 置</el-button>

        </el-col>
      </el-row>
    </div>


    <!-- 表格 -->
    <el-table :data="tableData" stripe tooltip-effect="dark" style="width: 100%" @selection-change="" class="content-top">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column width="90" label="序号" align="center" @click.native="test(row)" >
        <template scope="scope">
          wangan
              </template>
      </el-table-column>
      <el-table-column width="" prop="" label="位置" align="center" sortable>
        <template scope="scope">
          就是这样的
              </template>
      </el-table-column>
      <el-table-column width="" prop="" label="申请情况" align="center" sortable>
        <template scope="scope">
          确认
              </template>
      </el-table-column>
      <el-table-column width="" label="姓名" prop="admin" align="center" sortable>
      </el-table-column>
      <el-table-column width="" label="年龄" prop="city" align="center" sortable>
      </el-table-column>
      <el-table-column width="" label="喜欢" prop="" align="center" sortable>
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
      input: '',
      input2: '',
      //
      // 表格
      tableData: table,
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
      selectedOptions3: ['zujian', 'data', 'tag']
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
  handleIconClick(ev) {
    console.log(ev);
  }
}
}
</script>

<style scoped>

</style>
