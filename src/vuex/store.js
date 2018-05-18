import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

import com from './modules/com'
Vue.use(Vuex)
const debug = process.env.NODE_EVN !== 'production' && process.env.NODE_EVN !== 'production-runtime'

export default new Vuex.Store({
  modules: {
    user,//用户信息
    com //公共信息
  },
})
