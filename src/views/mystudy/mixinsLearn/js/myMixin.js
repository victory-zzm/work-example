export const myMixin = {
  data(){
    return {
      num: 1,
    }
  },
  created(){
    console.log('hello from mixin');
    this.Hello();
  },
  methods: {
    Hello(){
      console.log('hello, this is my myMixin!', this.num);
    },
    fun_one(){
      console.log('myMixin 中的1')
    },
    fun_two(){
      console.log('myMixin 中的2')
    }
  }
}