<template>
   <div class="limit" v-title="'限额说明'">
     <div class="title">
       <router-link to="/recharge">
         <img src="../../../static/images/goBack.png">
       </router-link>
       <span>限额说明</span>
     </div>
     <ul>
       <li v-for="(item,index) in bankData">
         <img :src="item.PICTURE_URL" alt="">
         <span class="limit_style">
           <span>{{item.BANK_NAME}}</span><br>
           <span>{{item.TOTAL_LIMIT}}</span>
         </span>
       </li>
     </ul>
   </div>
</template>

<script>
  import * as apis from '../../assets/js/jwt.apis'
    export default {
        data(){
          return{
            bankData:null
          }
        },
      mounted(){
          this.getLimitInfo()
      },
      methods:{
        //限额说明
        getLimitInfo() {
          let bind_type = "0";
          let pay_flag = "1";
          apis.selectXwBank(bind_type, pay_flag).then( (data) => {
            this.bankData = data.result.main_data.data;
          })
        },

      }
    }
</script>

<style lang="less" scoped>
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
  }
  .limit{
    margin-top: 1rem;
    ul{
      li{
        border-bottom: .01rem solid #e0e0e0;
        img{
          vertical-align: middle;
        }
        .limit_style{
          margin-left: .2rem;
          text-align: left;
          height: 100%;
          display: inline-block;
          line-height: .4rem;
          span:first-child{
            color: #333;
            font-size: .32rem;
            font-weight: 800;
          }
          span:last-child{
            color: #333;
            font-size: .26rem;
          }
        }
      }
      li:last-child{
        border-bottom: none;
      }
    }
  }

</style>
