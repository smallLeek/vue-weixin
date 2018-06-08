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
import VueScroller from 'vue-scroller'
import './assets/css/swiper.css'
<<<<<<< HEAD
=======
import './assets/js/jwt.accessAuth'

>>>>>>> 25e66bffa9ca6f946e4ae4c40ef9a721d9df79b8
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
