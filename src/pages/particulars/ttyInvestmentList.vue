<template>
  <div class="investment">
    <div class="title">
      <b @click="goBackOne()">
        <img src="../../../static/images/goBack.png">
      </b>
      <span>投资记录</span>
    </div>
    <h1>
      <span>投资人/投资时间</span>
      <span>投资金额(元)</span>
    </h1>
    <div class="list" v-show="userData">
      <ul class="hasData" v-if="flag != 0">
        <li v-for="item in userData" > 
          <span>
              <b>{{item.MOBILE}}</b>
              <b>{{item.ACCOUNT_DATETIME}}</b>
          </span>
          <span>{{item.AMOUNT | farmatAmount}}</span>
        </li>
      </ul>
      <div class="middle">
        <div class="middleTop" v-if="flag == 0">
          <ul class="noData">
            <li>
              <img src="../../../static/images/noData.png" alt="">
            </li>
            <li>暂无记录</li>
          </ul>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
  import * as apis from '../../assets/js/jwt.apis'
  import '../../assets/js/filter'
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return {
        userData:null,
        flag:false
      }
    },
    mounted(){
      this.getInvestData()
    },
    computed: {
      ...mapGetters(
        ['loginStatus', 'userInfo', 'tokenCode']
      )
    },
    methods:{
      //导航返回按钮
      goBackOne(){
        this.$router.push({path:'/ttyParticulars'});
      },
      //获取投资列表信息
      getInvestData(){
        //获取proj_code
        let proj_code = this.$route.query.proj_code;
        apis.DdProjInvestCustList(this.userInfo.ID,"1",proj_code,'1000','1').then((data) => {
          this.userData = data.result.main_data.data;
          this.flag = this.userData.length;
        })
      }
    }
  }
</script>
<style lang="less" scoped>
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
  }
  h1{
    position: fixed;
    top: 1rem;
    font-weight: 500;
    margin: auto;
    z-index: 100;
    width: 7.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.28rem;
    color: #387eff;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    span{
      float: left;
      display: inline-block;
      width: 60%;
      text-align: left;
    }
    span:first-child{
      padding-left: 0.2rem;
    }
    span:last-child{
      text-align: right;
      width: 40%;

      padding-right: 0.2rem;
    }
  }
  .list{
    margin-top: 1.8rem;
    .hasData{
      background-color: #fff;
      li{
        font-family: 黑体;
        height: 1.2rem;
        border-bottom: 1px solid #e0e0e0;
        span{
          float: left;
          display: inline-block;
          width: 60%;
        }
        span:first-child{
          padding:0.1rem 0;
          padding-left: 0.2rem;
          b{
            display: block;
            font-weight: 500;
            height: 0.5rem;
            line-height: 0.5rem;
          }
          b:first-child{
            font-size: 0.34rem;
            color: #333333;
          }
          b:last-child{
            font-size: 0.26rem;
            color: #999999;
          }
        }
        span:last-child{
          text-align: right;
          padding-right: 0.2rem;
          width: 40%;
          line-height: 1.2rem;
          font-size: 0.36rem;
          color: #ff8400;
        }
      }
    }
    .middle{
      height: 100%;
      .middleTop{
        height: 100%;
        .noData{
          width: 100%;
          height: 2.3rem;
          position: absolute;
          margin:auto;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          li{
            text-align: center;
            font-size: 0.34rem;
            color: #ccc;
            img{
              width: 1.85rem;
              height: 2.04rem;
            }
          }
        }
      }
    }
  }
</style>
