<!-- 
  2022-03-18
  该饼图的使用
  1. 父组件（给子组件设定宽高）引入并使用
  import ....
  <line-chart :chartData="piedata"></line-chart>
  2. 父组件向该组件传递数据格式如下(示例, 对象内部名称要对应)
  piedata: {
    title: '技能情况',
    data: [
      { value: 11, name: '高级技师', proportion: '11%'},
      { value: 30, name: '高级技工', proportion: '30%'},
      { value: 18, name: '中级技工', proportion: '18%'},
      { value: 27, name: '初级技工', proportion: '27%'},
      { value: 14, name: '无技能', proportion: '14%'}
    ] 
  }
 -->
<template>
  <div
    :class="className"
    :style="{height:height,width:width}"
  />
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts';
require('echarts/theme/macarons') // echarts theme
import resize from '../mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    chartData: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      chart: null
    }
  },
   watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
    },
    setOptions (chartData) {
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/> {b} : {d}%',
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          orient: 'vertical',
          right: '-5px',
          bottom: '5px'
        },
        series: [
          {
            name: chartData.title,
            type: 'pie',
            data: chartData.data,
            itemStyle:{
              normal: {
                label: {        //此处为指示线文字
                  formatter: '{d}%',
                  show: true,
                  position: 'inner', //标签显示的位置
                  textStyle: {
                      fontWeight: 200,
                      fontSize: 14    //文字的字体大小
                  },
                }
              }
            },
            radius: ['40%', '70%'],
            avoidLabelOverlap: true,
            emphasis: {
              label: { // 显示的标签
                show: true,
                fontSize: '18',
                fontWeight: 'bold',
                formatter: '{d}%'
              }
            },
            labelLine: { // 标签线
              show: false
            },
          }
        ]
      })
    }
  }
}
</script>
