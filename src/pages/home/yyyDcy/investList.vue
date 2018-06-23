<template>
  <!--投资-月月盈列表-->
  <div class="investList">
    <div class="yyyList">
      <div class="yyy_area">
        <div class="area_title">
          <img src="../../../../static/images/home/home_yyy_title.png" class="area_title_img">
        </div>
        <div>
          <ul v-for="list in yyyData" v-if="yyyData" v-on:click="goYyy(list.PROJ_CODE)">
            <li v-text="list.PROJ_NAME"></li>
            <li>
                <span>
                    <b v-text="list.ANNUAL_RATE"></b>%
                </span>
              <span>
                    <b v-text="list.LOAN_LIMITTIME"></b>个月
                </span>
              <span>
                    <b v-text="list.SURPLUS_AMOUNT"></b>元
            </span>
            </li>
            <li>
              <span>年化收益</span>
              <span>投资期限</span>
              <span>剩余可投</span>
            </li>
            <!-- 进度条 -->
            <li>
              <span><b><s :style="{width:list.INVEST_PROGRESS+'%'}"></s></b></span>
              <span v-text="list.INVEST_PROGRESS+'%'"></span>
            </li>
          </ul>
          <ul class="noProject" v-if="!yyyData">
            <img src="../../../../static/images/home/noProject.png">
          </ul>
        </div>
      </div>
    </div>
    <!--定投盈-->
    <div class="dtyList">
      <div class="dty_area">
        <div class="area_title">
          <img src="../../../../static/images/home/home_dcy_title.png" class="area_title_img">
        </div>
        <div>
          <ul v-for="list in dcyData" v-if="dcyData" v-on:click="goDty(list.PROJ_CODE)">
            <li v-text="list.PROJ_NAME"></li>
            <li>
                <span>
                    <b v-text="list.ANNUAL_RATE"></b>%
                </span>
              <span>
                    <b v-text="list.LOAN_LIMITTIME"></b>个月
                </span>
              <span>
                    <b v-text="list.SURPLUS_AMOUNT"></b>元
            </span>
            </li>
            <li>
              <span>年化收益</span>
              <span>投资期限</span>
              <span>剩余可投</span>
            </li>
            <!-- 进度条 -->
            <li>
              <span><b><s :style="{width:(parseFloat(list.INVEST_PROGRESS)).toFixed(0)+'%'}"></s></b></span>
              <span v-text="(parseFloat(list.INVEST_PROGRESS)).toFixed(0)+'%'"></span>
            </li>
          </ul>
          <ul class="noProject" v-if="!dcyData">
            <img src="../../../../static/images/home/noProject.png">
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import * as apis from '../../../assets/js/jwt.apis'
  import {mapGetters, mapActions, mapState} from 'vuex'
  import * as dealLogin from '../../../assets/js/jwt.accessAuth'

  export default {
    data() {
      return {
        yyyList: null,
        yyyData: null,
        dcyData: null,
        userData: null
      }
    },
    computed: {
      ...mapGetters(
        ['loginStatus', 'userInfo', 'tokenCode']
      )
    },
    mounted() {
      this.getInvestList();
    },
    methods: {
      ...mapActions({setAccessAuth: 'setAccessAuth'}),
      //获取用户信息
      getBaseData() {
        let userId = this.userInfo.ID;
        let userType = "1";
        apis.userBaseData(userId, userType).then((data) => {
          this.userData = data.result.main_data;
        })
      },
      //获取天天盈和定投盈列表
      getInvestList() {
        let userId = '';
        apis.selectMoneyManagementZTYD(userId).then((data) => {
          this.yyyData = data.result.main_data.yyy_data;//数组
          this.dcyData = data.result.main_data.dcy_data;//数组
        })
      },
      // 去月月盈投资详情
      goYyy(proj_code){
        this.setAccessAuth({isNeedLogin:true,isNeedRealName:true,whereToGo:"/wx/yyyParticulars?proj_code="+proj_code});
        dealLogin.dealLogin();
        //this.$router.push({path:'yyyParticulars',query:{"proj_code":proj_code}})
      },
      //去定投盈
      goDty(proj_code) {
        this.setAccessAuth({isNeedLogin:true,isNeedRealName:true,whereToGo:"/wx/yyyParticulars?proj_code="+proj_code});
        dealLogin.dealLogin();
        //this.$router.push({path:'yyyParticulars',query:{"proj_code":proj_code}})
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

  .yyy_area, .dty_area{
    background-color: #fff;
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
          float: right;
          color: #999999;
          font-size: 0.24rem;
          line-height: 0.4rem;
        }
      }
    }
  }

  .yyy_area ul, .dty_area ul{
    padding-left: 0.3rem;
    padding-right: 0.4rem;
    padding-bottom: 0.5rem;
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
