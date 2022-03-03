import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//main.js中
import './utils/lib-flexible/flexible.js'; // 引入大屏适配

import * as echarts from "echarts";

Vue.prototype.$echarts = echarts 

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
