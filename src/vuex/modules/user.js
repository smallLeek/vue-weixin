import * as types from '../types'
import { phtServer } from '../../assets/js/phtServer'

const state = {
    // 用户登录状态
    loginStatus: JSON.parse(phtServer.getStore('loginStatus')) || false,
    // 用户登录信息
    userInfo: JSON.parse(phtServer.getStore('userInfo')) || {},
    // 用户数据信息
    userData: [],
}

const actions = {
    /**
     * 用户登录
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
     */
    setSignOut({ commit }) {
      phtServer.removeStore('loginStatus')
      phtServer.removeStore('userInfo')
        commit(types.SET_LOGIN_STATUS, false)
        commit(types.SET_USER_INFO, {})
    },

    /**
     * 请求用户信息
     */
    getUserData({ commit }, id) {
        commit(types.COM_LOADING_STATUS, true)
      phtServer.globalPostData(id)

            .then(res => {
                commit(types.COM_LOADING_STATUS, false)
                commit(types.GET_USER_DATA, res.data)
            })
    }
}

const getters = {
    getUserData: state => state.userData,
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

    [types.GET_USER_DATA](state, res) {
        state.userData = res
    }

}

export default {
    state,
    actions,
    getters,
    mutations
}
