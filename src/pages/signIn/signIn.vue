<template>
    <div class="sign_in">
        <div class="title">
            <a>
                <img src="../../../static/images/goBack.png">
            </a>
            <span>签到</span>
        </div>
        <div class="integral">
            <ul>
                <li>
                    <span><b>260</b> 积分</span>
                    <span>前往商城 >> >></span>
                </li>
                <li>
                    <span>
                        <span>
                            <span>已签到</span>
                            <span>积分+15</span>
                        </span>
                    </span>
                </li>
                <li>？签到攻略</li>
            </ul>
            <p>已累计签到14天，再签5天即可获得额外奖励</p>
        </div>
        <div class="list">
            <h1><img src="../../../static/images/sign_in/sign_in_title.png"></h1>
            <ul>
                <li>
                    <img src="../../../static/images/sign_in/sign_in_33.png">
                    <img src="../../../static/images/sign_in/sign_in_66.png">
                    <img src="../../../static/images/sign_in/sign_in_88.png">
                    <img src="../../../static/images/sign_in/sign_in_99.png">
                </li>
                <li>
                    <img src="../../../static/images/sign_in/sign_in_axis.png">
                    <img src="../../../static/images/sign_in/sign_in_position.png">
                    <img src="../../../static/images/sign_in/sign_in_axis.png">
                    <img src="../../../static/images/sign_in/sign_in_position.png">
                    <img src="../../../static/images/sign_in/sign_in_axis.png">
                    <img src="../../../static/images/sign_in/sign_in_position.png">
                    <img src="../../../static/images/sign_in/sign_in_axis.png">
                    <img src="../../../static/images/sign_in/sign_in_position.png">
                    <img src="../../../static/images/sign_in/sign_in_axis.png">
                </li>
                <li>
                    <span>当月累计签到10天，即可获得33积分</span>
                    <span>当月累计签到20天，即可获得66积分</span>
                    <span>当月累计签到30天，即可获得88积分</span>
                    <span>满签：当月累计签满，即可获得99积分</span>
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
.sign_in{
    background-color: #f8f8f8;
    padding-bottom: 0.5rem;
    padding-top: 1rem;
}
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
.integral{
    height: 4rem;
    background:linear-gradient(to bottom,#FFAB3B 0%,#FF6B65 100%);
    ul{
        padding: 0 0.3rem;
        padding-top: 0.3rem;
        li{
            height: 3rem;
            float: left;
            span{
                display: block;
            }
        }
        li:first-child{
            width: 2.05rem;
            color: #fff;
            font-size: 0.26rem;
            margin-top: -0.1rem;
            span:first-child{
                b{
                    font-size: 0.4rem;
                }
            }
            span:last-child{
                margin-top: 0.1rem;
            }
        }
        li:nth-child(2){
            width: 2.8rem;
            height: 2.8rem;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            position: relative;
            >span{
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                width: 2.3rem;
                height: 2.3rem;
                border-radius: 50%;
                margin: auto;
                background-color: #fff;
                >span{
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                    margin: auto;
                    border: 1px solid #FF6B65;
                    >span{
                        text-align: center;
                    }
                    >span:first-child{
                        font-size: 0.4rem;
                        color: #FF8B50;
                        width: 1.5rem;
                        font-weight: 700;
                        line-height: 0.7rem;
                        margin: auto;
                        margin-top: 0.3rem;
                        border-bottom: 1px solid #F9EEE3;
                    }
                    >span:last-child{
                        font-size: 0.3rem;
                        color: #FF6B65;
                        font-weight: 700;
                        margin-top: 0.15rem;
                    }
                }
            }
        }
        li:last-child{
            width: 2.05rem;
            text-align: right;
            color: #fff;
            font-size: 0.26rem;
        }
    }
    p{
        clear: both;
        text-align: center;
        color: #F9EEE3;
        font-size: 0.28rem;
    }
}
.list{
    margin-top: 0.28rem;
    h1{
        padding-left: 0.2rem;
        img{
            width: 3.5rem;
        }
    }
    ul{
        margin-top: 0.02rem;
        padding-left: 0.2rem;
        li{
            float: left;
        }
        li:first-child{
            margin-top: 0.1rem;
            img{
                display: block;
                margin-bottom: 0.3rem;
                width: 1.45rem;
            }
        }
        li:nth-child(2){
            width: 1rem;
            margin-left: 0.2rem;
            img{
                width: 0.07rem;
                height: 1.26rem;
                display: block;
                margin-left: 0.172rem;
            }
            img:nth-child(2n){
                width: 0.4rem;
                height: auto;
                margin: 0;
            }
            img:first-child,
            img:last-child{
                height: 0.6rem;
            }
        }
        li:last-child{
            width: 4.2rem;
            margin-top: 0.5rem;
            span{
                display: block;
                color: #333333;
                font-size: 0.28rem;
                line-height: 0.45rem;
                margin-bottom: 0.87rem;
            }
        }
    }
}
</style>
