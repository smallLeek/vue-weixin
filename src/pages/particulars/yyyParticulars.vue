<template>
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
          <span><s></s></span>
          <span>{{yyyDetail.INVEST_PROGRESS}}</span>
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
        <li v-for="(item, index) in tabList" v-text="item.tabName" :class="{tabOn:index==num}"></li>
      </ul>
    </div>
    <div class="tab_content">
      <div class="content1">
        <div class="content1_title">
          <span>项目名称</span>
          <span>天天盈2015924</span>
        </div>
        <img :src="yyyDetail.BACKWARD_URL" alt="">
      </div>
      <div class="content2">
        <p v-text="yyyDetail.GUAR_INTRO"></p>
      </div>
      <div class="content3">
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
        <p>已投资6笔，投资总额66,700元</p>
      </div>
    </div>
    <div class="bottom_input">
      <div class="input_text">
        <input type="number" placeholder="投资金额">
        <span>元</span>
      </div>
      <div class="input_submit">
        <router-link to="">立即投资</router-link>
      </div>
    </div>
    <!-- 信息披露弹窗 -->
    <informationDisclosure class="informationDisclosure"></informationDisclosure>
    <!-- 余额不足弹窗 -->
    <notSufficientFunds class="notSufficientFunds"></notSufficientFunds>
  </div>
</template>
<script>
  import informationDisclosure from '../../components/informationDisclosure/informationDisclosure.vue';
  import notSufficientFunds from '../../components/notSufficientFunds/notSufficientFunds.vue';
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
        tabList:[
          {tabName:'风控措施'},
          {tabName:'项目简介'},
          {tabName:'投资记录'}
        ],
        num:0,
      }
    },
    computed: {
      ...mapGetters(
        ['loginStatus', 'userInfo', 'tokenCode','accessAuth']
      )
    },
    mounted() {
      // tab切换
      $('.tab ul li').click(function () {
        $(this).addClass('on').siblings('li').removeClass('on')
        $('.tab_content>div').eq($(this).index()).show().siblings('div').hide()
      })
      this.getYyyDetail();
      this.getInvestList();
    },
    methods:{
      //月月盈列表
      getYyyDetail(){
        this.userId = this.userInfo.ID;
        this.userType = '1';
        this.proj_code = this.$route.query.proj_code;
        apis.queryProjDetail(this.userId, this.userType,this.proj_code ).then((data) => {
          this.yyyDetail = data.result.main_data.data[0];
        })
      },
      getInvestList(){
        apis.ueryInvestedListApp(this.userId, this.userType,this.proj_code,'1','10' ).then((data) => {
          this.yyyDetailList = data.result.main_data.data[0];
        })
      },
      //去月月盈的模版合同
      goLoan() {
        window.location.href= "https://www.phtfdata.com/web6/page/loanNo.do";
      }
    },
    components: {
      informationDisclosure,
      notSufficientFunds
    }
  }
</script>
<style lang="less" scoped>
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
    height: 2.7rem;
    background: linear-gradient(to bottom, #fb4747 0%, #fb6547 100%);
    text-align: center;
    color: #fff;
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
            width: 12%;
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
      display: none;
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
      display: none;
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

  .bottom_input {
    position: fixed;
    bottom: 0;
    height: 0.94rem;
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
      line-height: 0.55rem;
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

  .informationDisclosure,
  .notSufficientFunds {
    display: none;
  }
</style>
