<template>
  <div class="gainRecording">
    <div class="title">
      <b @click="goBackOne()">
        <img src="../../../../static/images/goBack.png">
      </b>
      <span>收益记录</span>
    </div>
    <div  v-if="dtyList">
      <div class="nav">
        <span>类型</span>
        <span>时间</span>
        <span>金额(元)</span>
      </div>
      <div class="list" v-if="dtyList.length != 0">
        <ul>
          <li v-for="item in dtyList">
            <span>{{item.PRODUCT_NAME}}</span>
            <span>{{item.EXPIRE}}</span>
            <span>{{item.PLAN_INCOME}}</span>
          </li>
        </ul>
      </div>
      <div class="noData" v-if="dtyList.length == 0">
        <div>
          <img src="../../../../static/images/noData.png" alt="">
          <p>暂无收益记录</p>
        </div>
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
      return {
        dtyList:null,
      }
    },
    mounted(){
      this.getData();
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },
    methods:{
      goBackOne(){
        this.$router.push({path:'/dtyAccount'});
      },
      getData(){
        let userId = this.userInfo.ID;
        let userType = '1';
        let yjf_id = this.userInfo.YJF_ID;
        apis.queryInvestListApp(userId, userType, '', yjf_id, '100', '1' ).then((data) => {
          if (data.status == '00000000') {
            this.dtyList = data.result.main_data.data;
          }else{
            regexfun.handleFailMsg(this, data.message);
          }
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
  .nav{
    position: fixed;
    top: 1rem;
    width: 7.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.25rem;
    margin: auto;
    display: flex;
    color: #333333;
    background-color: #fff;
    span{
      flex: 1;
      font-size: 0.28rem;
      text-align: center
    }
  }
  .list{
    margin-top: 2.1rem;
    background-color: #fff;
    ul{
      width: 7rem;
      margin: auto;
      li{
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.28rem;
        border-bottom: 1px solid #e0e0e0;
        display: flex;
        span{
          flex: 1;
          text-align: center;
          color: #333333;
        }
        span:last-child{
          color: #ff8400;
        }
      }
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
