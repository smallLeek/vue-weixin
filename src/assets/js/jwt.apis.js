
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
 *天天盈项目详情
 * @param USER_ID   用户ID
 * @param USER_TYPE   用户类型
 * @param PROJ_CODE  项目编号
 * @returns {*}
 * @constructor
 */
function DdProjDetail(USER_ID, USER_TYPE,PROJ_CODE) {
  return phtServer.globalPostData(urls.api_url_DdProjDetail, phtServer.submitData({
    "USER_ID": USER_ID,
    "USER_TYPE": USER_TYPE,
    "PROJ_CODE": PROJ_CODE
  }))
}

/**
 * 天天盈项目用户转让列表
 * @param CUST_ID 用户ID
 * @param CUST_TYPE  用户类型
 * @param PROJ_CODE  项目编号
 * @param CURR_PAGE_NUM 从第几页开始
 * @param PER_PAGE_SIZE  每页几个
 * @returns {*}
 * @constructor
 */
function DdProjRedeemCustList(CUST_ID, CUST_TYPE,PROJ_CODE,CURR_PAGE_NUM,PER_PAGE_SIZE) {
  return phtServer.globalPostData(urls.api_url_DdProjRedeemCustList, phtServer.submitData({
    "CUST_ID": CUST_ID,
    "CUST_TYPE": CUST_TYPE,
    "PROJ_CODE": PROJ_CODE,
    "CURR_PAGE_NUM": CURR_PAGE_NUM,
    "PER_PAGE_SIZE": PER_PAGE_SIZE
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
 * @param CUST_TYPE  用户类型  1 个人  2 企业
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
 * @param NEWPASSWORD
 * @param PASSWORD
 * @param USER_TYPE
 * @param CODE
 */

function newLogin(LOGIN_CODE,NEWPASSWORD,PASSWORD,USER_TYPE,CODE){
  return phtServer.globalPostData(urls.api_url_newLogin, phtServer.submitData({
    "LOGIN_CODE": LOGIN_CODE,
    "NEWPASSWORD": NEWPASSWORD,
    "PASSWORD": PASSWORD,
    "USER_TYPE": USER_TYPE,
    "CODE":CODE
  }))
}

/**
 * 微信授权登陆
 * @param CODE
 * @param USER_TYPE
 * @returns {*}
 * @constructor
 */
function WeiXinnewLogin(CODE,USER_TYPE){
  return phtServer.globalPostData(urls.api_url_newLogin, phtServer.submitData({
    "CODE": CODE,
    "USER_TYPE":USER_TYPE
  }))
}



/**
 * 获取首页数据统计
 */

function queryMainPageTotalData(){
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
 * 找回密码时 发送的验证码
 * @param MOBILE
 * @param USER_TYPE
 * @param VALID_TYPE
 * @returns {*}
 */
function sendMessageValidCode(MOBILE,USER_TYPE,VALID_TYPE) {
  return phtServer.globalPostData(urls.api_url_sendMessageValidCode,phtServer.submitData({
    "MOBILE": MOBILE,
    "USER_TYPE": USER_TYPE,
    "VALID_TYPE": VALID_TYPE,
  }))
}

/**
 * 修改手机号码
 * @param CUST_ID
 * @param MOBILE
 * @param USER_TYPE
 * @param VALID_TYPE
 * @returns {*}
 */
function sendMessageValidCodeWithId(CUST_ID,MOBILE,USER_TYPE,VALID_TYPE) {
  return phtServer.globalPostData(urls.api_url_sendMessageValidCode,phtServer.submitData({
    "CUST_ID": CUST_ID,
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
 *  新用户注册
 * @param MOBILE
 * @param LOGIN_CODE
 * @param PASSWORD
 * @param NEWPASSWORD
 * @param MOBILE_VER_CODE
 * @param RECO_TEL
 * @param redirectUrl
 * @returns {*}
 * @constructor
 */
function XWnewAddPerson(MOBILE,LOGIN_CODE,PASSWORD,NEWPASSWORD,MOBILE_VER_CODE,RECO_TEL,redirectUrl) {
  return phtServer.globalPostData(urls.api_url_newAddPerson, phtServer.submitData({
    "MOBILE": MOBILE,
    "LOGIN_CODE": LOGIN_CODE,
    "PASSWORD": PASSWORD,
    "NEWPASSWORD": NEWPASSWORD,
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
 * @param REQUEST_NO 请求流水号 新网返回的时候在地址拼了一个流水号
 * @param METHOD_NAME 方法名  操作名称
 * @param METHOD_TYPE   传1
 * @param USER_ID  用户ID
 * @param USER_TYPE 用户类型
 * @returns {*}
 */
function queryNewAddPersonAsync(REQUEST_NO,METHOD_NAME,METHOD_TYPE,USER_ID,USER_TYPE) {
  return phtServer.globalPostData(urls.api_url_queryNewAddPersonAsync, phtServer.submitData({
    "REQUEST_NO": REQUEST_NO,
    "METHOD_NAME": METHOD_NAME,
    "METHOD_TYPE": METHOD_TYPE,
    "USER_ID": USER_ID,
    "USER_TYPE": USER_TYPE

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
function xwbankWebNotify (platformUserNo, cust_type, userRole, USER_ID, USER_TYPE,redirectUrl) {
  return phtServer.globalPostData(urls.api_url_activateStockedUser, phtServer.submitData({
    "platformUserNo": platformUserNo,
    "cust_type": cust_type,
    "userRole":userRole,
    "USER_ID":USER_ID,
    "USER_TYPE":USER_TYPE,
    "redirectUrl":redirectUrl
  }))
}
function passwordRetrieval(bindPhoneNum,msgCode,newPwd) {
  return phtServer.globalPostData(urls.api_url_passwordRetrieval,phtServer.submitData({
    "MOBILE":bindPhoneNum,
    "MOBILE_VER_CODE":msgCode,
    "PASSWORD":newPwd,
    "USER_TYPE":"1",
  }))

}

/**
 * 个人绑卡注册
 * @param platformUserNo
 * @param USER_ID
 * @param USER_TYPE
 * @param userRole
 * @param redirectUrl
 * @returns {*}
 */
export function personalRegister(platformUserNo,USER_ID,USER_TYPE,userRole,redirectUrl) {
  return phtServer.globalPostData(urls.api_url_personalRegister,phtServer.submitData({
    "platformUserNo":platformUserNo,
    "USER_ID":USER_ID,
    "USER_TYPE":USER_TYPE,
    "userRole":userRole,
    "redirectUrl":redirectUrl,
  }))
}
function exitLogin(CUST_ID,CUST_TYPE) {
  return phtServer.globalPostData(urls.api_url_exitLogin,phtServer.submitData({
    "CUST_ID":CUST_ID,
    "CUST_TYPE":CUST_TYPE,
  }))

}

/**
 *
 * @param CUST_ID   用户id
 * @param CUST_TYPE 用户类型
 * @param PROJ_CODE 项目id
 * @returns {*}
 */
function queryProjDetail(CUST_ID,CUST_TYPE,PROJ_CODE){
  return phtServer.globalPostData(urls.api_url_queryProjDetail,phtServer.submitData({
    "CUST_ID":CUST_ID,
    "CUST_TYPE":CUST_TYPE,
    "PROJ_CODE":PROJ_CODE
  }))
}
/**
 * 定期详情页投资记录
 *@param CUST_ID 用户id
 * @param CUST_TYPE 用户类型
 * @param PROJ_CODE 项目id
 * @param CURR_PAGE_NUM   页数
 * @param PER_PAGE_SIZE   每页几个
 * @returns {*}
 */
function ueryInvestedListApp(CUST_ID,CUST_TYPE,PROJ_CODE,CURR_PAGE_NUM,PER_PAGE_SIZE) {
  return phtServer.globalPostData(urls.api_url_queryInvestedListApp,phtServer.submitData({
    "CUST_ID":CUST_ID,
    "CUST_TYPE":CUST_TYPE,
    "PROJ_CODE":PROJ_CODE,
    "CURR_PAGE_NUM":CURR_PAGE_NUM,
    "PER_PAGE_SIZE":PER_PAGE_SIZE
  }))
}
/**
 * 定投盈投资
 *@param CUST_ID 用户id
 * @param CUST_TYPE 用户类型
 * @param PROJ_CODE 项目id
 * @param INVEST_AMOUNT  投资金额
 * @param IS_CHECK_TRA_PWD   是否开通免密支付   0 未开通 1开通
 * @returns {*}
 */
function pdsInvestProj(CUST_ID,CUST_TYPE,PROJ_CODE,INVEST_AMOUNT,IS_CHECK_TRA_PWD,redirectUrl) {
  return phtServer.globalPostData(urls.api_url_pdsInvestProj,phtServer.submitData({
    "CUST_ID":CUST_ID,
    "CUST_TYPE":CUST_TYPE,
    "PROJ_CODE":PROJ_CODE,
    "INVEST_AMOUNT":INVEST_AMOUNT,
    "IS_CHECK_TRA_PWD":IS_CHECK_TRA_PWD,
    "redirectUrl":redirectUrl,
  }))
}

/**
 * 天天盈投资
 * @param CUST_ID
 * @param CUST_TYPE
 * @param AMOUNT
 * @param PROJ_CODE
 * @param redirectUrl
 * @returns {*}
 */
function borrow (CUST_ID,CUST_TYPE,AMOUNT,PROJ_CODE,redirectUrl) {
  return phtServer.globalPostData(urls.api_url_borrow,phtServer.submitData({
    "CUST_ID":CUST_ID,
    "CUST_TYPE":CUST_TYPE,
    "AMOUNT":AMOUNT,
    "PROJ_CODE":PROJ_CODE,
    "redirectUrl":redirectUrl,
  }))
}

/**
 *
 *@param USER_ID 用户id
 * @param USER_TYPE 用户类型
 * @param PROJ_CODE 项目id
 * @param CURR_PAGE_NUM   页数
 * @param PER_PAGE_SIZE   每页几个
 * @returns {*}
 */
function DdProjInvestCustList (USER_ID,USER_TYPE,PROJ_CODE,PER_PAGE_SIZE,CURR_PAGE_NUM) {
  return phtServer.globalPostData(urls.api_url_DdProjInvestCustList,phtServer.submitData({
    "USER_ID":USER_ID,
    "USER_TYPE":USER_TYPE,
    "PROJ_CODE":PROJ_CODE,
    "PER_PAGE_SIZE":PER_PAGE_SIZE,
    "CURR_PAGE_NUM":CURR_PAGE_NUM
  }))
}

/**
 *天天盈账务
 *@param USER_ID 用户id
 * @param USER_TYPE 用户类型
 * @param PROJ_CODE 项目id
 * @param CURR_PAGE_NUM   页数
 * @param PER_PAGE_SIZE   每页几个
 * @returns {*}
 */
function GetAcctRateInfoSum (USER_ID,USER_TYPE,PROJ_CODE,PER_PAGE_SIZE,CURR_PAGE_NUM) {
  return phtServer.globalPostData(urls.api_url_GetAcctRateInfoSum,phtServer.submitData({
    "USER_ID":USER_ID,
    "USER_TYPE":USER_TYPE,
    "PROJ_CODE":PROJ_CODE,
    "PER_PAGE_SIZE":PER_PAGE_SIZE,
    "CURR_PAGE_NUM":CURR_PAGE_NUM
  }))
}

/**
 *
 *天天盈-天天盈账户-在投本金列表
 *@param USER_ID 用户id
 * @param USER_TYPE 用户类型
 * @param CURR_PAGE_NUM   页数
 * @param PER_PAGE_SIZE   每页几个
 * @returns {*}
 */
function DdProjAccPrinList (USER_ID,USER_TYPE,PER_PAGE_SIZE,CURR_PAGE_NUM) {
  return phtServer.globalPostData(urls.api_url_DdProjAccPrinList,phtServer.submitData({
    "USER_ID":USER_ID,
    "USER_TYPE":USER_TYPE,
    "PER_PAGE_SIZE":PER_PAGE_SIZE,
    "CURR_PAGE_NUM":CURR_PAGE_NUM
  }))
}
/**
 *
 *冻结本金(元)列表
 *@param USER_ID 用户id
 * @param USER_TYPE 用户类型
 * @param CURR_PAGE_NUM   页数
 * @param PER_PAGE_SIZE   每页几个
 * @returns {*}
 */
function FreezePrincipalList (USER_ID,USER_TYPE,PER_PAGE_SIZE,CURR_PAGE_NUM) {
  return phtServer.globalPostData(urls.api_url_FreezePrincipalList,phtServer.submitData({
    "USER_ID":USER_ID,
    "USER_TYPE":USER_TYPE,
    "PER_PAGE_SIZE":PER_PAGE_SIZE,
    "CURR_PAGE_NUM":CURR_PAGE_NUM
  }))
}

/**
 *
 *@param USER_ID 用户id
 * @param USER_TYPE 用户类型
 * @param  BUSITYPE  业务类型  0, 全部, 1,充值，2提现，3，天天盈，4，定投盈，5，分享奖励，6，存钱罐收益7，其他
 * @param CURR_PAGE_NUM   页数
 * @param PER_PAGE_SIZE   每页几个
 * @returns {*}
 * @constructor
 */
function DdProjTradeRecord (USER_ID,USER_TYPE,BUSITYPE,PER_PAGE_SIZE,CURR_PAGE_NUM) {
  return phtServer.globalPostData(urls.api_url_DdProjTradeRecord,phtServer.submitData({
    "USER_ID":USER_ID,
    "USER_TYPE":USER_TYPE,
    "BUSITYPE":BUSITYPE,
    "PER_PAGE_SIZE":PER_PAGE_SIZE,
    "CURR_PAGE_NUM":CURR_PAGE_NUM
  }))
}

/**
 *2.23.	定投盈 -投资项目
 * @param CUST_ID
 * @param CUST_TYPE
 * @param INVEST 投资状态   查所有：空，投资中：7，已收益：6
 * @param YJF_ID  投资id
 * @param PER_PAGE_SIZE
 * @param CURR_PAGE_NUM
 * @returns {*}
 */
function queryInvestListApp (CUST_ID,CUST_TYPE,INVEST,YJF_ID,PER_PAGE_SIZE,CURR_PAGE_NUM) {
  return phtServer.globalPostData(urls.api_url_queryInvestListApp,phtServer.submitData({
    "CUST_ID":CUST_ID,
    "CUST_TYPE":CUST_TYPE,
    "INVEST":INVEST,
    "YJF_ID":YJF_ID,
    "PER_PAGE_SIZE":PER_PAGE_SIZE,
    "CURR_PAGE_NUM":CURR_PAGE_NUM
  }))
}

/**
 *2.24.	定投盈-收益查询
 * @param CUST_ID 用户ID
 * @param CUST_TYPE 用户类型
 * @returns {*}
 */
function accountProfitApp (CUST_ID,CUST_TYPE) {
  return phtServer.globalPostData(urls.api_url_accountProfitApp,phtServer.submitData({
    "CUST_ID":CUST_ID,
    "CUST_TYPE":CUST_TYPE
  }))
}
/**
 * 获取微信签名
 * @param WXURL
 * @returns {*}
 * @constructor
 */
function tSignature (WXURL) {
  return phtServer.globalPostData(urls.api_url_getSignature,phtServer.submitData({
    "WXURL":WXURL,
  }))
}

/**
 * 获取交易记录
 * @param USER_ID
 * @param USER_TYPE
 * @param BEGIN_TIME
 * @param END_TIME
 * @param BUSITYPE
 * @param QUERY_DATETYPE
 * @param CURR_PAGE_NUM
 * @param PER_PAGE_SIZE
 * @returns {*}
 */

function tradAllRecord (USER_ID,USER_TYPE,BEGIN_TIME,END_TIME,BUSITYPE,QUERY_DATETYPE,CURR_PAGE_NUM,PER_PAGE_SIZE) {
  return phtServer.globalPostData(urls.api_url_tradAllRecord,phtServer.submitData({
    "USER_ID":USER_ID,
    "USER_TYPE":USER_TYPE,
    "BEGIN_TIME":BEGIN_TIME,
    "END_TIME":END_TIME,
    "BUSITYPE":BUSITYPE,
    "QUERY_DATETYPE":QUERY_DATETYPE,
    "CURR_PAGE_NUM":CURR_PAGE_NUM,
    "PER_PAGE_SIZE":PER_PAGE_SIZE,
  }))
}

function changePhoneNum (USER_ID,USER_TYPE,OLD_PHONE_NUM,OLD_MSG_CODE,NEW_PHONE_NUM,NEW_MSG_CODE) {
  return phtServer.globalPostData(urls.api_url_modifyRegistMobile,phtServer.submitData({
    "USER_ID":USER_ID,
    "USER_TYPE":USER_TYPE,
    "OLD_MOBILE":OLD_PHONE_NUM,
    "OLD_MOBILE_VALID_CODE":OLD_MSG_CODE,
    "NEW_MOBILE":NEW_PHONE_NUM,
    "NEW_MOBILE_VALID_CODE":NEW_MSG_CODE,
  }))
}



export  {
  passwordRetrieval,
  sendMessageMobileValidCode,
  sendMessageValidCode,
  sendMessageValidCodeWithId,
  newAddPersonXW,
  XWnewAddPerson,
  getBanner,
  queryNewAddPersonAsync,
  queryMainPageTotalData,
  recommendedProject,
  getNoticeInfo,
  newLogin,
  indexNotice,
  userBaseData,
  newAccountDataForApp,
  deposit,
  selectXwBank,
  DdProj,
  selectMoneyManagementZTYD,
  WeiXinnewLogin,
  xwbankWebNotify,
  DdProjDetail,
  DdProjRedeemCustList,
  queryProjDetail,
  ueryInvestedListApp,
  exitLogin,
  pdsInvestProj,
  borrow,
  DdProjInvestCustList,
  tSignature,
  GetAcctRateInfoSum,
  DdProjAccPrinList,
  FreezePrincipalList,
  DdProjTradeRecord,
  queryInvestListApp,
  accountProfitApp,
  tradAllRecord,
  changePhoneNum
}

