<template>
  <!-- 
    * 此处展示公共组件
   -->
  <div>
    <!-- Bar柱形图 -->
    <div class="bar-chart">
      <bar-chart></bar-chart>
    </div>
    <!-- line -->
    <div class="line-chart">
      <line-chart :chartData="linedata"></line-chart>
    </div>
    <!-- line-bar -->
    <div class="line-chart">
      <bar-line-chart :chartData="barlinedata"></bar-line-chart>
    </div>
    <!-- doublebar -->
    <div class="line-chart">
      <double-bar :chartData="doulebar"></double-bar>
    </div>
    <!-- Pie-chart -->
    <div class="pie-chart">
      <pie-chart :chartData="piedata"></pie-chart>
    </div>
    <!-- 水平柱状图 -->
    <div class="line-chart">
      <level-line :chartData="leveldata"></level-line>
    </div>
  </div>
</template>

<script>
  import Bar from '../../dashboard/common/Bar.vue'
  import Line from '../../dashboard/common/Line.vue'
  import BarLine from '../../dashboard/common/BarLine.vue'
  import DoubleBar from '../../dashboard/common/DoubleBar.vue'
  import Pie from '../../dashboard/common/Pie.vue'
  import LevelLine from '../../dashboard/common/LevelLine.vue'
  export default {
    components:{
      "bar-chart": Bar,
      "line-chart": Line,
      "bar-line-chart": BarLine,
      "double-bar": DoubleBar,
      "pie-chart": Pie,
      "level-line": LevelLine
    },
    data(){
      return {
        linedata: {
          legendName: ['预测数据', '实际数据'],
          xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          first: [820, 932, 901, 934, 1290, 1330, 1320],
          second: [880, 92, 951, 434, 790, 1330, 1420],
        },
        barlinedata: {
          legendName: ['见习岗位数', '见习留用率'],
          xAxisData: ['事业单位', '国有企业', '民营企业', '党政机关', '其它企业'],
          first: [720, 550, 1201, 434, 690],
          second: [820, 650, 1301, 534, 790],
        },
        doulebar: {
          legendName: ['男性', '女性'],
          xAxisData: ['1年以下', '1-3年', '3-5年', '5-10年', '10年以上'],
          first: [820, 932, 901, 934, 1290, 1330, 1320],
          second: [880, 92, 951, 434, 790, 1330, 1420],
        },
        piedata: {
          title: '技能情况',
          data: [
            { value: 11, name: '高级技师', proportion: '11%'},
            { value: 30, name: '高级技工', proportion: '30%'},
            { value: 18, name: '中级技工', proportion: '18%'},
            { value: 27, name: '初级技工', proportion: '27%'},
            { value: 14, name: '无技能', proportion: '14%'}
          ] 
        },
        leveldata: [
          {area: '天河区', value1: '8324'},
          {area: '越秀区', value1: '14395'},
          {area: '白云区', value1: '2467'},
          {area: '黄埔区', value1: '2655'},
          {area: '荔湾区', value1: '998'},
          {area: '海珠区', value1: '1804'},
          {area: '番禺区', value1: '1970'},
          {area: '花都区', value1: '962'},
          {area: '从化区', value1: '165'},
          {area: '增城区', value1: '859'},
          {area: '南沙区', value1: '569'},
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
.bar-chart,
.line-chart{
  height: 350px;
  width: 500px;
}
.pie-chart{
  width: 800px;
  width: 400px;
}
</style>