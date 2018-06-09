<template>
    <div class="register">
        <div class="head">
            <div class="tab">
                <span>手机登录</span>
                <span>免费注册</span>
            </div>
        </div>
        <div class="content">
            <div class="register_content">
                <s></s>
                <ul>
                    <li>
                        <span><img src="../../../../static/images/login/login_num.png"></span>
                        <span><input id="phonenum" type="text" placeholder="请输入您的手机号"></span>
                        <span><img src="../../../../static/images/login/login_close.png"><input id="verificationBtn" @click="verification()" type="button" value="获取验证码"></span>
                    </li>
                    <li>
                        <span><img src="../../../../static/images/login/login_verification.png"></span>
                        <span><input type="text" placeholder="短信验证码"></span>
                    </li>
                    <li>
                        <span><img src="../../../../static/images/login/login_password.png"></span>
                        <span><input type="password" placeholder="6~18位数字或字母为登陆密码"></span>
                    </li>
                    <li>
                        <span><img src="../../../../static/images/login/login_password.png"></span>
                        <span><input type="password" placeholder="请再次输入以上登陆密码"></span>
                    </li>
                </ul>
                <p>
                  <span><img src="../../../../static/images/login/login_recommend.png"></span>
                  <span><input type="text" placeholder="如您有推荐人，请输入手机号（选填）"></span>
                </p>
                <h1><span id="selectBtn"><img id="selectImg" class="on" src="../../../../static/images/login/login_selectOn.png">阅读并同意</span><a href="javascript:;">《注册协议》</a>
                </h1>
                <input class="submit" type="button" value="提交">
            </div>
        </div>
    </div>
</template>
<script>
import * as regexfun from '../../../../src/assets/js/jwt.regex';
import * as apis from '../../../assets/js/jwt.apis'
import { phtServer } from '../../../assets/js/phtServer'
import {mapGetters, mapActions,mapState} from 'vuex'
import { setInterval, setTimeout } from 'timers';
export default {
    mounted(){
        $('#selectBtn').click(function(){
            let btnclass=document.getElementById('selectImg').className
            if(btnclass=='on'){
                $('#selectImg').attr('src',require('../../../../static/images/login/login_select.png'))
                $('#selectImg').removeClass('on')
            }else{
                $('#selectImg').attr('src',require('../../../../static/images/login/login_selectOn.png'))
                $('#selectImg').addClass('on')
            }
        })

    },

    methods: {
        verification(){
            var time1=10;
            var verification=setInterval(function(){
                $('#verificationBtn').val(time1+"S后重发")
                $('#verificationBtn').addClass('on')
                $("#verificationBtn").attr("disabled", true);
                time1--
                if (time1 < 0) {
                    $("#verificationBtn").attr("disabled", false);
                  $("#verificationBtn").val("获取验证码");
                  $('#verificationBtn').removeClass('on')
                  clearInterval(verification);
                }
            },6000)
        }
    }
}
</script>
<style lang="less" scoped>
.register{
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
    .register_content{
        display: block;
        position: relative;
        width: 6.9rem;
        margin: auto;
        s{
            position: absolute;
            right: 1.45rem;
            top: -0.44rem;
            width: 0.2rem;
            height: 0.2rem;
            background-color: #f8f8f8;
            transform: rotate(45deg)
        }
        h1{
            font-size: 0.28rem;
            color: #666666;
            line-height: 0.9rem;
            font-weight: 500;
            clear: both;
            a{
              color: #fb4747
            }
            img{
              width: 0.3rem;
              margin-right: 0.1rem;
              vertical-align: middle;
              margin-top: -0.07rem;
            }
        }
        ul{
            border: 1px solid #e0e0e0;
            padding-left: 0.2rem;
            background-color: #fff;
            li{
                clear: both;
                width: 100%;
                height: 0.9rem;
                line-height: 0.9rem;
                border-bottom: 1px solid #e0e0e0;
                span{
                    height: 0.9rem;
                    float: left;
                    input{
                        color: #333333;
                        font-size: 0.3rem;
                        border: none;
                        outline:medium;
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
                span:first-child{
                    width: 0.6rem;
                    text-align: left;
                    img{
                        width: 0.3rem;
                        vertical-align: middle;
                        margin-top: -0.2rem;
                    }
                }
            }
            li:first-child{
              input{
                width: 3rem;
              }
              span:nth-child(3){
                  float: left;
              }
              span:last-child{
                float: right;
                line-height: 0.5rem;
                margin-top: 0.175rem;
                margin-right: 0.2rem;
                input{
                    color: #fb4747;
                    border: 1px solid #fb4747;
                    background-color: #fff;
                    border-radius: 0.06rem;
                    width: 1.76rem;
                    height: 0.54rem;
                    font-size: 0.28rem;
                }
                input.on{
                    color: #999999;
                    background-color: #dddddd;
                    border: 1px solid #dddddd;
                }
                img{
                    vertical-align: middle;
                    width: 0.3rem;
                    margin-right: 0.2rem;
                    margin-top: -0.15rem;
                }
              }
            }
            li:last-child{
              border-bottom: none;
            }
        }
        p{
          height: 0.9rem;
          line-height: 0.9rem;
          margin-top: 0.2rem;
          background-color: #fff;
          border: 1px solid #e0e0e0;
          span{
              height: 0.8rem;
              float: left;
              input{
                  color: #333333;
                  font-size: 0.3rem;
                  width: 5.5rem;
                  border: none;
                  outline:medium;
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
          span:first-child{
              width: 0.6rem;
              text-align: left;
              margin-left: 0.2rem;
              img{
                  width: 0.3rem;
                  vertical-align: middle;
                  margin-top: -0.3rem;
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
}
</style>
