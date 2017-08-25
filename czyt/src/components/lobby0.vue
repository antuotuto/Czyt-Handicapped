<template>
<!--  -->
<div class="lobby">
  <!-- 设计规范 -->

  <div class="font-design">
    <div class="design-box">
      <p class="big">栏目设计及使用规范</p>
      <p class="small">基础使用规范汇集</p>
    </div>
  </div>

  <div class="center">
    <div class="font-design-content">
      <p class="number"><span>3</span>栏目设计</p>
      <table class="second-table">
        <thead>
          <tr>
            <td>位置</td>
            <td>宽度</td>
            <td>高度</td>
            <td>边框</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>头部</td>
            <td>100%</td>
            <td>50px</td>
            <td>0</td>
          </tr>
          <tr>
            <td>左侧</td>
            <td>100%</td>
            <td>250px</td>
            <td>15px</td>
          </tr>
          <tr>
            <td>正文内容</td>
            <td>100%</td>
            <td>250px</td>
            <td>15px</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- 组件设计规范 -->

  <div class="font-design">
    <div class="design-box">
      <p class="big">代码设计及使用规范</p>
      <p class="small">基础使用规范汇集</p>
    </div>
  </div>

  <div class="center">
    <div class="font-design-content">
      <p class="number"><span>4</span>代码设计</p>
      <table class="third-table">
        <thead>
          <tr class="maaaa">
            <td>命名</td>
            <td>约定</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>文件夹命名不能出现 "_" 或 "-" 字符,首字母大写</td>
            <td>css全部使用class选择器</td>
          </tr>
          <tr>
            <td>class使用 "-" 号连接符</td>
            <td>js用id选择器</td>
          </tr>
          <tr>
            <td>避免 "left" 以及相关字眼</td>
            <td>统一使用sass</td>
          </tr>
          <tr>
            <td>小驼峰式命名法</td>
            <td>不定义sass变量</td>
          </tr>

          <tr class="maaaa">
            <td>图片</td>
            <td>css结构</td>
          </tr>
          <tr>
            <td>.png (PNG-24) .jpg (压缩率8-12)</td>
            <td>src/assets/css/xx.css</td>
          </tr>

          <tr class="maaaa">
            <td>HTML代码大小写</td>
            <td>元素属性</td>
          </tr>
          <tr>
            <td>小写</td>
            <td>元素属性值使用双引号语法</td>
          </tr>
          <tr>
            <td>标签必须闭合</td>
            <td>js使用 '' </td>
          </tr>

          <tr class="maaaa">
            <td>代码缩进</td>
            <td>单行注释</td>
          </tr>
          <tr>
            <td>统一用两个空格缩进代码</td>
            <td>注释使用单行</td>
          </tr>

          <tr class="maaaa">
            <td>代码嵌套</td>
            <td>代码风格</td>
          </tr>
          <tr>
            <td>元素嵌套规范，每个块状元素独立一行</td>
            <td>树型结构</td>
          </tr>
          <tr>
            <td>段落元素与标题元素只能嵌套内联元素</td>
            <td>代码类别为单行</td>
          </tr>

          <tr class="maaaa">
            <td>媒体查询</td>
            <td>js书写规范</td>
          </tr>
          <tr>
            <td>@media screen and (max-width:940px)</td>
            <td>var sum = 10</td>
          </tr>

          <tr class="maaaa">
            <td>追加代码命名法则</td>
            <td></td>
          </tr>
          <tr>
            <td>组件命名大写开头Hello</td>
            <td></td>
          </tr>
          <tr>
            <td>组件命名大写开头Hello</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
<!--  -->
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.lobby{
  height:100%;
  overflow-y:scroll;
}
.font-design-content {
    padding-top: 80px;
    .number {
        height: 40px;
        line-height: 40px;
        font-size: 23px;
        color: #2b83f9;
        margin-bottom: 40px;
        span {
            height: 40px;
            width: 40px;
            font-size: 20px;
            color: #fff;
            margin-right: 20px;
            display: inline-block;
            border-radius: 30px;
            text-align: center;
            background: #2b83f9;
        }
    }
}
.font-design {
    height: 130px;
    background: #2b83f9;
    padding-top: 60px;
    .design-box {
        width: 400px;
        margin: 0 auto;
        color: #fff;
        .big {
            font-size: 40px;
            font-weight: 100;
            margin-bottom: 0;
            letter-spacing: 1px;
        }
        .small {
            font-size: 12px;
            font-weight: 300;
            text-align: right;
            padding-top: 10px;
            padding-right: 40px;
            letter-spacing: 1px;
        }
    }
}

.maaaa{
  background: #2b83f9;
  color:#fff;
}

.second-table thead{
  background: #2b83f9;
  color:#fff;
}

.center {
    width: 900px;
    margin: 0 auto;
    table {
        width: 650px;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 100px;
        tr {
            border: 1px solid rgba(0,0,0,1);
            td {
                border: 1px solid rgba(0,0,0,1);
                padding: 15px 30px;
            }
        }
    }

}
</style>
