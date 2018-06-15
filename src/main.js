import Vue from 'vue';
import App from './App';
import router from './router';
import $ from 'jquery';
import axios from 'axios';
import store from './vuex/store';
import VueBus from 'vue-bus';
import {} from './directive/directive';
import './assets/css/common.css';
import'./assets/js/common.js';
import FastClick from 'fastclick'
import echarts from 'echarts';
import wx from 'weixin-js-sdk'
import VueScroller from 'vue-scroller'
import './assets/css/swiper.css'

FastClick.attach(document.body)

Vue.use(VueScroller)
Vue.prototype.$echarts = echarts
Vue.prototype.http =axios;
Vue.prototype.bs =new Vue();
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  $,
  store,
  axios,
  VueBus,
  wx,
  template: '<App/>',
  components: { App }
});
// 打开新页面
router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
});
