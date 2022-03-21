<template>
<!-- 折线&柱形图
  2022-03-18
  该折线&柱形图的使用
  1. 父组件（给子组件设定宽高）引入并使用
  import ....
  <line-chart :chartData="linedata"></line-chart>
  2. 父组件向该组件传递数据格式如下(示例, 对象内部名称要对应)
  barlinedata: {
    legendName: ['预测数据', '实际数据'],
    xAxisData: ['事业单位', '国有企业', '民营企业', '党政机关', '其它企业'],
    first: [720, 550, 1201, 434, 690],
    second: [820, 650, 1301, 534, 790],
  },
 -->
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
    chartData: {
      deep: true,   // 进行深度监听
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
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
        backgroundColor: '#03235f',
        xAxis: { // x轴
          type: 'category',
          data: xAxisData, // x轴刻度名称
          boundaryGap: true,
          axisTick: { // 刻度
            show: false // 是否显示刻度
          },
          axisLabel: {
            color: '#8baacc', // 纵坐标文字颜色
            fontSize: 14,
          }
        },
        grid: { // 直角坐标的绘图网格
          left: '2%',
          right: '2%',
          bottom: '3%',
          top: 30,
          containLabel: true // 区域是否包含坐标轴的刻度标签  true防标签溢出
        },
        tooltip: { // 提示框
          color: '#8baacc',
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10],
          show: true,
          // 折线（区域）图、柱状（条形）图: {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
          // formatter: "{b0}<span style='border-radius: 2px solid red;'>s</span></span></br>{a0}: {c0}<br />{a1}: {c1}"
          formatter: function(params){
            return '<div>'+
              '<div><span>'+params[0].axisValue+'</span></div>'+
              '<div><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#a200ff"></span><span>'+params[0].seriesName+': '+params[0].data+'</span></div>'+
              '<div><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#ffe500"></span><span>'+params[1].seriesName+': '+Math.floor(params[1].data/params[0].data)*100 + '%'+'</span></div>'+
              '</div>';
          }
        },
        yAxis: { // y轴
          backgroundColor:'',
          axisLabel: {
            color: '#8baacc', // 纵坐标文字颜色
            fontSize: 14,
          },
          show: true,
          axisTick: { // y轴刻度
            show: false,
          },
          splitLine: { // 网格线(横)
            show: true,
            lineStyle: {
              color: 'transparent', // 纵坐标线条颜色
              width: 0,
            },
          },
          axisLine: { // y轴线
            show: false,
          }
        },
        legend: { // 图例组件, 它展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示, 如当下控制曲线的显示与隐藏
          data: legendName,
          textStyle: {
            color: '#fff'
          }
        },
        series: [{
          name: legendName[0], // 线条示例名称
          symbol: 'circle',     //设定为实心点
          symbolSize: 10,   //设定实心点的大小
          itemStyle: {
            normal: {
              color: '#ffe500',     // 折点的颜色
              
              lineStyle: { 
                color: '#ffe500', // 线条颜色
                width: 2   //线条宽度
              }
            }
          },
          smooth: false, // 线条是否平滑 
          type: 'line',
          data: first,   // 图表数据
          animationDuration: 2800, // 初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果：
          animationEasing: 'bounceOut',  // 初始动画的缓动效果
          zlevel: 3, // 显示层级比重
        },
        {
          name: legendName[1],
          smooth: true,
          type: 'bar', // 柱形图
          // barWidth: '40%',
          stack: 'vistors',
          barMaxWidth: "auto",
          barWidth: '40%',
          itemStyle: {
            color: {
              x: 0,
              y: 1,
              x2: 0,
              y2: 0,
              type: "linear", // 柱形条颜色渐变
              colorStops: [
                {
                  offset: 0,
                  color: '#a200ff',
                },
                {
                  offset: 1,
                  color: '#ed6bff',
                },
              ],
            },
          },
          
          // itemStyle: {
          //   normal: {
          //     color: '#3888fa',
          //     lineStyle: {
          //       color: '#3888fa',
          //       width: 1
          //     },
          //     areaStyle: {
          //       color: '#f3f8ff'
          //     }
          //   }
          // },
          data: second,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        },
        {
            data: second,
            color: '#a200ff',
            type: "pictorialBar",
            barMaxWidth: "60",
            symbolPosition: "end",
            symbol: "circle",
            symbolOffset: [0, "-50%"],
            symbolSize: [36, 12],
            zlevel: 2,
        }
        
        ]
      }
      this.chart.setOption(option2)
    }
  }
}
</script>
<style scoped>

</style>