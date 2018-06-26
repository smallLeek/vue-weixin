<template>
  <!--月月盈和定投盈是一个页面-->
  <div class="investSuccess" v-title="'投资成功'">
    <div class="title">
      <span>投资</span>
    </div>
    <div class="invest">
      <div class="investTop">
        <div class="investIcon">
          <p>
            <img src="../../../static/images/investSuccess.png" alt="">
          </p>
          <div class="investOn">
            投资提交成功
          </div>
        </div>
      </div>
      <ul class="investMiddle">
        <li class="clearfix">
          <span>投资金额</span>
          <span>{{withDraw | farmatAmount }}</span>
        </li>
        <li>
          <span>项目名称</span>
          <span v-text="proj_name"></span>
        </li>
        <li v-if="proTime">
          <span>投资期限</span>
          <span >{{proTime}}个月</span>
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
  import '../../assets/js/filter'
  import * as apis from '../../assets/js/jwt.apis'
  import * as regexfun from '../../../src/assets/js/jwt.regex';
  import {mapGetters, mapActions,mapState} from 'vuex'
  export default {
    data() {
      return {
        isDq:true,
        withDraw:'',
        proj_name:'',
        proTime:''
      }
    },
    computed: {
      //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
      ...mapGetters([
        'loginStatus','userInfo','tokenCode','isRealName'
      ])
    },
    mounted() {
      this.getData();
    },
    methods:{
      ...mapActions({setUserInfo: 'setUserInfo',setIsRealName:'setIsRealName',getTokenCode:'getTokenCode'}),
      getData(){
        this.withDraw = this.$route.query.withDraw;
        this.proj_name = this.$route.query.proj_name;
        this.proTime = this.$route.query.proTime;
      },
      goBack(){
          let userState = store.state.user
          let  userId = store.state.user.userInfo.ID;
          apis.userBaseData(userId,'1').then((data) => {
            if(data.status == '00000000'){
              location.href = location.origin +  userState.accessAuth.whereToGo;
              let res = data.result.main_data
              this.setUserInfo(res);
              this.setIsRealName(res.STATE);
              this.getTokenCode(res.token);
            }else {
              regexfun.handleFailMsg(this,data.message)
            }


          })
      },
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
      width: 1.3rem;
      height: 1.3rem;
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
  .br10{
    outline: none;
  }
</style>
