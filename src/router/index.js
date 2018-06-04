import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 首页
const home = resolve => require(['../pages/home/home.vue'], resolve);
const ttyMore = resolve => require(['../pages/home/tty/ttyMore.vue'], resolve);
const ttyHistory = resolve => require(['../pages/home/tty/ttyHistory.vue'], resolve);
const yyyMore = resolve => require(['../pages/home/yyyDcy/yyyMore.vue'], resolve);
const dcyMore = resolve => require(['../pages/home/yyyDcy/dcyMore.vue'], resolve);

// 我的账户
const account = resolve => require(['../pages/account/account.vue'], resolve);
const tradingRecord = resolve => require(['../pages/account/tradingRecord.vue'], resolve);
const recharge = resolve => require(['../pages/account/recharge.vue'], resolve);
const setting = resolve => require(['../pages/account/setting/setting.vue'], resolve);
const datum = resolve => require(['../pages/account/setting/datum.vue'], resolve);
const about = resolve => require(['../pages/account/setting/about.vue'], resolve);

// 天天盈账户
const beingCapital = resolve => require(['../pages/account/ttyAccount/beingCapital.vue'], resolve);
const ttyAccount = resolve => require(['../pages/account/ttyAccount/ttyAccount.vue'], resolve);
const ttyRecord = resolve => require(['../pages/account/ttyAccount/ttyRecord.vue'], resolve);

// 定投盈账户
const dty = resolve => require(['../pages/account/dty/dty.vue'], resolve);

// 新闻
const announcementList = resolve => require(['../pages/news/announcementList.vue'], resolve);
const newsList = resolve => require(['../pages/news/newsList.vue'], resolve);
const news = resolve => require(['../pages/news/news.vue'], resolve);

// 投资详情
const dcyParticulars = resolve => require(['../pages/particulars/dcyParticulars.vue'], resolve);
const ttyParticulars = resolve => require(['../pages/particulars/ttyParticulars.vue'], resolve);
const yyyParticulars = resolve => require(['../pages/particulars/yyyParticulars.vue'], resolve);
const earnings = resolve => require(['../pages/particulars/earnings.vue'], resolve);
const ttyInvestmentList = resolve => require(['../pages/particulars/ttyInvestmentList.vue'], resolve);

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
    },
    {
      path: '/ttyMore',
      component: ttyMore,
    },
    {
      path: '/ttyHistory',
      component: ttyHistory,
    },
    {
      path: '/yyyMore',
      component: yyyMore,
    },
    {
      path: '/dcyMore',
      component: dcyMore,
    },
    {
      path: '/earnings',
      component: earnings,
    },
    {
      path: '/ttyInvestmentList',
      component: ttyInvestmentList,
    },
    {
      path: '/setting',
      component: setting,
    },
    {
      path: '/datum',
      component: datum,
    },
    {
      path: '/about',
      component: about,
    },
    {
      path: '/dty',
      component: dty,
    }
  ]
});
export default router;
