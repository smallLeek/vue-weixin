<template>
  <!--月月盈和定投盈是一个页面-->
  <div class="investSuccess">
    <div class="title">
      <b v-on:click="goBackOne()">
        <img src="../../../static/images/goBack.png">
      </b>
      <span>投资</span>
    </div>
    <div class="invest">
      <div class="investTop">
        <div class="investIcon">
          <p>
            <img src="../../../static/images/investOn.png" alt="">
          </p>
          <div class="investOn">
            投资提交成功
          </div>
        </div>
      </div>
      <ul class="investMiddle">
        <li class="clearfix">
          <span>投资金额</span>
          <span>1</span>
        </li>
        <li>
          <span>项目名称</span>
          <span>1</span>
        </li>
        <li v-show="isDq == true">
          <span>投资期限</span>
          <span>1</span>
        </li>
      </ul>
      <div class="investBottom">
        <button class="br10" v-on:click="goBack()">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
  import store from '../../vuex/store'
  export default {
    data() {
      return {
        isDq:true
      }
    },
    computed: {

    },
    mounted() {
      this.getData();
    },
    methods:{
      getData(){
        console.log(this.$router.parmas);
      },
      goBack(){
        let userState = store.state.user
        location.href = location.origin +  userState.accessAuth.whereToGo;
      },
      goBackOne(){
        this.$router.go(-1);
      }
    },
    components: {

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
  .investSuccess{
    background-color: #f8f8f8;
    width: 7.5rem;
    height: 100%;
    .invest{
      margin-top: 1rem;
      .investTop{
        position: relative;
        width: 100%;
        height: 4rem;
        .investIcon{
          height: 2rem;
          position: absolute;
          margin: auto;
          top:0;
          left: 0;
          bottom: 0;
          right: 0;
          text-align: center;
          p{
            font-size: 0;
            margin-bottom: 0.5rem;
            img{
              width: 1rem;
              height: 1rem;
              font-size: 0;
            }
          }
          div{
            text-align: center;
            font-size: 0.38rem;
            color: #3a3a3a;
          }
        }
      }
      .investMiddle{
        li{
          span{
            display: inline-block;
            width: 50%;
            text-align: left;
            font-size: 0.38rem;
            float: left;
            padding-left:0.2rem;
            height: 0.8rem;
            line-height: 0.8rem;
            color: #b0b0b0;
          }
          span:last-child{
            text-align: right;
            padding-right: 0.2rem;
          }
        }
      }
      .investBottom{
        margin-top:1.3rem;
        text-align: center;
        button{
          border: none;
          background: #fb4748;
          width: 7.1rem;
          height: 1rem;
          color: #fff;
          font-size: 0.38rem;
        }
      }
    }
  }
</style>
