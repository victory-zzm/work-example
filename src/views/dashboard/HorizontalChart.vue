<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
// import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

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
      this.chart = this.$echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
    },
    setOptions() {
      // const barColor = [
      //   "rgba(24, 144, 255,.5)",
      //   "rgba(24, 144, 255,1)",
      //   "#e6ebf5",
      // ];
      // console.log(this.chartData);

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
              color: "#357bc5",
              fontSize: 14 // 设置字体大小
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
              color: "#357bc5"
            }
          }
        ],
        series: [
          { 
            name: "框阴影",
            type: "bar",
            barCategoryGap: 120,
            barWidth: 12,
            yAxisIndex: 0,
            data: maxNumArr,
            itemStyle: {
              color: "#0e1e54",
              borderColor: "#0e1e54",
            }
          },
          {
            name: "条",
            type: "bar",
            data: yData1,
            yAxisIndex: 1,
            itemStyle: {
              // barBorderRadius: 20,
              color: {
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                type: "linear",
                colorStops: [
                  {
                    offset: 0,
                    color: '#51bbff',
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
          }
          
        ]
      });
    },
  },
};
</script>
