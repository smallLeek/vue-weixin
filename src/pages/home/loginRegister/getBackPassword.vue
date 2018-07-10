<template>
  <div class="getBackPwd" v-title="'密码找回'">
    <div class="title">
      <router-link to="/loginRegister/login">
        <img src="../../../../static/images/goBack.png">
      </router-link>
      <span>设置</span>
    </div>
    <div class="content">
      <ul>
        <li>
          <input type="text" maxlength="11" placeholder="请输入绑定手机号" v-model="bindPhoneNum">
          <span class="getCode">
            <button class="codeText" @click="getMsgCode()">
             <span v-show="regetText">{{timeCount}}{{regetText}}</span>
           </button>
          </span>
        </li>
        <li>
          <input type="text" maxlength="6" placeholder="请输入短信验证码" v-model="msgCode">
        </li>
        <li>
          <input type="password" maxlength="16" placeholder="密码长度8-16位,必须包含字母和数字" v-model="newPwd">
        </li>
        <li>
          <input type="password" maxlength="16" placeholder="请再次输入以上登录密码" v-model="againNewPwd">
        </li>
      </ul>
    </div>
    <div class="submit"><input type="button" value="提交" @click="submit()"></div>
  </div>
</template>

<script>
  import * as regexfun from '../../../../src/assets/js/jwt.regex';
  import {phtServer} from '../../../assets/js/phtServer'
  import {mapGetters, mapActions, mapState} from 'vuex'
  import * as apis from '../../../assets/js/jwt.apis'
  import * as userAge from '../../../assets/js/jwt.userUrl'

  export default {
    data() {
      return {
        bindPhoneNum: '',
        msgCode: '',
        newPwd: '',
        againNewPwd: '',
        timeShow: false,
        timeCount: "",
        regetText: "获取验证码",
      }
    },
    methods: {
      getMsgCode() {
        let TIME_COUNT = 60;
        let self = this;
        let bindPhoneNum = this.bindPhoneNum;
        if (regexfun.regex(this, 'mobile', bindPhoneNum)) {
          apis.sendMessageValidCode(bindPhoneNum, "1", "4").then(data => {
            if (data.status === "00000000") {
              regexfun.handleFailMsg(self, "验证码已发送");

              self.timeCount = TIME_COUNT;
              self.regetText = "s后重新获取"
              var abc = null;
              self.timer = setInterval(() => {
                if (self.timeCount > 1 && self.timeCount <= TIME_COUNT) {
                  self.timeCount--;
                } else {
                  self.regetText = "重新获取";
                  self.timeCount = "";
                  window.clearInterval(self.timer);
                }
              }, 1000)

            } else {
              regexfun.handleFailMsg(self, "用户账号或手机号不存在！")
            }

          })
        }
      },
      submit() {
        let self = this;
        if (regexfun.regexList(this, [{key: 'mobile', content: self.bindPhoneNum},
            {key: 'reg_smscode', content: self.msgCode},
            {key: 'password', content: self.newPwd},
            {key: 'password', content: self.againNewPwd}])) {
          if (this.newPwd != this.againNewPwd) {
            regexfun.handleFailMsg(this, "两次密码输入不一致");
          } else {
            let pwd = phtServer.CalcuMD5lower(self.newPwd);
            apis.passwordRetrieval(self.bindPhoneNum, self.msgCode, pwd).then(data => {
              if (data.status === "00000000") {
                regexfun.handleFailMsg(this, "密码重置成功，请输入新密码进行登录");
                this.$router.push({path:'/loginRegister/login'})
              } else {
                regexfun.handleFailMsg(self, data.message);
                return;
              }
            })
          }
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  .getBackPwd {
    background-color: #f8f8f8;
    .title {
      margin: auto;
      width: 7.5rem;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.36rem;
      text-align: center;
      color: #fff;
      background-color: #fb4747;
      position: fixed;
      top: 0;
      z-index: 100;
      img {
        height: 0.5rem;
        vertical-align: middle;
      }
      a {
        position: absolute;
        width: 1rem;
        height: 1rem;
        left: 0;
        top: -0.02rem
      }
    }
    .content {
      width: 100%;
      height: auto;
      margin-top: 1.2rem;
      background-color: #fff;

      ul {
        margin-left: .5rem;
        position: relative;
        li {
          border-bottom: 1px solid #ccc;
          input {
            width: 100%;
            height: 1rem;
            display: block;
            border: none;
            outline: none;
          }
          .getCode {
            width: auto;
            height: 0.7rem;
            display: inline-block;
            position: absolute;
            top: -0.6rem;
            right: 0.3rem;
            border: none;
            .codeText {
              width: 100%;
              height: 100%;
              outline: none;
              border: 1px solid #fb4747;
              background-color: #fff;
              color: #fb4747;
              border-radius: .08rem;
              padding: 0.05rem;
              font-size: .30rem;
            }
          }
        }
        li:last-child {
          border-bottom: none;
        }

      }

    }
    .submit {
      width: 6.9rem;
      height: 0.9rem;
      margin: auto;
      margin-top: 0.5rem;
      input {
        width: 100%;
        height: 100%;
        display: inline-block;
        background-color: #fb4747;
        border: none;
        color: #fff;
        outline: none;
        font-size: .32rem;
      }
    }
  }
</style>
