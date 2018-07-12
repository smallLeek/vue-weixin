import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 首页
const home = resolve => require(['../pages/home/home.vue'], resolve);
const ttyMore = resolve => require(['../pages/home/tty/ttyMore.vue'], resolve);
const ttyHistory = resolve => require(['../pages/home/tty/ttyHistory.vue'], resolve);
const yyyMore = resolve => require(['../pages/home/yyyDcy/yyyMore.vue'], resolve);
const dcyMore = resolve => require(['../pages/home/yyyDcy/dcyMore.vue'], resolve);
const userInfo = resolve => require(['../pages/home/userInfo/userInfo.vue'], resolve);
const goXw = resolve => require(['../pages/home/goXw/goXw.vue'], resolve);


// 我的账户
const account = resolve => require(['../pages/account/account.vue'], resolve);
const tradingRecord = resolve => require(['../pages/account/tradingRecord.vue'], resolve);
const recharge = resolve => require(['../pages/account/recharge.vue'], resolve);
const setting = resolve => require(['../pages/account/setting/setting.vue'], resolve);
const datum = resolve => require(['../pages/account/setting/datum.vue'], resolve);
const about = resolve => require(['../pages/account/setting/about.vue'], resolve);
const security = resolve => require(['../pages/account/setting/security.vue'], resolve);
const shareList = resolve => require(['../pages/account/shareList/shareList.vue'], resolve);
const paymentOrder = resolve => require(['../pages/account/paymentOrder.vue'], resolve);
const limitRecharge = resolve => require(['../pages/account/limitRecharge.vue'], resolve);
const guarantee = resolve => require(['../pages/account/guarantee/guarantee.vue'], resolve);
const loanNo = resolve => require(['../pages/account/loanNo/loanNo.vue'], resolve);
const detail = resolve => require(['../pages/account/detail/detail.vue'], resolve);
const downloads = resolve => require(['../pages/account/downloads/downloads.vue'], resolve);
const shareInfo = resolve => require(['../pages/account/shareInfo/shareInfo.vue'], resolve);
const novice = resolve => require(['../pages/account/novice/novice.vue'], resolve);
const changePhoneNum = resolve => require(['../pages/account/changePhoneNum/changePhoneNum.vue'],resolve);

// 登录注册
const loginRegister = resolve => require(['../pages/home/loginRegister/loginRegister.vue'], resolve);
const login = resolve => require(['../pages/home/loginRegister/login.vue'], resolve);
const register = resolve => require(['../pages/home/loginRegister/register.vue'], resolve);
const getBackPassword = resolve => require(['../pages/home/loginRegister/getBackPassword.vue'], resolve);

// 天天盈账户
const beingCapital = resolve => require(['../pages/account/ttyAccount/beingCapital.vue'], resolve);
//冻结本金列表页面
const djList = resolve => require(['../pages/account/ttyAccount/djList.vue'], resolve);
const ttyAccount = resolve => require(['../pages/account/ttyAccount/ttyAccount.vue'], resolve);
const ttyRecord = resolve => require(['../pages/account/ttyAccount/ttyRecord.vue'], resolve);

// 定投盈账户
const dtyAccount = resolve => require(['../pages/account/dtyAccount/dtyAccount.vue'], resolve);
const aboutUs = resolve => require(['../pages/account/aboutUs/aboutUs.vue'], resolve);
const securitys = resolve => require(['../pages/account/securitys.vue'], resolve);
const benefitPlan = resolve => require(['../pages/account/dtyAccount/benefitPlan.vue'], resolve);
const gainRecording = resolve => require(['../pages/account/dtyAccount/gainRecording.vue'], resolve);
const projectProgress = resolve => require(['../pages/account/dtyAccount/projectProgress.vue'], resolve);

// 新闻
const announcementList = resolve => require(['../pages/news/announcementList.vue'], resolve);
const newsList = resolve => require(['../pages/news/newsList.vue'], resolve);
const news = resolve => require(['../pages/news/news.vue'], resolve);

// 投资详情
const dcyParticulars = resolve => require(['../pages/particulars/dcyParticulars.vue'], resolve);
const ttyParticulars = resolve => require(['../pages/particulars/ttyParticulars.vue'], resolve);
const yyyParticulars = resolve => require(['../pages/particulars/yyyParticulars.vue'], resolve);
const investSuccess = resolve => require(['../pages/particulars/investSuccess.vue'], resolve);
const earnings = resolve => require(['../pages/particulars/earnings.vue'], resolve);
const ttyInvestmentList = resolve => require(['../pages/particulars/ttyInvestmentList.vue'], resolve);

//异步返回页面

const asyncReturn =resolve => require (['../pages/async/asyncReturn.vue'], resolve);
const async =resolve => require (['../pages/async/async.vue'], resolve);

//分享
const share =resolve => require (['../pages/share/share.vue'], resolve);

//打开空白页面
 const blank = resolve => require(['../pages/blank/blank'], resolve);

const router = new VueRouter({
  base: 'wx',
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
      meta: {allowBack: false}
    },
    {
      path: '/blank',
      component: blank,
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
      path: '/djList',
      component: djList,
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
      path: '/investSuccess',
      component: investSuccess,
      meta: {allowBack: false}
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
      path: '/ttyMore',
      name: 'ttyMore',
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
      path: '/dtyAccount',
      component: dtyAccount,
    },
    {
      path: '/limitRecharge',
      component: limitRecharge,
    },
    {
      path: '/loginRegister',
      redirect: '/loginRegister/login'
    },
    {
      path: '/loginRegister',
      component: loginRegister,
      children: [
        { path: "/loginRegister/register", component: register },
        { path: "/loginRegister/login", component: login }
      ]
    },
    {
      path: '/getBackPassword',
      component: getBackPassword,
    },
    {
      path: '/security',
      component: security,
    },
    {
      path: '/shareList',
      component: shareList,
    },
    {
      path: '/paymentOrder',
      component: paymentOrder,
    },
    {
      path: '/benefitPlan',
      component: benefitPlan,
    },
    {
      path: '/gainRecording',
      component: gainRecording,
    },
    {
      path: '/projectProgress',
      component: projectProgress,
    },
    {  path: '/register',
      component: register,

    },
    {  path: '/asyncReturn',
      component: asyncReturn,
      meta: {allowBack: false}

    },

    {  path: '/share',
      component: share,

    },
    {  path: '/async',
      component: async,

    },
    {  path: '/aboutUs',
      component: aboutUs,

    },
   {  path: '/securitys',
      component: securitys,

   },
    {  path: '/changePhoneNum',
      component: changePhoneNum,
   },
    {  path: '/userInfo',
      component: userInfo,

    },
    {  path: '/goXw',
      component: goXw,

    },
    {  path: '/guarantee',
      component: guarantee,

    },
    {  path: '/loanNo',
      component: loanNo,

    },
    {  path: '/detail',
      component: detail,

    },
    {  path: '/downloads',
      component: downloads,

    },
    {  path: '/shareInfo',
      component: shareInfo,

    },
    {  path: '/novice',
      component: novice,

    },
  ]
});
export default router;
