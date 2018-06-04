<template>
    <div class="about">
        <div class="title">
            <router-link to="/setting">
                <img src="../../../../static/images/goBack.png">
            </router-link>
            <span>关于我们</span>
        </div>
        <div class="content">
            <ul>
                <li>
                    <span>注册协议</span>
                    <span><img src="../../../../static/images/home_more.png" alt=""></span>
                </li>
                <li>
                    <span>微信公众号</span>
                    <span>金梧桐互联网金融服务平台</span>
                </li>
                <li>
                    <span>官方邮箱</span>
                    <span>service@phtfdata.com</span>
                </li>
                <li>
                    <span>官方网站</span>
                    <span><a href="https://www.phtfdata.com">https://www.phtfdata.com</a></span>
                </li>
                <li>
                    <span>企业全称</span>
                    <span>北京普惠通数据信息技术有限公司</span>
                </li>
                <li>
                    <span>企业地址</span>
                    <span>北京市海淀区丹棱街1号互联网金融中心20层</span>
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
        padding-left: 0.2rem;
        background-color: #fff;
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
                font-size: 0.3rem;
                color: #999999;
            }
        }
        li:nth-child(4){
            span:last-child{
                a{
                    color: #999999;
                }
                a:hover{
                    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
                    -webkit-user-select: none;
                    -moz-user-focus: none;
                    -moz-user-select: none;  
                    text-decoration: none;
                }
            }
        }
        li:first-child{
            span:last-child{
                img{
                    height: 0.35rem;
                }
            }
        }
        li:last-child{
            span:last-child{
                font-size: 0.26rem;
            }
        }
    }
}
</style>
