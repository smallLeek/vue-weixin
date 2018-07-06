<template>
  <div class="ttyAccount">
    <div class="title">
      <b @click="goBackOne()">
        <img src="../../../../static/images/goBack.png">
      </b>
      <span>天天盈账务</span>
      <span v-on:click="isShowInfo()">账户说明</span>
    </div>
    <div v-if="ttyDetail">
      <div class="fund">
        <h2><img src="../../../../static/images/account/account_rate.png"> 昨日年化收益:</h2>
        <h1>{{ttyDetail.Y_PERCENT}}<span>%</span></h1>
        <ul class="fund_model">
          <li>
            <span>昨日收益(元)</span>
            <span>{{ttyDetail.Y_AMOUNT | farmatAmount}}</span>
          </li>
          <li>
            <span>在投收益(元)</span>
            <span>{{ttyDetail.IN_AMOUNT | farmatAmount}}</span>
          </li>
          <li>
            <span>累计收益(元)</span>
            <span>{{ttyDetail.T_AMOUNT_IN  | farmatAmount}}</span>
          </li>
        </ul>
      </div>
      <div class="nav">
        <div v-on:click="goInvestList()">
          <span><img src="../../../../static/images/account/account_deal.png"></span>
          <span>
            <h1>交易记录</h1>
            <h2>查看详情</h2>
          </span>
        </div>
        <div @click="withDraw()">
          <span><img src="../../../../static/images/account/account_ticket.png"></span>
          <span>
          <h1>我的加息卡</h1>
          <h2>收益翻倍在这里</h2>
        </span>
        </div>
      </div>
      <div class="operation">
        <ul  v-on:click="goBeingCapital()">
          <li>
            <span>在投本金(元)</span>
            <span>{{ttyDetail.IN_BAL | farmatAmount}}</span>
          </li>
          <li>查看详情</li>
        </ul>
        <ul v-on:click="godjList()">
          <li>
            <span>冻结本金(元)</span>
            <span>{{ttyDetail.CTRLAMT  | farmatAmount}}</span>
          </li>
          <li>查看详情</li>
        </ul>
      </div>
      <div class="btn clearfix">
        <button @click="withDraw()">转让</button>
        <button v-on:click="goTty()">投资</button>
      </div>
    </div>
    <div class="explain" v-if="isShow">
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
      <p v-on:click="isHide()">
        <img class="closeBtn" src="../../../../static/images/account/account_close.png">
      </p>
    </div>
    <download-remind class="none"></download-remind>
  </div>
</template>
<script>
  import * as apis from '../../../assets/js/jwt.apis'
  import {mapGetters,mapActions} from 'vuex'
  import '../../../assets/js/filter'
  import downloadRemind from '../../../components/downloadRemind/downloadRemind.vue'
  export default {
    data(){
      return {
        ttyDetail:null,
        isShow:false
      }
    },
    computed:{
      ...mapGetters(['userInfo','getProjCode'])
    },
    methods:{
      goBackOne(){
        this.$router.push({path:'/account'});
      },
      //获取账户信息
      getData(){
        let userId = this.userInfo.ID;
        let proj_code = this.getProjCode;
        let userType = '1';
        apis.userBaseData(userId,'1').then( (data) => {
          apis.GetAcctRateInfoSum(userId, userType, proj_code,'1','100').then((data) => {
            this.ttyDetail = data.result.main_data;
          })
        })
      },
      //去投资页面
      goTty(){
        this.$router.push({path:'ttyParticulars'});
      },
      //点击账户说明
      isShowInfo(){
        this.isShow = true;
      },
      isHide(){
        this.isShow = false;
      },
      //点击去在投本金列表
      goBeingCapital(){
        this.$router.push('/beingCapital');
      },
      //冻结本金列表
      godjList(){
        this.$router.push('/djList');
      },
      //交易记录
      goInvestList(){
        this.$router.push('/ttyRecord');
      },
      withDraw(){
        $('.downloadRemind').show()
      }
    },
    mounted(){
      this.getData();
    },
    components: {
      downloadRemind
    }
  }
</script>
<style lang="less" scoped>
  .none{
    display: none;
  }
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
    div{
      width: 3.4rem;
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
          font-weight: 400;
          color: #666666
        }
      }
    }
    div:first-child{
      float: left;
    }
    div:last-child{
      float: right;
      span:first-child{
        margin-right: 0.4rem;
      }
    }
  }
  .operation{
    margin-top: 0.2rem;
    ul{
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
    padding: 0 0.22rem;
    button{
      width: 3.3rem;
      height: 1rem;
      line-height: 1rem;
      color: #fff;
      font-size: 0.34rem;
      text-align: center;
      border-radius: 1rem;
      border: none;
    }
    button:first-child{
      float: left;
      background-color: #ffba00;
    }
    button:first-child:active{
      background-color: #ebac01;
    }
    button:last-child{
      float: right;
      background-color: #fb4747;
    }
    button:last-child:active{
      background-color: #e41a1a;
    }
  }
  .explain{
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
