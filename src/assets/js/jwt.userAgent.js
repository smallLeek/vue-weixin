
//判断用户是否为微信用户
export function JwtUserAgentIsWeiXin() {
  let ua = window.navigator.userAgent.toLowerCase();
  let isWeiXin = null;
  (ua.match(/MicroMessenger/i) == 'micromessenger') ? isWeiXin=true : isWeiXin=false;
  return isWeiXin;
}

export const androidOpenAppUrl = "pht://csd";
export const iosOpenAppUrl = "jinwutong://";
//export const iosOpenAppUrl = "jinwutong://com.phtdata.CSDClient";
export const iosDownloadAppUrl = "https://itunes.apple.com/cn/app/id961060424";
export const androidDownloadAppUrl = "http://www.phtfdata.com/file/file/app/csdapp.apk";
export const webPcUrl = "http://www.phtfdata.com";
export const wapUrl = "http://www.phtfdata.com";


export function ifAndroid() {
  return (navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)) ? true : false;
}


export function ifIos() {
  console.log(navigator.userAgent)
  return (navigator.userAgent.match(/(iPhone|iPad|iPod)?[\s\/]+([\d.]+)?/)) ? true : false;
}

export function ifSafari() {
  return ifIos() && navigator.userAgent.match(/Safari/);
}


/**
 * 是否在应用内部打开
 * @returns {boolean}
 */
export function isEmbedded() {
  return navigator.userAgent.indexOf("pht-csd") > -1;
}

export function Html5Plus() {
  return (Navigator.indexOf("Html5Plus")) > -1;
}

/**
 * 核心方法 打开App
 */
export default function openApp() {
  if (isEmbedded()) {
    // 已经在app内部
    return;
  }
  let isAndroid = ifAndroid();
  let isIos = ifIos();
    if (isAndroid) {
      window.location.href = androidOpenAppUrl;
      //如果未安装超时会非常快
      window.setTimeout(function () {
        //未检测到安装
         window.location.href = androidDownloadAppUrl;//打开app下载地址，由app开发人员提供
      }, 1000)
    } else if (isIos) {
      //如果未安装超时会非常快
      window.setTimeout(function () {
        var S = document.createElement("a"); //创建a元素
        S.setAttribute("id","open_app_temp")
        S.setAttribute("href", iosOpenAppUrl), S.style.display = "none", document.body.appendChild(S);
        var T = document.createEvent("HTMLEvents"); // 返回新创建的 Event 对象，具有指定的类型。
        T.initEvent("click", !1, !1)// 初始化新事件对象的属性,   S.dispatchEvent(T)  // 绑定事件
        S.click();
      },2000)
    }else{
      window.location.href = webPcUrl;
    }

}
