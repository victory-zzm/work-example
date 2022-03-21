<!-- 
  2022-03-18
  该折双线图的使用
  1. 父组件（给子组件设定宽高）引入并使用
  import ....
  <line-chart :chartData="linedata"></line-chart>
  2. 父组件向该组件传递数据格式如下(示例, 对象内部名称要对应)
  linedata: {
    legendName: ['预测数据', '实际数据'], // 线条名称
    xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // 线条对应x轴的数据
    first: [820, 932, 901, 934, 1290, 1330, 1320], // 第一条线的数据
    second: [880, 92, 951, 434, 790, 1330, 1420],  // 第二条线的数据
  }
 -->
<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts';
require('echarts/theme/macarons') // echarts theme
import resize from '../mixins/resize'

export default {
  name: 'LineChart',
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
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {    // 父组件调用时，传递过来的参数，watch监听它的变化
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {   // 监听父组件传递过来的参数
      deep: true,     // 进行深度监听
      // immediate: true, // 代表在wacth里声明了chartData这个方法之后立即先去执行handler方法
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => { // 在下一次dom更新循环之后执行
      this.initChart()
    })
  },
  beforeDestroy() { // 组件销毁前将图表销毁
    if (!this.chart) {
      return
    }
    // 释放图表，销毁对象并设为null
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    // first second xAxisData 是对象解析得到传递过来的数据
    setOptions({ first, second, xAxisData, legendName } = {}) {
      let option2 = {
        xAxis: { // x轴
          data: xAxisData, // x轴刻度名称
          boundaryGap: false,
          axisTick: { // 刻度
            show: false // 是否显示刻度
          }
        },
        grid: { // 直角坐标的绘图网格
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true // 区域是否包含坐标轴的刻度标签  true防标签溢出
        },
        tooltip: { // 提示框
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: { // y轴
          axisTick: { // 坐标轴刻度
            show: false
          }
        },
        legend: { // 图例组件, 它展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示, 如当下控制曲线的显示与隐藏
          data: legendName
        },
        series: [{
          name: legendName[0], // 线条示例名称
          itemStyle: {
            normal: {
              color: '#FF005A', // 折点的颜色
              lineStyle: { 
                color: '#FF005A', // 线条颜色
                width: 2  //线条宽度
              }
            }
          },
          smooth: true, // 线条是否平滑 
          type: 'line',
          data: first,  // 图表数据
          animationDuration: 2800, // 初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果：
          animationEasing: 'bounceOut' // 初始动画的缓动效果
        },
        {
          name: legendName[1],
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              }
            }
          },
          data: second,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }
        ]
      }
      this.chart.setOption(option2)
    }
  }
}
</script>
