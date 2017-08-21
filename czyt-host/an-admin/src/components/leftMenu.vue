<template>
<!--  -->
<div class="leftMenu">
  <crumbs></crumbs>
  <div class="excl-box">
    <el-tabs type="border-card">
      <el-row :gutter="20" class="seach">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入身份证" icon="search" v-model="input2" :on-icon-click="handleIconClick"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入年龄" icon="search" v-model="input2" :on-icon-click="handleIconClick"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入姓名" icon="search" v-model="input2" :on-icon-click="handleIconClick"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-autocomplete popper-class="my-autocomplete" v-model="state3" :fetch-suggestions="querySearch" custom-item="my-item-zh" placeholder="请输入内容" @select="handleSelect" icon="edit" :on-icon-click="handleIconClick"></el-autocomplete>
          </div>
        </el-col>
      </el-row>

      <el-tab-pane>
        <span slot="label"><i class="el-icon-plus"></i> 添加数据</span>
        <!-- <excl ></excl> -->
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-size="20" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-minus"></i> 修改数据</span> 1
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-delete"></i> 删除数据</span>
        <excl></excl>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-edit"></i> 编辑数据</span> 定时任务补偿
      </el-tab-pane>
    </el-tabs>
  </div>

  <div class="excl-explain">
    <!-- <el-tree :data="data3" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]"> -->

    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-tree :data="data2" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps">
      </el-tree>
    </el-dialog>

    </el-tree>
  </div>
</div>
<!--  -->
</template>

<script>
import crumbs from '~/components/crumbs.vue'
import excl from '~/components/excl.vue'
import Vue from 'vue'

Vue.component('my-item-zh', {
  functional: true,
  render: function(h, ctx) {
    var item = ctx.props.item;
    return h('li', ctx.data, [
      h('div', {
        attrs: {
          class: 'name'
        }
      }, [item.value]),
      h('span', {
        attrs: {
          class: 'addr'
        }
      }, [item.address])
    ]);
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});


export default {
  data() {
    return {
      input2: '',
      restaurants: [],
      state3: '',
      data3: [{
        id: 1,
        label: '一级 2',
        children: [{
          id: 3,
          label: '二级 2-1',
          children: [{
            id: 4,
            label: '三级 3-1-1'
          }, {
            id: 5,
            label: '三级 3-1-2',
            disabled: true
          }]
        }, {
          id: 2,
          label: '二级 2-2',
          disabled: true,
          children: [{
            id: 6,
            label: '三级 3-2-1'
          }, {
            id: 7,
            label: '三级 3-2-2',
            disabled: true
          }]
        }, {
          id: 3,
          label: '二级 2-2',
          disabled: true,
          children: [{
            id: 6,
            label: '三级 3-2-1'
          }, {
            id: 7,
            label: '三级 3-2-2',
            disabled: true
          }]
        }]
      }],
      data2: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      },{
        id: 4,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      },{
        id: 5,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      },{
        id: 6,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      },{
        id: 7,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      },{
        id: 8,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
    }
  },
  watch: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [{
          "value": "三全鲜食（北新泾店）",
          "address": "长宁区新渔路144号"
        },
        {
          "value": "Hot honey 首尔炸鸡（仙霞路）",
          "address": "上海市长宁区淞虹路661号"
        },
        {
          "value": "新旺角茶餐厅",
          "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        {
          "value": "泷千家(天山西路店)",
          "address": "天山西路438号"
        },
        {
          "value": "胖仙女纸杯蛋糕（上海凌空店）",
          "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        {
          "value": "贡茶",
          "address": "上海市长宁区金钟路633号"
        },
        {
          "value": "豪大大香鸡排超级奶爸",
          "address": "上海市嘉定区曹安公路曹安路1685号"
        },
        {
          "value": "茶芝兰（奶茶，手抓饼）",
          "address": "上海市普陀区同普路1435号"
        },
        {
          "value": "十二泷町",
          "address": "上海市北翟路1444弄81号B幢-107"
        },
        {
          "value": "星移浓缩咖啡",
          "address": "上海市嘉定区新郁路817号"
        },
        {
          "value": "阿姨奶茶/豪大大",
          "address": "嘉定区曹安路1611号"
        },
        {
          "value": "新麦甜四季甜品炸鸡",
          "address": "嘉定区曹安公路2383弄55号"
        },
        {
          "value": "Monica摩托主题咖啡店",
          "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
        },
        {
          "value": "浮生若茶（凌空soho店）",
          "address": "上海长宁区金钟路968号9号楼地下一层"
        },
        {
          "value": "NONO JUICE  鲜榨果汁",
          "address": "上海市长宁区天山西路119号"
        },
        {
          "value": "CoCo都可(北新泾店）",
          "address": "上海市长宁区仙霞西路"
        },
        {
          "value": "快乐柠檬（神州智慧店）",
          "address": "上海市长宁区天山西路567号1层R117号店铺"
        },
        {
          "value": "Merci Paul cafe",
          "address": "上海市普陀区光复西路丹巴路28弄6号楼819"
        },
        {
          "value": "猫山王（西郊百联店）",
          "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
        },
        {
          "value": "枪会山",
          "address": "上海市普陀区棕榈路"
        },
        {
          "value": "纵食",
          "address": "元丰天山花园(东门) 双流路267号"
        },
        {
          "value": "钱记",
          "address": "上海市长宁区天山西路"
        },
        {
          "value": "壹杯加",
          "address": "上海市长宁区通协路"
        },
        {
          "value": "唦哇嘀咖",
          "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
        },
        {
          "value": "爱茜茜里(西郊百联)",
          "address": "长宁区仙霞西路88号1305室"
        },
        {
          "value": "爱茜茜里(近铁广场)",
          "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
        },
        {
          "value": "鲜果榨汁（金沙江路和美广店）",
          "address": "普陀区金沙江路2239号金沙和美广场B1-10-6"
        },
        {
          "value": "开心丽果（缤谷店）",
          "address": "上海市长宁区威宁路天山路341号"
        },
        {
          "value": "超级鸡车（丰庄路店）",
          "address": "上海市嘉定区丰庄路240号"
        },
        {
          "value": "妙生活果园（北新泾店）",
          "address": "长宁区新渔路144号"
        },
        {
          "value": "香宜度麻辣香锅",
          "address": "长宁区淞虹路148号"
        },
        {
          "value": "凡仔汉堡（老真北路店）",
          "address": "上海市普陀区老真北路160号"
        },
        {
          "value": "港式小铺",
          "address": "上海市长宁区金钟路968号15楼15-105室"
        },
        {
          "value": "蜀香源麻辣香锅（剑河路店）",
          "address": "剑河路443-1"
        },
        {
          "value": "北京饺子馆",
          "address": "长宁区北新泾街道天山西路490-1号"
        },
        {
          "value": "饭典*新简餐（凌空SOHO店）",
          "address": "上海市长宁区金钟路968号9号楼地下一层9-83室"
        },
        {
          "value": "焦耳·川式快餐（金钟路店）",
          "address": "上海市金钟路633号地下一层甲部"
        },
        {
          "value": "动力鸡车",
          "address": "长宁区仙霞西路299弄3号101B"
        },
        {
          "value": "浏阳蒸菜",
          "address": "天山西路430号"
        },
        {
          "value": "四海游龙（天山西路店）",
          "address": "上海市长宁区天山西路"
        },
        {
          "value": "樱花食堂（凌空店）",
          "address": "上海市长宁区金钟路968号15楼15-105室"
        },
        {
          "value": "壹分米客家传统调制米粉(天山店)",
          "address": "天山西路428号"
        },
        {
          "value": "福荣祥烧腊（平溪路店）",
          "address": "上海市长宁区协和路福泉路255弄57-73号"
        },
        {
          "value": "速记黄焖鸡米饭",
          "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位"
        },
        {
          "value": "红辣椒麻辣烫",
          "address": "上海市长宁区天山西路492号"
        },
        {
          "value": "(小杨生煎)西郊百联餐厅",
          "address": "长宁区仙霞西路88号百联2楼"
        },
        {
          "value": "阳阳麻辣烫",
          "address": "天山西路389号"
        },
        {
          "value": "南拳妈妈龙虾盖浇饭",
          "address": "普陀区金沙江路1699号鑫乐惠美食广场A13"
        }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  components: {
    crumbs,
    excl
  }
}
</script>

<style scoped>
.leftMenu {
  padding: 15px;
  overflow-y: scroll;
  box-sizing: border-box;
  height: 100%;
}

.excl-box {
  border-radius: 3px;
}

.excl-explain {
  margin-top: 15px;
}

.el-pagination {
  text-align: center;
  margin-top: 15px;
}

.seach {
  padding-bottom: 15px;
}
</style>
