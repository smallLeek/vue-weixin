import * as types from '../types'
import { phtServer } from '../../assets/js/phtServer'

const state = {
    // 用户登录状态
    loginStatus: JSON.parse(phtServer.getStore('loginStatus')) || false,
    // 用户登录信息
    userInfo: JSON.parse(phtServer.getStore('userInfo')) || {},
    // 用户数据信息
    userData: [],
    //用户的token
    tokenCode:null
}

const actions = {
  /**
   * 用户登录
   * @param commit
   * @param res
   */
    setUserInfo({ commit }, res) {
      phtServer.setStore('userInfo', JSON.stringify(res))
        // phtservice.setStore('userInfo', res)
      phtServer.setStore('loginStatus', true)
        commit(types.SET_USER_INFO, res)
        commit(types.SET_LOGIN_STATUS, true)
    },

  /**
   * 退出登录
   * @param commit
   */
  setSignOut({ commit }) {
      phtServer.removeStore('loginStatus')
      phtServer.removeStore('userInfo')
        commit(types.SET_LOGIN_STATUS, false)
        commit(types.SET_USER_INFO, {})
    },

  getTokenCode({ commit },res){
    commit(types.SET_USER_INFO, res)
  }
}

const getters = {

    loginStatus: state => state.loginStatus,
    userInfo: state => state.userInfo,
}

const mutations = {
    [types.SET_USER_INFO](state, res) {
        state.userInfo = res
    },

    [types.SET_LOGIN_STATUS](state, status) {
        state.loginStatus = status
    },


}

export default {
    state,
    actions,
    getters,
    mutations
}
