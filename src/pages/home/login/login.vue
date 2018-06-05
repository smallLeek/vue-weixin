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
                        <span><img src="../../../../static/images/login_num.png"></span>
                        <span><input id="phonenum" type="number" placeholder="请输入手机号"></span>
                    </li>
                    <li>
                        <span><img src="../../../../static/images/login_password.png"></span>
                        <span><input id="password" type="password" placeholder="请输入登录密码"></span>
                        <span><img id="eye" src="../../../../static/images/login_eye_b.png"></span>
                    </li>
                </ul>
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
export default {
    mounted(){
        $('#eye').click(function(){
            if($('#password').attr('type')=='password'){
                $('#password').attr('type','text');
                $(this).attr('src','../../../../static/images/login_eye_z.png')
            }else{
                $('#password').attr('type','password');
                $(this).attr('src','../../../../static/images/login_eye_b.png')
            }
        })
    },
    methods:{
        getNowFormatDate() {
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + date.getHours() + seperator2 + date.getMinutes()
                    + seperator2 + date.getSeconds();
            return currentdate;
        },
        submit(){
            let flag=false;
            flag=regexfun.regex(this,'mobile',$('#phonenum').val());
            if(flag==true){
                this.login()
            }
        },
        login(){
            let user_type="1";
            apis.newLogin($('#phonenum').val(),phtServer.CalcuMD5lower($('#password').val()),phtServer.CalcuMD5lower($('#password').val()),this.getNowFormatDate(),user_type).then((data)=> {
                this.$router.push({ path: "/home" })
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
    background: url(../../../../static/images/login_bg.png);
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
        width: 5.8rem;
        margin: auto;
        s{
            position: absolute;
            left: 0.95rem;
            top: -0.45rem;
            width: 0.2rem;
            height: 0.2rem;
            background-color: #f8f8f8;
            transform: rotate(45deg)
        }
        ul{
            border: 1px solid #e0e0e0;
            li{
                width: 100%;
                height: 0.8rem;
                line-height: 0.8rem;
                background-color: #fff;
                span{
                    height: 0.8rem;
                    float: left;
                    input{
                        color: #333333;
                        font-size: 0.26rem;
                        border: none;
                        outline:medium;
                    }
                    ::-moz-placeholder {
                        font-size: 0.26rem;
                        color: #999999;
                    }
                    :-ms-input-placeholder {
                        font-size: 0.26rem;
                        color: #999999;
                    }
                    ::-webkit-input-placeholder {
                        font-size: 0.26rem;
                        color: #999999;
                    }
                }
                span:first-child{
                    width: 0.7rem;
                    text-align: center;
                    img{
                        width: 0.25rem;
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
                        width: 0.4rem;
                        margin-right: 0.2rem;
                    }
                }
            }
        }
        .submit{
            width: 5.8rem;
            height: 0.7rem;
            margin: auto;
            margin-top: 0.6rem;
            border-radius: 0.06rem;
            font-size: 0.3rem;
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
