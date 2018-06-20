//获取用户状态
import store from '../../vuex/store'
import * as apis from './jwt.apis'
import * as userAge from './jwt.userUrl'

/**
 * 处理登陆实名逻辑
 */
 export function dealLogin () {
  let userState = store.state.user
  let userStates = userState.userInfo.STATE;
if(userState.accessAuth.isNeedLogin == true){

  if (userState.loginStatus == false) {
    location.href =  userAge.loginUrl()
  }else if(userState.isNeedRealName == false){

    location.href = location.origin +  userState.accessAuth.whereToGo
  }
  }
  if ( userStates== "3") {
    location.href = location.origin + userState.accessAuth.whereToGo
  } else {
   if(userState.accessAuth.isNeedRealName == false){
    location.href = location.origin + userState.accessAuth.whereToGo
  } else {
    dealRealName();

  }
  }

}
/**
 * 处理实名
 */
function dealRealName () {
  let userState = store.state.user;
  let userInfoList = userState.userInfo;
  apis.xwbankWebNotify(userInfoList.YJF_ID, "1", userInfoList.USER_ROLE, userInfoList.ID, "1",'http://localhost:8080/wx/async').then((data) => {
    $('.xwUrl').append(data.result.main_data.url)

  })

}




