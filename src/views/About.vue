<template>
  <div class="about">
    <div class="header-box">
      <p>广州市社会保障卡发行服务智慧服务管理平台</p>
    </div>
    <div class="main-box">
      <div class="content-box">
        <div class="top-box">
          <el-row :gutter="10">
            <el-col :span="12">
              <div class="left-box myChart">
                <!-- <p style="color:#fff; font-size:20px; text-align: left; margin-left: 20px;">各类人群持卡情况统计</p> -->
                <div class="tip-box">
                  <p>各类人群持卡情况统计</p>
                </div>
                <div class="grid-content" id="mychartPie" ></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="right-box">
                <div class="tip-box">
                  <p>各类人群社保卡激活情况统计</p>
                </div>
                <div class="grid-content" id="mychartLine">
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="bottom" >
          <div class="tip-box">
            <p>各银行社保卡激活情况统计</p>
          </div>
          <div class="linebar-box" id="mychartLineBar"></div>
        </div>
      </div>
      <div class="map">
        <div class="mapChart" id="mychartMap"></div>
      </div>
      
    </div>
  </div>
</template>
<script>
/* 
  大屏适配PC总结
  1. 安装：
    npm install echarts -S   （安装依赖并引入到 package.json）
  2. 在main.js中引入并挂载到vue原型中：
    import * as echarts from "echarts";
    Vue.prototype.$echarts = echarts;
  3. 地图使用，引入相关地图的json文件
  4. 大屏适配解决方案，将在main.js中引入
    import './utils/lib-flexible/flexible.js'; // 引入大屏适配
  5. 大屏适配的使用方式如下(详细如下)：
    1.准备好dom，初始化echarts实例
    2.配置option项内容进行配置
    3.绘制图表
    4.进行收缩扩张监听
*/
</script>

<script>
import guangzhou from '../assets/cityjson/广州1.json'
export default {
  mounted(){
    this.drawPie();
    this.drawBar();
    this.drawLineBar();
    this.drawMap();
  },
  methods:{
    drawPie(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('mychartPie'))
      // 配置项
      let option = {
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '60%'],
            data:[
              { value: 202, name: '特定业务人员' },
              { value: 245, name: '异地就医人员' },
              { value: 105, name: '优抚人员' },
              { value: 168, name: '老年人' },
              { value: 280, name: '参保人' }
            ],
            label: {
              color: "#518dd8",
              formatter:'{b}{d}% ',
              show: true,
              fontSize: '14',
              fontWeight: 'bold'
              },
            emphasis: {
              label: {
                formatter:'{b}{d}% ',
                show: true,
                fontSize: '16',
                fontWeight: 'bold'
              }
            },
          }
        ]
      };
      // 绘制图表
      myChart.setOption(option);
      window.addEventListener('resize', function(){
        myChart.resize();
      })

    },
    drawBar(){
      // 基于准备好的dom，初始化echarts实例
      let myChartLine = this.$echarts.init(document.getElementById('mychartLine'));
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          show: true,
          testStyle:{
            color: "#fff"
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            position:'top', // 设置该x轴的位置
            type: 'value', //x轴数据类型，value时就是值，category时就是分类，可用于区分y轴与x轴
            axisLine: { 
              // 不显示X轴的线
              show: false
            },
            // xAxisIndex: 0,//对应下方的x轴
            nameTextStyle:{
              fontSize: 20
            },
            splitLine:{ // 网格线
              show: true,
              lineStyle: {
                color: "rgba(76, 160, 255, 0.2)",
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
              }
            },
          },
          { // 第二个x轴
            position: "bottom", // 设置该x轴的位置
            type: 'value', //x轴数据类型，value时就是值，category时就是分类，可用于区分y轴与x轴
            xAxisIndex: 1,//对应上方的x轴
            // name: '百分比',
            min: 0,
            max: 50,
            splitNumber: 5, // 设置间隔点数
            axisLine: { 
              // 不显示X轴的线
              show: false
            },
            axisTick: {
              // 不显示刻度
              show: false,
              alignWithLabel: true,
            },
            axisLabel: {
              show: true,
              formatter: '{value} %'
            },
            nameTextStyle:{
              fontSize: 20,
              color: "#fff",
              align: "left"
            },
            splitLine:{ // 网格线
              show: false,
              lineStyle: {
                color: "rgba(76, 160, 255, 0.2)",
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
              }
            },
          }
        ],
        yAxis: {
          type: 'category',
          data: ['特定业务人员', '异地就医人员', '优抚人员', '老年人', '参保人'],
          axisLine: {
            // 不显示X轴的线
            show: false
          },
          axisTick: {
            // 不显示Y轴的刻度
            show: false
          },

          yAxisIndex: 1,//数据的刻度对应左边
          itemStyle: {
              // emphasis: {
              //     barBorderRadius: 7,
              // },
              normal: {//柱子相关设置
                  // barBorderRadius: [7,7,0,0],//设置柱子圆角;左上-右上-右下-左下
                  color: '#F9456D'
              },
          },
          
          // 修改Y轴的标签文字颜色
          axisLabel: {
            // 把刻度标签里面的颜色设置为白色
            color: '#3e83d4',
            fontSize: 14
          }
        },
        series: [
          {
            name: '激活数',
            type: 'bar',
            data: [1882, 2734, 690, 604, 2031],
            color: "#fbd550",
            testStyle:{
              color: "#ffffff"
            }
          },
          {
            name: '激活率',
            type: 'bar',
            data: [2493, 4234, 1010, 3921, 4900],
            // data: [2493, 4234, 1010, 3921, 4900],
            color: "#4ca0ff"
          }
        ]
      };
      myChartLine.setOption(option);
    },
    drawLineBar(){
      let mychartLineBar = this.$echarts.init(document.getElementById('mychartLineBar'));
      const colors = ['#077afa', '#87eb64', '#d65a5f', '#4495ef'];
      let option = {
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          // position: [10,10],
          backgroundColor: "#003386",
          borderColor: "#003386",
          textStyle:{
            color: '#fff'
          },
          formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}%<br />{a3}: {c3}%'
        },
        grid: {
          right: '10%',
          top: '15%',
          left: '10%'
        },
        
        /* toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        }, */
        legend: {
          data: ['持卡数', '激活数', '持卡率', '激活率'],
          position: 'left'
        },
        xAxis: [
          {
            type: 'category',
            axisLine: { 
              // 不显示X轴的线
              show: false
            },
            axisTick: {
              // 不显示刻度
              show: false
            },
            // prettier-ignore
            data: ['工行', '农行', '中行', '建行', '交行', '广发', '光大', '广州', '农商', '招商', '邮储']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '数量',
            min: 0,
            max: 4500,
            splitNumber: 9, // 设置间隔点数
            // data:[0,500,1000,1500,2000,2500,3000,3500,4000,4500],
            position: 'right',
            axisLine: {
              show: false,
            },
            axisLabel: {
              formatter: '{value}'
            },
            splitLine:{ // 网格线
              show: false,
              lineStyle: {
                color: "rgba(76, 160, 255, 0.2)",
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
              }
            }
          },
          {
            type: 'value',
            name: '百分比',
            min: 0,
            max: 45,
            splitNumber: 9, // 设置间隔点数
            position: 'left',
            axisLine: {
              show: false,
            },
            axisLabel: {
              formatter: '{value} %'
            },
            splitLine:{ // 网格线
              show: true,
              lineStyle: {
                color: "rgba(76, 160, 255, 0.2)",
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
              }
            }
          }
        ],
        series: [
          {
            name: '持卡数',
            type: 'bar',
            yAxisIndex: 0,
            data: [
              1120, 1419, 1710, 2132, 1256, 1767, 1356, 1622, 326, 200, 264
            ]
          },
          {
            name: '激活数',
            type: 'bar',
            yAxisIndex: 0,
            data: [
              1126, 1159, 1190, 2614, 2187, 2107, 1756, 1822, 487, 188, 160
            ]
          },
          {
            name: '持卡率',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            data: [20, 22, 33, 25, 23, 20, 33, 35, 30, 26, 20]
          },
          {
            name: '激活率',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            data: [24, 28, 36, 25, 16, 12, 13, 19, 25, 28, 33]
          }
        ]
      };
      mychartLineBar.setOption(option);
    },
    drawMap(){
      // 基于准备好的dom，初始化echarts实例
      // var myChart = echarts.init(document.getElementById('main'));
      let mychartMap = this.$echarts.init(document.getElementById('mychartMap'));
      // 地图打点数据
      var dataa=[
        {name:"荔湾区", value: [113.243038,23.124943,"荔湾区-1号店",[1120,1126,20,24]]},
        {name:"海珠区", value: [113.262008,23.103131,"海珠区-1号店",[1120,1126,20,23]]},
        {name:"越秀区", value: [113.280714,23.125624,"越秀区-1号店",[1120,1126,20,22]]},
        {name:"天河区", value: [113.335367,23.13559,"天河区-1号店",[1120,1126,20,14]]},
        {name:"黄埔区", value: [113.450761,23.103239,"黄埔区-1号店",[1120,1126,20,24]]},
        {name:"白云区", value: [113.262831,23.162281,"白云区-1号店",[1120,1126,20,11]]},
        {name:"番禺区", value: [113.364619,22.938582,"番禺区-1号店",[1120,1126,20,14]]},
        {name:"南沙区", value: [113.53738,22.794531,"南沙区-1号店",[1120,1126,20,15]]},
        {name:"从化区", value: [113.587386,23.545283,"从化区-1号店",[1120,1126,20,18]]},
        {name:"花都区", value: [113.211184,23.39205,"花都区-1号店",[1120,1126,20,9]]},
        {name:"增城区", value: [113.829579,23.290497,"增城区-1号店", [1120,1126,20,7]]},
      ];
      let option = {
        // backgroundColor: '#ccc',
        title: {
            text: '广州市 echart -门店分布图',
            subtext: '数据来源于我瞎编的',
            sublink: 'http://lengff.xyz',
            x: 'center',
            itemGap:2,
            subtextStyle:{
                color:"#fff"
            },
            textStyle:{
                color:"#fff"
            }
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: '#013c9a',
            textStyle:{
              align:'left',
              color: '#fff'
            },
            formatter: function (params) {
                return params.name +
                '</br>持卡数：' + params.value[3][0] +
                '</br>持卡率：' + params.value[3][2] + '%'+ 
                '</br>激活数：' + params.value[3][1] +
                '</br>激活率：' + params.value[3][3] + '%';
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:['测试门店分布'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'guangzhou',  // 点击的地图名字
            roam: true,   // 是否开启鼠标缩放和平移漫游
            zoom: 1.2,  // 地图放大倍数,当前视角的缩放比例
            layoutSize:"50%",
            label: {
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#084ba2',
                    borderColor: '#73ffb3'
                },
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    areaColor: '#4e4e4e'
                }
            }
        },
        toolbox: {
            show: true,
            right: 'left',
            top: 0,
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
          {
              name:'测试门店分布',
              type: 'scatter',
              coordinateSystem: 'geo',
              label: {
                  normal: {
                      color:'#fff',
                      formatter: '{b}',
                      position: 'bottom',
                      show: true
                  }
              },
              data: dataa,
              symbolSize: 30,
              encode: {value: 2},
              symbol:'pin',
              zlevel: 1
          }
        ]
      }
      this.$echarts.registerMap('guangzhou', guangzhou);
      // 渲染地图
      mychartMap.setOption(option);
    }
  }
}
</script>
<style lang="less" scoped>
.about{
  width: 1920px;
  height: 1024px;
  background-color: #001844;
  .header-box{
    height: 64px;
    // background-color: #fff;
    line-height: 64px;
    color: #fff;
    font-size: 24px;
  }
  .main-box{
    display: flex;
    .content-box{
      flex:3;
      height: 960px;
      // background-color: #fff;
      .top-box{
        height: 480px;
        // background-color: #fff;

      }
      .bottom{
        height: 470px;
        margin: 0 10px;
        box-shadow: inset 0 0 10px #3268cc;
        // background-color: #adc;
        .linebar-box{
          height: 420px;
          // width: 
        }
      }
    }
    .map{
      flex:2;
      height: 960px;
      // background-color: #fff;
      .mapChart{
        // width: 500px;
        height: 960px;
      }
    }
  }
}

.left-box{
  margin: 0 5px 5px 10px;
  box-shadow: inset 0 0 10px #3268cc;
}
.right-box{
  margin: 0 10px 5px 0;
  box-shadow: inset 0 0 10px #3268cc;

}

.tip-box{
  position: relative;
  color:#fff; 
  font-size:20px;
  margin-left: 40px;
  text-align: left; 
  width: 280px;
  height: 60px;
  top: 15px;
}
.tip-box::before{
  position: absolute;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid #3268cc;
  left: -25px;
  // background-color: rgb(255, 0, 0);
  content: "";
}


.el-col {
  border-radius: 4px;
}

.grid-content {
  height: 400px;
  width: 550px;
  border-radius: 4px;
  min-height: 36px;
}


</style>
