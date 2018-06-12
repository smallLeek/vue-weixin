<template>
    <div class="ttyAccount">
        <div class="title">
            <span>
                <router-link to="/account">
                    <img src="../../../../static/images/goBack.png">
                </router-link>
            </span>
            <span>天天盈账户</span>
            <span>
                <a class="explainBtn">账户说明</a>
            </span>
        </div>
        <div class="fund">
            <h2><img src="../../../../static/images/account/account_rate.png"> 昨日年化收益:</h2>
            <h1>10.20<span>%</span></h1>
            <ul class="fund_model">
                <li>
                    <span>昨日收益(元)</span>
                    <span>2.18</span>
                </li>
                <li>
                    <span>在投收益(元)</span>
                    <span>370.79</span>
                </li>
                <li>
                    <span>累计收益(元)</span>
                    <span>370.79</span>
                </li>
            </ul>
        </div>
        <div class="nav">
            <router-link to="/ttyRecord">
                <span><img src="../../../../static/images/account/account_deal.png"></span>
                <span>
                    <h1>交易记录</h1>
                    <h2>查看详情</h2>
                </span>
            </router-link>
            <router-link to="">
                <span><img src="../../../../static/images/account/account_ticket.png"></span>
                <span>
                    <h1>我的加息卡</h1>
                    <h2>收益翻倍在这里</h2>
                </span>
            </router-link>
        </div>
        <div class="operation">
            <ul>
                <router-link to="/beingCapital">
                    <li>
                        <span>在投本金(元)</span>
                        <span>1002.18</span>
                    </li>
                    <li>查看详情</li>
                </router-link>
                <router-link to="">
                    <li>
                        <span>冻结本金(元)</span>
                        <span>12304.97</span>
                    </li>
                    <li>查看详情</li>
                </router-link>
            </ul>
        </div>
        <div class="btn">
            <router-link to="">转让</router-link>
            <router-link to="">投资</router-link>
        </div>
        <div class="explain">
            <h1>账户说明</h1>
            <ul>
                <li>
                    <h2>【昨日年化利率】</h2>
                    <p>昨日年化利率=借款固定利率+浮动利率（活动加息+加息卡）</p>
                </li>
                <li>
                    <h2>【昨日收益】</h2>
                    <p>昨日收益=昨日出借本金*昨日年化利率/一年天数</p>
                </li>
                <li>
                    <h2>【在投收益】</h2>
                    <p>在投收益=未提取的利息收益</p>
                </li>
                <li>
                    <h2>【在投本金】</h2>
                    <p>在投本金=投资到“天天盈”产品的总金额</p>
                </li>
                <li>
                    <h2>【冻结本金】</h2>
                    <p>冻结本金=申请转让成功后未到账金额</p>
                </li>
                <li>
                    <h2>注:</h2>
                    <p>以上收益计算后少于0.01元的部分，累计至大于等于0.01元发放</p>
                </li>
            </ul>
            <img class="closeBtn" src="../../../../static/images/account/account_close.png">
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        $('.explainBtn').click(function(){
            $('.explain').show()
        })
        $('.closeBtn').click(function(){
            $('.explain').hide()
        })
    }
}
</script>
<style lang="less" scoped>
.ttyAccount{
    background-color: #f8f8f8;
    padding-bottom: 1.5rem;
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
    }
    span:first-child{
        width: 25%;
        a{
            display: block;
            width: 1rem;
            height: 1rem;
        }
    }
    span:nth-child(2){
        width: 50%;
        font-size: 0.36rem;
    }
    span:last-child{
        width: 25%;
        a{
            color: #ffc2c4;
            float: right;
            margin-right: 0.2rem;
            margin-top: 0.05rem;
            font-size: 0.3rem;
        }
    }
}
.fund{
    height: 3.96rem;
    margin-top: 1rem;
    background:linear-gradient(to bottom,#fb4747 0%,#fb6547 100%);
    position: relative;
    h1{
        text-align: center;
        font-size: 1.4rem;
        margin-top: 0.3rem;
        line-height: 1;
        font-weight: 500;
        color: #fff;
        font-family: 黑体;
        span{
            font-size: 0.46rem;
        }
    }
    h2{
        font-weight: 500;
        text-align: center;
        font-size: 0.26rem;
        padding-top: 0.26rem;
        line-height: 1;
        color: #ffc2c4;
        img{
            height: 0.3rem;
            margin-top: -0.1rem;
        }
    }
    .fund_model{
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        width: 100%;
        height: 1.2rem;
        border-top: 1px solid #fc8f7f;
        li{
            flex: 1;
            text-align: center;
            margin-top: 0.3rem;
            height: 0.7rem;
            border-right: 1px solid #ffc2c4;
            box-sizing: border-box;
            span{
                line-height: 1;
                display: block;
            }
            span:first-child{
                font-size: 0.26rem;
                margin-top: 0;
                color: #ffc2c4;
            }
            span:last-child{
                margin-top: 0.1rem;
                font-size: 0.34rem;
                color: #fff;
                font-family: 黑体;
            }
        }
        li:last-child{
            border: none
        }
    }
}
.nav{
    margin-top: 0.2rem;
    height: 1.5rem;
    padding: 0 0.2rem;
    a{
        width: 3.44rem;
        height: 1.5rem;
        background-color: #fff;
        border-radius: 0.1rem;
        border: 1px solid #e2e2e2;
        span{
            float: left;
            text-align: center;
            margin-top: 0.3rem;
            line-height: 1;
        }
        span:first-child{
            margin-left: 0.3rem;
            margin-right: 0.52rem;
            img{
                width: 0.7rem;
                vertical-align: middle;
                margin-top: -0.3rem;
            }
        }
        span:last-child{
            h1{
                font-size: 0.3rem;
                margin-top: 0.15rem;
                color: #fb4747
            }
            h2{
                margin-top: 0.14rem;
                font-size: 0.24rem;
                font-weight: 500;
                color: #666666
            }
        }
    }
    a:first-child{
        float: left;
    }
    a:last-child{
        float: right;
        span:first-child{
            margin-right: 0.4rem;
        }
    }
}
.operation{
    margin-top: 0.2rem;
    a{
        height: 1.78rem;
        margin-top: 0.1rem;
        display: block;
        background-color: #fff;
        border-left: 6px solid #fd4747;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        li:first-child{
            float: left;
            padding-top: 0.35rem;
            margin-left: 0.2rem;
            span{
                display: block;
                line-height: 1;
            }
            span:first-child{
                font-size: 0.28rem;
                color: #333333
            }
            span:last-child{
                margin-top: 0.3rem;
                font-size: 0.6rem;
                font-weight: 700;
                color: #fb4747;
                font-family: 黑体;
            }
        }
        li:last-child{
            color: #999999;
            font-size: 0.26rem;
            float: right;
            line-height: 1.78rem;
            margin-right: 0.3rem;
        }
    }
    a:first-child{
        margin: 0
    }
}
.btn{
    margin-top: 0.6rem;
    padding: 0 0.29rem;
    a{
        width: 3.3rem;
        height: 1rem;
        line-height: 1rem;
        color: #fff;
        font-size: 0.34rem;
        text-align: center;
        border-radius: 1rem;
    }
    a:first-child{
        float: left;
        background-color: #e2e2e2;
    }
    a:first-child:active{
        background-color: #ebac01;
    }
    a:last-child{
        float: right;
        background-color: #fb4747;
    }
    a:last-child:active{
        background-color: #e41a1a;
    }
}
.explain{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0,0.8);
    color: #fff;
    h1{
        font-weight: 500;
        width: 6.8rem;
        font-size: 0.36rem;
        margin: auto;
        margin-top: 0.6rem;
        padding-bottom: 0.28rem;
        text-align: center;
        border-bottom: 1px solid #fff;
    }
    ul{
        padding: 0 0.35rem;
        padding-top: 0.1rem;
        li{
            margin-top: 0.3rem;
            line-height: 1;
            h2{
                font-size: 0.3rem;
                font-weight: 500;
            }
            p{
                font-size: 0.3rem;
                margin-top: 0.1rem;
                line-height: 1.5;
            }
        }
    }
    .closeBtn{
        display: block;
        margin: auto;
        margin-top: 0.5rem;
        width: 1rem;
    }
}
</style>
