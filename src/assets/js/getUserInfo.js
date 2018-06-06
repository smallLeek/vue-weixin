import {phtServer} from "./phtServer";

let getUserInfo ={};
/**
 * 获取用户的code
 */
getUserInfo.getCode =function () {
  phtServer.globalGetData("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxcc8414d045d43df3&redirect_uri=https://www.phtfdata.com/wx&response_type=code&scope=snsapi_userinfo&state=phtfdata#wechat_redirect").then((data)=>{
    alert(data)
  })

}

export {getUserInfo}
