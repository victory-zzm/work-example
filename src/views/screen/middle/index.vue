<template>
<!-- 中屏
     要求：适配屏幕分辨率 
     可以分組件形式引入，組件 放\views\components 文件夾-->
  <div class="screen-container">
    <div class="returnPage">
      <el-button type="primary" style="background: #152559;" @click="toScreenPage">返回</el-button>
    </div>

    <!-- 时间选择切换 -->
    <div class="time-box">
      <div class="tab-change">
        <ul>
          <li @click="displayChange(index)" v-for="(item,index) in changeTime" :key="index" :class="timeActive == index?'timeClass':''">
            {{item}}
          </li>
        </ul>
      </div>
      <div class="showtime">
        <p>{{currentTime}}</p>
      </div>
    </div>

    <!-- 按钮选择切换 -->
    <div class="tab-box">
      <div v-for="(item,index) in buttonText" :key="index" @click="getIndex" :class="active==index?'activeClass':''" :data-index="index">
        {{item}}
      </div>
    </div>

    <div class="echart-box">
      <div class="top-box">
        <div class="echart-one item">
          <div class="one-item">
            <div class="show-total">{{oneChartName}}</div>
            <div class="show-all">
              <div class="num-box" v-for="(value,index) in totalNum" :key="index" :class="(typeof value == 'number')?'num-box1': 'num-box2'">
                {{value}}
            </div>
            </div>
          </div>
        </div>

        <div class="item echart-two">
          <div class="tip-box">
            <img src="../../../assets/images/screen/icon-title.png" alt="" style="width: 30px; height: 24px;"/>
            <span>{{twoChartName}}</span>
          </div>
          <div class="echart-item">
            <bar-chart-total class="item-box" :chart-data="barChartData">

            </bar-chart-total>
          </div>
        </div>
      </div>
      <div class="bottom-box">
        <div class="item echart-three">
          <div class="tip-box">
            <img src="../../../assets/images/screen/icon-title.png" alt="" style="width: 30px; height: 24px;"/>
            <span>{{threeChartName}}</span>
          </div>
          <div class="echart-item">
            <bar-chart-total-bank class="item-box" :chart-data="bankChartData">
            </bar-chart-total-bank>
          </div>
        </div>
        <div class="item echart-four">
          <div class="tip-box">
            <img src="../../../assets/images/screen/icon-title.png" alt="" style="width: 30px; height: 24px;"/>
            <span>{{fourChartName}}</span>
          </div>
          <div class="echart-item">
            <horizontal-chart class="item-box1" :chart-data="deptChartData">
            </horizontal-chart>
          </div>
        </div>
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
import BarChartTotal from "../../dashboard/BarChartTotal";
import BarChartTotalBank from "../../dashboard/BarChartTotalBank";
import HorizontalChart from "../../dashboard/HorizontalChart.vue";

import { allMiddleData, weekAllMiddleData } from './middle.js'
// import { barData, bankChartData, deptChartData,totalNum } from './middle.js'

let order = 0;

// 实时获取事件
var t = null;
t = setTimeout(time, 0); //開始运行
function time() {
  clearTimeout(t); //清除定时器
  let dt = new Date();
  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var d = dt.getDay();
  let xingqi = ''
  if (d == 0) {
      xingqi = "星期日";
  } else if (d == 1) {
      xingqi = "星期一";
  } else if (d == 2) {
      xingqi = "星期二";
  } else if (d == 3) {
      xingqi = "星期三";
  } else if (d == 4) {
      xingqi = "星期四";
  } else if (d == 5) {
      xingqi = "星期五";
  } else if (d == 6) {
      xingqi = "星期六";
  }
  // var h = dt.getHours(); //获取时
  // var m = dt.getMinutes(); //获取分
  // var s = dt.getSeconds(); //获取秒
  // let currentTime = "当前时间：" +y +"年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
  let getInner = document.querySelector(".showtime");
  let onr = y + "年" + mt + "月" + day + "日" + "&nbsp;&nbsp;&nbsp;" + xingqi ;
  getInner.innerHTML = onr;
  t = setTimeout(time, 1000000); //设定定时器，循环运行
}


export default {
  name: 'screenIndex',
  components: {
   "bar-chart-total": BarChartTotal,
   "horizontal-chart": HorizontalChart,
   "bar-chart-total-bank": BarChartTotalBank
  },
  data() {
    return {
     active: 0, // 动态样式
     timeActive: 0, // 时间动态样式
     clickWeek: false,
     clickButton: false,
     oneChartName: '申领总数量',
     twoChartName: '每周申领情况',
     threeChartName: '各银行申领情况',
     fourChartName: '各区域申领情况',
     currentTime: t,
     buttonText: ["申领分析","补换卡分析","即时制卡分析","申领分析","申领分析","申领分析","申领分析","申领分析"],
     changeTime: ['周','月','季','年'],
     totalNum: weekAllMiddleData[0].totalNum,
     barChartData: weekAllMiddleData[0].barData,
     bankChartData: weekAllMiddleData[0].bankChartData,
     deptChartData: weekAllMiddleData[0].deptChartData
    }
  },
  methods: {
    // 按钮切换类型
    getIndex(e){
      if(e){
        order = parseInt(e.target.dataset.index);
        this.active = parseInt(e.target.dataset.index);
      }else{ // 非按钮触发，时间触发，设定为申领
        order = 0;
      }
      // console.log(e.target.dataset.index);
      if(order>1) return;
      if(order == 0){
        this.oneChartName = '申领总数量';
        this.twoChartName = (this.timeActive == 0)?'每周申领情况':'每月申领情况';
        this.threeChartName = '各银行申领情况';
        this.fourChartName = '各区域申领情况';
      }else{
        this.oneChartName = '换补卡总数量';
        this.twoChartName = (this.timeActive == 0)?'每周换补卡情况':'每月换补卡情况';
        this.threeChartName = '各银行换补卡情况';
        this.fourChartName = '各区域换补卡情况';
      }

      if(this.clickWeek){
        this.totalNum = allMiddleData[order].totalNum;
        this.barChartData = allMiddleData[order].barData;
        this.bankChartData = allMiddleData[order].bankChartData;
        this.deptChartData = allMiddleData[order].deptChartData;
      }else{
        this.totalNum = weekAllMiddleData[order].totalNum;
        this.barChartData = weekAllMiddleData[order].barData;
        this.bankChartData = weekAllMiddleData[order].bankChartData;
        this.deptChartData = weekAllMiddleData[order].deptChartData;
      }
      
    },

    // 时间实现切换
    displayChange(index){
      if(index>1) return;
      this.timeActive = index;
      this.active = 0;
      this.getIndex();
      // 点击了月
      if(this.timeActive == 1){
        this.clickWeek = true;
        this.totalNum = allMiddleData[0].totalNum;
        this.barChartData = allMiddleData[0].barData;
        this.bankChartData = allMiddleData[0].bankChartData;
        this.deptChartData = allMiddleData[0].deptChartData;
      }else if(this.timeActive == 0){ // 点击了周
        this.clickWeek = false;
        this.totalNum = weekAllMiddleData[0].totalNum;
        this.barChartData = weekAllMiddleData[0].barData;
        this.bankChartData = weekAllMiddleData[0].bankChartData;
        this.deptChartData = weekAllMiddleData[0].deptChartData;
      }
      
    },
    toScreenPage(){
      this.$router.push('index');
    }
  },
  created(){
    t = setTimeout(time, 0);
  }
}
</script>

<style lang="less" scoped>
.screen-container {
  position: relative;
  .returnPage{
    width: 80px;
    // background-color: #fff;
    position: absolute;
    top: 1.5%;
    right: 2%;
  }
  width: 100%;
	height: 100%;
	overflow: hidden;
  padding: 6.5vh 1.5vw 1.5vw 1.5vw;
	box-sizing: border-box;
	background: url(../../../assets/images/screen/bg-screen.jpg) no-repeat center center;
	background-size: 100% 100%;
	// position: relative;
  .time-box{
    color: #008bdb;
    font-size: 22px;
    font-weight: 700;
    height: 30px;
    line-height: 15px;
    width: 100%;
    margin-right: 1.5vw;
    position: relative;
    // background-color: red;
    .tab-change{
      position: absolute;
      top: -30px;
      ul{
        margin-left: -40px;
        .timeClass{
          background: url(../../../assets/images/screen/icon-time.png) no-repeat center center;
        }
      }
      ul li{
        float: left;
        list-style: none;
        width: 45px;
        height: 45px;
        cursor: pointer;
        line-height: 45px;
        margin-right: 25px;
        border-radius: 12px;
        text-align: center;
        
      }
      // ul :nth-child(1){
      //   background-color: #fff;
      // }
    }
    .showtime{
      position: absolute;
      top: 0;
      right: 15px;
      letter-spacing: 3px;
    }

  }
  .tab-box{
    color: #008bdb;
    font-size: 20px;
    font-weight: 700;
    margin-top: 15px;
    display: flex;
    div{
      flex: 1;
      background-color: #fff;
      margin: 2px;
      text-align: center;
      height: 50px;
      cursor: pointer;
      line-height: 50px;
      background: url(../../../assets/images/screen/bg-tab.png) no-repeat center center;
      background-size: 100% 100%;
    }
    .activeClass{
      color: #90f0ff;
      background: url(../../../assets/images/screen/bg-tab-active.png) no-repeat center center;
      background-size: 100% 100%;
    }
  }
  .echart-box{
    height: 90%;
    // background-color: #fff;
    .top-box, 
    .bottom-box{
      height: 50%;
      // background-color: blue;
      display: flex;
      .item{
        flex: 1;
        margin: 5px 0 0 0;
        background: url(../../../assets/images/screen/bg-frame.png) no-repeat center center;
        background-size: 100% 100%;
      }
      :nth-child(1){
        margin-right: 5px;
      }
      .echart-one{
        color: #008bdb;
        font-size: 36px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        .one-item{
          height: 240px;
          padding: 0 30px;
          background: none;
          .show-total{
            margin-bottom: 25px;
          }
          .show-all{
            // display: flex;
            .num-box{
              // flex: 1;
              font-weight: 700;
              float: left;
              width: 69px;
              height: 99px;
              // margin-left: 20px;
              line-height: 99px;
              color: #fff;
              text-align: center;
            }
            .num-box1{
              margin-right: 10px;
              background: url(../../../assets/images/screen/bg-t.png) no-repeat center;
              background-size: 100% 100%;
            }
            .num-box2{
              color:#008bdb;
            }
          }
        }
      }
      .echart-two{
        width: 100%;
        display: flex;
        position: relative;
        .echart-item{
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: 0px;
          width:100%;
          .item-box{
            width:100%;
            height: 100%;
          }
        }
      }

      .echart-three{
        width: 100%;
        display: flex;
        position: relative;
        .echart-item{
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: -20px;
          width:100%;
          .item-box{
            width:100%;
            height: 100%;
          }
        }
      }

      .echart-four{
        width: 100%;
        display: flex;
        position: relative;
        .echart-item{
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: -50px;
          width:100%;
          .item-box1{
            // width:100%;
            height: 500px;
            // background-color: red;
          }
        }
      }
    }
  }
  .tip-box{
      position: absolute;
      color: #81ddf6;
      font-size: 30px;
      font-weight: 700;
      margin: 20px 0 0 20px;
      line-height: 30px;
      height: 30px;
      span{
        line-height: 30px;
      }
    }
}
</style>
