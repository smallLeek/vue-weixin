//获取用户状态
import store from '../../vuex/store'
import * as userAge from './jwt.userUrl'

/**
 * 处理登陆实名逻辑
 */
 export function dealLogin () {
  let userState = store.state.user
  let userStates = userState.userInfo.STATE;
if(userState.accessAuth.isNeedLogin == true){

  if (userState.loginStatus == false) {
    //location.href =  userAge.loginUrl()
    location.href =  location.origin +'/wx/loginRegister'
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
     $('.XwBank').show();
     store.dispatch('setXwBank', true);

  }
  }

}





