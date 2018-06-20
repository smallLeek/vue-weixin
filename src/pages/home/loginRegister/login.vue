<template>
        <div class="content" v-title="'登陆'">
            <div class="login_login">
                <ul>
                    <li>
                        <span><img src="../../../../static/images/login/login_num.png"></span>
                        <span><input id="phonenum" type="text" placeholder="请输入手机号"></span>
                    </li>
                    <li>
                        <span><img src="../../../../static/images/login/login_password.png"></span>
                        <span><input id="password" type="password" placeholder="请输入登录密码"></span>
                        <span><img id="eye" src="../../../../static/images/login/login_eye_b.png"></span>
                    </li>
                </ul>
                <p><router-link to="/getBackPassword">找回密码？</router-link></p>
                <input class="submit" @click="submit()"  type="button" value="提交">
            </div>
            <div class="login_register">
                register
            </div>
        </div>
</template>
<script>
import store from '../../../vuex/store'
import * as regexfun from '../../../../src/assets/js/jwt.regex';
import * as apis from '../../../assets/js/jwt.apis'
import { phtServer } from '../../../assets/js/phtServer'
import {mapGetters, mapActions,mapState} from 'vuex'
import * as dealLogin from '../../../assets/js/jwt.accessAuth'
export default {
     data(){
       return{
         code:null
       }
     },
  created(){
    this.code = this.$route.query.code
  },
    mounted(){
        $('#eye').click(function(){
            if($('#password').attr('type')=='password'){
                $('#password').attr('type','text');
                $(this).attr('src',require('../../../../static/images/login/login_eye_z.png'))
            }else{
                $('#password').attr('type','password');
                $(this).attr('src',require('../../../../static/images/login/login_eye_b.png'))
            }
        })
    },
  computed: {
      //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
    ...mapGetters([
      'loginStatus','userInfo','tokenCode','isRealName','accessAuth'
    ])
  },
    methods: {
      ...mapActions({setUserInfo: 'setUserInfo',getTokenCode:'getTokenCode',setIsRealName:'setIsRealName',setSignOut:'setSignOut'}),
      submit() {
           let flag=false;
           flag=regexfun.regex(this, 'mobile', $('#phonenum').val());
           if(flag == true){
               this.login()
           }
      },
      login() {
        let userState = store.state.user
        let user_type="1";
        let phonenum = $('#phonenum').val();
        let password = phtServer.CalcuMD5lower($('#password').val());
        let pwd =phtServer.CalcuMD5lower($('#password').val());
        apis.newLogin(phonenum, pwd, "1",this.code).then((data) => {
          if(data.status =='6027'){
            regexfun.handleFailMsg(this,data.message)
          }else if (data.status=='6026'){
            regexfun.handleFailMsg(this,data.message)
          }else if(data.status =='00000000'){
            let userInfoList = data.result.main_data.data[0]
            this.setUserInfo(userInfoList);
            this.setIsRealName(userInfoList.STATE);
            this.getTokenCode(userInfoList.token);
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
                    }
                }
            }
            li:first-child{
                border-bottom: 1px solid #e0e0e0;
            }
            li:last-child{
                span:last-child{
                    float: right;
                    img{
                        width: 0.5rem;
                        margin-right: 0.2rem;
                    }
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
        input.on{
            background-color: #fb4747;
        }
    }
    .login_register{

    }
}
</style>
