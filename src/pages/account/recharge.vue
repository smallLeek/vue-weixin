<template>
  <div class="recharge">
    <div class="title">
      <router-link to="/account">
        <img src="../../../static/images/goBack.png">
      </router-link>
      <span>充值</span>
    </div>
    <div class="fund">
      <ul>
        <li>
          <span>
            <img src="../../../static/images/recharge/recharge_cardlg.png">
          </span>
          <span>
            <img :src="picture_url">
          </span>
          <span v-text="bankcodeLast"></span>
        </li>
        <li>
          <span><img src="../../../static/images/recharge/recharge_right.png"></span>
        </li>
        <li>
          <span><img src="../../../static/images/recharge/recharge_balance.png"></span>
          <span>账户余额</span>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="operation">
        <ul>
          <li>
            <span>充值金额(元)</span>
            <span>账户余额(元)：<b v-text="available_balance"></b></span>
          </li>
          <li>
            <span>￥</span>
            <span>
              <input type="text" placeholder="请输入充值金额" v-model="rechargeMoney" v-on:input="clearNoNum()">
            </span>
            <span id="close"><img src="../../../static/images/recharge/recharge_close.png"></span>
          </li>
          <li>
            <span>充值后余额(元)：<b v-text="rechargeLast">6326.33</b></span>
          </li>
          <li>
            <span>本次最大充值金额(元)：<b>{{ single_limit}}</b></span>
            <span><router-link to="">限额说明</router-link></span>
          </li>
          <li>
            <span>卡支付额度：<b v-text="total_limit"></b></span>
          </li>
          <li class="on" id="paybtn">立即充值</li>
        </ul>
      </div>
      <div class="hint">
        <h1>充值小贴士:</h1>
        <ul>
          <li>1.您的账户资金将由新网银行托管；</li>
          <li>2.目前充值手续费由平台垫付，快捷充值具体限额以银行为准，大额充值您可通过网页使用网银充值；</li>
          <li>3.充值到账时间为实时到账。查看
            <router-link to="">更多帮助</router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
  import {mapGetters, mapActions,mapState} from 'vuex'
  import { phtServer } from '../../assets/js/phtServer'
  import * as apis from '../../assets/js/jwt.apis'
  import '../../assets/js/filter'
  export default {
    data() {
      return {
        rechargeMoney:'',
        picture_url:'',//银行图标地址
        day_limit:'',//单日限额
        single_limit:'',//单笔限额
        month_limit:'',//单月限额
        user_role:'',//用户角色  INVESTOR（投资者）、BORROWERS（融资者）
        bank_code:'',//银行编码
        bank_no:'',//银行卡
        balance:'', //余额
        dj_balance:'',//冻结金额
        available_balance:'',//可用余额
        bank_name:'',//银行名称
        bankcodeLast:'',//银行尾号
        total_limit:'',//银行卡支付额度
        rechargeLast:0,//充值后余额
      }
    },
    computed: {
      ...mapGetters([
        'loginStatus','userInfo','tokenCode'
      ])
    },
    mounted () {
      this.getBankInfo();
    },
    watch: {
      rechargeMoney: function (value) {
       this.getrechargeLast();
      }
    },
    methods: {
//    获取银行卡信息
      getBankInfo() {
        //首先获取当前用户信息
        let userId = this.userInfo.ID;
        let userType = this.userInfo.USER_TYPE;
        apis.userBaseData(userId,userType).then( (data) => {
          let userData = data.result.main_data;
          console.log(userData)
          this.picture_url = userData.PICTURE_URL;
          this.day_limit = userData.DAY_LIMIT;
          this.single_limit = userData.SINGLE_LIMIT;
          this.month_limit = userData.MONTH_LIMIT;
          this.user_role = userData.USER_ROLE;
          this.bank_code = userData.BANK_CODE;
          this.bank_no = userData.BANK_NO;
          this.balance = userData.BALANCE;
          this.dj_balance = userData.DJ_BALANCE;
          this.available_balance = userData.AVAILABLE_BALANCE;
          this.bank_name = userData.BANK_NAME;
          this.total_limit = userData.TOTAL_LIMIT;
          this.bankcodeLast =this.bank_name  + "尾号:"+phtServer.farmatBankcode(this.bank_no);
          this.rechargeLast = this.available_balance;
        })
      },
      getrechargeLast() {
        this.rechargeLast = (this.rechargeMoney-0)+ (this.available_balance-0);
      },
      //限额说明
      getLimitInfo() {

      },
      //输入充值金额正则
      clearNoNum (obj){
        obj.value = obj.value.replace(/[^\d.]/g,"");
        obj.value = obj.value.replace(/\.{2,}/g,".");
        obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
        obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');
        if(obj.value.indexOf(".")< 0 && obj.value !=""){
          obj.value= parseFloat(obj.value);
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .recharge {
    background-color: #f8f8f8;
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
    a:hover {
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      -webkit-user-select: none;
      -moz-user-focus: none;
      -moz-user-select: none;
      text-decoration: none;
    }
  }

  .fund {
    margin-top: 1rem;
    height: 2.5rem;
    background: linear-gradient(to bottom, #fb4747 0%, #fb6547 100%);
    ul {
      padding: 0 0.5rem;
      display: flex;
      li {
        flex: 1;
        padding-top: 0.3rem;
        span {
          display: block;
          text-align: center;
        }

        span:last-child {
          margin-top: 0.2rem;
          font-size: 0.24rem;
          color: #fff;
        }
      }
      li:first-child {
        flex: 1.2;
        position: relative;
        span:first-child {
          img {
            position: absolute;
            top: 0.1rem;
            right: -0.5rem;
            width: 1rem;
          }
        }
        span:nth-child(2) {
          img {
            width: 1.2rem
          }
        }
      }
      li:nth-child(2) {
        text-align: center;
        img {
          width: 1.7rem;
          margin-top: 0.25rem;
        }
      }
      li:last-child {
        flex: 1.2;
        span:first-child {
          img {
            width: 1.2rem
          }
        }
      }
    }
  }

  .content {
    background-color: #fff;
    padding: 0 0.3rem;
    padding-bottom: 0.5rem;
    .operation {
      ul {
        padding-top: 0.5rem;
        li {
          clear: both;
        }
        li:first-child {
          span:first-child {
            float: left;
            font-size: 0.28rem;
            color: #333333
          }
          span:last-child {
            float: right;
            font-size: 0.26rem;
            color: #666666;
            b {
              font-weight: 500;
              color: #fb4747;
            }
          }
        }
        li:nth-child(2) {
          margin-top: 0.52rem;
          width: 7rem;
          height: 0.8rem;
          margin-left: -0.05rem;
          border-bottom: 1px solid #e0e0e0;
          span:first-child {
            float: left;
            font-size: 0.46rem;
            margin-left: 0.05rem;
            line-height: 0.8rem;
            color: #333333;
          }
          span:nth-child(2) {
            float: left;
            margin-left: 0.1rem;
            input {
              width: 5.5rem;
              font-size: 0.6rem;
              color: #333333;
              border: none;
              outline: medium;
              display: inherit;
            }
            ::-moz-placeholder {
              color: #999999;
              font-size: 0.35rem;
              line-height: 0.8rem;
            }
            :-ms-input-placeholder {
              color: #999999;
              font-size: 0.35rem;
              line-height: 0.8rem;
            }
            ::-webkit-input-placeholder {
              color: #999999;
              font-size: 0.35rem;
              line-height: 0.8rem;
            }
          }
          span:last-child {
            float: right;
            width: 0.8rem;
            height: 0.8rem;
            line-height: 0.5rem;
            margin-right: 0.05rem;
            text-align: right;
            img {
              width: 0.3rem;
            }
          }
        }
        li:nth-child(3) {
          margin-top: 0.4rem;
        }
        li:nth-child(4) {
          span:last-child {
            float: right;
            a {
              color: #3297ff;
            }
          }
        }
        li:nth-child(3),
        li:nth-child(4),
        li:nth-child(5) {
          height: 0.46rem;
          span {
            font-size: 0.26rem;
          }
          span:first-child {
            float: left;
            color: #666666;
            b {
              color: #333333;
              font-weight: 500;
            }
          }
        }
        li:nth-child(6) {
          width: 7rem;
          height: 0.8rem;
          line-height: 0.8rem;
          margin-top: 0.4rem;
          margin-left: -0.05rem;
          font-size: 0.3rem;
          text-align: center;
          color: #fff;
          background-color: #c4c4c4;
          border-radius: 0.12rem;
        }
        li:nth-child(6) {
          background-color: #fb4747;
        }
      }
    }
    .hint {
      margin-top: 0.8rem;
      h1 {
        font-size: 0.28rem;
        color: #333333;
      }
      ul {
        margin-top: 0.24rem;
        li {
          height: 0.4rem;
          font-size: 0.26rem;
          color: #333333;
        }
        li:nth-child(2) {
          height: 0.8rem;
          line-height: 0.35rem;
        }
        li:last-child {
          a {
            color: #3297ff
          }
        }
      }
    }
  }

</style>
