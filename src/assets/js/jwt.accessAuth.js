
class AccessAuth{
  constructor(whereToGo,isNeedLogin,isNeedRealName) {
    this.whereToGo = whereToGo;
    this.isNeedLogin = isNeedLogin;
    this.isNeedRealName = isNeedRealName;
  }

  function accessAuthWithNoDeal(){
    this.
      let result = true;
    if(!(this.isNeedLogin && isLogin())){
      result = false;
      return result;
    }
    if(!(isNeedRealName && isRealNameAuth())){
      result = false;
      return result;
    }
    return result;

  }

  function accessAuth(){
    this.
      let result = true;
    if(!(this.isNeedLogin && isLogin())){
      result = false;
      dealLogin();
      return result;
    }
    if(!(isNeedRealName && isRealNameAuth())){
      result = false;
      return result;
    }
    return result;

  }

  function isLogin(){
    return true;
  }


  function isRealNameAuth(){
    return true;
  }

  /**
   * 要到哪里去
   */
  function dealLogin(){
    //tologin
    if(this.isRealNameAuth&&isRealNameAuth()){
        //to whereToGo
    }else{
      dealRealName();
        //
        //不是---有可能需要到首页。。。 首页判断一遍
      //也有可能是到哪去
    }
  }

  function dealRealName(){
    // to realName
  }
}


export AccessAuth;

