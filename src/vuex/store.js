import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)
const debug = process.env.NODE_EVN !== 'production' && process.env.NODE_EVN !== 'production-runtime'

export default new Vuex.Store({
  modules: {
    //用户信息
    user
  },
})
