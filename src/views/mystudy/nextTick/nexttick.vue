<template>
  <div>
    <div class="next-tick" ref="findValue">
      {{mydata}}
    </div>
    <el-button @click="changeMydata">change mydata</el-button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        mydata: '从未改变'
      }
    },
    methods:{
      changeMydata(){
        // 修改数据mydata
        this.mydata = '一直改变';
        // DOM 还没有更新
        // let value = this.$refs.findValue.innerText;
        // console.log(value); // 从未改变
        let value = document.querySelector('.next-tick');
        console.log(value.innerText); // 从未改变
        
        this.$nextTick(function(){
          // DOM 现在更新了
          let value1 = document.querySelector('.next-tick');
          console.log(value1.innerText); // 一直改变
          // 可以看到DOM更新之后才进行this.$nextTick操作
          // this绑定到当前实例
          this.doSomethingElse();
        })
      },
      doSomethingElse(){
        console.log('this.$nextTick');
      }
    }
  }
</script>

<style lang="less" scoped>

</style>