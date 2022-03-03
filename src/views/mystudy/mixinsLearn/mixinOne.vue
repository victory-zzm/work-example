<template>
  <div class="content-box">
    <div class="mixin">

    </div>
  </div>
</template>

<script>
import { myMixin } from "./js/myMixin.js"
/* 
  mixins的特点：
    1. 方法和参数在各组件中不共享(如：mixinOne中的num 输出是2 而mixinTwo中输出是1)
    2. 值为对象的选项，如methods，components等，选项会被合并，键冲突的组件会覆盖混入对象的 (两个对象键名冲突时，取组件对象的键值对而不是mixin的)
    3. 值为函数的选项，如created, mounted等，就会被合并调用，混合对象里的钩子函数在组件里的钩子函数之前调用
      (同名钩子函数将合并为一个数组，因此都将被调用; 另外，混入对象的钩子将在组件自身钩子之前调用)

  注意：mixin也可以进行全局引入
    混入也可以进行全局注册。使用时格外小心！一旦使用全局混入，它将影响每一个之后创建的 Vue 实例。
    使用恰当时，这可以用来为自定义选项注入处理逻辑。

  与vuex的区别：
    vuex：用来做状态管理的，里面定义的变量在每个组件中均可以使用和修改，在任一组件中修改此变量的值之后，其他组件中此变量的值也会随之修改。
    Mixins：可以定义共用的变量，在每个组件中使用，引入组件中之后，各个变量是相互独立的，值的修改在组件中不会相互影响。

  与公共组件的区别：
    组件：在父组件中引入组件，相当于在父组件中给出一片独立的空间供子组件使用，然后根据props来传值，但本质上两者是相对独立的。
    Mixins：则是在引入组件之后与组件中的对象和方法进行合并，相当于扩展了父组件的对象与方法，可以理解为形成了一个新的组件

*/
  export default {
    mixins: [myMixin], //  引入复用，把混入对象混入到当前组件中
    data(){
      return {

      }
    },
    created(){
      console.log('hello from template1'); // mixins created中的console.log('hello from mixin');会更先调用
      this.num++;
      this.Hello();
      this.fun_self();
      this.fun_one(); // 没有被覆盖，因为在本组件中没有this.fun_one()函数
      this.fun_two(); // 覆盖了myMixin中的 fun_two()函数
    },
    mounted(){
      console.log(this.num);
    },
    methods:{
      fun_self(){
        console.log('myself funciton from myself');
      },
      fun_two(){
        console.log('fun_two from myself')
      }
    }
    
  }
</script>

<style lang="less" scoped>

</style>