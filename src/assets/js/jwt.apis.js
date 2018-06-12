
import * as urls from './jwt.urls'
import {phtServer} from './phtServer'

/**
 * 获取首页公告
 */
function indexNotice(){
  return phtServer.globalPostData(urls.api_url_indexNotice, phtServer.submitData({}))
}

/**
 *  2.90.天天盈再投
 * @param USER_ID 用户ID
 * @param USER_TYPE 用户类型
 * @returns {*}
 * @constructor
 */
function DdProj(USER_ID, USER_TYPE) {
  return phtServer.globalPostData(urls.api_url_DdProj, phtServer.submitData({
    "USER_ID": USER_ID,
    "USER_TYPE": USER_TYPE
  }))
}

/**
 * 理财项目-在投-列表接口	(月月盈-定存盈)
 * @param USER_ID   用户ID
 * @returns {*}
 */
function selectMoneyManagementZTYD(USER_ID) {
  return phtServer.globalPostData(urls.api_url_selectMoneyManagementZTYD, phtServer.submitData({
    "USER_ID": USER_ID
  }))
}
/**
 * 获取用户信息
 * @param CUST_ID  用户Id
 * @param USER_TYPE   用户类型
 * @returns {*}       返回用户信息
 */
function userBaseData(CUST_ID, USER_TYPE) {
  return phtServer.globalPostData(urls.api_url_userBaseData, phtServer.submitData({
    "CUST_ID": CUST_ID,
    "USER_TYPE": USER_TYPE
  }))
}

/**
 * 我的-资产总计(元)/可用余额(元)/累计收益
 * @param CUST_ID  用户id
 * @param USER_TYPE  用户类型  1 个人  2 企业
 * @returns {*}
 */
function newAccountDataForApp(CUST_ID, CUST_TYPE) {
  return phtServer.globalPostData(urls.api_url_newAccountDataForApp, phtServer.submitData({
    "CUST_ID": CUST_ID,
    "CUST_TYPE": CUST_TYPE
  }))
}

/**
 *新网银行卡信息查询  充值限额说明
 * @param BIND_TYPE 绑卡类型
 * @param PAY_FLAG 支付标识
 * @returns {*}
 */
function selectXwBank(BIND_TYPE, PAY_FLAG) {
  return phtServer.globalPostData(urls.api_url_selectXwBank, phtServer.submitData({
    "BIND_TYPE": BIND_TYPE,
    "PAY_FLAG": PAY_FLAG
  }))
}

/**
 *  充值
 * @param USER_ID 用户ID
 * @param USER_TYPE 用户类型
 * @param AMOUNT 充值金额
 * @param RECHARGEWAY 支付方式 支付方式 网银（WEB）、快捷支付（SWIFT
 * @param BANKCODE 银行卡编码
 * @param PAYTYPE 网银类型  B2C个人  B2B企业
 * @param redirectUrl  异步返回url
 */
function deposit(USER_ID, USER_TYPE, AMOUNT, RECHARGEWAY, BANKCODE, PAYTYPE, redirectUrl) {
  return phtServer.globalPostData(urls.api_url_deposit, phtServer.submitData({
    "USER_ID": USER_ID,
    "USER_TYPE": USER_TYPE,
    "AMOUNT": AMOUNT,
    "RECHARGEWAY": RECHARGEWAY,
    "BANKCODE": BANKCODE,
    "PAYTYPE": PAYTYPE,
    "redirectUrl": redirectUrl
  }))
}

/**
 * 新网银行卡信息查询   限额说明
 * @param BIND_TYPE 绑卡类型 0:个人 1:企业
 * @param PAY_FLAG 支付标识 0:网银 1:银行卡
 */
function selectXwBank(BIND_TYPE, PAY_FLAG){
  return phtServer.globalPostData(urls.api_url_selectXwBank, phtServer.submitData({
    "BIND_TYPE": BIND_TYPE,
    "PAY_FLAG": PAY_FLAG
  }))
}
/**
 * 登录
 * @param LOGIN_CODE
 * @param PASSWORD
 * @param USER_TYPE
 */

function newLogin(LOGIN_CODE,PASSWORD,USER_TYPE){
  return phtServer.globalPostData(urls.api_url_newLogin, phtServer.submitData({
    "LOGIN_CODE": LOGIN_CODE,
    "PASSWORD": PASSWORD,
    "USER_TYPE": USER_TYPE,
  }))
}



/**
 * 获取首页数据统计
 */

function getDataStatistics(){
  return phtServer.globalPostData(urls.api_url_queryMainPageTotalData, phtServer.submitData({
  }))
}



/**
 * 获取首页推荐项目
 */

function recommendedProject(){
  return phtServer.globalPostData(urls.api_url_selectHomePageRecommendAll, phtServer.submitData({
  }))
}



/**
 * 获取公告详情
 * @param ID
 * @param TIMESTAMPS
 */

function getNoticeInfo(ID,TIMESTAMPS){
  return phtServer.globalPostData(urls.api_url_getNoticeInfo, phtServer.submitData({
    "ID": ID,
    "TIMESTAMPS": TIMESTAMPS,
  }))
}





/**
 *发送验证码
 * @param MOBILE
 * @param USER_TYPE
 * @param VALID_TYPE
 * @returns {*}
 */
function sendMessageMobileValidCode(MOBILE,USER_TYPE,VALID_TYPE) {
  return phtServer.globalPostData(urls.api_url_sendMessageMobileValidCode,phtServer.submitData({
    "MOBILE": MOBILE,
    "USER_TYPE": USER_TYPE,
    "VALID_TYPE": VALID_TYPE,
  }))
}

/**
 * 融资端注册
 * @param MOBILE
 * @param LOGIN_CODE
 * @param PASSWORD
 * @param NEWPASSWORD
 * @param MOBILE_VER_CODE
 * @param RECO_TEL
 * @param CHANNEL
 * @param ASSURE_COMPANY
 * @param USER_ROLE
 * @param TRUSTEE_ID
 * @param TRUSTEE_TYPE
 * @param redirectUrl
 */
function newAddPersonXW(MOBILE,LOGIN_CODE,PASSWORD,MOBILE_VER_CODE,RECO_TEL,CHANNEL,ASSURE_COMPANY,USER_ROLE,TRUSTEE_ID,TRUSTEE_TYPE,redirectUrl) {
  return phtServer.globalPostData(urls.api_url_newAddPersonXW, phtServer.submitData({
    "MOBILE": MOBILE,
    "LOGIN_CODE": LOGIN_CODE,
    "PASSWORD": PASSWORD,
    "MOBILE_VER_CODE": MOBILE_VER_CODE,
    "RECO_TEL": RECO_TEL,
    "CHANNEL": CHANNEL,
    "ASSURE_COMPANY": ASSURE_COMPANY,
    "USER_ROLE": USER_ROLE,
    "TRUSTEE_ID": TRUSTEE_ID,
    "TRUSTEE_TYPE": TRUSTEE_TYPE,
    "redirectUrl": redirectUrl,
  }))
}

/**
 * 新用户注册
 * @param MOBILE
 * @param LOGIN_CODE
 * @param PASSWORD
 * @param NEWPASSWORD
 * @param MOBILE_VER_CODE
 * @param RECO_TEL
 * @constructor
 */
function XWnewAddPerson(MOBILE,LOGIN_CODE,PASSWORD,MOBILE_VER_CODE,RECO_TEL,redirectUrl) {
  return phtServer.globalPostData(urls.api_url_newAddPersonXW, phtServer.submitData({
    "MOBILE": MOBILE,
    "LOGIN_CODE": LOGIN_CODE,
    "PASSWORD": PASSWORD,
    "MOBILE_VER_CODE": MOBILE_VER_CODE,
    "RECO_TEL": RECO_TEL,
    "redirectUrl": redirectUrl
  }))

}

/**
 * 移动端获取banner图
 * @param FILE_TYPE
 */
function getBanner(FILE_TYPE) {
  return phtServer.globalPostData(urls.api_url_getBanner, phtServer.submitData({
    "FILE_TYPE": FILE_TYPE,
  }))
}

/**
 * 获取撮合资金
 */
function queryMainPageTotalData() {
  return phtServer.globalPostData(urls.api_url_queryMainPageTotalData, phtServer.submitData({
  }))
}

/**
 * 新网异步是否返回
 * @param REQUEST_NO
 * @param METHOD_NAME
 */
function queryNewAddPersonAsync(REQUEST_NO,METHOD_NAME) {
  return phtServer.globalPostData(urls.api_url_queryNewAddPersonAsync, phtServer.submitData({
    "REQUEST_NO": REQUEST_NO,
    "METHOD_NAME": METHOD_NAME,
  }))

}

/**
 * 激活用户
 * @param platformUserNo
 * @param cust_type
 * @param userRole
 * @param USER_ID
 * @param USER_TYPE
 */
function xwbankWebNotify (platformUserNo, cust_type, userRole, USER_ID, USER_TYPE) {
  return phtServer.globalPostData(urls.api_url_activateStockedUser, phtServer.submitData({
    "platformUserNo": platformUserNo,
    "cust_type": cust_type,
    "userRole":userRole,
    "USER_ID":USER_ID,
    "USER_TYPE":USER_TYPE
  }))
}

export  {
  sendMessageMobileValidCode,
  newAddPersonXW,
  XWnewAddPerson,
  getBanner,
  queryMainPageTotalData,
  queryNewAddPersonAsync,
  getNotice,
  getDataStatistics,
  recommendedProject,
  getNoticeInfo,
  newLogin,
  indexNotice,
  userBaseData,
  newAccountDataForApp,
  deposit,
  selectXwBank,
  DdProj,
  selectMoneyManagementZTYD
}

