<template>
  <div>
    <div>second</div>
  </div>
</template>

<script>
import {myMixin} from "./js/myMixin.js"
  export default {
    mixins: [myMixin],
    created(){

    },
    mounted(){
      console.log(this.num); // 组件1里改变了num里面的值，组件2中的num值还是混入对象里的初始值
    }
  }
</script>

<style lang="less" scoped>

</style>