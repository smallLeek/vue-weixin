<template>
  <!--暂时不用  月月盈和定投盈是一个页面-->
    <div class="dcy">
      <div class="title">
        <router-link to="/home">
          <img src="../../../static/images/goBack.png">
        </router-link>
        <span v-text=""></span>
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
                    <span>100%</span>
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
                  <span>借款及担保合同服务范文</span>
                  <span><img src="../../../static/images/more.png"></span>
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
                    <span>定存盈2015924</span>
                </div>
                <ul>
                    <li>
                        <span>审核项目</span>
                        <span>审核情况</span>
                        <span>通过日期</span>
                    </li>
                </ul>
            </div>
            <div class="content2">
                <h1>一: 项目介绍</h1>
            </div>
            <div class="content3">
                <h1>
                    <span>用户</span>
                    <span>投资金额(元)</span>
                    <span>时间</span>
                </h1>
                <ul>
                    <li>
                        <span>15*******86</span>
                        <span>3,000</span>
                        <span>2018-05-30 11:14:41</span>
                    </li>
                </ul>
                <p>已投资6笔，投资总额66,700元</p>
            </div>
        </div>
        <div class="bottom_input bottom_inputOn">
            <div class="input_text" :style="{display:'none'}">
                <input type="number" placeholder="投资金额">
                <span>元</span>
            </div>
            <div class="input_submit":style="{margin:'auto'},{width:'7.5rem'}">
                <router-link to="" v-show="false">立即投资</router-link>
                <router-link to="" v-show="true" class="end" :style="{width:'7.5rem'}">已售罄</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  mounted(){

  },
  methods:{
    //去模版合同
    goLoan() {
      window.location.href= "https://www.phtfdata.com/web6/page/loanNo.do";
    },
  }
}
</script>
<style lang="less" scoped>
.dcy{
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
    height: 2.7rem;
    background:linear-gradient(to bottom,#fb4747 0%,#fb6547 100%);
    text-align: center;
    color: #fff;
    h2{
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
        font-weight: 500;
        font-size: 1.4rem;
        span{
            font-size: 0.46rem;
        }
    }
    ul{
        width: 5rem;
        height: 0.38rem;
        margin: auto;
        display: flex;
        li{
            flex: 1;
            height: 0.38rem;
            line-height: 0.36rem;
            margin-right: 0.2rem;
            border-radius: 1rem;
            font-size: 0.24rem;
            border: 1px solid #fff;
            box-sizing: border-box;
        }
        li:last-child{
            margin-right: 0;
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
        height: 0.75rem;
        border-right: 1px solid #e0e0e0;
        text-align: center;
        margin-top: 0.23rem;
        span{
            display: block;
        }
        span:first-child{
            font-size: 0.26rem;
            color: #666666;
            margin-top: -0.05rem;
        }
        span:last-child{
            font-size: 0.32rem;
            color: #333333;
            font-family: 黑体;
        }
    }
    li:last-child{
        border: none;
    }
}
.schedule{
    margin-top: 0.2rem;
    ul{
        padding-left: 0.2rem;
        background-color: #fff;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        li{
            height: 1rem;
            line-height: 1rem;
            padding-right: 0.2rem;
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
                width: 68%;
                height: 0.07rem;
                margin-left: 0.2rem;
                margin-top: 0.37rem;
                background-color: #e0e0e0;
                float: left;
                border-radius: 1rem;
                s{
                    float: left;
                    height: 0.07rem;
                    width: 100%;
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
            height: 0.6rem;
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
        padding-bottom: 1rem;
        background-color: #fff;
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
        ul{
            width: 6.7rem;
            margin: auto;
            margin-top: 0.4rem;
            border: 1px solid #C0504D;
            li{
                height: 0.6rem;
                line-height: 0.6rem;
                color: #333333;
                border-bottom: 1px solid #C0504D;
                span{
                    float: left;
                    text-align: center;
                    font-size: 0.2rem;
                    border-right: 1px solid #949393;
                    box-sizing: border-box;
                }
                span:first-child{
                    width: 52%;
                }
                span:nth-child(2){
                    width: 20%;
                }
                span:last-child{
                    width: 28%;
                    border-right: none;
                }
            }
            li:first-child{
                color: #fff;
                background-color: #C0504D;
            }
            li:last-child{
                border-bottom: none;
            }
        }
    }
    .content2{
        display: none;
        padding: 0 0.2rem;
        padding-bottom: 1rem;
        background-color: #fff;
        h1{
            font-size: 0.3rem;
            color: #333333;
            line-height: 0.8rem;
        }
        p{
            font-size: 0.26rem;
            color: #666666;
            text-align: justify;
        }
    }
    .content3{
        display: none;
        background-color: #fff;
        padding-bottom: 0.5rem;
        h1{
            padding: 0 0.3rem;
            line-height: 1rem;
            border-bottom: 1px solid #e0e0e0;
            display: flex;
            span{
                flex: 1;
                font-size: 0.3rem;
                text-align: center
            }

            span:last-child{
                flex: 1.5;
            }
        }
        ul{
            padding: 0 0.2rem;
            li{
                display: flex;
                height: 1rem;
                line-height: 1rem;
                border-bottom: 1px solid #e0e0e0;
                span{
                    flex: 1;
                    font-size: 0.24rem;
                    text-align: center;
                }
                span:nth-child(2){
                    font-size: 0.26rem;
                    color: #C0504D;
                }
                span:last-child{
                    flex: 1.5;
                }
            }
        }
        p{
            text-align: right;
            color: #C0504D;
            height: 0.5rem;
            line-height: 0.5rem;
            padding-right: 0.2rem;
            font-size: 0.3rem;
        }
    }
}
.bottom_input{
    position: fixed;
    bottom: 0;
    height: 0.94rem;
    width: 7.5rem;
    margin: auto;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    .input_text{
        float: left;
        margin-top: 0.2rem;
        margin-left: 0.2rem;
        width: 4.7rem;
        height: 0.6rem;
        line-height: 0.55rem;
        border: 1px solid #e0e0e0;
        border-radius: 1rem;
        input{
            float: left;
            width: 3.5rem;
            margin-left: 0.2rem;
            margin-top: 0.1rem;
            font-size: 0.3rem;
            border: none;
            outline:medium;
            color: #333333;
        }
        ::-moz-placeholder {
            color: #999999;
            line-height: 0.35rem;
        }
        :-ms-input-placeholder {
            color: #999999;
            line-height: 0.35rem;
        }
        ::-webkit-input-placeholder {
            color: #999999;
            line-height: 0.35rem;
        }
        span{
            float: right;
            margin-right: 0.2rem;
            line-height: 0.6rem;
            font-size: 0.3rem;
            color: #333333;
        }
    }
    .input_submit{
        float: right;
        width: 2.3rem;
        height: 0.94rem;
        line-height: 0.94rem;
        color: #fff;
        font-size: 0.32rem;
        text-align: center;
        a{
            display: block;
            width: 2.3rem;
            height: 0.94rem;
            line-height: 0.94rem;
            color: #fff;
            font-size: 0.32rem;
            text-align: center;
            background-color: #ffae00;
        }
        .end{
            background-color: #bbbbbb;
        }
    }
}
</style>
