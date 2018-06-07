<template>
    <div class="record">
        <div class="title">
            <span>
                <router-link to="/account">
                    <img src="../../../static/images/goBack.png">
                </router-link>
            </span>
            <span>交易记录</span>
            <span>
                <a class="explainBtn"><img src="../../../static/images/transaction_filtrate.png"></a>
            </span>
        </div>
        <div class="nav">
            <ul>
                <li>
                    <span>5月</span>
                    <span>2018</span>
                </li>
                <li class="on">
                    <span>4月</span>
                    <span>2018</span>
                </li>
                <li>
                    <span>3月</span>
                    <span>2018</span>
                </li>
                <li>
                    <span>2月</span>
                    <span>2018</span>
                </li>
                <li>
                    <span>1月</span>
                    <span>2018</span>
                </li>
                <li>
                    <span>12月</span>
                    <span>2017</span>
                </li>
            </ul>
        </div>
        <div class="list">
            <h1>
                <span>项目</span>
                <span>单位(元)</span>
            </h1>
            <ul>
                <li>
                    <p>
                        <span>刮刮卡</span>
                        <span>2015-12-22 09:28:09</span>
                    </p>
                    <p>
                        <span>+1.63</span>
                        <span>交易成功</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>刮刮卡</span>
                        <span>2015-12-22 09:28:09</span>
                    </p>
                    <p>
                        <span class="on">-10,100.00</span>
                        <span>交易成功</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>刮刮卡</span>
                        <span>2015-12-22 09:28:09</span>
                    </p>
                    <p>
                        <span>+1.63</span>
                        <span>交易成功</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>刮刮卡</span>
                        <span>2015-12-22 09:28:09</span>
                    </p>
                    <p>
                        <span class="on">-10,100.00</span>
                        <span>交易成功</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>刮刮卡</span>
                        <span>2015-12-22 09:28:09</span>
                    </p>
                    <p>
                        <span>+1.63</span>
                        <span>交易成功</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>刮刮卡</span>
                        <span>2015-12-22 09:28:09</span>
                    </p>
                    <p>
                        <span class="on">-10,100.00</span>
                        <span>交易成功</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>刮刮卡</span>
                        <span>2015-12-22 09:28:09</span>
                    </p>
                    <p>
                        <span>+1.63</span>
                        <span>交易成功</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>刮刮卡</span>
                        <span>2015-12-22 09:28:09</span>
                    </p>
                    <p>
                        <span class="on">-10,100.00</span>
                        <span>交易成功</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>刮刮卡</span>
                        <span>2015-12-22 09:28:09</span>
                    </p>
                    <p>
                        <span>+1.63</span>
                        <span>交易成功</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>刮刮卡</span>
                        <span>2015-12-22 09:28:09</span>
                    </p>
                    <p>
                        <span class="on">-10,100.00</span>
                        <span>交易成功</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>刮刮卡</span>
                        <span>2015-12-22 09:28:09</span>
                    </p>
                    <p>
                        <span>+1.63</span>
                        <span>交易成功</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>刮刮卡</span>
                        <span>2015-12-22 09:28:09</span>
                    </p>
                    <p>
                        <span class="on">-10,100.00</span>
                        <span>交易成功</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>刮刮卡</span>
                        <span>2015-12-22 09:28:09</span>
                    </p>
                    <p>
                        <span>+1.63</span>
                        <span>交易成功</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>刮刮卡</span>
                        <span>2015-12-22 09:28:09</span>
                    </p>
                    <p>
                        <span class="on">-10,100.00</span>
                        <span>交易成功</span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="inquire">
            <div class="box">
                <ul>
                    <li class="on">全部</li>
                    <li>充值</li>
                    <li>提现</li>
                    <li>天天盈</li>
                    <li>定投盈</li>
                    <li>分享奖励</li>
                    <li>存钱罐收益</li>
                    <li>其他</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        $('.explainBtn').click(function(){
            $('.inquire').show()
        })
        $('.inquire .box li').click(function(){
            $('.inquire').hide()
        })

$(document).mouseup(function(e){
  let _con = $('.inquire .box');   
  if(!_con.is(e.target) && _con.has(e.target).length === 0){
    $('.inquire').hide()
  }
});
    }
}
</script>
<style lang="less" scoped>
.record{
    background-color: #f8f8f8;
    padding-bottom: 0.94rem;
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
    display: flex;
    span{
        flex: 1;
        a:hover{
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
            -webkit-user-select: none;
            -moz-user-focus: none;
            -moz-user-select: none;  
            text-decoration: none;
        }
    }
    span:first-child{
        img{
            position: absolute;
            left: 0.2rem;
            top: 0.25rem;
            height: 0.5rem;
        }
        a{
            display: block;
            width: 1rem;
            height: 1rem;
        }
    }
    span:nth-child(2){
        font-size: 0.36rem;
    }
    span:last-child{
        a{
            float: right;
            margin-right: 0.3rem;
            margin-top: 0.05rem;
            width: 1rem;
            height: 1rem;
        }
        img{
            margin-top: -0.1rem;
            height: 0.4rem;
        }
    }
}
.nav{
        width: 7.5rem;
        position: fixed;
        margin: auto;
        top: 1rem;
    ul{
        display: flex;
        height: 1.2rem;
        background-color: #fff;
        border-bottom: 1px solid #e0e0e0;
        li{
            flex: 1;
            text-align: center;
            span{
                display: block;
                color: #333333;
            }
            span:first-child{
                font-size: 0.3rem;
                margin-top: 0.3rem;
            }
            span:last-child{
                font-size: 0.24rem;
                margin-top: 0.05rem;
            }
        }
        li.on{
            span{
                color: #fd4747
            }
        }
    }
}
.list{
    h1{
        position: fixed;
        margin: auto;
        top: 2.2rem;
        width: 7.5rem;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.26rem;
        color: #999999;
        background-color: #F8F8F8;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        span:first-child{
            float: left;
            margin-left: 0.2rem;
        }
        span:last-child{
            float: right;
            margin-right: 0.2rem;
        }
    }
    ul{
        margin-top: 2.8rem;
        padding: 0 0.2rem;
        background-color: #fff;
        border-bottom: 1px solid #e0e0e0;
        li{
            height: 1.3rem;
            border-bottom: 1px solid #e0e0e0;
            p{
                height: 1.3rem;
                span{
                    display: block;
                }
                span:first-child{
                    font-size: 0.3rem;
                    margin-top: 0.3rem;
                }
                span:last-child{
                    font-size: 0.3rem;
                    color: #999999;
                    margin-top: 0.1rem;
                }
            }
            p:first-child{
                float: left;

            }
            p:last-child{
                float: right;
                span{
                    text-align: right
                }
                span:first-child{
                    color: #387eff
                }
                span.on{
                    color: #ff8400
                }
            }
        }
        li:last-child{
            border: none
        }
    }
}
.inquire{
    display: none;
    position: fixed;
    margin: auto;
    top: 1rem;
    z-index: 1000;
    width: 7.5rem;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    .box{
        height: 3.3rem;
        background-color: #fff;
        ul{
            padding: 0.3rem;
            li{
                float: left;
                width: 2.2rem;
                height: 0.7rem;
                line-height: 0.7rem;
                margin-bottom: 0.2rem;
                margin-right: 0.15rem;
                font-size: 0.3rem;
                text-align: center;
                color: #333333;
                border: 1px solid #e0e0e0;
                border-radius: 0.06rem;
                box-sizing: border-box;
            }
            li:nth-child(3n){
                margin-right: 0;
            }
            li.on{
                color: #fff;
                background-color: #ffa800;
                border-color: #ffa800;
            }
        }
    }
}
</style>
