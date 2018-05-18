import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const home = resolve => require(['../pages/home.vue'], resolve);
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

    }
  ]
});
export default router;
