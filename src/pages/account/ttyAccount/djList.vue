<template>
  <div class="capital">
    <div class="title">
      <b @click="goBackOne()">
        <img src="../../../../static/images/goBack.png">
      </b>
      <span>在投本金</span>
    </div>
    <div class="list" v-if="ttyList">
      <div class="header">
        <img src="../../../../static/images/account/account_invest.png">申请转让成功后未到账金额
      </div>
      <ul  v-for="item in ttyList">
        <li>
          <span>借款方：{{item.REAL_NAME}}</span>
          <span>投资时间：{{item.CREATE_DATETIME}}</span>
        </li>
        <li>{{item.CREDITS | farmatAmount}}元</li>
      </ul>
    </div>
    <div class="noData" v-if="!ttyList">
      <div>
        <img src="../../../../static/images/noData.png" alt="">
        <p>还没有冻结中的债权</p>
      </div>
    </div>
  </div>
</template>
<script>
  import * as apis from '../../../assets/js/jwt.apis'
  import {mapGetters} from 'vuex'
  import '../../../assets/js/filter'
  export default {
    data(){
      return{
        ttyList:null
      }
    },
    computed:{
      ...mapGetters(['userInfo','getProjCode'])
    },
    mounted(){
      this.getAgainList();
    },
    methods:{
      goBackOne(){
        this.$router.go(-1);
      },
      getAgainList(){
        let userId = this.userInfo.ID;
        let userType = '1';
        apis.userBaseData(userId,'1').then( (data) => {
          apis.FreezePrincipalList(userId, userType,'100','1').then((data) => {
            this.ttyList = data.result.main_data.data;
          })
        })
      }
    }
  }
</script>
<style lang="less" scoped>
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
    b{
      position: absolute;
      width: 1rem;
      height: 1rem;
      left: 0;
      top: -0.02rem
    }
    img{
      height: 0.5rem;
      vertical-align: middle
    }
    a{
      position: absolute;
      width: 1rem;
      height: 1rem;
      left: 0;
      top: -0.02rem
    }
  }
  .header{
    width: 7.5rem;
    height: 0.64rem;
    line-height: 0.64rem;
    top: 1rem;
    margin: auto;
    font-size: 0.3rem;
    color: #333333;
    position: fixed;
    text-align: center;
    background-color: #fff8cb;
    border-top: 1px solid #ffeb6b;
    border-bottom: 1px solid #ffeb6b;
    img{
      margin-right: 0.14rem;
      height: 0.35rem;
      margin-top: -0.1rem;
      vertical-align: middle
    }
  }
  .list{
    margin-top: 1.84rem;
    ul{
      padding: 0 0.2rem;
      display: block;
      height: 1.3rem;
      background-color: #fff;
      border-bottom: 1px solid #e5e5e5;
      li:first-child{
        float: left;
        span{
          display: block;
          line-height: 1;
        }
        span:first-child{
          font-size: 0.3rem;
          color: #333333;
          margin-top: 0.3rem;
        }
        span:last-child{
          font-size: 0.26rem;
          color: #666666;
          margin-top: 0.16rem;
        }
      }
      li:last-child{
        float: right;
        height: 1rem;
        line-height: 1.3rem;
        font-size: 0.32rem;
        color: #fb4747;
        font-family: 黑体;
      }
    }
    a:first-child{
      border-top: 1px solid #e5e5e5;
    }
  }
  .noData{
    text-align: center;
    div{
      position: absolute;
      width: 100%;
      height: 2.04rem;
      margin: auto;
      top:0;
      bottom: 0;
      left: 0;
      right: 0;
      p{
        font-size: 0.32rem;
        color: #666;
      }
      img{
        width: 1.85rem;
        height: 2.04rem;
      }
    }
  }

</style>
