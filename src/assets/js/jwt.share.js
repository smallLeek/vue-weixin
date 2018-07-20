var wx = require('weixin-js-sdk')
import * as apis from './jwt.apis'


/**
 * 初始化微信SDK
 * @type {string[]}
 */
const curUrl = location.href.split('#')[0];    //要传的链接
export function initWxJsAPI(){
  //const jsApiList = ['onMenuShareAppMessage'];  //js接口
  const isDebug = true; //开启调试模式
  let deferred = $.Deferred();
  let promise = deferred.promise();
  //为了安全起见，微信的appId等配置信息通过后台获取
//所以需要先发异步请求
  setTimeout(function () {
    apis.tSignature(curUrl).then(function(res){
      if(res.message == 'ok'){
        var resData  = res.result.main_data.data[0];
        console.log(resData)
        wx.config({
          debug: isDebug, //开启调试模式
          appId: resData.appid, // 必填，公众号的唯一标识
          timestamp: resData.timestamp, // 必填，生成签名的时间戳
          nonceStr: resData.nonceStr, // 必填，生成签名的随机串
          signature: resData.signature,// 必填，签名
          jsApiList: ['onMenuShareAppMessage'] //必填，需要使用的JS接口列表
        });
        wx.ready(function () {
          deferred.resolve(wx);
        })

      }else {
        $.showphtModal({
          withOneButton:0,
          errorMsg:"微信初始化失败!",
          type: 3
        })
      }
    },60);
  })
  return promise;

}

//分享给朋友
export function onMenuShareAppMessage(obj){
  wx.onMenuShareAppMessage({
    title: obj.title, // 分享标题
    desc: obj.desc, // 分享描述
    link: obj.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl:obj.imgUrl, // 分享图标
    type:obj.type, // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
// 用户点击了分享后执行的回调函数
    }
  });
}





