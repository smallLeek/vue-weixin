//获取用户状态
import store from '../../vuex/store'
import * as userAge from './jwt.userUrl'
import * as apis from '../../assets/js/jwt.apis'

/**
 * 处理登陆实名逻辑
 */
 export function dealLogin () {
   let  userState = store.state.user;
   if(userState.loginStatus ==true){
     apis.userBaseData(store.state.user.userInfo.ID,'1').then((data) => {
       if(data.status == '00000000'){
         let res = data.result.main_data
         if(userState.accessAuth.isNeedLogin == true){

           if (userState.loginStatus == false) {
             //location.href =  userAge.loginUrl()
             location.href =  location.origin +'/wx/loginRegister'
           }else if(userState.isNeedRealName == false){

             location.href = location.origin +  userState.accessAuth.whereToGo
           }
         }
         if ( res.STATE== "3") {
           location.href = location.origin + userState.accessAuth.whereToGo
         } else {
           if(userState.accessAuth.isNeedRealName == false){
             location.href = location.origin + userState.accessAuth.whereToGo
           } else {
             $('.XwBank').show();
             store.dispatch('setXwBank', true);

           }
         }
       }else {

       }
     })
   }else{
     if(userState.accessAuth.isNeedLogin == true){

       if (userState.loginStatus == false) {
         //location.href =  userAge.loginUrl()
         location.href =  location.origin +'/wx/loginRegister'
       }else if(userState.isNeedRealName == false){

         location.href = location.origin +  userState.accessAuth.whereToGo
       }
     }
   }



}





