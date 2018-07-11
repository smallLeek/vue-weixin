<template>
  <div class="earnings" v-title="'收益试算'">
    <div class="title">
      <b @click="goBackOne()">
        <img src="../../../static/images/goBack.png">
      </b>
      <span>收益试算</span>
    </div>
    <div class="content">
      <h1>项目简介</h1>
      <ul>
        <li>
          <span><img src="../../../static/images/earnings/earnings_icon1.png">项目名称</span>
          <span>{{earning.PROJ_NAME}}</span>
        </li>
        <li>
          <span><img src="../../../static/images/earnings/earnings_icon2.png">收益率 <b>{{earning.ANNUAL_RATE}}%</b></span>
          <span><img src="../../../static/images/earnings/earnings_icon3.png">期限 <b>{{earning.LOAN_LIMITTIME}}个月</b></span>
        </li>
      </ul>
      <h1>输入本金</h1>
      <p>
        <span><img src="../../../static/images/earnings/earnings_icon4.png">计划投入本金</span>
        <span><input type="number" placeholder="请输入起投金额整数倍" v-model="earningMoney"></span>
      </p>
      <h2>起投金额{{earning.MIN_BID_AMOUNT}}元</h2>
    </div>
    <div class="bth">
      <a class="input_btn" @click="getMoneyShow()">收益试算</a>
      <ul v-if="getMoney">
        <li>
          <span>预计收益</span>
          <span>{{getMoney}}</span>
        </li>
        <li>
          <span>预计本息</span>
          <span>{{moreMoney}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import * as regexfun from '../../../src/assets/js/jwt.regex';
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return {
        datas:null,
        rechargeLast:null,
        earningMoney:null,
        getMoney:null,
        moreMoney:null
      }
    },
    computed: {
      ...mapGetters(
        ['earning']
      ),
    },
    watch: {
      earningMoney: function (value) {
        this.getrechargeLast();
        this.clearNoNum(value);
      }
    },
    mounted(){
    },
    methods:{
      getrechargeLast() {
        this.rechargeLast = ((this.earningMoney-0).toFixed(2));
      },
      //顶部的返回按钮
      goBackOne(){
        this.$router.push({path:'/yyyParticulars',query:{proj_code:this.$route.query.id}});
      },
      //输入充值金额正则
      clearNoNum (obj){
        if(typeof obj == "number"){
          obj = obj + '';
        }
        obj = obj.replace(/[^\d.]/g,"");
        obj = obj.replace(/^\./g,"");
        obj = obj.replace(/\.{2,}/g,".");
        obj = obj.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
        obj = obj.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');
        if(obj.indexOf(".")< 0 && obj !=""){
          obj= parseFloat(obj);
        }
        this.earningMoney = obj
      },
      getMoneyShow(){
        if (this.rechargeLast%(this.earning.MIN_BID_AMOUNT-0)!=0 ||this.rechargeLast==null ||this.rechargeLast==''||this.rechargeLast==0){
          regexfun.handleFailMsg(this,'投资金额必须为最低投资金额的整数倍')
        }else{
          this.getMoney =(this.rechargeLast*((this.earning.ANNUAL_RATE-0)/100)/12*(this.earning.LOAN_LIMITTIME-0)).toFixed(2);

          this.moreMoney = ((this.rechargeLast-0)+ (this.getMoney-0)).toFixed(2)
        }

      }
    }
  }
</script>
<style lang="less" scoped>
  .earnings{
    background-color: #f8f8f8;
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
      vertical-align: middle
    }
    b{
      position: absolute;
      width: 1rem;
      height: 1rem;
      left: 0;
      top: -0.02rem
    }
  }
  .content{
    margin-top: 1rem;
    ul{
      border-top: 1px solid #e0e0e0;
      li{
        background-color: #fff;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.3rem;
        color: #999999;
        padding: 0 0.2rem;
        border-bottom: 1px solid #e0e0e0;
        img{
          width: 0.5rem;
          margin-right: 0.1rem;
          margin-top: -0.1rem;
          vertical-align: middle;
        }
      }
      li:first-child{
        span:last-child{
          float: right;
          font-size: 0.34rem;
          color: #333333;
        }
      }
      li:nth-child(2){
        display: flex;
        span{
          flex: 1;
          height: 0.7rem;
          line-height: 0.7rem;
          margin-top: 0.15rem;
          box-sizing: border-box;
          b{
            float: right;
            font-size: 0.3rem;
            color: #333333;
            font-weight: 500;
          }
        }
        span:first-child{
          padding-right: 0.2rem;
          border-right: 1px solid #e0e0e0;
        }
        span:last-child{
          padding-left: 0.2rem;
        }
      }
    }
    p{
      background-color: #fff;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.3rem;
      padding: 0 0.2rem;
      img{
        width: 0.5rem;
        margin-right: 0.1rem;
        margin-top: -0.1rem;
        vertical-align: middle
      }
      span:first-child{
        color: #999999
      }
      span:last-child{
        color: #333333;
        float: right;
        input{
          font-size: 0.3rem;
          text-align: right;
          border: none;
          outline:medium;
        }
        ::-moz-placeholder {
          font-size: 0.3rem;
          color: #999999;
          line-height: 0.35rem;
        }
        :-ms-input-placeholder {
          font-size: 0.3rem;
          color: #999999;
          line-height: 0.35rem;
        }
        ::-webkit-input-placeholder {
          font-size: 0.3rem;
          color: #999999;
          line-height: 0.35rem;
        }
      }
    }
    h1{
      font-weight: 500;
      font-size: 0.28rem;
      color: #666666;
      padding-top: 0.3rem;
      padding-bottom: 0.1rem;
      padding-left: 0.3rem;
    }
    h2{
      font-weight: 500;
      text-align: right;
      padding-right: 0.2rem;
      margin-top: 0.2rem;
      font-size: 0.26rem;
      font-weight: 500;
      color: #999999;
    }
  }
  .bth{
    .input_btn{
      display: block;
      width: 7rem;
      height: 0.9rem;
      line-height: 0.9rem;
      color: #fff;
      font-size: 0.32rem;
      border: none;
      border-radius: 0.08rem;
      margin: auto;
      margin-top: 0.5rem;
      text-align: center;
      background-color: #fb4747;
    }
    .input_btn:active{
      background-color: #de2626;
    }
    li{
      height: 1rem;
      line-height: 1rem;
      background-color: #fff;
      width: 6.6rem;
      margin: auto;
      border: 1px solid #e0e0e0;
      border-top: none;
      span:first-child{
        float: left;
        margin-left: 0.2rem;
        font-size: 0.3rem;
        color: #333333;
      }
      span:last-child{
        float: right;
        margin-right: 0.2rem;
        font-size: 0.4rem;
        color: #ff9900;
      }
    }
    li:last-child{
      border-bottom-left-radius: 0.08rem;
      border-bottom-right-radius: 0.08rem;
    }
  }
</style>
