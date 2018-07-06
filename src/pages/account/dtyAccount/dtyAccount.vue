<template>
  <div class="dty">
    <div class="title">
      <b @click="goBackOne()">
        <img src="../../../../static/images/goBack.png">
      </b>
      <span>定投盈</span>
      <span v-on:click="isShowInfo()">收益记录</span>
    </div>
    <div class="fund" v-if="AccountData">
      <h2><img src="../../../../static/images/dcy/dcy_earnings_icon.png">定投盈收益(元)</h2>
      <h1>{{AccountData.COUNT_INVEST_RATE | farmatAmount}}</h1>
      <ul>
        <li>
          <span>
              <b>可用余额(元)</b>
              <b>{{AccountData.AVAILABLE_BALANCE | farmatAmount}}</b>
          </span>
          <span>
            <b>冻结资金(元)</b>
            <b>{{AccountData.NEW_DJ_BALANCE | farmatAmount}}</b>
          </span>
        </li>
        <li>
          <span>
              <b>待收本金(元)</b>
              <b>{{AccountData.ING_PRINCIPAL | farmatAmount}}</b>
          </span>
          <span>
            <b>待收收益(元)</b>
            <b>{{AccountData.ING_RATE | farmatAmount}}</b>
          </span>
        </li>
      </ul>
    </div>
    <div class="tab">
      <h1><p>我的定投盈</p></h1>
      <ul>
        <li class="on" v-on:click="getData('')">
          <img src="../../../../static/images/dcy/dcy_icon01_on.png">
          <span>所有项目</span>
        </li>
        <li v-on:click="getData('7')">
          <img src="../../../../static/images/dcy/dcy_icon02.png">
          <span>投资中</span>
        </li>
        <li v-on:click="getData('6')">
          <img src="../../../../static/images/dcy/dcy_icon03.png">
          <span>已收益</span>
        </li>
        <li>
          <img src="../../../../static/images/dcy/dcy_icon04.png">
          <span>收益查询</span>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="content1" v-if="dtyList">
        <ul v-for="item in dtyList">
            <li>
              <span>年化收益</span>
              <span><b>{{item.ANNUAL_RATE}}</b>%</span>
            </li>
            <li>
              <p>
                <span>{{item.PROJ_NAME}}</span>
                <span v-if="item.STATUS_NAME == '未到期'">
                  <b>{{item.STATUS_NAME}}</b>
                  <img src="../../../../static/images/dcy/dcy_details.png">
                </span>
                <span v-else>
                  <b class="color666">{{item.STATUS_NAME}}</b>
                  <img src="../../../../static/images/dcy/dcy_details.png">
                </span>
              </p>
              <p>
                <span>投资金额</span>
                <span>待收收益</span>
                <span>还款日期</span>
              </p>
              <p>
                <span>{{item.INVEST_AMOUNT |farmatAmount}}元</span>
                <span>{{item.PLAN_INCOME | farmatAmount}}元</span>
                <span>{{item.EXPIRE}}</span>
              </p>
            </li>
        </ul>
      </div>
      <div class="content2" v-if="dtyList">
        <ul v-for="item in dtyList">
            <li>
              <span>年化收益</span>
              <span><b>{{item.ANNUAL_RATE}}</b>%</span>
            </li>
            <li>
              <p>
                <span>{{item.PROJ_NAME}}</span>
                <span><b>未到期</b><img src="../../../../static/images/dcy/dcy_details.png"></span>
              </p>
              <p>
                <span>投资金额</span>
                <span>待收收益</span>
                <span>还款日期</span>
              </p>
              <p>
                <span>{{item.INVEST_AMOUNT |farmatAmount}}元</span>
                <span>{{item.PLAN_INCOME | farmatAmount}}元</span>
                <span>{{item.EXPIRE}}</span>
              </p>
            </li>
        </ul>
      </div>
      <div class="content3" v-if="dtyList">
        <ul class="on" v-for="item in dtyList">
            <li>
              <span>年化收益</span>
              <span><b>{{item.ANNUAL_RATE}}</b>%</span>
            </li>
            <li>
              <p>
                <span>{{item.PROJ_NAME}}</span>
                <span><b>已完成</b><img src="../../../../static/images/dcy/dcy_details.png"></span>
              </p>
              <p>
                <span>投资金额</span>
                <span>已收收益</span>
                <span>还款日期</span>
              </p>
              <p>
                <span>{{item.INVEST_AMOUNT |farmatAmount}}元</span>
                <span>{{item.PLAN_INCOME | farmatAmount}}元</span>
                <span>{{item.EXPIRE}}</span>
              </p>
            </li>
        </ul>
      </div>
      <div class="content4" v-if="profitList">
        <div class="information">
          <ul>
            <li>
              <span>项目(元)</span>
              <span>金额(元)</span>
            </li>
            <li>
              <span>累计投资</span>
              <span>{{profitList.REALTERMTOTALBAL |farmatAmount}}</span>
            </li>
            <li>
              <span>累计收益</span>
              <span>{{profitList.COUNT_INVEST_RATE |farmatAmount}}</span>
            </li>
            <li>
              <span>待收本金</span>
              <span>{{profitList.ING_PRINCIPAL |farmatAmount}}</span>
            </li>
            <li>
              <span>待收收益</span>
              <span>{{profitList.ING_RATE |farmatAmount}}</span>
            </li>
          </ul>
          <p><span>温馨提示</span>统计日期不含当天收益。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import * as apis from '../../../assets/js/jwt.apis'
  import {mapGetters} from 'vuex'
  import '../../../assets/js/filter'
  import * as regexfun from '../../../../src/assets/js/jwt.regex';
  export default {
    data(){
      return {
        AccountData:null,
        dtyList:null,
        profitList:null
      }
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },
    methods: {
      goBackOne() {
        this.$router.push("/account");
      },
      //收益记录
      isShowInfo() {
        this.$router.push('gainRecording');
      },
      //定投盈基本信息
      newAccountDataForApp() {
        let userId = this.userInfo.ID;
        apis.newAccountDataForApp(userId, "1").then((data) => {
          if (data.status == '00000000') {
            this.AccountData = data.result.main_data.data[0];
          } else {
            regexfun.handleFailMsg(this, data.message);
          }

        })
      },
      //我的定投盈项目列表
      getData(invest){
        let userId = this.userInfo.ID;
        let userType = '1';
        let yjf_id = this.userInfo.YJF_ID;
        apis.queryInvestListApp(userId, userType,invest, yjf_id, '100', '1' ).then((data) => {
          if (data.status == '00000000') {
            this.dtyList = data.result.main_data.data;
          }else{
            regexfun.handleFailMsg(this, data.message);
          }
        })
      },
      getaccountProfit(){
        let userId = this.userInfo.ID;
        let userType = '1';
        apis.accountProfitApp(userId, userType).then((data) => {
          if (data.status == '00000000') {
            this.profitList = data.result.main_data.data[0];
          }else{
            regexfun.handleFailMsg(this, data.message);
          }
        })
      }
    },
    mounted(){
      this.newAccountDataForApp();
      this.getData('');
      this.getaccountProfit();
      $('.tab ul li').click(function(){
        $(this).addClass('on').siblings('li').removeClass('on')
        $('.content>div').eq($(this).index()).show().siblings('div').hide()

        if($(this).index()==0){
          $('.tab ul li:nth-child(1) img').attr('src',require('../../../../static/images/dcy/dcy_icon01_on.png'))
        }else{
          $('.tab ul li:nth-child(1) img').attr('src',require('../../../../static/images/dcy/dcy_icon01.png'))
        }
        if($(this).index()==1){
          $('.tab ul li:nth-child(2) img').attr('src',require('../../../../static/images/dcy/dcy_icon02_on.png'))
        }else{
          $('.tab ul li:nth-child(2) img').attr('src',require('../../../../static/images/dcy/dcy_icon02.png'))
        }
        if($(this).index()==2){
          $('.tab ul li:nth-child(3) img').attr('src',require('../../../../static/images/dcy/dcy_icon03_on.png'))
        }else{
          $('.tab ul li:nth-child(3) img').attr('src',require('../../../../static/images/dcy/dcy_icon03.png'))
        }
        if($(this).index()==3){
          $('.tab ul li:nth-child(4) img').attr('src',require('../../../../static/images/dcy/dcy_icon04_on.png'))
        }else{
          $('.tab ul li:nth-child(4) img').attr('src',require('../../../../static/images/dcy/dcy_icon04.png'))
        }
      })
    }
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
    font-size: 0.36rem;
    text-align: center;
    color: #fff;
    background-color: #fb4747;
    position: fixed;
    top: 0;
    z-index: 100;
    img{
      height: 0.5rem;
      vertical-align: middle;
    }
    b{
      position: absolute;
      width: 1rem;
      height: 1rem;
      left: 0;
      top: -0.02rem
    }
    span:last-child{
      font-size: 0.3rem;
      position: absolute;
      width: 2rem;
      height: 1rem;
      right: 0;
      top: -0.02rem
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
        line-height: 1;
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
            font-weight: normal;
          }
          b:last-child{
            font-size: 0.34rem;
            margin-top: 0.14rem;
          }
        }
        span:nth-child(2n){
          border: none;
        }
      }
    }
    h2{
      font-weight: 400;
      margin-left: 0.3rem;
      font-size: 0.28rem;
      line-height: 1;
      img{
        vertical-align: middle;
        margin-top: -0.05rem;
        height: 0.3rem;
        margin-right: 0.1rem;
      }
    }
    h1{
      clear: both;
      font-size: 0.7rem;
      font-weight: 500;
      text-align: center;
      margin-top: 0.44rem;
      line-height: 1;
    }
  }
  .tab{
    margin-top: 0.2rem;
    background-color: #fff;
    h1{
      height: 0.6rem;
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      p{
        font-weight: 500;
        height: 0.28rem;
        line-height: 0.3rem;
        margin-left: 0.2rem;
        padding-left: 0.1rem;
        margin-top: 0.15rem;
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
        line-height: 1;
        span{
          display: block;
        }
        img{
          display: block;
          height: 0.4rem;
          margin: auto;
          margin-top: 0.3rem;
        }
        span{
          margin-top: 0.1rem;
          font-size: 0.26rem;
          color: #333333
        }
      }
      li.on{
        span{
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
    .content1,
    .content2,
    .content3
    {
      padding-bottom: 0.5rem;
      ul{
        width: 7rem;
        height: 1.7rem;
        margin: auto;
        margin-bottom: 0.2rem;
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
            line-height: 1;
          }
          span:first-child{
            font-size: 0.24rem;
            color: #666666;
            margin-top: 0.15rem;
          }
          span:last-child{
            font-size: 0.42rem;
            color: #fb4747;
            margin-top: 0.15rem;
            b{
              font-weight: 500;
              font-size: 0.56rem;
            }
          }
        }
        li:last-child{
          width: 5rem;
          margin-left: 0.2rem;
          p{
            clear: both;
            line-height: 1;
          }
          p:first-child{
            span:first-child{
              float: left;
              font-size: 0.28rem;
              color: #333333;
            }
            span:last-child{
              float: right;
              font-size: 0.24rem;
              b{
                font-weight: 500;
                padding: 0.02rem 0.1rem;
                border-radius: 0.05rem;
                color: #fff;
                background-color: #fec556;
              }
              b.color666{
                background-color: #c9c9c9;
              }
              img{
                height: 0.2rem;
                vertical-align: middle;
                margin-left: 0.1rem;
                margin-top: -0.05rem;
              }
            }
          }
          p:nth-child(2){
            padding-top: 0.3rem;
            font-size: 0.24rem;
            display: flex;
            text-align: center;
            span{
              flex: 1;
              color: #e7e7e7;
            }
          }
          p:last-child{
            margin-top: 0.1rem;
            font-size: 0.26rem;
            display: flex;
            text-align: center;
            span{
              flex: 1;
              color: #333333;
            }
            span:nth-child(2){
              color: #ff9900
            }
          }
        }
      }
      ul.on{
        li:last-child{
          p:first-child{
            span:last-child{
              b{
                background-color: #c9c9c9;
              }
            }
          }
        }
      }
    }
    .content4{
      background-color: #fff;
      padding-bottom: 0.5rem;
      .information{
        ul{
          li{
            height: 0.7rem;
            line-height: 0.7rem;
            padding: 0 0.2rem;
            border-bottom: 1px solid #e0e0e0;
            span{
              font-size: 0.28rem;
            }
            span:first-child{
              float: left;
              color: #999999;
            }
            span:last-child{
              float: right;
              color: #333333;
            }
          }
        }
        p{
          font-size: 0.24rem;
          padding-left: 0.2rem;
          margin-top: 0.2rem;
          line-height: 0.45rem;
          color: #fb4747;
          span{
            float: left;
            color: #fff;
            width: 1.4rem;
            height: 0.4rem;
            line-height: 0.45rem;
            text-indent: 0.15rem;
            margin-right: 0.1rem;
            background-image: url(../../../../static/images/dcy/dcy_remind.png);
            background-size: 100% 100%;
          }
        }
      }
    }
    .content1{
      display: block;
    }
  }
</style>
