import {phtServer} from "./phtServer";

let getUserInfo ={};
/**
 * 获取用户的code
 */
getUserInfo.getCode =function () {
  phtServer.globalGetData("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8f11eee482052822&redirect_uri=http://192.168.101.80:8080&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect").then((data)=>{
    alert(data)
  })

}

export {getUserInfo}
