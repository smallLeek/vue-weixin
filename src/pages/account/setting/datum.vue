<template>
    <div class="datum">
        <div class="title">
            <router-link to="/setting">
                <img src="../../../../static/images/goBack.png">
            </router-link>
            <span>我的资料</span>
        </div>
        <div class="content">
            <ul>
                <li>
                    <span>登录手机号</span>
                    <span>132****9371</span>
                </li>
            </ul>
            <h1>金梧桐账号信息</h1>
            <ul>
                <li>
                    <span>姓名</span>
                    <span>钟娜</span>
                </li>
                <li>
                    <span>性别</span>
                    <span>女</span>
                </li>
                <li>
                    <span>证件类型</span>
                    <span>身份证</span>
                </li>
                <li>
                    <span>证件号码</span>
                    <span>**************0026</span>
                </li>
            </ul>
            <h1>新网银行账号信息</h1>
            <ul>
                <li>
                    <span>绑卡信息</span>
                    <span>工商银行</span>
                </li>
                <li>
                    <span>银行账号</span>
                    <span>**************7362</span>
                </li>
                <li>
                    <span>银行预留手机号码</span>
                    <span>132****6271</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
/* title */
.title{
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
    img{
        position: absolute;
        left: 0.2rem;
        top: 0.25rem;
        height: 0.5rem;
    }
    a:hover{
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-user-select: none;
        -moz-user-focus: none;
        -moz-user-select: none;  
        text-decoration: none;
    }
}
.content{
    margin-top: 1.2rem;
    ul{
        background-color: #fff;
        padding-left: 0.2rem;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        li{
            height: 1rem;
            line-height: 1rem;
            padding-right: 0.2rem;
            border-bottom: 1px solid #e0e0e0;
            span:first-child{
                float: left;
                font-size: 0.32rem;
                color: #333333;
            }
            span:last-child{
                float: right;
                font-size: 0.32rem;
                color: #999999;
            }
        }
        li:last-child{
            border: none
        }
    }
    h1{
        font-weight: 500;
        padding-top: 0.4rem;
        padding-bottom: 0.1rem;
        padding-left: 0.2rem;
        font-size: 0.28rem;
        color: #666666;
        background-color: #f8f8f8;
    }
}
</style>
