<template>
  <div class="content" v-title="'登录'">
    <div class="login_login">
      <ul>
        <li>
          <span><img src="../../../../static/images/login/login_num.png"></span>
          <span><input v-model="loginPhone" id="phonenum" type="text" placeholder="请输入手机号" maxlength="11"></span>
        </li>
        <li>
          <span class="img2"><img src="../../../../static/images/login/login_password.png"></span>
          <span><input id="password" v-model="loginPwd" :type="inputType" placeholder="请输入登录密码"></span>
          <span class="img1"><img v-if="isEye" src="../../../../static/images/login/login_eye_b.png" @click="isShow()"></span>
          <span class="img1"><img v-if="!isEye" src="../../../../static/images/login/login_eye_z.png" @click="isShow()"></span>
        </li>
      </ul>
      <p><router-link to="/getBackPassword">找回密码？</router-link></p>
      <input class="submit" @click="submit()" :class="{ active: isActives }"  type="button" value="提交" v-if="!isActives" >
      <input class="submit"  :class="{ active: isActives }"  type="button" value="提交" v-else >
    </div>
  </div>
</template>
<script>
  import * as regexfun from '../../../../src/assets/js/jwt.regex';
  import * as apis from '../../../assets/js/jwt.apis'
  import { phtServer } from '../../../assets/js/phtServer'
  import {mapGetters, mapActions} from 'vuex'
  import * as dealLogin from '../../../assets/js/jwt.accessAuth'
  import {storeUtil} from '../../../assets/js/util/lib.store'
  export default {
    data(){
      return{
        code:null,
        loginPwd:null,
        loginPhone:null,
        isActives:false,
        isEye:true,
        inputType:'password'
      }
    },
    created(){
      this.code = this.$route.query.code
    },
    mounted(){

    },
    computed: {
      //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
      ...mapGetters([
        'loginStatus','userInfo','tokenCode','isRealName','accessAuth'
      ])
    },
    methods: {
      ...mapActions({setUserInfo: 'setUserInfo',getTokenCode:'getTokenCode',setIsRealName:'setIsRealName',setSignOut:'setSignOut',setAccessAuth:'setAccessAuth'}),
      isShow(){
        this.isEye = !this.isEye;
        if( this.isEye == true){
          this.inputType = "password";
        }else{
          this.inputType = "text";
        }
      },
      submit() {
        let flag=false;
        flag=regexfun.regex(this, 'mobile', this.loginPhone);
        if(this.loginPwd =='' || this.loginPwd ==null){
          regexfun.handleFailMsg(this,'请完善您的信息')
        }else if(flag == true && this.loginPwd !=''&&this.loginPwd !=null){
          this.isActives =true;
          this.login()
        }
      },
      login() {
        let phonenum = this.loginPhone;
        let newPassword = phtServer.CalcuMD5(this.loginPwd);
        let password = phtServer.CalcuMD5lower(this.loginPwd);
        apis.newLogin(phonenum,password, newPassword, "1",this.code).then((data) => {
          this.isActives = false
          if(data.status =='6027'){
            regexfun.handleFailMsg(this,data.message)
          }else if (data.status=='6026'){
            regexfun.handleFailMsg(this,data.message)
          }else if(data.status =='00000000'){
            let currentTime = new Date().getTime();
            storeUtil.setStore('times',currentTime)
            let userInfoList = data.result.main_data.data[0]
            this.setUserInfo(userInfoList);
            this.setIsRealName(userInfoList.STATE);
            this.getTokenCode(userInfoList.token);
            if(userInfoList.STATE =='0' || userInfoList.STATE =='2' ){
              this.$router.push({path:'/home'})
            }
            dealLogin.dealLogin();
          }else {
            regexfun.handleFailMsg(this,data.message)
          }

        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .login{
    background-color: #f8f8f8;
  }
  .content{
    padding: 0 0.3rem;
    margin-top: 0.34rem;
    >div{
      display: none;
    }
    .login_login{
      display: block;
      position: relative;
      width: 6.9rem;
      margin: auto;
      p{
        text-align: right;
        font-size: 0.27rem;
        color: #666666;
        line-height: 0.9rem;
      }
      ul{
        border: 1px solid #e0e0e0;
        li{
          width: 100%;
          height: 0.9rem;
          line-height: 0.9rem;
          background-color: #fff;
          span{
            height: 0.9rem;
            float: left;
            input{
              color: #333333;
              font-size: 0.3rem;
              border: none;
              outline:medium;
            }
            ::-moz-placeholder {
              font-size: 0.3rem;
              color: #999999;
            }
            :-ms-input-placeholder {
              font-size: 0.3rem;
              color: #999999;
            }
            ::-webkit-input-placeholder {
              font-size: 0.3rem;
              color: #999999;
            }
          }
          span:first-child{
            width: 1rem;
            text-align: center;
            img{
              width: 0.3rem;
              vertical-align: middle;
            }
          }
        }
        li:first-child{
          border-bottom: 1px solid #e0e0e0;
        }
        li:nth-last-child(1){
          span:nth-last-child(2){
            text-align: center;
            float: right;
          }
          img{
            width: 0.5rem;
            margin-right: 0.2rem;
          }
        }
        li:last-child{
          span:last-child{
            float: right;
            img{
              width: 0.5rem;
              margin-right: 0.2rem;
            }
          }
          .img2{
            position: absolute;
            left: .15rem;
          }
        }
      }
      .submit{
        width: 6.9rem;
        height: 0.9rem;
        margin: auto;
        border-radius: 0.06rem;
        font-size: 0.35rem;
        background-color: #fb4747;
        border: none;
        color: #fff;
        outline:none;
      }
      .active{
        background-color: #ff7676;
      }
      input.on{
        background-color: #fb4747;
      }
    }
    .login_register{

    }
  }
  #password{
    margin-left: 1rem;
  }
</style>
