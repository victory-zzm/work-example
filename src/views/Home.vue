<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <router-view></router-view> -->
    <div class="to-page">
      <el-button @click="toBigScreen">大屏</el-button>
      <el-button @click="toElementUi">elementUi总结</el-button>
      <el-button @click="toVueComponent">vue中的控件</el-button>
      <el-button @click="toMapPage">地图下钻</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  methods:{
    toBigScreen(){
      this.$router.push('about');
    },
    toElementUi(){
      this.$router.push('elementui')
    },
    toVueComponent(){
      this.$router.push('vuecomponent')
    },
    toMapPage(){
      this.$router.push('map')
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1920px;
  height: 900px;
  position: relative;
  background-color: #ccc;
  .to-page{
    width: 500px;
    height: 200px;
    background-color: red;
  }
}
</style>
