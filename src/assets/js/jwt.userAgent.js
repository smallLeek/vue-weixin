
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
  return (navigator.userAgent.match(/(iPhone|iPad|iPod)?[\s\/]+([\d.]+)?/)) ? true : false;
}

export function ifWeChat() {
  return	( window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger')?true:false;
}

export function ifSafari() {
  return ifIos() && navigator.userAgent.match(/Safari/);
}

export function downloads(openUrl ,downUrl) {
  let t = 1000;
  let hasApp = true;
  setTimeout(function () {
    if (hasApp) {
      window.location.href = openUrl
    } else {
      window.location.href = downUrl
    }
    document.body.removeChild(ifr);
  }, 2000)
  let t1 = Date.now();
  let ifr = document.createElement("iframe");
  ifr.setAttribute('src', openUrl);
  ifr.setAttribute('style', 'display:none');
  document.body.appendChild(ifr);
  let timeout = setTimeout(function () {
    var t2 = Date.now();
    if (!t1 || t2 - t1 < t + 100) {
      hasApp = false;
    }
  }, t);
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
export default function openApp(item) {
  if (isEmbedded()) {
    // 已经在app内部
    return;
  }
  let isAndroid = ifAndroid();
  let isIos = ifIos();
  let isWeChat =ifWeChat();
  if(isWeChat){
  item.$router.push({path:'/downloads'})
  }else if (isAndroid) {
      downloads(androidOpenAppUrl,androidDownloadAppUrl)
    } else if (isIos) {
      downloads(iosOpenAppUrl,iosDownloadAppUrl)
    }else{
      window.location.href = webPcUrl;
    }

}
