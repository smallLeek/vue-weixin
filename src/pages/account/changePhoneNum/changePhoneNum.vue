<template>
  <div class="changePhoneNum" title="修改手机号码">
    <div class="title">
      <a v-on:click="backToSecurity()">
        <img src="../../../../static/images/goBack.png">
      </a>
      <span>修改手机号码</span>
    </div>
    <div class="content">
      <h1>原手机号码验证</h1>
      <ul>
        <li><input type="text" readonly="readonly" v-model="userInfo.MOBILE"></li>
        <li><input type="text" maxlength="6" placeholder="请输入短信验证码" v-model="oldMsgCode">
          <span class="getMsgCode"><button class="codeText" v-bind:disabled="oldClickable" @click="getOldCode()">{{firstRegetText}}</button></span>
        </li>
      </ul>
      <h1>新手机号码验证</h1>
      <ul>
        <li><input type="text" maxlength="11" placeholder="请输入新手机号" v-model="newPhoneNum"></li>
        <li><input type="text" maxlength="6" placeholder="请输入短信验证码" v-model="newMsgCode">
          <span class="getMsgCode"><button class="codeText" v-bind:disabled="newClickable" @click="getNewCode()">{{secondRegetText}}</button></span>
        </li>
      </ul>
      <div class="submit"><input type="submit" value="提交" @click="submit()"></div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapActions, mapState} from 'vuex';
  import * as regexfun from '../../../../src/assets/js/jwt.regex';
  import * as apis from '../../../assets/js/jwt.apis';

  export default {
    data() {
      return {
        oldMsgCode: "",
        newPhoneNum: "",
        newMsgCode: "",
        oldClickable: false,
        newClickable: false,
        firstRegetText: "获取短信验证码",
        secondRegetText: "获取短信验证码",
      }
    },
    watch: {},
    computed: {
      ...mapGetters(['userInfo', "accessAuth"])
    },
    methods: {
      ...mapActions({setSignOut: 'setSignOut'}),
      backToSecurity() {
        location.href = location.origin + this.accessAuth.whereToGo;
      },
      getOldCode() {
        let phoneNum = this.userInfo.MOBILE;
        let VALID_TYPE = "2";
        let id = this.userInfo.ID;
        let self = this;
        apis.sendMessageValidCodeWithId(id, phoneNum, "1", VALID_TYPE).then(data => {
          if (data.status === "00000000") {
            regexfun.handleFailMsg(self, "验证码已发送");
            let TIME_COUNT = 10;
            let timeCount;
            var timer_0ld =null;
            timeCount = TIME_COUNT;
            timer_0ld = setInterval(() => {
              if (timeCount > 1 && timeCount <= TIME_COUNT) {
                self.oldClickable = true;
                self.firstRegetText = timeCount + "s后重新获取";
                timeCount--;
              } else {
                self.oldClickable = false;
                self.firstRegetText = "重新获取";
                  timeCount = "";
                window.clearInterval(timer_0ld);
              }
            }, 1000)
          } else {
            if(data.message!= null){
              regexfun.handleFailMsg(self, data.message);
            }else {
              regexfun.handleFailMsg(self, "用户账号或手机号不存在！")
            }

          }
        })
      },
      getNewCode() {
        let phoneNum = this.newPhoneNum;
        let VALID_TYPE = "3";
        if (regexfun.regex(this, 'mobile', phoneNum)) {
          let id = this.userInfo.ID;
          let self = this;
          apis.sendMessageValidCodeWithId(id, phoneNum, "1", VALID_TYPE).then(data => {
            if (data.status === "00000000") {
              regexfun.handleFailMsg(self, "验证码已发送");
              let timeCount;
              let TIME_COUNT = 10;
               timeCount = TIME_COUNT;
              var timer_new =null;
              timer_new = setInterval(() => {
                if (timeCount > 1 && timeCount <= TIME_COUNT) {
                  self.newClickable = true;
                  self.secondRegetText =timeCount + "s后重新获取";
                  timeCount--;
                } else {
                  self.newClickable = false;
                  self.secondRegetText = "重新获取";
                  timeCount = "";
                  window.clearInterval(timer_new);
                }
              }, 1000)
            } else {
              if(data.message!= null){
                regexfun.handleFailMsg(self, data.message);
              }else {
                regexfun.handleFailMsg(self, "用户账号或手机号不存在！")
              }
            }
          })
        }
      },
      submit() {
        let self = this;
        if (regexfun.regexList(this, [
            {key: 'reg_smscode', content: self.oldMsgCode},
            {key: 'mobile', content: self.newPhoneNum},
            {key: 'reg_smscode', content: self.newMsgCode}])) {
          apis.changePhoneNum(self.userInfo.ID, self.userInfo.USER_TYPE,
            self.userInfo.MOBILE, self.oldMsgCode, self.newPhoneNum, self.newMsgCode).then(data => {
            if (data.status === "00000000") {
              regexfun.handleFailMsg(this, "手机号码修改成功，请您重新登录!");
              // 清除用户信息
              let userId = this.userInfo.ID;
              apis.exitLogin(userId, '1').then((data) => {
                if (data.status = '00000000') {
                  this.setSignOut();
                  this.$router.push({path: '/loginRegister/login'})
                } else {
                  regexfun.handleFailMsg(this, data.message)
                }
              })

            }else{
              if(data.message!=null){
               regexfun.handleFailMsg(this,data.message);
              }else {
                regexfun.handleFailMsg(this,"修改手机号码失败!");
              }
            }
          })
        }

      }
    }
  }

</script>

<style lang="less" scoped>
  .changePhoneNum {
    font-size: .30rem;
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
      margin-top: 1rem;
      h1 {
        font-weight: 500;
        line-height: 1;
        padding: 0.4rem 0.2rem 0.2rem 0.2rem;
        font-size: 0.28rem;
        color: #666666;
      }
      ul {
        background-color: #fff;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        padding-left: 0.2rem;

        li:first-child {
          border-bottom: 1px solid #e0e0e0;
          input {
            width: 100%;
            height: 1rem;
            border: none;
            outline: none;
          }
        }
        li {
          input {
            height: 1rem;
            border: none;
            outline: none;

          }
          .getMsgCode {
            position: absolute;
            right: 0.01rem;
            .codeText {
              height: 0.8rem;
              font-size: 0.30rem;
              outline: none;
              border: none;
              border-left: 1px solid #e0e0e0;
              background-color: #fff;
              margin: 0.1rem;
              padding-left: 0.3rem;
              padding-right: 0.2rem;
            }
          }

        }
      }
      .submit {
        width: 6.9rem;
        height: 1rem;
        margin: auto;
        margin-top: 0.8rem;
        input {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          background-color: #fb4747;
          color: white;
          font-size: .34rem;

        }
      }
    }
  }
</style>
