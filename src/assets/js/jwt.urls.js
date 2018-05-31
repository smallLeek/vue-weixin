'use strict'
import {env} from './config/api.config'


/**
 * 配置地址
 */
//发送验证码
const api_url_base_sendMessageMobileValidCode = env.origin_baseUrl+env.origin_ProxyPath_datas;

//融资端注册
const api_url_base_newPerson = env.origin_baseUrl+env.origin_ProxyPath_texts+env.inline_path;

//获取移动端轮播图
const api_url_base_getbanner = env.origin_baseUrl+env.origin_ProxyPath_datas;

//获取撮合资金
const api_url_base_queryMainPageTotalData = env.origin_baseUrl+env.origin_ProxyPath_datas;

const api_url_base = env.origin_baseUrl+env.origin_ProxyPath;

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

//新网异步是否返回
const api_url_base_queryNewAddPersonAsync = env.origin_baseUrl+env.origin_ProxyPath_apts+ env.origin_ProxyPath_xwbankWebNotify;

/**
 * 发送验证码接口url
 * @type {string}
 */

export const api_url_sendMessageMobileValidCode = api_url_base_sendMessageMobileValidCode + "/msgcenter/query/1.0/sendMessageMobileValidCode/1.0";

/**
 * 融资端新用户注册接口url
 * @type {string}
 */
export const api_url_newAddPersonXW = api_url_base_newPerson + "/query/1.0/newAddPersonXW/1.0";
/**
 * 获取移动端banner接口url
 * @type {string}
 */
export const api_url_getbanner = api_url_base_getbanner + "/msgcenter/query/1.0/getBanner/1.0";
/**
 * 获取撮合钱数接口url
 * @type {string}
 */
export const api_url_queryMainPageTotalData = api_url_base_queryMainPageTotalData+ "/msgcenter/query/1.0/queryMainPageTotalData/1.0";

export const api_url_queryNewAddPersonAsync = api_url_base_queryNewAddPersonAsync+ "/xwBankQuery/queryNewAddPersonAsync";


