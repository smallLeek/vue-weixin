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
import echarts from 'echarts';
import wx from 'weixin-js-sdk'
Vue.prototype.$echarts = echarts
Vue.prototype.http =axios;
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
