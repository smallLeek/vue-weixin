<template>
    <div class="yyy">
        <div class="title">
            <span>
                <router-link to="/home">
                    <img src="../../../static/images/goBack.png">
                </router-link>
            </span>
            <span>月月盈20170300</span>
            <span>
                <router-link class="explainBtn" to="">收益试算</router-link>
            </span>
        </div>
        <div class="fund">
            <h2> 
                <span></span>
                <span>年化收益率</span>
                <span></span>
            </h2>
            <h1>11<span>%</span></h1>
            <ul>
                <li>期限灵活</li>
                <li>收益稳定</li>
                <li>100元起投</li>
            </ul>
        </div>
        <div class="demand">
            <li>
                <span>需求金额</span>
                <span>170,000元</span>
            </li>
            <li>
                <span>剩余可投</span>
                <span>85,000元</span>
            </li>
            <li>
                <span>投资期限</span>
                <span>3个月</span>
            </li>
        </div>
        <div class="schedule">
            <ul>
                <li>
                    <span>投资进度</span>
                    <span><s></s></span>
                    <span>12%</span>
                </li>
                <li>
                    <span>起投时间</span>
                    <span>2017-03-09 20:30:00</span>
                </li>
                <li>
                    <span>投资截止日期</span>
                    <span>2017-03-19 20:30:00</span>
                </li>
                <li>
                    <router-link to="">
                        <span>借款及担保合同服务范文</span>
                        <span><img src="../../../static/images/home_more.png"></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="tab">
            <ul>
                <li class="on">风控措施</li>
                <li>项目简介</li>
                <li>投资记录</li>
            </ul>
        </div>
        <div class="tab_content">
            <div class="content1">
                <div class="content1_title">
                    <span>项目名称</span>
                    <span>天天盈2015924</span>
                </div>
                <ul>
                    <li>
                        <span>审核项目</span>
                        <span>审核情况</span>
                        <span>通过日期</span>
                    </li>
                    <li>
                        <span>法定代表人身份审查</span>
                        <span>已完成</span>
                        <span>2018-5-15</span>
                    </li>
                    <li>
                        <span>法定代表人征信报告</span>
                        <span>已完成</span>
                        <span>2018-5-15</span>
                    </li>
                    <li>
                        <span>项目实地考察</span>
                        <span>已完成</span>
                        <span>2018-5-15</span>
                    </li>
                    <li>
                        <span>企业银行征信报告</span>
                        <span>已完成</span>
                        <span>2018-5-15</span>
                    </li>
                    <li>
                        <span>企业、实际控制人资产证明</span>
                        <span>已完成</span>
                        <span>2018-5-15</span>
                    </li>
                    <li>
                        <span>实际控制人、股东银行征信及流水</span>
                        <span>已完成</span>
                        <span>2018-5-15</span>
                    </li>
                    <li>
                        <span>近2年公司财务报表及近1月报表</span>
                        <span>已完成</span>
                        <span>2018-5-15</span>
                    </li>
                </ul>
            </div>
            <div class="content2">

            </div>
            <div class="content3">

            </div>
        </div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.yyy{
    background: url(../../../static/images/background_img_1x.png);
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
    margin-top: 1rem;
    height: 2.6rem;
    background:linear-gradient(to bottom,#fb4747 0%,#fb6547 100%);
    text-align: center;
    color: #fff;
    h2{
        padding-top: 0.1rem;
        font-size: 0.26rem;
        font-weight: 500;
        color: #fff;
        span:nth-child(2){
            margin: 0 0.02rem;
        }
        span:first-child,
        span:last-child{
            display: inline-block;
            width: 0.6rem;
            vertical-align: middle;
            margin-top: -0.06rem;
            border-bottom: 1px solid #ffa7a7;
        }
    }
    h1{
        font-size: 1.4rem;
        span{
            font-size: 0.46rem;
        }
    }
    ul{
        width: 4.14rem;
        height: 0.38rem;
        margin: auto;
        li{
            float: left;
            height: 0.38rem;
            line-height: 0.36rem;
            margin-right: 0.2rem;
            border-radius: 1rem;
            font-size: 0.24rem;
            border: 1px solid #fff;
            box-sizing: border-box;
        }
        li:first-child{
            width: 1.18rem
        }
        li:nth-child(2){
            width: 1.18rem
        }
        li:last-child{
            width: 1.38rem;
            float: right;
            margin: 0;
        }
    }
}
.demand{
    height: 1.2rem;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    li{
        flex: 1;
        height: 0.6rem;
        border-right: 1px solid #e0e0e0;
        text-align: center;
        margin-top: 0.3rem;
        span{
            display: block;
        }
        span:first-child{
            font-size: 0.26rem;
            color: #666666;
            margin-top: -0.07rem;
        }
        span:last-child{
            font-size: 0.32rem;
            color: #333333;
            margin-top: 0.1rem;
        }
    }
    li:last-child{
        border: none;
    }
}
.schedule{
    margin-top: 0.2rem;
    ul{
        padding: 0 0.2rem;
        background-color: #fff;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        li{
            height: 1rem;
            line-height: 1rem;
            border-bottom: 1px solid #e0e0e0;
            span:first-child{
                color: #666666;
                font-size: 0.3rem;
                float: left;
            }
            span:last-child{
                float: right;
                font-size: 0.3rem;
                color: #333333;
            }
        }
        li:first-child{
            height: 0.8rem;
            line-height: 0.8rem;
            span:first-child{
                font-size: 0.26rem;
            }
            span:last-child{
                font-size: 0.26rem;
                color: #fb4747
            }
            span:nth-child(2){
                width: 5.1rem;
                height: 0.07rem;
                margin-left: 0.2rem;
                margin-top: 0.37rem;
                background-color: #e0e0e0;
                float: left;
                border-radius: 1rem;
                s{
                    float: left;
                    height: 0.07rem;
                    width: 12%;
                    border-radius: 1rem;
                    background-color: #fb4747;
                }
            }
        }
        li:last-child{
            border: none;
            span:last-child{
                img{
                    height: 0.25rem;
                }
            }
            a{
                display: block
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
}
.tab{
    height: 1.24rem;
    margin-top: 0.2rem;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    ul{
        height: 0.6rem;
        padding: 0 0.2rem;
        padding-top: 0.32rem;
        display: flex;
        li{
            font-size: 0.3rem;
            border: 1px solid #fb4747;
            flex: 1;
            line-height: 0.6rem;
            text-align: center;
            box-sizing: border-box;
            background-color: #fff;
            color: #fb4747;
        }
        li:first-child{
            border-right: none;
            border-top-left-radius: 0.12rem;
            border-bottom-left-radius: 0.12rem;
        }
        li:nth-child(2){
            border-right: none
        }
        li:last-child{
            border-top-right-radius: 0.12rem;
            border-bottom-right-radius: 0.12rem;
        }
        li.on{
            color: #fff;
            background-color: #fb4747
        }
    }
}
.tab_content{
    .content1{
        .content1_title{
            height: 1rem;
            line-height: 1rem;
            padding: 0 0.2rem;
            background-color: #fff;
            border-bottom: 1px solid #e0e0e0;
            font-size: 0.3rem;
            span:first-child{
                float: left;
                color: #666666
            }
            span:last-child{
                float: right;
                color: #333333
            }
        }
    }
}
</style>
