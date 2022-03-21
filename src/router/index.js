import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Learn from '../views/learn.vue'
import ElementUi from '../views/ElementUI.vue'
import VueComponent from '../views/VueComponent.vue'
import MapPage from '@/components/map/Index.vue'
import Screen from '@/views/screen/index.vue';
import ScreenTest from '@/views/screen/testIndex.vue';
import Middle from '@/views/screen/middle/index.vue';
// import Drilling from '@/components/map/Index.vue';
import MixinsOne from '@/views/mystudy/mixinsLearn/mixinOne.vue';
import MixinsTwo from '@/views/mystudy/mixinsLearn/mixinTwo.vue';
import WorkList from '@/views/worklist/worklist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/learn',
    name: Learn,
    component: Learn
  },
  {
    path: '/elementui',
    name: ElementUi,
    component: ElementUi
  },
  {
    path: '/screen',
    name: 'Screen',
    component: Screen
  },
  {
    path: '/screentest',
    name: 'ScreenTest',
    component: ScreenTest
  },
  {
    path: '/middle',
    name: 'Middle',
    component: Middle
  },
  {
    path: '/vuecomponent',
    name: VueComponent,
    component: VueComponent
  },
  { // 关于大屏适配的问题
    path: '/map',
    name: 'MapPage',
    component: MapPage
  },
  { // 提升效率的
    path: '/worklist',
    name: WorkList,
    component: WorkList
  },
  {
    path: '/learnmixin1',
    name: 'mixin1',
    component: MixinsOne
  },
  {
    path: '/learnmixin2',
    name: 'mixin2',
    component: MixinsTwo
  },
  { // 大屏显示组件
    path: '/testpage',
    component: (resolve) => require(['@/views/screen/test'], resolve),
    hidden: true
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/mystudy/nextTick/nexttick.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
