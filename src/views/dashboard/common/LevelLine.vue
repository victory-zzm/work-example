<template>
<!-- 水平柱形图
    2022-03-21
    该水平柱形图的使用
    1. 父组件（给子组件设定宽高）引入并使用
    import ....
    <line-chart :chartData="leveldata"></line-chart>
    2. 父组件向该组件传递数据格式如下(示例, 对象内部名称要对应)
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
 -->
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
// import echarts from "echarts";
import * as echarts from 'echarts';
require("echarts/theme/macarons"); // echarts theme
import resize from "../mixins/resize";

// const animationDuration = 6000;
export default {
  name: 'bar-chart-total',
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "380px",
    },
    chartData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions();
    },
    setOptions() {
      // const barColor = [
      //   "rgba(24, 144, 255,.5)",
      //   "rgba(24, 144, 255,1)",
      //   "#e6ebf5",
      //   "#aacdf1",
      // ];

      const xData = this.chartData.map(i => {
        return i.area
      })

      let maxNum = 0;
      const yData1 = this.chartData.map(i => {
        if(i.value1>maxNum){
          maxNum = parseInt(i.value1);
        }
        // console.log
        return i.value1
      })
      maxNum = maxNum + 100;
      // 设置阴影 比最大的数据大500
      const maxNumArr = [maxNum, maxNum, maxNum, maxNum, maxNum, maxNum, maxNum, maxNum, maxNum, maxNum, maxNum];
      this.chart.setOption({
        backgroundColor: '#03235f',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            show: false,
            type: 'shadow',
            shadowStyle: {
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 10
            }
          },
          formatter: '{b0}: {c0}人'
        },
        grid: {
          containLabel: true,
          left: 40,
          right: 30,
          bottom: 40,
          top: 40,
        },
        // 不显示x轴的相关信息
        xAxis: {
          show: false
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            data: xData,
            // 不显示y轴的线
            axisLine: {
              show: false
            },
            // 不显示刻度
            axisTick: {
              show: false
            },
            // 把刻度标签里面的文字颜色设置为白色
            axisLabel: {
              color: "#aacdf1",
              fontSize: 16 // 设置字体大小
            }
          },
          {
            data: yData1,
            inverse: true,
            // 不显示y轴的线
            axisLine: {
              show: false
            },
            // 不显示刻度
            axisTick: {
              show: false
            },
            // 把刻度标签里面的文字颜色设置为白色
            axisLabel: {
              color: "#aacdf1"
            }
          }
        ],
        series: [
          { 
            name: "框阴影",
            type: "bar",
            barCategoryGap: 0,
            barWidth: 12,
            yAxisIndex: 0,
            data: maxNumArr,
            itemStyle: {
              barBorderRadius: 20,
              color: "#0e1e54",
              borderColor: "#0e1e54",
            },
            zlevel: 1,
          },
          {
            name: "条",
            type: "bar",
            data: yData1,
            yAxisIndex: 1,
            itemStyle: {
              barBorderRadius: 20,
              color: {
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                type: "linear", // 线性渐变
                colorStops: [
                  {
                    offset: 0,
                    color: '#fff',
                  },
                  {
                    offset: 1,
                    color: "#0159f9",
                  },
                ],
              },
            },
            // 柱子之间的距离
            barCategoryGap: 120,
            //柱子的宽度
            barWidth: 12,
            zlevel: 2
          }
          
        ]
      });
    },
  },
};
</script>
