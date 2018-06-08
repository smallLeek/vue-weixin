
//获取用户状态
import store from '../../vuex/store'


/**
 * prototype设计模式
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

    //判断需要登陆而没有登陆让他去登陆
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

  dealLogin = function () {
    //tologin
    if(this.isRealNameAuth && this.isRealNameAuth()){
      //to whereToGo
    }else{
      dealRealName();
      //
      //不是---有可能需要到首页。。。 首页判断一遍
      //也有可能是到哪去
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

