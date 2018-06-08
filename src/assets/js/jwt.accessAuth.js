//获取用户状态
import store from '../../vuex/store'
console.log(store.state.user)
/**
 * prototype设计模式
 * @param whereToGo
 * @param isNeedLogin
 * @param isNeedRealName
 * @constructor
 */
function AccessAuth(whereToGo,isNeedLogin,isNeedRealName,) {
  this.isLogin = store.state.user.loginStatus;
  this.isRealNameAuth = store.state.user.isRealName;
  this.whereToGo = whereToGo;
  this.isNeedLogin = isNeedLogin;
  this.isNeedRealName = isNeedRealName;
  this.init = function () {
    this.accessAuthWithNoDeal();

  };

  this.init();

}
AccessAuth.prototype.accessAuthWithNoDeal = function () {
  //判断需要登陆而没有登陆让他去登陆
  if(!(this.isNeedLogin && this.isLogin)){
    location.href = location.origin + "/login"
  }
  if(!(isNeedRealName && this.isRealNameAuth())){
    this.result = false;
    return this.result;
  }
  return result;

};
AccessAuth.prototype.accessAuth = function () {
  if(!(this.isNeedLogin && this.isLogin())){
    this.result = false;
    this.dealLogin();
    return this.result;
  }
  if(!(isNeedRealName && this.isRealNameAuth())){
    this.result = false;
    return this.result;
  }
  return this.result;

};
AccessAuth.prototype.dealLogin = function () {
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


