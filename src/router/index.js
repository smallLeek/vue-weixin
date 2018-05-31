import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const home = resolve => require(['../pages/home.vue'], resolve);
// 账户
const account = resolve => require(['../pages/account/account.vue'], resolve);
const beingCapital = resolve => require(['../pages/account/beingCapital.vue'], resolve);
const ttyAccount = resolve => require(['../pages/account/ttyAccount.vue'], resolve);
// 新闻
const announcementList = resolve => require(['../pages/news/announcementList.vue'], resolve);
const newsList = resolve => require(['../pages/news/newsList.vue'], resolve);
const news = resolve => require(['../pages/news/news.vue'], resolve);
// 详情
const dcyParticulars = resolve => require(['../pages/particulars/dcyParticulars.vue'], resolve);
const ttyParticulars = resolve => require(['../pages/particulars/ttyParticulars.vue'], resolve);
const yyyParticulars = resolve => require(['../pages/particulars/yyyParticulars.vue'], resolve);
// 记录
const tradingRecord = resolve => require(['../pages/record/tradingRecord.vue'], resolve);
const ttyRecord = resolve => require(['../pages/record/ttyRecord.vue'], resolve);
// 充值
const recharge = resolve => require(['../pages/recharge/recharge.vue'], resolve);
// 签到
const signIn = resolve => require(['../pages/signIn/signIn.vue'], resolve);

const router = new VueRouter({
  base: 'phtMobile',
  mode: 'history',
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
    },
    {
      path: '/account',
      component: account,
    },
    {
      path: '/announcementList',
      component: announcementList,
    },
    {
      path: '/newsList',
      component: newsList,
    },
    {
      path: '/news',
      component: news,
    },
    {
      path: '/beingCapital',
      component: beingCapital,
    },
    {
      path: '/ttyAccount',
      component: ttyAccount,
    },
    {
      path: '/dcyParticulars',
      component: dcyParticulars,
    },
    {
      path: '/ttyParticulars',
      component: ttyParticulars,
    },
    {
      path: '/yyyParticulars',
      component: yyyParticulars,
    },
    {
      path: '/tradingRecord',
      component: tradingRecord,
    },
    {
      path: '/ttyRecord',
      component: ttyRecord,
    },
    {
      path: '/recharge',
      component: recharge,
    },
    {
      path: '/signIn',
      component: signIn,
    }
  ]
});
export default router;
