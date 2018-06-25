import wx from 'weixin-js-sdk'
import * as apis from './jwt.apis'


/**
 * 初始化微信SDK
 * @type {string[]}
 */
export const jsApiList = ['onMenuShareAppMessage'];    //js接口
export const curUrl = 'http://139.129.12.93:3102/wx';    //要传的链接
export const isDebug = false; //开启调试模式


//为了安全起见，微信的appId等配置信息通过后台获取
//所以需要先发异步请求
apis.tSignature(curUrl).then(function(res){
  if(res.message == 'ok'){
    let resData  = res.result.main_data.data[0];
    console.log(resData)
    wx.config({
      debug: isDebug, //开启调试模式
      appId: resData.appid, // 必填，公众号的唯一标识
      timestamp: resData.timestamp, // 必填，生成签名的时间戳
      nonceStr: resData.nonceStr, // 必填，生成签名的随机串
      signature: resData.signature,// 必填，签名
      jsApiList: jsApiList //必填，需要使用的JS接口列表
    });
  }


});


export  function onMenuShareAppMessage () {
    wx.onMenuShareAppMessage({
      title: '普惠通数据信息技术有限公司', // 分享标题
      desc: '这是分享的描述', // 分享描述
      link: 'http://139.129.12.93:3102/wx', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'https://www.phtfdata.com/web6/images/logo-logo.png', // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
// 用户点击了分享后执行的回调函数

      }
    });

}
