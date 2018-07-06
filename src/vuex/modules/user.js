import * as types from '../types'
import {storeUtil} from '../../assets/js/util/lib.store'
const state = {
  // 用户登录状态
  loginStatus: JSON.parse(storeUtil.getStore('loginStatus'))|| false,
  // 用户登录信息
  userInfo: JSON.parse(storeUtil.getStore('userInfo')) || {},
  // 用户数据信息
  userData: [],
  //用户实名状态
  isRealName: null,
  //实名的url
  isRealNameUrl:null,
  //判断是否需要登陆是否需要实名然后然后去哪
  accessAuth:JSON.parse(storeUtil.getStore('accessAuth')) || {},
  //微信授权登陆code
  wxCode : storeUtil.getStore('wxCode') || null,
  //token
  tokenCode:storeUtil.getStore('tokenCode') || null,
  xwBank:storeUtil.getStore('xwBank') || null,
  xwInfo:false,
  //弹框
  showXwBank:false,
  //支付订单详情
  payDetail:JSON.parse(storeUtil.getStore('payDetail')) || {},
  //天天盈的账户详情
  ttyProj_code:storeUtil.getStore('ttyProj_code') || null,
  //返回状态
  allowBack:null,
  //Code
  Code:false,
  earning:JSON.parse(storeUtil.getStore('earning')) || {},

}

const actions = {
  /**
   * 弹框显示
   */
  setXwBank( { commit }, showXwBank ){
    commit(types.USER_XWBANK_STATE, showXwBank)

  },
  /**
   * code
   */
  setCode( { commit }, Code ){
    commit(types.CODE_STATE, Code)

  },

  /**
   * 用户登录
   * @param commit
   * @param res
   *
   */
  setUserInfo({commit}, res) {
    storeUtil.setStore('userInfo', res)
    storeUtil.setStore('loginStatus', true)
    //要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法：
    commit(types.SET_USER_INFO, res)
    commit(types.SET_LOGIN_STATUS, true)
  },
  setProjCode({commit}, res){
    storeUtil.setStore('ttyProj_code',res)
    commit(types.SET_PROJ_CODE, res)

  },
  /**
   * 退出登录
   * @param commit
   */
  setSignOut({commit}) {
    storeUtil.removeStore('loginStatus')
    storeUtil.removeStore('userInfo')
    storeUtil.removeStore('tokenCode');
    storeUtil.removeStore('accessAuth');
    commit(types.SET_LOGIN_STATUS, false)
    commit(types.SET_USER_INFO, {});
  },
  /**
   * 获取tokenCode
   * @param commit
   * @param res
   */
  getTokenCode({commit}, res) {
    storeUtil.setStore('tokenCode',res)
    commit(types.SET_TOKEN_CODE, res)
  },
  /**
   * 获取用户实名状态
   * @param commit
   * @param res
   */
  setIsRealName({commit}, res) {
    commit(types.SET_IS_REAL_NAME, res)

  },
  /**
   * 新网实名URL
   * @param commit
   * @param res
   */
  setIsRealNameUrl({commit},res){
    commit (types.SET_XW_URL,res)
  },
  /**
   * 判断用户状态
   * @param commit
   * @param res
   */
  setAccessAuth({commit},res){
    storeUtil.setStore('accessAuth', res)
    commit (types.SET_ACCESSAUTH,res)
  },
  /**
   * 新网提示信息
   * @param commit
   * @param xwBank
   * @constructor
   */
  USER_XW_BANK( { commit }, res ){
    storeUtil.setStore('xwBank', res)
    commit(types.USER_XW_BANK, res)

  },
  /**
   * 新网提示信息
   * @param commit
   * @param xwBank
   * @constructor
   */
  setEarning( { commit }, res ){
    storeUtil.setStore('earning', res)
    commit(types.EARAING, res)
  },
  /**
   * 收益试算
   * @param commit
   * @param xwBank
   * @constructor
   */
  setPayDetail( { commit }, res ){
    storeUtil.setStore('payDetail', res)
    commit(types.PAY_DETAIL, res)
  },
  /**
   * 禁止返回
   * @param commit
   * @param xwBank
   * @constructor
   */
  setAllowBank( { commit }, res ){
    commit(types.ALLOW_BANK, res)
  },
}

const getters = {
  loginStatus: state => state.loginStatus,
  userInfo: state => state.userInfo,
  tokenCode: state => state.tokenCode,
  isRealName: state => state.isRealName,
  isRealNameUrl:state =>state.isRealNameUrl,
  accessAuth:state =>state.accessAuth,
  //新网提示信息
  xwBank:state =>state.xwBank,
  showXwBank:state =>state.showXwBank,
  payDetail:state =>state.payDetail,
  getProjCode:state => state.ttyProj_code,
  allowBack:state => state.allowBack,
  Code:state => state.Code,
  earning:state => state.earning
}
/**
 * 在mutaion写入改变对应state里面的方法，哪里需要改变状态值时，只需要commit对应的方法即可
 * @type {{[p: string]: *}}
 */
const mutations = {
  /**
   * 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
   * 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
   * @param state
   * @param res
   */
  /**
   * 用户信息
   * @param state
   * @param res
   */
  [types.SET_USER_INFO](state, res) {
    state.userInfo = res
  },
  /**
   * code
   * @param state
   * @param res
   */
  [types.CODE_STATE](state, res) {
    state.Code = res
  },
  /**
   * 天天盈的项目编号
   *
   */
  [types.SET_PROJ_CODE](state, res){
    state.ttyProj_code =res;
  },
  /**
   * 用户的登陆状态
   * @param state
   * @param status
   */
  [types.SET_LOGIN_STATUS](state, status) {
    state.loginStatus = status
  },
  /**
   * 接口的tokenCode
   * @param state
   * @param status
   */
  [types.SET_TOKEN_CODE](state, status) {
    state.tokenCode = status
  },
  /**
   * 实名状态
   * @param state
   * @param status
   */
  [types.SET_IS_REAL_NAME](state, status) {
    state.isRealName = status
  },
  /**
   * 新网实名URl
   * @param state
   * @param status
   */
  [types.SET_XW_URL](state, status) {
    state.isRealNameUrl = status
  },
  /**
   * 判断用户的登陆实名状态
   * @param state
   * @param status
   */
  [types.SET_ACCESSAUTH](state, status) {
    state.accessAuth = status
  },
  //xwBank
  [types.USER_XW_BANK] ( state, xwBank){
    state.xwBank = xwBank

  },
  //弹框
  [types.USER_XWBANK_STATE] ( state, showXwBank){
    state.showXwBank = showXwBank

  },
  //支付订单详情
  [types.PAY_DETAIL] ( state, payDetail){
    state.payDetail = payDetail

  },
  //禁止返回
  [types.ALLOW_BANK] ( state, allowBack){
    state.allowBack = allowBack

  },
  //收益试算
  [types.EARAING] ( state, earning){
    state.earning = earning

  },




}

export default {
  state,
  actions,
  getters,
  mutations
}
