<template>
  <div class="ttyRecord">
    <div class="title">
      <b @click="goBackOne()">
        <img src="../../../../static/images/goBack.png">
      </b>
      <span>天天盈交易记录</span>
    </div>
    <div class="list">
      <ul v-if="ttyList">
        <li v-for="item in ttyList">
          <p>
            <span>{{item.TYPESTR}}</span>
            <span  v-if="isType == 0">-{{item.AMOUNT | farmatAmount}}元</span>
            <span class="color387eff" v-if="isType == 1">+{{item.AMOUNT | farmatAmount}}元</span>
            <span class="color666" v-if="isType == 2">+{{item.AMOUNT | farmatAmount}}元</span>
          </p>
          <p>
            <span>投资时间：{{item.SHOWTIME}}</span>
            <span>交易成功</span>
          </p>
        </li>
      </ul>
      <div class="noData" v-if="!ttyList">
        <div>
          <img src="../../../../static/images/noData.png" alt="">
          <p>还没有冻结中的债权</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import * as apis from '../../../assets/js/jwt.apis'
  import {mapGetters,mapActions} from 'vuex'
  import '../../../assets/js/filter'

  export default {
    data(){
      return {
        ttyList:null,
        isType:'',
        type:''
      }
    },
    computed:{
      ...mapGetters(['userInfo'])
    },
    mounted(){
      this.getInvestList();
    },
    methods:{
      goBackOne(){
        this.$router.go(-1);
      },
      getInvestList(){
        let userId = this.userInfo.ID;
        let proj_code = this.getProjCode;
        let userType = '1';
        apis.userBaseData(userId,'1').then( (data) => {
          apis.DdProjTradeRecord(userId, userType, '3','100','1').then((data) => {
            this.ttyList= data.result.main_data.data;
            (this.ttyList).map((item) => {
              this.type = item.TYPE;
              this.state = item.STATE;
              if(this.type == "4" || this.type=="1" || this.type== "3" || this.type=="11" || this.type=="12"){
                this.isType = '0'
              }else if((this.type == "0") || (this.state = "交易失败")){
                this.isType = '1'
              }else {
                this.isType = '2'
              }
            });
          })
        })
      },
    },
  }
</script>
<style lang="less" scoped>

  .ttyRecord{
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
  }
  // list
  .list{
    margin-top: 1rem;
    width: 100%;
    ul{
      li{
        padding: 0 0.2rem;
        height: 1.3rem;
        background-color: #fff;
        border-bottom: 1px solid #f8f8f8;
        box-sizing: border-box;
        p{
          line-height: 1;
          clear: both;
          span:first-child{
            float: left;
          }
          span:last-child{
            float: right;
          }
        }
        p:first-child{
          color: #333333;
          font-size: 0.3rem;
          padding-top: 0.3rem;
          span:last-child{
            color: #ff8400;
            font-size: 0.32rem;
            font-family: 黑体;
          }
          span.on{
            color: #387eff
          }
        }
        p:last-child{
          color: #666666;
          font-size: 0.26rem;
          padding-top: 0.16rem;
        }
      }
    }
  }
  .list ul li p:first-child span.color387eff{
    color: #387eff;
  }
  .list ul li p:first-child span.color666{
    color: #666;
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
