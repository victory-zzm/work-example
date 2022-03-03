<template>
  <div class="content-box">
    内容区域
    <div class="show-time">

    </div>
    <div class="map-box">
      <local-map></local-map>
    </div>
  </div>
</template>

<script>
import LocalMap from './mapDrilling.vue'
  export default {
    components:{
      "local-map":LocalMap
    }
  }
</script>

<style lang="less" scoped>
.content-box{
  height: 100%;
  width: 100%;
  .map-box{
    height: 600px;
    width: 900px;
  }
  .show-time{
    height: 600px;
    width: 900px;
    background-color: red;
  }
}
</style>