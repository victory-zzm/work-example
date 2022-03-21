<template>
<!-- 双条形图 
  2022-03-21
  该双柱形的使用
  1. 父组件（给子组件设定宽高）引入并使用
  import ....
  <line-chart :chartData="doulebar"></line-chart>
  2. 父组件向该组件传递数据格式如下(示例, 对象内部名称要对应)
  doulebar: {
    legendName: ['男性', '女性'],
    xAxisData: ['1年以下', '1-3年', '3-5年', '5-10年', '10年以上'],
    first: [820, 932, 901, 934, 1290, 1330, 1320],
    second: [880, 92, 951, 434, 790, 1330, 1420],
  },
 -->
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts';
require('echarts/theme/macarons') // echarts theme
import resize from '../mixins/resize'

// const animationDuration = 6000

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
      default: '300px'
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
      this.setOptions(this.chartData);
    },

    setOptions({first, second, xAxisData, legendName} = {}){
      const colors = ['#5470C6', '#91CC75', '#EE6666'];
      let option = {
        backgroundColor: '#03235f',
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            show: true,
            type: 'shadow'
          },
          formatter: '{b0}</br>'+
                     '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#a200ff"></span>{a0}: {c0}' + 
                     '</br>' +
                     '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#ffe500"></span>{a1}: {c1}'
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '3%',
          top: 60,
          containLabel: true
        },
        legend: {
          data: legendName
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: xAxisData,
            axisTick: { // 刻度
            alignWithLabel: true,
              show: false // 是否显示刻度
            },
            axisLabel: { // x轴的文字旋转
              interval: 0,
              color: "#90f0ff",
              fontSize: 12,
              // interval: 0, //坐标轴刻度标签的显示间隔(在类目轴中有效) 0:显示所有  1：隔一个显示一个 :3：隔三个显示一个...
              rotate: 35, //文字旋转
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            backgroundColor: '',
            // name: legendName[0], // 坐标轴名称
            alignTicks: true,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: { // y轴刻度
              show: false,
            },
            axisLabel: {
              color: '#7292b8',
              fontSize: 14,
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            show: false, // 隐藏重复的Y轴，必要时可以增加Y轴
            name: legendName[1],
            position: 'right',
            alignTicks: true,
            axisLine: {
              show: false,
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '男性',
            type: 'bar',
            data: first,
            barMaxWidth: 25,
            itemStyle: {
              normal: {
                color: "#b319ff",
              },
            },
            barWidth: 20,
            barCategoryGap: 0
          },
          {
            name: '女性',
            type: 'bar',
            yAxisIndex: 1,
            data: second,
            barMaxWidth: 25,
            itemStyle: {
              normal: {
                color: "#fdcc01",
              },
            },
            barWidth: 20,
            barCategoryGap: 0
          }
        ]
      }
      this.chart.setOption(option);
    }
  }
}
</script>