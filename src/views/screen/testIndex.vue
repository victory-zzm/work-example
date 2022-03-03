<template>
  <div class="test-index">
    没有问题
    <!-- 线性表 -->
    <div class="liner-box">
      <line-chart></line-chart>
    </div>
    <div class="panel-group">
      <panel-group></panel-group>
    </div>
    <div class="panel-ground">
      <pie-chart></pie-chart>
    </div>
    <div class="panel-ground">
      <raddar-chart></raddar-chart>
    </div>
  </div>
</template>

<script>
  import LineChart from "../dashboard/LineChart.vue";
  import PanelGroup from "../dashboard/PanelGroup.vue";
  import PieChart from "../dashboard/PieChart.vue";
  import RaddarChart from "../dashboard/RaddarChart.vue";
  export default {
    components:{
      "line-chart": LineChart,
      "panel-group": PanelGroup,
      "pie-chart": PieChart,
      "raddar-chart": RaddarChart
    }
  }
</script>

<style lang="less" scoped>
.test-index{
  height: 100%;
  width: 100%;
  background-color: red;
  .liner-box{
    height: 50%;
    background-color: #fff;
  }
  .panel-group{
    height: 50%;
    background-color: #fff;
  }
}
</style>