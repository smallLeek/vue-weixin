<template>
  <div class="ttylist">
    <!-- 天天盈专区 -->
    <div class="tty_area">
      <div class="area_title">
        <img src="../../../../static/images/home/home_tty_title.png" class="area_title_img">
        <!-- <router-link to="/ttyMore"><span>更多<img src="../../../static/images/home/more.png"></span></router-link> -->
      </div>
      <!--天天盈项目-->
      <ul v-if="tty">
        <li v-text="tty.PROJ_NAME"></li>
        <li>
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
        <li>
          <span>年化收益</span>
          <span>需求金额</span>
          <span>剩余可投</span>
        </li>
        <!-- 进度条 -->
        <li>
          <span><s :style="{width:((tty.MAX_AMOUNT-tty.REDEEM_MAX_AMOUNT)/tty.REDEEM_MAX_AMOUNT)+'%'}"></s></span>
          <span v-text="((tty.MAX_AMOUNT-tty.REDEEM_MAX_AMOUNT)/tty.REDEEM_MAX_AMOUNT)+'%'"></span>
        </li>
        <li>
          <button v-on:click="ttyInvest" v-text="investText">立即投资</button>
        </li>
      </ul>
      <ul class="noProject" v-show="false">
          <img src="../../../../static/images/home/noProject.png">
      </ul>
    </div>
  </div>
</template>
<script>
  import * as apis from '../../../assets/js/jwt.apis'
  import {mapGetters, mapActions, mapState} from 'vuex'

  export default {
    data() {
      return {
        userData: null,
        tty: null,
        investText: '立即投资'
      }
    },
    computed: {
      ...mapGetters(
        ['loginStatus', 'userInfo', 'tokenCode']
      )
    },
    mounted() {
      this.getTty();
    },
    methods: {
      getBaseData() {
        let userId = this.userInfo.ID;
        let userType = this.userInfo.USER_TYPE;
        apis.userBaseData(userId, userType).then((data) => {
          this.userData = data.result.main_data;
        })
      },
      getTty() {
        let userId = '';
        let userType = '1';
        apis.DdProj(userId, userType).then((data) => {
          this.tty = data.result.main_data;
          let proj_status = this.tty.PROJ_STATUS;
          if (proj_status == "6003") {
            this.investText = "立即投资";
          } else {
            this.investText = "已售罄";
          }
        })
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
        if (this.loginStatus == true) {
          this.getBaseData();
          let proj_status = this.tty.PROJ_STATUS;
          let user_role = this.userInfo.USER_ROLE;
          let is_check_tra_pwd = this.userInfo.IS_CHECK_TRA_PWD;
          let is_expired = this.userInfo.IS_Expired;
          if (proj_status == "6003") {
            //判断用户类型
            if (user_role == "INVESTOR") {
              //判断用户是否授权
              if (is_check_tra_pwd == "1") {
                //判断授权是否过期 IS_Expired  1：未过期  0：过期
                if (is_expired == '1') {
                  //可以进入投资
                  this.$router.push('/ttyParticulars')
                } else {
                  this.bs.$emit('e:alert', "您的用户未委托授权，无法进行投资操作!");
                }
              } else {
                //弹框 未写
                this.bs.$emit('e:alert', "您的用户未委托授权，无法进行投资操作!");
              }
            } else {
              this.bs.$emit('e:alert', "您的账户类型不支持投资!");
            }
          } else {

          }
        }else{
          this.$router.push('/loginRegister')
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
      img {
        width: 0.15rem;
        height: auto;
        margin-top: -0.05rem;
        margin-left: 0.1rem;
        margin-right: 0.3rem;
      }
    }
  }
.tty_area
{
  background-color: #fff;
  ul{
        li:first-child{
            font-size: 0.28rem;
            color: #333333;
            margin-top: 0.2rem;
            line-height: 1;
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
        li:nth-child(5){
            clear: both;
            padding-top: 0.3rem;
            padding-bottom: 0.3rem;
            a{
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
            }
            a:active{
                background-color: #de2626;
            }
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
        }
        button:active {
          background-color: #de2626;
        }
      }
    }
  
  ul.noProject{
      text-align: center;
      height: 2.4rem;
      line-height: 2.4rem;
      img{
          width: 3rem;
          vertical-align: middle
      }
  }

.tty_area ul{
    padding-left: 0.3rem;
    padding-right: 0.4rem;
    border-bottom: 1px solid #e5e5e5;
  }
</style>
