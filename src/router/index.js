import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const home = resolve => require(['../pages/home.vue'], resolve);
const account = resolve => require(['../pages/account.vue'], resolve);
const announcement = resolve => require(['../pages/announcement.vue'], resolve);
const news = resolve => require(['../pages/news.vue'], resolve);

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
      path: '/announcement',
      component: announcement,
    },
    {
      path: '/news',
      component: news,
    }
  ]
});
export default router;
