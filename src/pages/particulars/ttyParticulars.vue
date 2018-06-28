<template>
  <div class="tty" v-title="'天天盈'" v-if="TtyDetail">
    <div class="title">
      <router-link to="/home">
        <img src="../../../static/images/goBack.png">
      </router-link>
      <span v-text="ttyTitle"></span>
    </div>
    <div class="fund">
      <h2>
        <span></span>
        <span>年化收益率</span>
        <span></span>
      </h2>
      <h1><b v-text="(rate-0)"></b><span>%</span></h1>
      <ul>
        <li>转投随心</li>
        <li>100元起投</li>
        <li>稳定高收益</li>
      </ul>
    </div>
    <div class="schedule">
      <ul>
        <li>
          <span>起投金额</span>
          <span>{{(TtyDetail.MIN_AMOUNT) | farmatAmount}}元</span>
        </li>
        <li>
          <span>收益时间</span>
          <span>投资成功即可计息</span>
        </li>
        <li>
          <span>计息方式</span>
          <span v-text="TtyDetail.JCODE">所有债权以平台当日年化收益率为准</span>
        </li>
        <li v-on:click="goMoneySafe()">
          <span>保障方式</span>
          <span>资金安全保障<img src="../../../static/images/more.png"></span>
        </li>
        <li v-on:click="ttyInvestmentList()">
          <span>投资列表</span>
          <span>{{TtyDetail.INVESTCOUNT}}笔<img src="../../../static/images/more.png"></span>
        </li>
      </ul>
    </div>
    <div class="creditor_list" v-if="CustList">
      <h1>债权列表</h1>
      <ul>
        <li v-for="item in CustList">
          <span v-text="item.PROJ_CODE"></span>
          <span>{{(item.PRINCIPAL_AMOUNT) | farmatAmount}}</span>
        </li>
      </ul>
    </div>
    <div class="modal-box" v-show="headShow">
      <div class="close" @click="HShow()">

      </div>
    </div>

    <div class="bottom"  @click ='onIsFocus'>
      <div class="risk" v-show="headShow" v-if="risk">
        <span class="title-list" v-if="investscoreNo" @click="openInvest()">您尚未完成<span class="openInvest">《出借人风险承受能力评估》</span>，平台无法判断您是否能承受该项目的风险,请知悉。</span>
        <span class="title-list" v-if="investscoreYes">该项目的风险程度超过您的风险承受能力，请知悉</span>
      </div>
      <div v-if="headShow" class="bottomList" @click ='onIsFocus'>
      <ul class="boxline">
        <li>起投金额</li>
        <li>最大单笔金额</li>
      </ul>
      <ul class="boxline boxColor">
        <li>{{TtyDetail.MIN_AMOUNT | farmatAmount}}元</li>
        <li>{{TtyDetail.MAX_AMOUNT | farmatAmount}}元</li>
      </ul>
      <ul class="boxline boxBlance">
        <li>账户余额</li>
        <li></li>
      </ul>
        <div class="boxSafe">
          <p>{{(this.userData.AVAILABLE_BALANCE) | farmatAmount}}元</p>
          <p>
              <span v-if="agree" @click="agreement">
                <img class="on" src="../../../static/images/investOn.png">阅读并同意
              </span>
            <span v-if="!agree" @click="agreement">
                <img class="on" src="../../../static/images/investIn.png">阅读并同意
              </span>
            <a href="https://www.phtfdata.com/web6/hander/guarantee.do" target="_blank">《风险揭示书》</a>
          </p>
        </div>
      </div>
      <div class="bottom_input" v-if="bottomInputShow">
        <div class="input_text">
          <input type="text" placeholder="投资金额" v-model="widthDrawMoney" @focus="showBox()" ref="content">
          <span>元</span>
        </div>
        <div class="input_submit" @click="submitWithdraw()">
          <a>立即投资</a>
        </div>
      </div>
      <div class="bottom_over" v-if="bottomOverShow">
        <span>已售罄</span>
      </div>
    </div>
  </div>
</template>
<script>
  import * as apis from '../../assets/js/jwt.apis'
  import {mapGetters, mapActions} from 'vuex'
  import * as regexfun from '../../../src/assets/js/jwt.regex';
  import '../../assets/js/filter'
  export default {
    data() {
      return {
        userId: '',
        userType: '',
        proj_code: '',
        TtyDetail: null,
        rate: '',
        proj_name: '',
        userData:'',
        CustList: '',
        tty:null,
        widthDrawMoney:null,
        headShow:false,
        agree:false,
        investscore:null,
        investscoreNo:false,
        investscoreYes:false,
        risk:false,
        nowMoney:null,
        bottomInputShow:true,
        bottomOverShow:false


      }
    },
    computed: {
      ...mapGetters(
        ['loginStatus', 'userInfo', 'tokenCode', 'accessAuth']
      ),
      //title
      ttyTitle() {
        return this.proj_name + "(" + this.rate + "%)";
      }
    },
    mounted() {
      this.getTty();
    },
    methods: {
      //视图发生动作
      ...mapActions({setPayDetail: 'setPayDetail'}),
      //去投资列表
      ttyInvestmentList(){
        this.$router.push({path:"/ttyInvestmentList",query:{proj_code:this.proj_code}})
      },
      //去安全保障
      goMoneySafe() {
        window.location.href = "https://www.phtfdata.com/web6/hander/bxprotectedNew.do"
      },
      //获取天天盈基本信息
      getTty() {
        this.userId = this.userInfo.ID;
        this.userType = "1";
        let userId = this.userInfo.ID;
        apis.DdProj(userId, "1").then((data) => {
          this.proj_code = data.result.main_data.PROJ_CODE;
          this.tty = data.result.main_data;
          this.getTtyDetail();
          this.getDdProjRedeemCustList();
        })
        apis.userBaseData(userId,'1').then( (data) => {
          this.userData = data.result.main_data;
          this.investscore  = this.userData.INVESTSCORE;

        })
      },
      onIsFocus(){
        this.$refs.content.focus()
      },
      agreement(){
        (this.agree == false) ? this.agree = true : this.agree = false;
      },
      openInvest(){
        location.href ='http://139.129.12.93:3102/web2/hander/investor.do?CUST_ID='+this.userInfo.ID
      },
      //天天盈项目详情
      getTtyDetail() {
        let userId = this.userInfo.ID;
        let proj_code = this.proj_code;
        apis.DdProjDetail(userId, '1', proj_code).then((data) => {
          this.TtyDetail = data.result.main_data;
          this.nowMoney=this.TtyDetail.NOWMONEY
          if(this.nowMoney == 0){
            this.bottomInputShow =false;
            this.bottomOverShow =true
          }
          this.rate = this.TtyDetail.RATE;
          this.proj_name = this.TtyDetail.PROJ_NAME
        })
      },
      getDdProjRedeemCustList() {
        let proj_code = this.proj_code;
        apis.DdProjRedeemCustList(this.userId, this.userType, proj_code, 1, 10).then((data) => {
          this.CustList = data.result.main_data.data;
        })
      },
      HShow(){
        this.headShow =false
      },
      showBox(){
        this.headShow =true
      },
      submitWithdraw(){
        apis.userBaseData(this.userInfo.ID, '1').then((data) => {
          this.userData = data.result.main_data;
          let user_role = this.userInfo.USER_ROLE;
          let amount_money =  this.userData.AMOUNT-0
          let is_check_tra_pwd = this.userData.IS_AUTHORIZED;
          let is_expired = this.userData.IS_Expired;
          let min_money = this.TtyDetail.MIN_AMOUNT-0
          let max_money = this.TtyDetail.MAX_AMOUNT-0
          let money= this.widthDrawMoney-0
          let accountBalance = this.userData.AVAILABLE_BALANCE-0
          let day_limit =  this.userData.DAY_LIMIT-0
          let flag = true;
          if(user_role != 'INVESTOR'){
            flag = false
            regexfun.handleFailMsg(this, "您的账户类型不支持投资!");
          }
          if (is_check_tra_pwd=='0') {
            flag = false
            regexfun.handleFailMsg(this,"您的用户未委托授权，无法进行投资操作!");
          }
          if(is_expired == '0'){
            flag = false
            regexfun.handleFailMsg(this, "您的用户授权已过期，无法进行投资操作!");
          }
          if( this.tty.INVEST_STATUS == "1" ){
            flag = false;
            regexfun.handleFailMsg(this,"未到投资时间，如有需要请联系客服!");
          }
          //投资不能为空
          if(flag && (this.widthDrawMoney == "" || this.widthDrawMoney == '0')){
            flag = false;
            regexfun.handleFailMsg(this,"请输入大于0的投资金额");
          }
          if(!(regexfun.regex(this, 'reg_finc_account', this.widthDrawMoney))){
            flag = false;
            regexfun.handleFailMsg(this,"请输入正确格式的投资金额");
          }
          //起投金额
          if(money>=min_money){
            flag = false;
            regexfun.handleFailMsg(this,"投资金额必须大于或等于起投金额");
          }
          //授权金额
          if(money>amount_money){
            flag = false;
            regexfun.handleFailMsg(this,"投资金额已大于授权金额");
          }
          if(money>this.nowMoney){
            flag = false;
            regexfun.handleFailMsg(this,"启禀陛下，您出借的银子较多，小的立即去准备，请稍后再试");
          }
          //最大金额
          if(money>max_money){
            flag = false;
            regexfun.handleFailMsg(this,"投资额应在单笔最大限额范围以内");
          }
          //账户余额
          if(money>accountBalance){
            flag = false;
            regexfun.handleFailMsg(this,"投资额必须小于账户余额");
          }
          //单日限额
          if(money<=day_limit){
            flag = false;
            regexfun.handleFailMsg(this,"投资金额必须小于或等于单日限额");
          }
          //项目投资完
          if(this.tty.PROJ_STATUS!='6003'){
            flag = false;
            regexfun.handleFailMsg(this,"当前项目已被抢光，敬请期待下一期!");
          }
          if(this.agree == false){
            flag = false;
            regexfun.handleFailMsg(this,"请阅读并同意《风险揭示书》!");
          }
          if(this.investscore=='0'){
            this.investscoreNo =true
            this.risk =true
          }
          if(this.investscore=='1'){
            this.risk =true
            this.investscoreYes =true
          }
          if(flag){
            let self =this
            this.setPayDetail({
              //项目名称
              pro_name:self.proj_name,
              //可用余额
              balance:self.userInfo.AVAILABLE_BALANCE,
              //投资金额
              withDraw:this.widthDrawMoney,
              //投资期限
              proTime:null,
              pro_code:this.TtyDetail.PROJ_CODE
            });
            self.$router.push({path:'paymentOrder', query: {dds: 'dds'}})


          }
        })


      }
    }
  }
</script>
<style lang="less" scoped>
  .tty {
    background-color: #f8f8f8;
    padding-bottom: 0.94rem;
  }

  /* title */
  .title {
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
    img {
      height: 0.5rem;
      vertical-align: middle;
    }
    a {
      position: absolute;
      width: 1rem;
      height: 1rem;
      left: 0;
      top: -0.02rem
    }
  }

  .fund {
    height: 2.7rem;
    background: linear-gradient(to bottom, #fb4747 0%, #fb6547 100%);
    text-align: center;
    color: #fff;
    margin-top: 1rem;
    h2 {
      font-size: 0.26rem;
      font-weight: 500;
      color: #fff;
      span:nth-child(2) {
        margin: 0 0.02rem;
      }
      span:first-child,
      span:last-child {
        display: inline-block;
        width: 0.6rem;
        vertical-align: middle;
        margin-top: -0.06rem;
        border-bottom: 1px solid #ffa7a7;
      }
    }
    h1 {
      padding-bottom: .1rem;
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 1;
      b {
        font-weight: normal;
      }
      span {
        font-size: 0.46rem;
      }
    }
    ul {
      width: 5rem;
      height: 0.38rem;
      margin: 0.2rem auto 0 auto;
      display: flex;
      li {
        flex: 1;
        float: left;
        height: 0.38rem;
        line-height: 0.36rem;
        margin-right: 0.2rem;
        border-radius: 1rem;
        font-size: 0.24rem;
        border: 1px solid #fff;
        box-sizing: border-box;
      }
      li:last-child {
        margin-right: 0;
      }
    }
  }

  .schedule {
    ul {
      margin-top: 0.2rem;
      padding-left: 0.2rem;
      background-color: #fff;
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      li {
        height: 0.9rem;
        line-height: 0.9rem;
        padding-right: 0.2rem;
        font-size: 0.3rem;
        border-bottom: 1px solid #e0e0e0;
        span:first-child {
          float: left;
          color: #666666;
        }
        span:last-child {
          color: #333333;
          float: right;
          img {
            height: 0.2rem;
            margin-top: -0.1rem;
            margin-left: 0.2rem;
          }
        }
        a {
          display: block;
          height: 0.9rem;
        }
      }
      li:last-child {
        border: none;
      }
    }
  }

  .creditor_list {
    margin-top: 0.3rem;
    h1 {
      font-weight: 500;
      padding-left: 0.2rem;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.3rem;
      color: #333333;
      background-color: #e0e0e0;
    }
    ul {
      background-color: #fff;
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      padding-left: 0.2rem;
      li {
        height: 0.9rem;
        line-height: 0.9rem;
        padding-right: 0.2rem;
        font-size: 0.3rem;
        border-bottom: 1px solid #e0e0e0;
        span:first-child {
          float: left;
        }
        span:last-child {
          float: right;
        }
      }
      li:last-child {
        border: none
      }
    }
  }
  .modal-box{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999999;
    .close{
      background: rgba(0,0,0,.5);
      height: 100%;
      width: 100%;
    }
  }
  .bottom{
    .bottomList{
      position: fixed;
      bottom: 0.93rem;
      z-index: 99999999;
      width: 7.5rem;
      margin: auto;
      background-color: #fff;
      border-bottom: none;
      border-top: 1px solid #e0e0e0;
    }

    .boxline{
      font-size: 0.24rem;
      color: #999;
      li{
        display: inline-block;
        width: 46%;
        padding-left:0.2rem;
        margin-top: 0.29rem;
      }
    }
    .boxColor{
      font-size: 0.28rem;
      color: #333;
      li{
        margin-top: 0.1rem;
      }
    }
    .bottom_over{
      position: fixed;
      bottom: 0;
      height: 0.94rem;
      text-align: center;
      z-index: 9999999999999;
      width: 7.5rem;
      margin: auto;
      font-size: .32rem;
      background-color: #bbb;
      line-height: 0.94rem;
      border-top: 1px solid #e0e0e0;
      color:#fff;
    }
    .bottom_input {
      position: fixed;
      bottom: 0;
      height: 0.94rem;
      z-index: 9999999999999;
      width: 7.5rem;
      margin: auto;
      background-color: #fff;
      border-top: 1px solid #e0e0e0;
      .input_text {
        float: left;
        margin-top: 0.2rem;
        margin-left: 0.2rem;
        width: 4.7rem;
        height: 0.6rem;
        border: 1px solid #e0e0e0;
        border-radius: 1rem;
        input {
          float: left;
          width: 3.5rem;
          margin-left: 0.2rem;
          margin-top: 0.1rem;
          font-size: 0.3rem;
          border: none;
          outline: medium;
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
        span {
          float: right;
          margin-right: 0.2rem;
          line-height: 0.6rem;
          font-size: 0.3rem;
          color: #333333;
        }
      }
      .input_submit {
        float: right;
        width: 2.3rem;
        height: 0.94rem;
        line-height: 0.94rem;
        color: #fff;
        font-size: 0.32rem;
        text-align: center;
        a {
          display: block;
          width: 2.3rem;
          height: 0.94rem;
          line-height: 0.94rem;
          color: #fff;
          font-size: 0.32rem;
          text-align: center;
          background-color: #ffae00;
        }
        .end {
          background-color: #bbbbbb;
        }
      }
    }
  }
  .doAgree{
    position: absolute;
    right: 0;
    bottom: -.2rem;
    z-index: 9999;
  }
  .risk{
   position: fixed;
    width: 100%;
    height: .8rem;
    padding: .1rem;
    bottom: 3.33rem;
    background: #fff;
    z-index: 9999999999;
    border: .01rem solid #e0e0e0;
    border-bottom: none;
  }
  .title-list{
    position: absolute;
    display: inline-block;
    width: 100%;
    height: .3rem;
    font-size: .12rem;
    color: #ccc;
    padding-left: .2rem;
  }
  .openInvest{
    color: #0000f4;
  }
  .bottom{
    .boxSafe{
      p{
        float: left;
        width: 30%;
        padding-bottom: 0.28rem;
        font-size: 0.28rem;
        color: #333;
      }
      p:first-child{
        padding-left: 0.2rem;
      }
      p:last-child{
        float: right;
        width: 70%;
        padding-right: 0.1rem;
        text-align: right;
        a{
          font-size: 0.28rem;
          color: #fb4747;
        }
        span{
          font-size: 0.28rem;
          color: #333;
          img{
            width: 0.26rem;
            height: 0.26rem;
            margin-right: 0.1rem;
            margin-bottom: -.03rem;
          }
        }
      }
    }
  }

</style>
