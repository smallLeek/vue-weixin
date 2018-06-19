<template>
    <div class="content" v-title="'注册'">
      <div class="register_content">
        <ul>
          <li>
            <span><img src="../../../../static/images/login/login_num.png"></span>
            <span><input type="text" placeholder="请输入您的手机号" maxlength="11" v-model="registerMobile"></span>
            <span><img src="../../../../static/images/login/login_close.png" id="pic" v-if="!registerShow" @click="cleanPhone()"><input
              id="verificationBtn" @click="getCode()" type="button" value="获取验证码" v-if="registerShow"></span>
            <span id="countDown" v-if="!registerShow">{{registerCount}}后重新获取</span>
          </li>
          <li>
            <span><img src="../../../../static/images/login/login_verification.png"></span>
            <span><input type="text" placeholder="短信验证码" maxlength="6" v-model="registerCode"></span>
          </li>
          <li>
            <span><img src="../../../../static/images/login/login_password.png"></span>
            <span><input type="password" placeholder="6~18位数字或字母为登陆密码" maxlength="18" v-model="registerPwd"></span>
          </li>
          <li>
            <span><img src="../../../../static/images/login/login_password.png"></span>
            <span><input type="password" placeholder="请再次输入以上登陆密码" maxlength="18" v-model="registerRepwd"></span>
          </li>
        </ul>
        <p>
          <span><img src="../../../../static/images/login/login_recommend.png"></span>
          <span><input type="text" placeholder="如您有推荐人，请输入手机号（选填）" v-model="registerRefmobile" maxlength="11"></span>
        </p>
        <h1>
          <span v-if="agree" @click="agreement">
            <img class="on" src="../../../../static/images/login/login_selectOn.png">阅读并同意
          </span>
          <span v-if="!agree" @click="agreement">
            <img class="on" src="../../../../static/images/login/login_select.png">阅读并同意
          </span>
          <a href="javascript:;">《注册协议》</a>
        </h1>
        <input class="submit" type="button" value="提交" @click="register()">
      </div>
    </div>
</template>
<script>
  import * as regexfun from '../../../../src/assets/js/jwt.regex';
  import * as apis from '../../../assets/js/jwt.apis'
  import {phtServer} from '../../../assets/js/phtServer'
  import {mapGetters, mapActions, mapState} from 'vuex'
  import {setInterval, setTimeout} from 'timers';
  import * as dealLogin from '../../../assets/js/jwt.accessAuth'
  export default {
    data() {
      return {
        registerMobile: '',
        registerCode: '',
        registerPwd: '',
        registerRepwd: '',
        registerRefmobile: '',
        registerAgree: true,
        registerCount: "",
        registerShow: true,
        isPhone:'',
        agree:''
      }
    },
    mounted() {

    },
    methods: {
      ...mapActions({setAccessAuth: 'setAccessAuth'}),
      //获取验证码
      getCode() {
        const TIME_COUNT = 60;
        let self = this;
        let registerMobile = this.registerMobile;
        if (this.registerMobile == '') {
          regexfun.handleFailMsg(self, "手机号不能为空！");
          return;
        }
        if (!phtServer.reg_mobile(this.registerMobile)) {
          regexfun.handleFailMsg(self, "请输入正确的手机号！");
          return;
        }
        apis.sendMessageMobileValidCode(registerMobile, '1', '0').then((data) => {
          if (data.status == "00000000") {
            regexfun.handleFailMsg(self, "验证码已发送");
            self.isPhone = true
            if (!self.timer) {
              self.registerCount = TIME_COUNT;
              self.registerShow = false;
              self.timer = setInterval(() => {
                if (self.registerCount > 0 && self.registerCount <= TIME_COUNT) {
                  self.registerCount--;
                } else {
                  self.registerShow = true;
                  clearInterval(self.timer);
                  self.timer = null;
                }
              }, 1000)
            }
          } else if (data.status == "6005") {
            regexfun.handleFailMsg(self, "手机号已存在");
            self.isPhone = false;

          } else if (data.status == "99999999") {
            regexfun.handleFailMsg(self, "验证码发送失败请稍后重试");
          }

        });
      },
      register() {
        let self = this

        //输入框不能为空
        if (!this.registerMobile || !this.registerCode || !this.registerPwd || !this.registerRepwd) {
          regexfun.handleFailMsg(self, "请完善您的信息");
          return;
        }
        //判断手机号是否存在
        if (!self.isPhone) {
          regexfun.handleFailMsg(self, "纳尼！用户账号或手机已存在！");
          return;

        }

        //判断密码
        if (!phtServer.reg_password(this.registerPwd)) {
          regexfun.handleFailMsg(self, "密码不符合规则");
          return;

        }
        //判断两次密码是否一致
        if (this.registerPwd !== this.registerRepwd) {
          regexfun.handleFailMsg(self, "两次密码不一致");
          return;
        }
        //判断是否阅读金梧桐注册协议
        if (!this.agree) {
          regexfun.handleFailMsg(self, "请先阅读并同意注册协议");
          return;
        }
        //判断推荐人手机号
        if(self.registerRefmobile!=''){
          if(!phtServer.reg_mobile(self.registerRefmobile)){
            regexfun.handleFailMsg(self, "推荐人手机号不正确");
            return;
          }else if(self.registerRefmobile==self.registerMobile){
            regexfun.handleFailMsg(self, "推荐人手机号不能和注册手机号一致");
            return;
          }

        }
        //注册接口
        apis.XWnewAddPerson(self.registerMobile,self.registerMobile,phtServer.CalcuMD5lower(self.registerPwd),self.registerCode,self.registerRefmobile,'http://localhost:8080/wx/async').then((data) => {
          if (data.message == "成功!") {
            this.setAccessAuth({isNeedLogin:true,loginStatus:true,whereToGo:"/wx/home"});
            //$('.xwUrl').append(data.result.main_data.url)

          } else if(data.status =="6015") {
            regexfun.handleFailMsg(self, "验证码输入有误!");
          }else {
            regexfun.handleFailMsg(self, data.message);
          }


        })

      },
      agreement() {
        (this.agree == false) ? this.agree = true : this.agree = false;
      },
      cleanPhone(){
        this.registerMobile = '';
      }
    }
  }
</script>
<style lang="less" scoped>
  .register {
    background-color: #f8f8f8;
  }

  .content {
    padding: 0 0.3rem;
    margin-top: 0.34rem;
    > div {
      display: none;
    }
    #pic {
      vertical-align: middle;
      width: 0.23rem;
      margin-left: .3rem;
      margin-top: -0.15rem;
    }
    .register_content {
      display: block;
      position: relative;
      width: 6.9rem;
      margin: auto;
      #countDown {
        display: inline-block;
        width: 2.1rem;
        height: .54rem;
        font-size: .28rem;
        text-align: center;
        background: #eee;
        margin-top: .2rem;
        border: .02rem solid #ddd;
        border-radius: .1rem;
        color: #666;
        line-height: .54rem;
        text-decoration: none;
      }
      h1 {
        font-size: 0.28rem;
        color: #666666;
        line-height: 0.9rem;
        font-weight: 500;
        clear: both;
        a {
          color: #fb4747
        }
        img {
          width: 0.3rem;
          margin-right: 0.1rem;
          vertical-align: middle;
          margin-top: -0.07rem;
        }
      }
      ul {
        border: 1px solid #e0e0e0;
        padding-left: 0.2rem;
        background-color: #fff;
        li {
          clear: both;
          width: 100%;
          height: 0.9rem;
          line-height: 0.9rem;
          border-bottom: 1px solid #e0e0e0;
          span {
            float: left;
            input {
              color: #333333;
              font-size: 0.3rem;
              border: none;
              outline: medium;
              width: 5.5rem;
              margin-top: -0.2rem;
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
          span:first-child {
            width: 0.6rem;
            text-align: left;
            img {
              width: 0.3rem;
              vertical-align: middle;
              margin-top: -0.2rem;
            }
          }
        }
        li:first-child {
          input {
            width: 3rem;
          }
          span:nth-child(3) {
            float: left;
          }
          span:last-child {
            float: right;
            line-height: 0.5rem;
            margin-top: 0.175rem;
            margin-right: 0.2rem;
            input {
              color: #fb4747;
              border: 1px solid #fb4747;
              background-color: #fff;
              border-radius: 0.06rem;
              width: 1.76rem;
              height: 0.54rem;
              font-size: 0.28rem;
            }
            input.on {
              color: #999999;
              background-color: #dddddd;
              border: 1px solid #dddddd;
            }
            img {
              vertical-align: middle;
              width: 0.3rem;
              margin-right: 0.2rem;
              margin-top: -0.15rem;
            }
          }
        }
        li:last-child {
          border-bottom: none;
        }
      }
      p {
        height: 0.9rem;
        line-height: 0.9rem;
        margin-top: 0.2rem;
        background-color: #fff;
        border: 1px solid #e0e0e0;
        span {
          height: 0.8rem;
          float: left;
          input {
            color: #333333;
            font-size: 0.3rem;
            width: 5.5rem;
            border: none;
            outline: medium;
            margin-top: -0.3rem;
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
        span:first-child {
          width: 0.6rem;
          text-align: left;
          margin-left: 0.2rem;
          img {
            width: 0.3rem;
            vertical-align: middle;
            margin-top: -0.3rem;
          }
        }
      }
      .submit {
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
      input.on {
        background-color: #fb4747;
      }
    }
  }
</style>
