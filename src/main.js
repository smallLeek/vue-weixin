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
 //import FastClick from 'fastclick'
import echarts from 'echarts';
import wx from 'weixin-js-sdk'
import VueScroller from 'vue-scroller'
import './assets/css/swiper.css'

Vue.use(VueScroller)
Vue.prototype.$echarts = echarts
Vue.prototype.http =axios;
Vue.prototype.bs =new Vue();
Vue.config.productionTip = false;
//本地测试
//Vue.prototype.domain = 'http://localhost:8080/wx/async'
//测试地址
//Vue.prototype.domain = 'http://139.129.12.93:8085/wx/async';
//线上地址
//Vue.prototype.domain = 'https://www.phtfdata.com/wx/async';
Vue.prototype.domain = 'http://m.phtfdata.com/wx/async';
// router.beforeEach((to, from, next) => {
  // next();
  // let allowBack = true    //    给个默认值true
  // if (to.meta.allowBack !== undefined) {
  //   allowBack = to.meta.allowBack
  // }
  // if (!allowBack) {
  //   history.pushState(null, null, location.href)
  // }
  // store.dispatch('setAllowBank',allowBack)
// })

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
