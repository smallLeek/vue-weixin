'use strict'
import {env} from './config/api.config'


/**
 * 配置地址
 */
//消息服务
const origin_ProxyPath_msgcenter = env.origin_baseUrl+env.origin_ProxyPath_datas+ env.origin_ProxyPath_msgcenter;

//用户服务
const origin_ProxyPath_user = env.origin_baseUrl+env.origin_ProxyPath_texts+ env.origin_ProxyPath_user;

//红包服务
const origin_ProxyPath_redpacket = env.origin_baseUrl+env.origin_ProxyPath_redpackets+ env.origin_ProxyPath_redpacket;

//定投盈
const origin_ProxyPath_pds = env.origin_baseUrl+env.origin_ProxyPath_xwpdss+ env.origin_ProxyPath_pds;

//天天盈服务
const origin_ProxyPath_dds = env.origin_baseUrl+env.origin_ProxyPath_xwddss+ env.origin_ProxyPath_dds;

//优惠券服务
const origin_ProxyPath_coupon = env.origin_baseUrl+env.origin_ProxyPath_coupons+ env.origin_ProxyPath_coupon;

//新网银行注册绑卡
const origin_ProxyPath_xwbankWebNotify = env.origin_baseUrl+env.origin_ProxyPath_apts+ env.origin_ProxyPath_xwbankWebNotify;


/**
 * user服务
 */

//用户登录
export const api_url_newLogin = origin_ProxyPath_user+"/query/2.0/newLogin/2.0";
// 个人注册
export const  api_url_newAddPerson = origin_ProxyPath_user+"/query/2.0/newAddPerson/2.0";
//新网银行卡信息查询
export const  api_url_selectXwBank = origin_ProxyPath_user+"/query/2.0/selectXwBank/2.0";
//Web端企业注册
export const  api_url_newAddEnterprise = origin_ProxyPath_user+"/query/2.0/newAddEnterprise/2.0";
//App端我的-资产总计(元)/可用余额(元)/累计收益(元)
export const  api_url_newAccountDataForApp = origin_ProxyPath_user+"/query/2.0/newAccountDataForApp/2.0";
//Web端账户管理(高斌)
export const  api_url_newMyAccount = origin_ProxyPath_user+"/query/2.0/newMyAccount/2.0";
//APP端获取资产分析(我的-我的资产)
export const  api_url_newAssetsAnalysisForApp = origin_ProxyPath_user+"/query/2.0/newAssetsAnalysisForApp/2.0";
//APP端获取累计收益(我的-收益分析)
export const  api_url_newAccruedIncomeForApp = origin_ProxyPath_user+"/query/2.0/newAccruedIncomeForApp/2.0";
//设置是否校验校验密码
export const  api_url_setTrapwdState = origin_ProxyPath_user+"/userSet/2.0/setTrapwdState/2.0";
//提现
export const  api_url_withdraw = origin_ProxyPath_user+"/userAccount/2.0/withdraw/2.0";
//充值
export const  api_url_deposit = origin_ProxyPath_user+"/userAccount/2.0/deposit/2.0";
//提现提示详情
export const  api_url_withdrawInfo = origin_ProxyPath_user+"/userAccount/2.0/withdrawInfo/2.0";
//查询用户银行卡
export const  api_url_personalBankMsg = origin_ProxyPath_user+"/userAccount/2.0/personalBankMsg/2.0";
//App 找回登陆密码
export const  api_url_passwordRetrieval = origin_ProxyPath_user+"/userAccount/2.0/passwordRetrieval/2.0";
//重置登陆密码
export const  api_url_setNewPassword = origin_ProxyPath_user+"/userAccount/2.0/setNewPassword/2.0";
//分享奖励我邀请的人
export const  api_url_thePersonIInvited = origin_ProxyPath_user+"/userAccount/2.0/thePersonIInvited/2.0";
//分享奖励 收益   好友级别
export const  api_url_shareTheRewards = origin_ProxyPath_user+"/userAccount/2.0/shareTheRewards/2.0";
//查询用户基本资料
export const  api_url_userBaseData = origin_ProxyPath_user+"/userAccount/2.0/userBaseData/2.0";
//分享奖励 收益   收益金额
export const  api_url_tjRate = origin_ProxyPath_user+"/userAccount/2.0/tjRate/2.0";
//个人注册-查询用户是否存在
export const  api_url_validLoginCode = origin_ProxyPath_user+"/query/2.0/validLoginCode/2.0";
//记录投资评级分数
export const  api_url_recordScore = origin_ProxyPath_user+"/userSet/2.0/recordScore/2.0";
//查询投资评级分数
export const  api_url_queryInvestResult = origin_ProxyPath_user+"/userSet/2.0/queryInvestResult/2.0";
//更新注册手机号
export const  api_url_modifyRegistMobile = origin_ProxyPath_user+"/userAccount/2.0/modifyRegistMobile/2.0";
//充值提现记录查询
export const  api_url_queryCashValue = origin_ProxyPath_user+"/query/2.0/queryCashValue/2.0";
//密码找回验证用户帐号是否存在(有返回结果)
export const  api_url_validLoginCodeIs = origin_ProxyPath_user+"/query/2.0/validLoginCodeIs/2.0";
//提现记录详情
export const  api_url_withdrawDetail = origin_ProxyPath_user+"/userAccount/2.0/withdrawDetail/2.0";
//Web找回登陆密码
export const  api_url_retrievePasswordForWeb = origin_ProxyPath_user+"/userAccount/2.0/retrievePasswordForWeb/2.0";
//用户登录退出
export const  api_url_exitLogin = origin_ProxyPath_user+"/query/2.0/exitLogin/2.0";
//个人注册融资端
export const  api_url_newAddPersonXW = origin_ProxyPath_user+"/query/2.0/newAddPersonXW/2.0";

/**
 * 新网银行注册绑卡
 * origin_ProxyPath_xwbankWebNotify
 */
//新网异步信息是否返回查询
export const  api_url_queryNewAddPersonAsync = origin_ProxyPath_xwbankWebNotify+"/xwBankQuery/queryNewAddPersonAsync/2.0";
//个人绑卡注册
export const  api_url_personalRegister = origin_ProxyPath_xwbankWebNotify+"/xwBankAccount/personalRegister/2.0";
//激活用户
export const  api_url_activateStockedUser = origin_ProxyPath_xwbankWebNotify+"/xwBankAccount/activateStockedUser/2.0";
//修改/找回交易密码
export const  api_url_resetPassword = origin_ProxyPath_xwbankWebNotify+"/xwBankAccount/resetPassword/2.0";
//解绑银行卡
export const  api_url_unbindBankCard = origin_ProxyPath_xwbankWebNotify+"/xwBankAccount/unbindBankCard/2.0";
//个人换绑银行卡
export const  api_url_personalBindBankcard = origin_ProxyPath_xwbankWebNotify+"/xwBankAccount/personalBindBankcard/2.0";
//修改预留手机号
export const  api_url_modifyMobile = origin_ProxyPath_xwbankWebNotify+"/xwBankAccount/modifyMobile/2.0";
//委托支付授权
export const  api_url_authorizationEntrustPay = origin_ProxyPath_xwbankWebNotify+"/xwBankTrade/authorizationEntrustPay/2.0";
//取消授权
export const  api_url_cancelUserAuthorization = origin_ProxyPath_xwbankWebNotify+"/xwBankTrade/cancelUserAuthorization/2.0";
//用户授权
export const  api_url_userAuthorization = origin_ProxyPath_xwbankWebNotify+"/xwBankTrade/userAuthorization/2.0";

/**
 * 消息
 * msgcenter
 */
//首页Banner图
export const api_url_getBanner= origin_ProxyPath_msgcenter + "/query/2.0/getBanner/2.0";
//网站首页累计统计数据
export const api_url_queryMainPageTotalData= origin_ProxyPath_msgcenter + "/query/2.0/queryMainPageTotalData/2.0";
//平台公告
export const api_url_getNotice = origin_ProxyPath_msgcenter + "/query/2.0/getNotice/2.0";
//查询活动
export const api_url_queryEvent = origin_ProxyPath_msgcenter + "/query/2.0/queryEvent/2.0";
//查询进行中活动
export const api_url_qryEventStart = origin_ProxyPath_msgcenter + "/query/2.0/qryEventStart/2.0";
//查询结束活动（app）
export const api_url_qryEventEnd = origin_ProxyPath_msgcenter + "/query/2.0/qryEventEnd/2.0";
//奖励中心-任务列表
export const api_url_getTaskList = origin_ProxyPath_msgcenter + "/query/2.0/getTaskList/2.0";
//奖励中心-去完成
export const api_url_finishTaskCheck = origin_ProxyPath_msgcenter + "/query/2.0/finishTaskCheck/2.0";
//奖励中心-领取奖励
export const api_url_receiveTaskRewards = origin_ProxyPath_msgcenter + "/query/2.0/receiveTaskRewards/2.0";
//发送短信验证码
export const api_url_sendMessageValidCode = origin_ProxyPath_msgcenter + "/query/2.0/sendMessageValidCode/2.0";
//注册短信验证码
export const api_url_sendMessageMobileValidCode = origin_ProxyPath_msgcenter + "/query/2.0/sendMessageMobileValidCode/2.0";
//获取紧急公告
export const api_url_getEmergencyNotice = origin_ProxyPath_msgcenter + "/query/2.0/getEmergencyNotice/2.0";
//理财知识小课堂
export const api_url_getClassroomList = origin_ProxyPath_msgcenter + "/query/2.0/getClassroomList/2.0";
//分享文案
export const api_url_getCopywriter = origin_ProxyPath_msgcenter + "/query/2.0/getCopywriter/2.0";
//用户签到信息
export const api_url_getIntgralChkingSignInfo = origin_ProxyPath_msgcenter + "/query/2.0/getIntgralChkingSignInfo/2.0";
//签到
export const api_url_intgralchkingSign = origin_ProxyPath_msgcenter + "/query/2.0/intgralchkingSign/2.0";
//用户签到记录
export const api_url_selectUserSignRecord = origin_ProxyPath_msgcenter + "/query/2.0/selectUserSignRecord/2.0";
//首页重要公告
export const api_url_indexNotice = origin_ProxyPath_msgcenter + "/query/2.0/indexNotice/2.0";
//验证短信验证码
export const api_url_validMessageCode = origin_ProxyPath_msgcenter + "/query/2.0/validMessageCode/2.0";
//获取公告详情
export const api_url_getNoticeInfo = origin_ProxyPath_msgcenter + "/query/2.0/getNoticeInfo/2.0";
//通知消息列表
export const api_url_queryNotify = origin_ProxyPath_msgcenter + "/query/2.0/queryNotify/2.0";
//通知消息已读
export const api_url_readNotify = origin_ProxyPath_msgcenter + "/query/2.0/readNotify/2.0";

/**
 * 优惠券服务
 * origin_ProxyPath_coupon
 */
//优惠卷列表查询
export const api_url_queryCustCoupon = origin_ProxyPath_coupon + "/query/2.0/queryCustCoupon/2.0";
//查询优惠券明细
export const api_url_queryCouponDetail = origin_ProxyPath_coupon + "/query/2.0/queryCouponDetail/2.0";

/**
 *红包服务
 * origin_ProxyPath_redpacket
 */
//用户红包列表
export const api_url_queryRedPacket = origin_ProxyPath_redpacket + "/query/2.0/queryRedPacket/2.0";
//拆红包
export const api_url_newOpenRedPacket = origin_ProxyPath_redpacket + "/query/2.0/newOpenRedPacket/2.0";


/**
 *定投盈
 * origin_ProxyPath_pds
 */
//定投盈 -投资项目
export const api_url_queryInvestList = origin_ProxyPath_pds + "/pdsInvset/2.0/queryInvestList/2.0";
//定投盈 -投资项目
export const api_url_queryInvestListApp = origin_ProxyPath_pds + "/pdsInvset/2.0/queryInvestListApp/2.0";
//定投盈-收益查询
export const api_url_accountProfitApp = origin_ProxyPath_pds + "/pdsInvset/2.0/accountProfitApp/2.0";
//定投盈-收益记录
export const api_url_investRate = origin_ProxyPath_pds + "/pdsInvset/2.0/investRate/2.0";
//查询所有交易记录
export const api_url_tradAllRecord = origin_ProxyPath_pds + "/pdsInvset/2.0/tradAllRecord/2.0";
//交易记录详情
export const api_url_tradAllRecordDetail = origin_ProxyPath_pds + "/pdsInvset/2.0/tradAllRecordDetail/2.0";
//定期详情页
export const api_url_queryProjDetail = origin_ProxyPath_pds + "/pdsInvset/2.0/queryProjDetail/2.0";
//定期详情页投资记录
export const api_url_queryInvestedListApp = origin_ProxyPath_pds + "/pdsInvset/2.0/queryInvestedListApp/2.0";
//2.33.首页功能接口-推荐项目接口-天天盈(在投/售罄)-月月盈(在投/售罄)-定存赢（再投/售罄）
export const api_url_selectHomePageRecommendAll = origin_ProxyPath_pds + "/query/2.0/selectHomePageRecommendAll/2.0";
//理财项目-售罄-列表接口 月月盈
export const api_url_selectMoneyManagementSQy = origin_ProxyPath_pds + "/query/2.0/selectMoneyManagementSQy/2.0";
//理财项目-售罄-列表接口  定投盈
export const api_url_selectMoneyManagementSQd  = origin_ProxyPath_pds + "/query/2.0/selectMoneyManagementSQd/2.0";
//定投盈投资
export const api_url_pdsInvestProj = origin_ProxyPath_pds + "/pdsInvset/2.0/pdsInvestProj/2.0";
//理财项目-在投-列表接口
export const api_url_selectMoneyManagementZTYD  = origin_ProxyPath_pds + "/query/2.0/selectMoneyManagementZTYD/2.0";
//定期项目查询（web）
export const api_url_queryAllProj  = origin_ProxyPath_pds + "/query/2.0/queryAllProj/2.0";
//不可转让版合同
export const api_url_queryContractUnTrans  = origin_ProxyPath_pds + "/pdsContract/2.0/queryContractUnTrans/2.0";
//可转让版合同
export const api_url_queryContractCanTrans = origin_ProxyPath_pds + "/pdsContract/2.0/queryContractCanTrans/2.0";
//按揭宝收益计划
export const api_url_queryInvestIncomePlan  = origin_ProxyPath_pds + "/pdsInvset/2.0/queryInvestIncomePlan/2.0";

/**
 * 天天盈服务
 * origin_ProxyPath_dds
 */
//查询本金和利息还款计划
export const api_url_RepayPlanList  = origin_ProxyPath_dds + "/query/2.0/RepayPlanList/2.0";
//天天盈项目还款冻结
export const api_url_preIrepayCapital  = origin_ProxyPath_dds + "/query/2.0/preIrepayCapital/2.0";
//天天盈项目利息扣除
export const api_url_repayInterest  = origin_ProxyPath_dds + "/query/2.0/repayInterest/2.0";
/**
 * 天天盈文档有误，后台正在更新
 */
