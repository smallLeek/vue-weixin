
//判断用户是否为微信用户
export function JwtUserAgentIsWeiXin() {
  let ua = window.navigator.userAgent.toLowerCase();
  let isWeiXin = null;
  (ua.match(/MicroMessenger/i) == 'micromessenger') ? isWeiXin=true : isWeiXin=false;
  return isWeiXin;
}
//判断安卓
export  function isAndroid() {
  let  u = navigator.userAgent;
  return u.indexOf('Android') > -1

}
//判断ios
export function isIos() {
  let  u = navigator.userAgent;
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);


}
