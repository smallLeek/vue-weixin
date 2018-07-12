<template>
  <div class="findPassword" v-title="'修改登录密码'">
    <div class="title">
      <a v-on:click="backToSecurity()">
        <img src="../../../../static/images/goBack.png">
      </a>
      <span>修改登录密码</span>
    </div>
    <div class="content">
      <ul>
        <li><input type="password" maxlength="20" placeholder="请输入旧登录密码" v-model="oldPsd"></li>
        <li><input type="password" maxlength="16" placeholder="密码长度8-16位,必须包含字母和数字" v-model="newPsd"></li>
        <li><input type="password" maxlength="16" placeholder="请确认新登录密码" v-model="newPsdAgain"></li>
      </ul>
    </div>
    <div class="submit">
      <input type="submit" value="提交" @click="submit()">
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapActions, mapState} from 'vuex';
  import * as regexfun from '../../../../src/assets/js/jwt.regex';
  import * as apis from '../../../assets/js/jwt.apis';
  import {phtServer} from '../../../assets/js/phtServer'
  export default {

    data() {
      return {
        oldPsd: "",
        newPsd: "",
        newPsdAgain: "",
      }

    },
    computed: {
      ...mapGetters(['userInfo', "accessAuth"])
    },
    methods: {
      ...mapActions({setSignOut: 'setSignOut'}),
      backToSecurity() {
        location.href = location.origin + this.accessAuth.whereToGo;
      },
      submit() {
        if (regexfun.regexList(this, [{key: 'password', content: this.oldPsd},
            {key: 'password', content: this.newPsd},
            {key: 'password', content: this.newPsdAgain}])) {
            if (this.newPsd === this.newPsdAgain) {
            apis.findPassword(this.userInfo.ID, this.userInfo.USER_TYPE, phtServer.CalcuMD5(this.oldPsd), phtServer.CalcuMD5lower(this.oldPsd), phtServer.CalcuMD5(this.newPsdAgain), phtServer.CalcuMD5lower(this.newPsdAgain)).then(data => {
              if (data.status == '00000000') {
                regexfun.handleFailMsg(this, "登录密码修改成功，请您重新登录!");
                // 清除用户信息
                let userId = this.userInfo.ID;
                apis.exitLogin(userId, '1').then((data) => {
                  if (data.status == '00000000') {
                    this.setSignOut();
                    this.$router.push({path: '/loginRegister/login'})
                  } else {
                    regexfun.handleFailMsg(this, data.message)
                  }
                })
              } else {
                if (data.message != null) {
                  regexfun.handleFailMsg(this, data.message);
                }
              }
            })
          } else {
            regexfun.handleFailMsg(this, "新密码两次输入不一致");
          }
          }
      },

    }
  }
</script>

<style lang="less" scoped>

  .findPassword {
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
      margin-top: 1.2rem;
      ul {
        background-color: #fff;
        border-bottom: 1px solid #e0e0e0;
        border-top: 1px solid #e0e0e0;
        padding-left: 0.2rem;

        input {
          width: 100%;
          height: 1rem;
          border: none;
          outline: none;
          border-bottom: 1px solid #e0e0e0;
        }
        li:last-child {
          border-bottom: none;
        }

      }
    }
    .submit {
      width: 6.9rem;
      height: 1rem;

      margin: auto;

      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: .34rem;
        background-color: #fb4747;
        color: white;
        margin-top: 1.2rem;
      }

    }
  }


</style>
