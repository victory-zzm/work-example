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
  {
    path: '/map',
    name: MapPage,
    component: MapPage
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
