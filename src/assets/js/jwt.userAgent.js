export function JwtUserAgentIsWeiXin() {
  let ua = window.navigator.userAgent.toLowerCase();
  let isWeiXin = null;
  (ua.match(/MicroMessenger/i) == 'micromessenger') ? isWeiXin=true : isWeiXin=false;
  return isWeiXin;
}
