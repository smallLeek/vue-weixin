//获取用户状态
import store from '../../vuex/store'
import * as apis from './jwt.apis'
/**
 * 处理登陆实名逻辑
 */
 export function dealLogin () {
  let userState = store.state.user
  if (userState.accessAuth.isNeedLogin == true && userState.loginStatus == false) {
    location.href = location.origin + "/wx/loginRegister"
  }else if(userState.accessAuth.isNeedLogin == true && userState.loginStatus == true){
    location.href = location.origin +  userState.accessAuth.whereToGo
  }

  if (userState.isRealName==3) {
    location.href = location.origin + userState.accessAuth.whereToGo

  } else if(userState.isRealName!=3 && userState.accessAuth.isNeedRealName == false){

    location.href = location.origin + userState.accessAuth.whereToGo
  }
  else if(userState.isRealName!=3 && userState.accessAuth.isNeedRealName == true) {

    dealRealName();

  }

};
/**
 * 处理实名
 */
function dealRealName () {
  let userInfoList = userState.userInfo
  apis.xwbankWebNotify(userInfoList.YJF_ID, userInfoList.USER_TYPE, userInfoList.USER_ROLE, userInfoList.ID, userInfoList.USER_TYPE,'http://www.phtfdata.com/wx/async').then((data) => {
    $('.xwUrl').append(data.result.main_data.url)

  })

}




