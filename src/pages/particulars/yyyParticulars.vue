<template>
  <!--月月盈和定投盈是一个页面-->
  <div class="yyy" v-if="yyyDetail">
    <div class="title">
      <router-link to="/home">
        <img src="../../../static/images/goBack.png">
      </router-link>
      <span v-text="yyyDetail.PROJ_NAME"></span>
    </div>
    <div class="fund">
      <h2>
        <span></span>
        <span>年化收益率</span>
        <span></span>
      </h2>
      <h1>{{(yyyDetail.ANNUAL_RATE).toFixed(0)}}<span>%</span></h1>
      <ul>
        <li>期限灵活</li>
        <li>收益稳定</li>
        <li>100元起投</li>
      </ul>
    </div>
    <div class="demand">
      <li>
        <span>需求金额</span>
        <span>{{yyyDetail.FULL_BID_AMOUNT | farmatAmount}}元</span>
      </li>
      <li>
        <span>剩余可投</span>
        <span>{{yyyDetail.SURPLUS_PART | farmatAmount}}元</span>
      </li>
      <li>
        <span>投资期限</span>
        <span>{{yyyDetail.LOAN_LIMITTIME}}个月</span>
      </li>
    </div>
    <div class="schedule">
      <ul>
        <li>
          <span>投资进度</span>
          <span><s :style="{width:(yyyDetail.INVEST_PROGRESS)}"></s></span>
          <span>{{yyyDetail.INVEST_PROGRESS | farmatRate}}</span>
        </li>
        <li>
          <span>起投时间</span>
          <span>{{yyyDetail.BIDINVIT_BEGIN_DATETIME}}</span>
        </li>
        <li>
          <span>投资截止日期</span>
          <span>{{yyyDetail.BIDINVIT_END_DATETIME}}</span>
        </li>
        <li v-on:click="goLoan()">
          <span>借款及担保合同服务范文</span>
          <span><img src="../../../static/images/more.png"></span>
        </li>
      </ul>
    </div>
    <div class="tab">
      <ul>
        <li v-for="(item, index) in tabList" v-text="item.tabName" :class="{tabOn:index==num}" @click="tab(index)"></li>
      </ul>
    </div>
    <div class="tab_content">
      <div class="content1" v-show="num ==0">
        <div class="content1_title">
          <span>项目名称</span>
          <span>天天盈2015924</span>
        </div>
        <img :src="yyyDetail.BACKWARD_URL" alt="">
      </div>
      <div class="content2"v-show="num ==1">
        <p v-text="yyyDetail.GUAR_INTRO"></p>
      </div>
      <div class="content3" v-show="num ==2">
        <h1>
          <span>用户</span>
          <span>投资金额(元)</span>
          <span>时间</span>
        </h1>
        <ul v-if="yyyDetailList">
          <li v-for="item in yyyDetailList">
            <span v-text="item.CUST_NAME"></span>
            <span>{{item.NVEST_AMOUNT | farmatAmount}}</span>
            <span v-text="item.CREATE_DATE">2018-05-30 11:14:41</span>
          </li>
        </ul>
        <p>已投资{{yyyDetail.CUST}}笔，投资总额{{yyyDetail.INVESTED_AMOUNT | farmatAmount}}元</p>
      </div>
    </div>
    <div  v-if="type == 0">
      <div class="modal-box" v-show="headShow">
        <div class="close" @click="HShow()">

        </div>
      </div>
      <div class="bottom"  @click ='onIsFocus'>

        <div v-if="headShow" class="bottomList" @click ='onIsFocus'>
          <div class="fenji">
            <p v-if="investscoreNo" @click="openInvest()"><span>您尚未完成</span><span class="openInvest">《出借人风险承受能力评估》</span><span>,平台无法判断您是否能承受该项目的风险，请知悉。</span></p>
            <p class="title-list" v-if="investscoreYes">该项目的风险程度超过您的风险承受能力，请知悉</p>
          </div>
          <ul class="boxline">
            <li>起投金额</li>
            <li>可投金额</li>
            <li>最大单笔金额</li>
          </ul>
          <ul class="boxline boxColor">
            <li>{{yyyDetail.MIN_BID_AMOUNT}}元</li>
            <li>{{yyyDetail.SURPLUS_PART | farmatAmount}}元</li>
            <li>{{yyyDetail.MAX_BID_AMOUNT}}元</li>
          </ul>
          <ul class="boxline boxBlance">
            <li>账户余额</li>
            <li></li>
          </ul>
          <ul class="boxline boxColor boxSafe" style="margin-top: -.2rem">
            <li>{{userInfo.AVAILABLE_BALANCE}}元</li>
            <li class="doAgree">
              <h1>
                  <span v-if="agree" @click="agreement">
                    <img class="on" src="../../../static/images/investOn.png">阅读并同意
                  </span>
                <span v-if="!agree" @click="agreement">
                    <img class="on" src="../../../static/images/investIn.png">阅读并同意
                  </span>
                <a href="https://www.phtfdata.com/web6/hander/guarantee.do" target="_blank">《风险揭示书》</a>
              </h1>
            </li>
          </ul>
        </div>
        <div class="bottom_input">
          <div class="input_text">
            <input type="text" placeholder="投资金额" v-model="investMoney" @focus="showBox()" ref="content">
            <span>元</span>
          </div>
          <div class="input_submit" @click="submitWithdraw()">
            <a>立即投资</a>
          </div>
        </div>
      </div>
    </div>

    <div class="invest_no" v-if="type == 1">{{typeName}}</div>
    <!--<div class="bottom_input">
      <div class="bottom_invest" v-if="type == 0">
        &lt;!&ndash;遮罩层&ndash;&gt;
        <div :class="{popup:isActive}">
          <div class="box">
            <div class="focusDiv" v-if="isActive" @click="hideBox()">
              <ul class="boxline">
                <li>起投金额</li>
                <li>可投金额</li>
                <li>最大单笔金额</li>
              </ul>
              <ul class="boxline boxColor">
                <li>{{yyyDetail.MIN_BID_AMOUNT}}元</li>
                <li>{{yyyDetail.SURPLUS_PART | farmatAmount}}元</li>
                <li>{{yyyDetail.MAX_BID_AMOUNT}}元</li>
              </ul>
              <ul class="boxline boxBlance">
                <li>账户余额</li>
                <li></li>
              </ul>
              <ul class="boxline boxColor boxSafe">
                <li>{{available_balance}}元</li>
                <li>
                  <h1>
                  <span v-if="agree" @click="agreement">
                    <img class="on" src="../../../static/images/login/login_selectOn.png">阅读并同意
                  </span>
                    <span v-if="!agree" @click="agreement">
                    <img class="on" src="../../../static/images/login/login_select.png">阅读并同意
                  </span>
                    <a href="https://www.phtfdata.com/web6/hander/guarantee.do" target="_blank">《风险揭示书》</a>
                  </h1>
                </li>
              </ul>
            </div>
            <div class="input_box">
              <div class="input_text">
                <input type="text" placeholder="投资金额" v-on:focus="showBox()" v-model="investMoney">
                <span>元</span>
              </div>
              <div class="input_submit">
                <button @click="investSubmit()">立即投资</button>
              </div>
            </div>
          </div>
        </div>

      </div>
     <div class="invest_no" v-if="type == 1">{{typeName}}</div>
    </div>-->
    <!-- 信息披露弹窗 -->
    <informationDisclosure class="informationDisclosure"></informationDisclosure>
    <!-- 余额不足弹窗 -->
    <notSufficientFunds class="notSufficientFunds"></notSufficientFunds>
    <!--请输入验证码-->

  </div>
</template>
<script>
  import informationDisclosure from '../../components/informationDisclosure/informationDisclosure.vue';
  import notSufficientFunds from '../../components/notSufficientFunds/notSufficientFunds.vue';
  import * as regexfun from '../../../src/assets/js/jwt.regex';
  import * as apis from '../../assets/js/jwt.apis'
  import {mapGetters, mapActions, mapState} from 'vuex'
  import * as dealLogin from '../../assets/js/jwt.accessAuth'
  import '../../assets/js/filter'
  export default {
    data() {
      return {
        yyyTitle: '',
        yyyDetail:null,
        userId:'',
        userType:'',
        proj_code:'',
        yyyDetailList:null,
        headShow:false,
        tabList:[
          {tabName:'风控措施'},
          {tabName:'项目简介'},
          {tabName:'投资记录'}
        ],
        num:0,
        type:'',
        typeName:'',
        user_role:'',
        investscore:'',
        agree:false,
        available_balance:0,
        isActive:false,
        investMoney:'',
        is_check_tra_pwd:0,
        userData:null,
        is_authorized:'',
        investscoreYes:false,
        investscoreNo:false,
      }
    },
    computed: {
      ...mapGetters(
        ['loginStatus', 'userInfo', 'tokenCode','accessAuth']
      ),
    },
    mounted() {
      this.getYyyDetail();
      this.getInvestList();
    },
    methods:{
      ...mapActions({setPayDetail: 'setPayDetail'}),
      //月月盈列表
      getYyyDetail(){
        this.userId = this.userInfo.ID;
        this.userType = '1';
        this.proj_code = this.$route.query.proj_code;
        let user_role = this.userInfo.USER_ROLE;
        let userId = this.userInfo.ID;
        let is_check_tra_pwd = this.userInfo.IS_CHECK_TRA_PWD;
        let is_expired = this.userInfo.IS_Expired;
        apis.userBaseData(userId,'1').then( (data) => {
          let userData = data.result.main_data;
          this.investscore = userData.INVESTSCORE;
          this.available_balance = userData.AVAILABLE_BALANCE;
          this.is_check_tra_pwd = userData.IS_CHECK_TRA_PWD;
          this.is_authorized = userData.IS_AUTHORIZED;
          apis.queryProjDetail(this.userId, this.userType,this.proj_code ).then((data) => {
            this.yyyDetail = data.result.main_data.data[0];
            console.log(this.yyyDetail);
            //判断用户类型
            if(user_role == "INVESTOR" ){
              //判断用户是否授权
              if (this.is_authorized == "1") {
                //判断授权是否过期 IS_Expired  1：未过期  0：过期
                if (is_expired == '1') {
                  //判断是否售罄
                  if(this.yyyDetail.SURPLUS_PART != 0){
                    //投资人分级判断
                    if(this.investscore=='0'){
                      this.investscoreNo =true
                    }else if(this.investscore=='1'){
                      this.investscoreYes =true
                    }

                  }else{
                    this.type ='1';
                    this.typeName = "已售罄"
                  }

                }else {
                  this.bs.$emit('e:alert', "您的用户授权已过期，无法进行投资操作!");
                  this.type ='1';
                  this.typeName = "您的用户授权已过期，无法进行投资操作"
                }
              }else{
                this.bs.$emit('e:alert', "您的用户未委托授权，无法进行投资操作!");
                this.type ='1';
                this.typeName = "您的用户未委托授权，无法进行投资操作"
              }
            }else{
              this.bs.$emit('e:alert', "您的账户类型不支持投资!");
              this.type ='1';
              this.typeName = "您的账户类型不支持投资"
            }
          })
        })

      },
      getInvestList(){
        apis.ueryInvestedListApp(this.userId, this.userType,this.proj_code,'1','10' ).then((data) => {
          this.yyyDetailList = data.result.main_data.data[0];
        })
      },
      //让指定input获取焦点
      onIsFocus(){
        this.$refs.content.focus()
      },
      //去投资人测评
      openInvest(){
        location.href ='http://139.129.12.93:3102/web2/hander/investor.do?CUST_ID='+this.userInfo.ID
      },
      //遮罩层
      HShow(){
        this.headShow =false
      },
      //去月月盈的模版合同
      goLoan() {
        window.location.href= "https://www.phtfdata.com/web6/page/loanNo.do";
      },
      //tab页切换
      tab(index){
        this.num = index;
      },
      //是否选中风险揭示书
      agreement() {
        (this.agree == false) ? this.agree = true : this.agree = false;
      },
      //获取焦点 显示投资
      showBox(){
        this.headShow =true
      },
      //获取焦点 显示投资
      hideBox(){
        this.isActive = true
      },
      //点击投资
      submitWithdraw(){
        let self = this
        if(!self.agree){
          this.bs.$emit('e:alert', "请阅读并同意《风险揭示书》!");
          return;
        }
        if(self.investMoney == ""){
          this.bs.$emit('e:alert', "投资金额不能为空!");
          return;
        }
        if(!(regexfun.regex(this, 'reg_finc_account', this.investMoney))){
          return regexfun.handleFailMsg(this,"请输入有效投资金额");
        }
        if((self.investMoney-0)%(this.yyyDetail.MIN_BID_AMOUNT-0) != 0){
          this.bs.$emit('e:alert', "投资金额应为最低投资额的整数倍!");
          return;
        }
        if((self.investMoney-0)>(this.available_balance -0)){
          this.bs.$emit('e:alert', "投资金额应在投标剩余金额范围之内!");
          return;
        }
        if((self.investMoney-0)>(this.yyyDetail.MAX_BID_AMOUNT-0)){
          this.bs.$emit('e:alert', "投资额应在单笔最大限额范围以内!");
          return;
        }
        if((self.investMoney-0)>(this.yyyDetail.SURPLUS_PART -0)){
          this.bs.$emit('e:alert', "启禀陛下，您出借的银子较多，小的立即去准备，请稍后再试!");
          return;
        }
        this.setPayDetail({
          userId:self.userId,
          //项目名称
          pro_code:self.proj_code,
          pro_name:self.yyyDetail.PROJ_NAME,
          //可用余额
          balance:self.userInfo.AVAILABLE_BALANCE,
          //投资金额
          withDraw:self.investMoney,
          //投资期限
          proTime:self.yyyDetail.LOAN_LIMITTIME
        });

        self.$router.push({path:'paymentOrder'})

      }
    },
    components: {
      informationDisclosure,
      notSufficientFunds,
    }
  }
</script>
<style lang="less" scoped>
  .none{
    display: none;
  }
  .yyy {
    background-color: #f8f8f8;
    padding-bottom: 0.94rem;
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
    a{
      position: absolute;
      width: 1rem;
      height: 1rem;
      left: 0;
      top: -0.02rem
    }
  }

  .fund {
    margin-top: 1rem;
    background: linear-gradient(to bottom, #fb4747 0%, #fb6547 100%);
    text-align: center;
    color: #fff;
    padding-bottom:0.3rem;
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
      font-weight: 500;
      font-size: 1.4rem;
      span {
        font-size: 0.46rem;
      }
    }
    ul {
      width: 5rem;
      height: 0.38rem;
      margin: auto;
      display: flex;
      li {
        flex: 1;
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

  .demand {
    height: 1.2rem;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    li {
      flex: 1;
      height: 0.75rem;
      border-right: 1px solid #e0e0e0;
      text-align: center;
      margin-top: 0.23rem;
      span {
        display: block;
      }
      span:first-child {
        font-size: 0.26rem;
        color: #666666;
        margin-top: -0.05rem;
      }
      span:last-child {
        font-size: 0.32rem;
        color: #333333;
        font-family: 黑体;
      }
    }
    li:last-child {
      border: none;
    }
  }

  .schedule {
    margin-top: 0.2rem;
    ul {
      padding-left: 0.2rem;
      background-color: #fff;
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      li {
        height: 1rem;
        line-height: 1rem;
        padding-right: 0.2rem;
        border-bottom: 1px solid #e0e0e0;
        span:first-child {
          color: #666666;
          font-size: 0.3rem;
          float: left;
        }
        span:last-child {
          float: right;
          font-size: 0.3rem;
          color: #333333;
        }
      }
      li:first-child {
        height: 0.8rem;
        line-height: 0.8rem;
        span:first-child {
          font-size: 0.26rem;
        }
        span:last-child {
          font-size: 0.26rem;
          color: #fb4747
        }
        span:nth-child(2) {
          width: 68%;
          height: 0.07rem;
          margin-left: 0.2rem;
          margin-top: 0.37rem;
          background-color: #e0e0e0;
          float: left;
          border-radius: 1rem;
          s {
            float: left;
            height: 0.07rem;
            border-radius: 1rem;
            background-color: #fb4747;
          }
        }
      }
      li:last-child {
        border: none;
        span:last-child {
          img {
            height: 0.25rem;
          }
        }
        a {
          display: block
        }
      }
    }
  }

  .tab {
    height: 1.24rem;
    margin-top: 0.2rem;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    ul {
      height: 0.6rem;
      padding: 0 0.2rem;
      padding-top: 0.32rem;
      display: flex;
      li {
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
      li:first-child {
        border-right: none;
        border-top-left-radius: 0.12rem;
        border-bottom-left-radius: 0.12rem;
      }
      li:nth-child(2) {
        border-right: none
      }
      li:last-child {
        border-top-right-radius: 0.12rem;
        border-bottom-right-radius: 0.12rem;
      }
      li.tabOn {
        color: #fff;
        background-color: #fb4747
      }
    }
  }

  .tab_content {
    .content1 {
      padding-bottom: 1rem;
      background-color: #fff;
      text-align: center;
      .content1_title {
        height: 1rem;
        line-height: 1rem;
        padding: 0 0.2rem;
        background-color: #fff;
        border-bottom: 1px solid #e0e0e0;
        font-size: 0.3rem;
        span:first-child {
          float: left;
          color: #666666
        }
        span:last-child {
          float: right;
          color: #333333
        }
      }
      img{
        width: 100%;
        height:100%;
      }
    }
    .content2 {
      padding: 0 0.2rem;
      padding-bottom: 1rem;
      background-color: #fff;
      h1 {
        font-size: 0.3rem;
        color: #333333;
        line-height: 0.8rem;
      }
      p {
        font-size: 0.26rem;
        color: #666666;
        text-align: justify;
      }
    }
    .content3 {
      background-color: #fff;
      padding-bottom: 0.5rem;
      h1 {
        padding: 0 0.3rem;
        line-height: 1rem;
        border-bottom: 1px solid #e0e0e0;
        display: flex;
        span {
          flex: 1;
          font-size: 0.3rem;
          text-align: center
        }
        span:last-child {
          flex: 1.5;
        }
      }
      ul {
        padding: 0 0.2rem;
        li {
          display: flex;
          height: 1rem;
          line-height: 1rem;
          border-bottom: 1px solid #e0e0e0;
          span {
            flex: 1;
            font-size: 0.24rem;
            text-align: center
          }
          span:nth-child(2) {
            font-size: 0.26rem;
            color: #C0504D;
          }
          span:last-child {
            flex: 1.5
          }
        }
      }
      p {
        text-align: right;
        color: #C0504D;
        height: 0.5rem;
        line-height: 0.5rem;
        padding-right: 0.2rem;
        font-size: 0.25rem;
      }
    }
  }

  .informationDisclosure,
  .notSufficientFunds {
    display: none;
  }
  .invest_no{
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
    height: 0.95rem;
    line-height: 0.95rem;
    background-color: #bbb;
    font-size: 0.32rem;
    text-align: center;
    color: #fff;
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
      margin: 0 0 0 .2rem;
      color: #999;
      li{
        display: inline-block;
        width: 30%;
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
    .boxSafe{

      li{
        margin-bottom:0.28rem;
      }
      li:last-child{
        width: 55%;
        margin-left:1rem;
        h1{
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
  .title-list{
    display: inline-block;
    width: 100%;
    height: .3rem;
    font-size: .3rem;
    color: #ccc;
    padding-left: .2rem;
  }
  .openInvest{
    color: #0000f4;
  }
  .fenji p{
    font-size: 0.24rem;
    padding:0 0.2rem;
  }

</style>
