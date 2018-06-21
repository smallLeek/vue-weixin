<template>
  <div class="ttylist">
    <!-- 天天盈专区 -->
    <div class="tty_area">
      <div class="area_title">
        <img src="../../../../static/images/home/home_tty_title.png" class="area_title_img">
        <!--<span v-on:click="goMore()">更多<img src="../../../../static/images/more.png"></span>-->
      </div>
      <!--天天盈项目-->
      <ul v-if="tty">
        <li v-text="tty.PROJ_NAME" @click="gottyPar()"></li>
        <li @click="gottyPar()">
          <span>
            <b v-text="(tty.RATE).toFixed(0)"></b>%
          </span>
          <span>
            <b>{{tty.REDEEM_MAX_AMOUNT | farmatDataWan}}</b>万元
          </span>
          <span>
            <b>{{tty.MAX_AMOUNT | farmatAmount}}</b>元
          </span>
        </li>
        <li @click="gottyPar()">
          <span>年化收益</span>
          <span>需求金额</span>
          <span>剩余可投</span>
        </li>
        <!-- 进度条 -->
        <li @click="gottyPar()">
          <span><s :style="{width:((tty.MAX_AMOUNT-tty.REDEEM_MAX_AMOUNT)/tty.REDEEM_MAX_AMOUNT)+'%'}"></s></span>
          <span v-text="((tty.MAX_AMOUNT-tty.REDEEM_MAX_AMOUNT)/tty.REDEEM_MAX_AMOUNT)+'%'"></span>
        </li>
        <li>
          <button v-on:click="ttyInvest" v-if="investText">立即投资</button>
          <button v-if="investText1">已售罄</button>
        </li>
      </ul>
      <ul class="noProject" v-if="!tty">
        <img src="../../../../static/images/home/noProject.png">
      </ul>
    </div>
  </div>
</template>
<script>
  import * as apis from '../../../assets/js/jwt.apis'
  import {mapGetters, mapActions, mapState} from 'vuex'
  import * as regexfun from '../../../../src/assets/js/jwt.regex';
  import * as dealLogin from '../../../assets/js/jwt.accessAuth'

  export default {
    data() {
      return {
        userData: null,
        tty: null,
        investText:null,
        investText1:null,
      }
    },
    computed: {
      ...mapGetters(
        ['loginStatus', 'userInfo', 'tokenCode','accessAuth']
      )
    },
    mounted() {
      this.getTty();
    },
    methods: {
      ...mapActions({setAccessAuth: 'setAccessAuth'}),
      getBaseData() {
        let userId = this.userInfo.ID;
        let userType = this.userInfo.USER_TYPE;
        apis.userBaseData(userId, userType).then((data) => {
          this.userData = data.result.main_data;
        })
      },
      //查看更多
      goMore() {
        this.$router.push('/ttyMore')
      },
      //投资按钮
      getTty() {
        let userId = '';
        let userType = '1';
        apis.DdProj(userId, userType).then((data) => {
          console.log(data)
          this.tty = data.result.main_data;
          console.log(this.tty.INVEST_STATUS)
          let proj_status = this.tty.PROJ_STATUS;
          if (proj_status == "6003") {
            this.investText = true;
            this.investText1 =false
          } else {
            this.investText = false;
            this.investText1 =true
          }
        })
      },
      gottyPar(){
        this.setAccessAuth({isNeedLogin:true,isNeedRealName:true,whereToGo:"/wx/ttyParticulars"});
        dealLogin.dealLogin();
        this.$router.push({path:'/ttyParticulars'})
      },
      //请求债权列表接口
      //点击投资按钮是否到投资页面
      ttyInvest() {
        /**
         * 投资按钮显示状态 三种：售罄 停售 投资
         * 停售:详情接口:proj_state 不是6003
         *售罄:详情接口:proj_state 是6003  且 债权列表个数为0
         *投资:详情接口:proj_state 是6003  且 债券列表个数>=1
         * 判断 用户类型，如果是融资者，您的账户类型不支持投资
         * 如果是投资者，进而判断是否开启委托授权，如果开启，进行投资，如果未开启，去账户中心开启
         * INVEST_END_DATETIME 委托授权  0:否 1：是
         * IS_Expired 1：未过期  0：过期
         */
         this.setAccessAuth({isNeedLogin:true,isNeedRealName:true,whereToGo:"/wx/home"});
         dealLogin.dealLogin();
          let user_role = this.userInfo.USER_ROLE;
          let is_check_tra_pwd = this.userInfo.IS_CHECK_TRA_PWD;
          let is_expired = this.userInfo.IS_Expired;
          let flag = true;
          if(user_role == 'INVESTOR'){
            flag = false
            regexfun.handleFailMsg(this, "您的账户类型不支持投资!");
          }
          if (is_check_tra_pwd=='0') {
            flag = false
            regexfun.handleFailMsg(this,"您的用户未委托授权，无法进行投资操作!");
          }
          if(is_expired == '0'){
            regexfun.handleFailMsg(this, "您的用户授权已过期，无法进行投资操作!");
          }
          if( this.tty.INVEST_STATUS == "1" ){
            flag = false;
            regexfun.handleFailMsg(this,"未到投资时间，如有需要请联系客服!");

        }
        if(flag){
            this.$router.push({path:'/ttyParticulars'})
        }

      }
    }
  }
</script>
<style lang="less" scoped>
  /* 专区 */
  .area_title {
    height: 1rem;
    line-height: 0.7rem;
    margin-top: 0.2rem;
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    .area_title_img {
      width: 4.5rem;
    }
    span {
      float: right;
      font-size: 0.24rem;
      color: #999999;
      line-height: 1rem;
      display: inline-block;
      img {
        width: 0.15rem;
        height: auto;
        margin-top: -0.05rem;
        margin-left: 0.1rem;
        margin-right: 0.3rem;
      }
    }
    a:hover {
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      -webkit-user-select: none;
      -moz-user-focus: none;
      -moz-user-select: none;
      text-decoration: none
    }
  }

  .tty_area {
    background-color: #fff;
    a:hover {
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      -webkit-user-select: none;
      -moz-user-focus: none;
      -moz-user-select: none;
      text-decoration: none
    }
    ul {
      li:first-child {
        font-size: 0.28rem;
        color: #333333;
        margin-top: 0.2rem;
        line-height: 1;
      }
      li:nth-child(2) {
        display: flex;
        line-height: 1;
        span {
          flex: 1;
          text-align: center;
          font-size: 0.28rem;
          margin-top: 0.6rem;
          color: #666666;
          b {
            font-family: 黑体;
            font-weight: 500;
            font-size: 0.4rem;
            color: #333333
          }
        }
        span:first-child {
          color: #fb4747;
          margin-top: 0.3rem;
          font-size: 0.34rem;
          b {
            font-weight: 500;
            font-size: 0.94rem;
            color: #fb4747
          }
        }
      }
      li:nth-child(3) {
        display: flex;
        span {
          flex: 1;
          text-align: center;
          font-size: 0.26rem;
          font-weight: 500;
          color: #999999
        }
        span:first-child {
          font-size: 0.24rem;
          line-height: 0.35rem;
        }
      }
      li:nth-child(4) {
        margin-top: 0.24rem;
        position: relative;
        span:first-child {
          float: left;
          margin-top: 0.16rem;
          width: 6rem;
          height: 0.05rem;
          background-color: #e8e8e8;
          border-radius: 10px;
          s {
            float: left;
            width: 50%;
            height: 100%;
            border-radius: 10px;
            background-color: #fb4747;
          }
        }
        span:last-child {
          position: absolute;
          color: #999999;
          font-size: 0.24rem;
          line-height: 0.4rem;
          right: 0;
        }
      }
      li:nth-child(5) {
        clear: both;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        button {
          display: block;
          color: #fff;
          font-size: 0.3rem;
          width: 5.4rem;
          height: .7rem;
          line-height: .7rem;
          border-radius: 1rem;
          background-color: #fb4747;
          text-align: center;
          margin: auto;
          border: none;
          outline: none;
        }
        button:active {
          background-color: #de2626;
        }
      }
    }
  }

  .tty_area ul {
    padding-left: 0.3rem;
    padding-right: 0.4rem;
    border-bottom: 1px solid #e5e5e5;
  }
  ul.noProject{
    width: 3.41rem;
    margin: 0.4rem auto;
    border-bottom:none;
    padding:0;
    img{
      width: 3.41rem;
      height: 1.58rem;
    }
  }
</style>
