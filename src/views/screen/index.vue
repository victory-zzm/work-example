<!--
 * @Author: your name
 * @Date: 2022-02-21 14:16:19
 * @LastEditTime: 2022-02-22 16:14:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \big-screen-html\src\views\screen\index.vue
-->
<template>
  <!-- 总屏
     要求：适配屏幕分辨率
     可以分組件形式引入，組件 放\views\components 文件夾-->
  <div class="screen-container">
    <div class="left">
      <div
        :class="['time', text == 'day' ? 'change' : '']"
        @click="getData('day')"
      >
        日
      </div>
      <div
        class="time"
        :class="['time', text == 'week' ? 'change' : '']"
        @click="getData('week')"
      >
        周
      </div>
      <div
        class="time"
        :class="['time', text == 'month' ? 'change' : '']"
        @click="getData('month')"
      >
        月
      </div>
      <div
        class="time"
        :class="['time', text == 'year' ? 'change' : '']"
        @click="getData('year')"
      >
        年
      </div>
    </div>
    <div class="main">
      <!-- 旋转动画 -->
      <div class="animate">
        <div @mouseover="stop" @mouseout="start" class="ball ball1" @click="goRoute('1')">
          <div :class="[showData[0].op >= '60%' ? 'container1' : 'container']">
            <div class="text">
              <h1>1.申领</h1>
              <p>总量: {{ showData[0].total }}</p>
              <p>超期量: {{ showData[0].oq }}</p>
              <p>超期率: {{ showData[0].op }}</p>
            </div>
          </div>
        </div>
        <div @mouseover="stop" @mouseout="start" class="ball ball2" @click="goRoute('2')">
          <div :class="[showData[1].op >= '60%' ? 'container1' : 'container']">
            <div class="text">
              <h1>2.批次生成</h1>
              <p>总量: {{ showData[1].total }}</p>
              <p>超期量: {{ showData[1].oq }}</p>
              <p>超期率: {{ showData[1].op }}</p>
            </div>
          </div>
        </div>
        <div @mouseover="stop" @mouseout="start" class="ball ball3" @click="goRoute('1')">
          <div :class="[showData[2].op >= '60%' ? 'container1' : 'container']">
            <div class="text">
              <h1>3.银行开户</h1>
              <p>总量: {{ showData[2].total }}</p>
              <p>超期量: {{ showData[2].oq }}</p>
              <p>超期率: {{ showData[2].op }}</p>
            </div>
          </div>
        </div>
        <div @mouseover="stop" @mouseout="start" class="ball ball4" @click="goRoute('1')">
          <div :class="[showData[3].op >= '60%' ? 'container1' : 'container']">
            <div class="text">
              <h1>4.卡片生产</h1>
              <p>总量: {{ showData[3].total }}</p>
              <p>超期量: {{ showData[3].oq }}</p>
              <p>超期率: {{ showData[3].op }}</p>
            </div>
          </div>
        </div>
        <div @mouseover="stop" @mouseout="start" class="ball ball5" @click="goRoute('1')">
          <div :class="[showData[4].op >= '60%' ? 'container1' : 'container']">
            <div class="text">
              <h1>5.卡场配送</h1>
              <p>总量: {{ showData[4].total }}</p>
              <p>超期量: {{ showData[4].oq }}</p>
              <p>超期率: {{ showData[4].op }}</p>
            </div>
          </div>
        </div>
        <div @mouseover="stop" @mouseout="start" class="ball ball6" @click="goRoute('1')">
          <div :class="[showData[5].op >= '60%' ? 'container1' : 'container']">
            <div class="text">
              <h1>6.银行内配</h1>
              <p>总量: {{ showData[5].total }}</p>
              <p>超期量: {{ showData[5].oq }}</p>
              <p>超期率: {{ showData[5].op }}</p>
            </div>
          </div>
        </div>
        <div @mouseover="stop" @mouseout="start" class="ball ball7" @click="goRoute('1')">
          <div :class="[showData[6].op >= '60%' ? 'container1' : 'container']">
            <div class="text">
              <h1>7.领卡</h1>
              <p>总量: {{ showData[6].total }}</p>
              <p>超期量: {{ showData[6].oq }}</p>
              <p>超期率: {{ showData[6].op }}</p>
            </div>
          </div>
        </div>
        <div @mouseover="stop" @mouseout="start" class="ball ball8" @click="goRoute('1')">
          <div :class="[showData[7].op >= '60%' ? 'container1' : 'container']">
            <div class="text">
              <h1>8.激活</h1>
              <p>总量: {{ showData[7].total }}</p>
              <p>超期量: {{ showData[7].oq }}</p>
              <p>超期率: {{ showData[7].op }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 旋转动画结束 -->
    </div>
    <div class="right" @click="goRoute('0')">
      <div>九</div>
      <div>大</div>
      <div>服</div>
      <div>务</div>
    </div>
  </div>
</template>

<script>
import   indexData   from '../../mockData/indexData'

  export default {
    name: "screenIndex",
    components: {},
    data() {
      return {
        text: "day",
        data: [],
        showData: [],
      };
    },
    created() {
  
      this.data = indexData.data.list;
      this.showData = indexData.data.list[0]

      // list().then((res) => {
      //   console.log(res);
      //   this.data = res.data;
      //   this.showData =  res.data.length ? res.data[0] : [];
      // });
    },
    methods: {
      stop(e) {
        console.log(e);
        var items = document.getElementsByClassName("ball");
        for (let j = 0; j < items.length; j++) {
          items[j].style.animationPlayState = "paused";
        }
      },
      start(e) {
        console.log(e);
        var items = document.getElementsByClassName("ball");
        for (let j = 0; j < items.length; j++) {
          items[j].style.animationPlayState = "running";
        }
      },
      getData(text) {
        this.text = text;
        if (text == "day") {
          this.showData = this.data[0];
        } else if (text == "week") {
          this.showData = this.data[1];
        } else if (text == "month") {
          this.showData = this.data[2];
        } else if (text == "year") {
          this.showData = this.data[3];
        }
      },
      // 跳转九大服务
      goRoute(type) {
        switch (type) {
          case '0':
            this.$router.push({path: "/middle"});
            break;
          case '1':
            this.$router.push({path: "/middle"});
            break;
          default:
            this.$router.push({path: "/middle"});
        }

      },
    },
  };
</script>

<style lang="less" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .screen-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 8.5vh 1.5vw 1.5vw 1.5vw;
    box-sizing: border-box;
    background: url(../../assets/images/screen/bg-screen.jpg) no-repeat center center;
    background-size: 100% 100%;
    position: relative;

    .right {
      position: fixed;
      top: 50%;
      right: 0;
      width: 60px;
      height: 220px;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      cursor: pointer;
      color: rgb(0, 151, 225);
      background-color: rgb(3, 22, 84);
      border-radius: 5px 0 0 5px;

      > div {
        width: 60px;
        text-align: center;
        font-weight: bold;
        font-size: 22px;
      }
    }

    .left {
      position: fixed;
      top: 50%;
      left: 0;
      width: 60px;
      height: 220px;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      color: rgb(0, 151, 225);
      background-color: rgb(3, 22, 84);
      border-radius: 0 5px 5px 0;

      > .time {
        width: 60px;
        text-align: center;
        font-weight: bold;
        font-size: 22px;
        padding: 3px;
        cursor: pointer;
      }
    }
  }

  .main {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    width: 70%;
    height: 36%;
  }

  .main::after {
    content: "";
    position: absolute;
    left: -110px;
    top: -110px;
    bottom: -210px;
    right: -125px;
    background-color: rgba(240, 240, 240, 0.1);
    background: url(../../assets/images/screen/bg-map.png) no-repeat center center;
    background-size: 100% 100%;
    z-index: -10;
  }

  /* 旋转动画 */
  .animate {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    left: 10px;
    top: 20px;
  }

  .change {
    background: url("../../assets/images/screen/icon-time.png") no-repeat center center !important;
    background-size: 100% 100%;
    border-radius: 5px;
    color: rgb(144, 240, 255);
  }

  @keyframes animX {
    0% {
      left: -100px;
    }
    100% {
      left: 100%;
    }
  }

  @keyframes animY {
    0% {
      top: -150px;
    }
    100% {
      top: 100%;
    }
  }

  @keyframes scale {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0.8);
    }
  }

  .ball {
    width: 110px;
    height: 110px;
    position: absolute;
    font-size: 12px;
  }

  .ball > .container {
    width: 100%;
    height: 100%;

    position: relative;
    cursor: pointer;
  }

  .ball1 > .container {
    background: url(../../assets/images/screen/bg-apply.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball2 > .container {
    background: url(../../assets/images/screen/bg-batch.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball3 > .container {
    background: url(../../assets/images/screen/bg-bank.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball4 > .container {
    background: url(../../assets/images/screen/bg-card.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball5 > .container {
    background: url(../../assets/images/screen/bg-distribution.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball6 > .container {
    background: url(../../assets/images/screen/bg-within.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball7 > .container {
    background: url(../../assets/images/screen/bg-receive.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball8 > .container {
    background: url(../../assets/images/screen/bg-activation.png) no-repeat center center;
    background-size: 100% 100%;
  }

  //---------------
  .ball > .container1 {
    width: 100%;
    height: 100%;

    position: relative;
    cursor: pointer;
  }

  .ball1 > .container1 {
    background: url(../../assets/images/screen/bg-apply1.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball2 > .container1 {
    background: url(../../assets/images/screen/bg-batch1.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball3 > .container1 {
    background: url(../../assets/images/screen/bg-bank1.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball4 > .container1 {
    background: url(../../assets/images/screen/bg-card1.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball5 > .container1 {
    background: url(../../assets/images/screen/bg-distribution1.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball6 > .container1 {
    background: url(../../assets/images/screen/bg-within1.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball7 > .container1 {
    background: url(../../assets/images/screen/bg-receive1.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball8 > .container1 {
    background: url(../../assets/images/screen/bg-activation1.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .ball > .container > .text,
  .ball > .container1 > .text {
    position: absolute;
    top: -80px;
    transform: translateX(15%);
    height: 105px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .ball > .container > .text > h1 {
    line-height: 24px;
    font-size: 20px;
    color: rgb(120, 241, 255);
  }

  .ball > .container1 > .text > h1 {
    line-height: 24px;
    font-size: 20px;
    color: rgb(252, 35, 35);
  }

  .ball > .container > .text > p {
    line-height: 15px;
    font-size: 15px;
    color: rgb(147, 242, 255);
  }

  .ball > .container1 > .text > p {
    line-height: 15px;
    font-size: 13px;
    color: rgb(255, 133, 133);
  }

  /* 6个图x和y轴动画加起来是18s ,             18/8 =  2.25s             // 36s 36/8=4
  每个球y轴动画延迟 从0递减3s,x轴与y轴相差动画时长的一半（9s/2） */
  //18/2=9
  .ball1 {
    animation: animX 18s cubic-bezier(0.36, 0, 0.64, 1) -9s infinite alternate,
    animY 18s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
    scale 36s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
  }

  .ball2 {
    animation: animX 18s cubic-bezier(0.36, 0, 0.64, 1) -13.5s infinite alternate,
    animY 18s cubic-bezier(0.36, 0, 0.64, 1) -4.5s infinite alternate,
    scale 36s cubic-bezier(0.36, 0, 0.64, 1) -4.5s infinite alternate;
  }

  .ball3 {
    animation: animX 18s cubic-bezier(0.36, 0, 0.64, 1) -18s infinite alternate,
    animY 18s cubic-bezier(0.36, 0, 0.64, 1) -9s infinite alternate,
    scale 36s cubic-bezier(0.36, 0, 0.64, 1) -9s infinite alternate;
  }

  .ball4 {
    animation: animX 18s cubic-bezier(0.36, 0, 0.64, 1) -22.5s infinite alternate,
    animY 18s cubic-bezier(0.36, 0, 0.64, 1) -13.5s infinite alternate,
    scale 36s cubic-bezier(0.36, 0, 0.64, 1) -13.5s infinite alternate;
  }

  .ball5 {
    animation: animX 18s cubic-bezier(0.36, 0, 0.64, 1) -27s infinite alternate,
    animY 18s cubic-bezier(0.36, 0, 0.64, 1) -18s infinite alternate,
    scale 36s cubic-bezier(0.36, 0, 0.64, 1) -18s infinite alternate;
  }

  .ball6 {
    animation: animX 18s cubic-bezier(0.36, 0, 0.64, 1) -31.5s infinite alternate,
    animY 18s cubic-bezier(0.36, 0, 0.64, 1) -22.5s infinite alternate,
    scale 36s cubic-bezier(0.36, 0, 0.64, 1) -22.5s infinite alternate;
  }

  .ball7 {
    animation: animX 18s cubic-bezier(0.36, 0, 0.64, 1) -36s infinite alternate,
    animY 18s cubic-bezier(0.36, 0, 0.64, 1) -27s infinite alternate,
    scale 36s cubic-bezier(0.36, 0, 0.64, 1) -27s infinite alternate;
  }

  .ball8 {
    animation: animX 18s cubic-bezier(0.36, 0, 0.64, 1) -40.5s infinite alternate,
    animY 18s cubic-bezier(0.36, 0, 0.64, 1) -31.5s infinite alternate,
    scale 36s cubic-bezier(0.36, 0, 0.64, 1) -31.5s infinite alternate;
  }
</style>
