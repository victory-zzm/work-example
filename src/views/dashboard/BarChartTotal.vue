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
      default: "300px",
    },
    chartData: {
      type: Object,
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
    //  categoryData, chartdata,bottomData } = {}
    setOptions({ chartdata,bottomData } = {}) {
       
      const barColor = [
        "rgba(24, 144, 255,.5)",
        "rgba(24, 144, 255,1)",
        "#e6ebf5",
      ];
      const xData = chartdata.map(i => {
        return i.area
      })
      const yData1 = chartdata.map(i => {
        return i.value1
      })

      this.chart.setOption({
        backgroundColor:'',
        textStyle: { // 柱形条上的颜色
          color: "rgba(23, 43, 95,1)",
          fontSize: 14,
        },
        toolbox: {
          show: true,
          iconStyle: {
            borderColor: "#c0c3cd",
          },
        },
        legend: {
          top: 10,
          itemWidth: 8,
          itemHeight: 8,
          icon: "circle",
          left: "center",
          padding: 0,
          textStyle: {
            color: "#c0c3cd",
            fontSize: 14,
            padding: [2, 0, 0, 0],
          },
        },
        color: ["#00D7E9", "rgba(0, 215, 233, 0.9)"], // 柱形调底部
        grid: { // 网格
          show:false,
          containLabel: true,
          left: 40,
          right: 20,
          bottom: 40,
          top: 40,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 10,
          backgroundColor: 'transparent',
          borderColor: 'transparent'
        },
        xAxis: {
          backgroundColor:'',
          nameTextStyle: {
            color: "#c0c3cd",
            padding: [0, 0, -10, 0],
            fontSize: 14,
          },
          axisLabel: {
            color: barColor[1], // 纵坐标文字颜色
            fontSize: 16,
            // interval: 0,
          },
          axisTick: { // 刻度不展示
            show: false,
            lineStyle: {
              color: "#384267",
              width: 1,
            },
          },
          axisLine: {
            show: false,
          },
          data: xData,
          type: "category",
        },
        yAxis: {
          backgroundColor:'',
          type: "value",
          axisLabel: {
            color: barColor[1], // 纵坐标文字颜色
            fontSize: 14,
          },
          axisTick: { // y轴刻度
            show: false,
          },
          splitLine: { // 网格线(横)
            show: true,
            lineStyle: {
              color: 'transparent', // 纵坐标线条颜色
              width: 2,
            },
          },
          axisLine: { // y轴线
            show: false,
          }
        },
        series: [
          {
            data: yData1,
            type: "bar",
            barMaxWidth: "auto",
            barWidth: 40,
            itemStyle: {
              color: {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                type: "linear",
                colorStops: [
                  {
                    offset: 0,
                    color: barColor[0],
                  },
                  {
                    offset: 1,
                    color: barColor[1],
                  },
                ],
              },
            },
            label: { // 主星
              show: true,
              position: "top",
              distance: 10,
              color: barColor[1],
            },
          },
          {
            data: bottomData, // 小内容 矩形
            type: "pictorialBar",
            barMaxWidth: "40",
            symbol: "diamond",
            symbolOffset: [0, "50%"],
            symbolSize: [40, 12],
          },
          {
            data: yData1,
            type: "pictorialBar",
            barMaxWidth: "40",
            symbolPosition: "end",
            symbol: "diamond",
            symbolOffset: [0, "-50%"],
            symbolSize: [40, 12],
            zlevel: 2,
          },
        ],
        tooltip: {
          show: true,
          formatter: "{b} {c0}张",
        },
      });
    },
  },
};
</script>
