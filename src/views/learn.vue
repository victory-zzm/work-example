<template>
  <div>
    <div class="learn-box">
      <p>1. new Vue()初始化vue对象</p>
      <p>2. beforeCreate() 创建前 进行data中的数据监听，初始化vue中的内部事件</p>
      <p>3. created() 将data中的数据和vue中的语法写的模板编译成html</p>
      <p>4. beforeMounted() 将编译好的标签替换掉el属性所指向的dom对象或替换对应HTML标签里面的内容, 此时还没有将编译出的HTML渲染到页面</p>
      <p>5. Mounted() 将编译好的html挂载到页面，此时可以进行ajax发送请求获取数据操作，对数据进行初始化 （只执行一次）</p>
      <p>6. beforeUpdate() 实时监控data中的数据变化</p>
      <p>7. updated() 进行数据的更新</p>
      <p>8. beforeDestory() 销毁/拆除所有观察者，子组件和事件监听</p>
      <p>9. destory() 销毁vue实例</p>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.learn-box{
  text-align: left;
  padding: 20px;
  font-size: 20px;
}
</style>