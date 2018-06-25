import * as urlReturn from './jwt.userAgent'

export function loginUrl() {
  let loginUrlBoolean ='http://139.129.12.93:8085/wx/loginRegister/login';
  // (urlReturn.JwtUserAgentIsWeiXin()) ? loginUrlBoolean='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxcc8414d045d43df3&redirect_uri=https://www.phtfdata.com/wx/loginRegister/login&response_type=code&scope=snsapi_base&state=phtfdata#wechat_redirect' : loginUrlBoolean='https://www.phtfdata.com/wx/loginRegister/login';
  return loginUrlBoolean;

}
