<template>
    <div class="login">
        <div class="head">
            <div class="tab">
                <span>手机登录</span>
                <span>免费注册</span>
            </div>
        </div>
        <div class="content">
            <div class="login_login">
                <s></s>
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
                <p><router-link to="">找回密码？</router-link></p>
                <input class="submit" @click="submit()"  type="button" value="提交">
            </div>
            <div class="login_register">
                register
            </div>
        </div>
    </div>
</template>
<script>
import * as regexfun from '../../../../src/assets/js/jwt.regex';
import * as apis from '../../../assets/js/jwt.apis'
import { phtServer } from '../../../assets/js/phtServer'
import {mapGetters, mapActions,mapState} from 'vuex'
export default {
    mounted(){
        $('#eye').click(function(){
            if($('#password').attr('type')=='password'){
                $('#password').attr('type','text');
                $(this).attr('src','../../../../static/images/login/login_eye_z.png')
            }else{
                $('#password').attr('type','password');
                $(this).attr('src','../../../../static/images/login/login_eye_b.png')
            }
        })
    },
  computed: {
      //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
    ...mapGetters([
      'loginStatus','userInfo','tokenCode','isRealName'
    ])
  },
    methods: {
      ...mapActions({setUserInfo: 'setUserInfo',getTokenCode:'getTokenCode'}),
      submit() {
           let flag=false;
           flag=regexfun.regex(this, 'mobile', $('#phonenum').val());
           if(flag==true){
               this.login()
           }
      },
      login() {
        let user_type="1";
        let phonenum = $('#phonenum').val();
        let password = phtServer.CalcuMD5lower($('#password').val());
        let pwd =phtServer.CalcuMD5lower($('#password').val());
        apis.newLogin(phonenum, password, user_type).then((data) => {
          if(data.status =='6027'){
            regexfun.handleFailMsg(this,data.message)
          }else if (data.status=='6026'){
            regexfun.handleFailMsg(this,data.message)
          }else {
            this.setUserInfo(data.result.main_data.data[0]);
            this.getTokenCode(JSON.parse(phtServer.getStore('userInfo')).token);
            console.log(this.accessAuth.setAccessAuthInstance("/home",true,true))
            console.log(this.accessAuth.getAccessAuthInstance())
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
.head{
    height: 4.1rem;
    background: url(../../../../static/images/login/login_bg.png);
    background-size: 100% 100%;
    position: relative;
    .tab{
        position: absolute;
        left: 0;
        bottom: 0.4rem;
        width: 100%;
        display: flex;
        span{
            flex: 1;
            text-align: center;
            font-size: 0.3rem;
            color: #fff;
        }
    }
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
        s{
            position: absolute;
            left: 1.45rem;
            top: -0.44rem;
            width: 0.2rem;
            height: 0.2rem;
            background-color: #f8f8f8;
            transform: rotate(45deg)
        }
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
            background-color: #fc7f7f;
            border: none;
            color: #fff;
        }
        input.on{
            background-color: #fb4747;
        }
    }
    .login_register{

    }
}
</style>
