
//获取用户状态
import store from '../../vuex/store'


/**
 * 判断登陆
 * @param whereToGo
 * @param isNeedLogin
 * @param isNeedRealName
 * @constructor
 */
export  class AccessAuth{
  constructor(whereToGo,isNeedLogin,isNeedRealName) {
    this.isLogin = store.state.user.loginStatus;
    this.isRealNameAuth = store.state.user.isRealName;
    this.whereToGo = whereToGo;
    this.isNeedLogin = isNeedLogin;
    this.isNeedRealName = isNeedRealName;

  }

  accessAuthWithNoDeal = function () {
    let result = true;

    if(!(this.isNeedLogin && this.isLogin)){
      result = false;
      return result;
    }
    if(!(this.isNeedRealName && this.isRealNameAuth())){
      result = false;
      return result;
    }
    return result;

  };
  isRealNameAuth =function(){
    return true;
  }
  accessAuth = function () {
    let result = true;
    if(!(this.isNeedLogin && this.isLogin())){
      this.dealLogin();
      return result;
    }
    if(!(isNeedRealName && this.isRealNameAuth())){
      return result;
    }
    return result;

  };
  dealRealName =function(){


  }
  dealLogin = function () {
    if(!(this.isNeedLogin && this.isLogin)){
      location.href = location.origin + "/wx/loginRegister"
    }

    if(this.isRealNameAuth && this.isNeedRealName){
      location.href = location.origin + this.whereToGo

    }else{
      this.dealRealName();

    }


  };



}



export class AccessAuthInstanceUtil{

  constructor() {
    this.accessAuthInstance = null;
  }

  getAccessAuthInstance(){
    if(this.accessAuthInstance === null){
      this.accessAuthInstance = new AccessAuth('/home',false,false);
    }
    return this.accessAuthInstance;
  }

  setAccessAuthInstance(whereToGo,isNeedLogin,isNeedAuth){
    this.accessAuthInstance = new AccessAuth(whereToGo,isNeedLogin,isNeedAuth);
    return this.accessAuthInstance;
  }



}

