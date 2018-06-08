<template>
    <div class="dty">
        <div class="title">
            <span>
                <router-link to="/account">
                    <img src="../../../../static/images/goBack.png">
                </router-link>
            </span>
            <span>定投盈</span>
            <span>
                <router-link class="explainBtn" to="">收益记录</router-link>
            </span>
        </div>
        <div class="fund">
            <h2><img src="">定投盈收益(元)</h2>
            <h1>1,000.82</h1>
            <ul>
                <li>
                    <span>
                        <b>可用余额(元)</b>
                        <b>34,000.12</b>
                    </span>
                    <span>
                        <b>冻结资金(元)</b>
                        <b>500.00</b>
                    </span>
                </li>
                <li>
                    <span>
                        <b>待收本金(元)</b>
                        <b>14,000.00</b>
                    </span>
                    <span>
                        <b>待收收益(元)</b>
                        <b>600.00</b>
                    </span>
                </li>
            </ul>
        </div>
        <div class="tab">
            <h1><span>我的定投盈</span></h1>
            <ul>
                <li class="on">
                    <span><img src="../../../../static/images/dcy/dcy_icon01_on.png"></span>
                    <span>所有项目</span>
                </li>
                <li>
                    <span><img src="../../../../static/images/dcy/dcy_icon02.png"></span>
                    <span>投资中</span>
                </li>
                <li>
                    <span><img src="../../../../static/images/dcy/dcy_icon03.png"></span>
                    <span>已收益</span>
                </li>
                <li>
                    <span><img src="../../../../static/images/dcy/dcy_icon04.png"></span>
                    <span>收益查询</span>
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="content1">
                <ul>
                    <router-link to="">
                        <li>
                            <span>年化收益</span>
                            <span><b>15</b>%</span>
                        </li>
                        <li>
                            <p>
                                <span>按揭宝2015502</span>
                                <span><b>未到期</b><img src=""></span>
                            </p>
                            <p>
                                <span>投资金额</span>
                                <span>待收收益</span>
                                <span>还款日期</span>
                            </p>
                            <p>
                                <span>10,000元</span>
                                <span>24.8元</span>
                                <span>2018-03-21</span>
                            </p>
                        </li>
                    </router-link>
                </ul>
            </div>
            <div class="content2">
                2
            </div>
            <div class="content3">
                3
            </div>
            <div class="content4">
                4
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.dty{
    background-color: #f5f5f5;
}
/* title */
.title{
    margin: auto;
    width: 7.5rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.4rem;
    text-align: center;
    color: #fff;
    background-color: #fd4747;
    position: fixed;
    top: 0;
    z-index: 100;
    span{
        float: left;
        height: 1rem;
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
    span:first-child{
        width: 25%;
    }
    span:nth-child(2){
        width: 50%;
        font-size: 0.36rem;
    }
    span:last-child{
        width: 25%;
        a{
            color: #fff;
            float: right;
            margin-right: 0.2rem;
            margin-top: 0.05rem;
            font-size: 0.3rem;
        }
    }
}
.fund{
    height: 4.2rem;
    margin-top: 1rem;
    padding-top: 0.1rem;
    position: relative;
    color: #fff;
    background:linear-gradient(to bottom,#fb4747 0%,#fb6547 100%);
    ul{
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        li{
            height: 1.1rem;
            display: flex;
            border-top: 1px solid #fc776c;
            span{
                flex: 1;
                border-right: 1px solid #fc776c;
                box-sizing: border-box;
                b{
                    display: block;
                    font-weight: 500;
                    margin-left: 0.3rem;
                }
                b:first-child{
                    font-size: 0.24rem;
                    margin-top: 0.2rem;
                }
                b:last-child{
                    font-size: 0.34rem;
                    margin-top: 0.05rem;
                }
            }
            span:nth-child(2n){
                border: none;
            }
        }
    }
    h2{
        font-weight: 500;
        margin-left: 0.3rem;
        font-size: 0.28rem;
    }
    h1{
        font-size: 0.7rem;
        font-weight: 500;
        text-align: center;
        margin-top: 0.34rem;
    }
}
.tab{
    margin-top: 0.2rem;
    background-color: #fff;
    h1{
        height: 0.6rem;
        line-height: 0.6rem;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        span{
            font-weight: 500;
            height: 0.28rem;
            margin-left: 0.2rem;
            padding-left: 0.1rem;
            font-size: 0.28rem;
            color: #333333;
            border-left: 0.04rem solid #fb4747;
        }
    }
    ul{
        display: flex;
        height: 1.4rem;
        border-bottom: 1px solid #e0e0e0;
        li{
            flex: 1;
            text-align: center;
            span{
                display: block;
            }
            span:first-child{
                margin-top: 0.3rem;
                img{
                    height: 0.4rem;
                }
            }
            span:last-child{
                margin-top: 0.1rem;
                font-size: 0.26rem;
                color: #333333
            }
        }
        li.on{
            span:last-child{
                color: #fb4747
            }
        }
    }
}
.content{
    margin-top: 0.2rem;
    >div{
        display: none;
    }
    .content1{
        display: block;
        ul{
            width: 7rem;
            height: 1.7rem;
            margin: auto;
            background-color: #fff;
            border-radius: 0.08rem;
            border: 1px solid #e0e0e0;
            li{
                float: left;
                height: 1.2rem;
                margin-top: 0.25rem;
            }
            li:first-child{
                width: 1.6rem;
                text-align: center;
                border-right: 1px solid #e3e3e3;
                span{
                    display: block;
                }
                span:first-child{
                    font-size: 0.24rem;
                    color: #666666;
                    margin-top: 0.15rem;
                }
                span:last-child{
                    font-size: 0.42rem;
                    color: #fb4747;
                    margin-top: 0.05rem;
                    b{
                        font-size: 0.56rem;
                    }
                }
            }
            li:last-child{
                width: 5rem;
                margin-left: 0.2rem;
                p:first-child{

                }
                p:nth-child(2){
                    margin-top: 0.3rem;
                    font-size: 0.24rem;
                    display: flex;
                    text-align: center;
                    span{
                        flex: 1;
                    }
                }
                p:last-child{
                    margin-top: 0.1rem;
                    font-size: 0.26rem;
                    display: flex;
                    text-align: center;
                    span{
                        flex: 1;
                    }
                }
            }
        }
    }
    .content2{

    }
    .content3{

    }
    .content4{

    }
}
</style>
