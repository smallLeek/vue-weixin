<template>
    <div class="setting">
        <div class="title">
            <router-link to="/account">
                <img src="../../../../static/images/goBack.png">
            </router-link>
            <span>设置</span>
        </div>
        <div class="nav">
            <ul>
                <li>
                    <span><img src="../../../../static/images/setting/setting_datum.png"></span>
                    <span>我的资料</span>
                </li>
                <li v-on:click="goRisk()">
                    <span><img src="../../../../static/images/setting/setting_risk.png"></span>
                    <span>风险承受能力评估</span>
                </li>
                <li>
                    <span><img src="../../../../static/images/setting/setting_security.png"></span>
                    <span>安全保障</span>
                </li>
                <li>
                    <span><img src="../../../../static/images/setting/setting_about.png"></span>
                    <span>关于我们</span>
                </li>
            </ul>
        </div>
        <div class="exit">
            <input type="button" value="退出当前账号">
        </div>
        <div class="bottom">
            <img src="../../../../static/images/setting/setting_service.png">
        </div>
    </div>
</template>
<script>
  import { phtServer } from '../../../assets/js/phtServer'
  import * as apis from '../../../assets/js/jwt.apis'
  import {mapGetters, mapActions,mapState} from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed:{
    ...mapGetters([
      'loginStatus','userInfo','tokenCode'
    ])
  },
  methods:{
    //去风险承受能力评估
    goRisk() {
      let userId = this.userInfo.ID;
      let userType = this.userInfo.USER_TYPE;
      apis.userBaseData(userId,userType).then( (data) => {
        this.userData = data.result.main_data;
        let investscore = this.userData.INVESTSCORE;
        let invest_score = this.userData.INVEST_SCORE;
        if (investscore == "0") {
          let url = 'http://139.129.12.93:3102/web2/hander/investor.do?CUST_ID=' + userId;
          window.location.href = url;
        } else{
          let url = 'http://139.129.12.93:3102/web2/hander/investorResult.do?CUST_ID=' + userId + '&INVEST_SCORE=' + invest_score;
          window.location.href = url;
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.setting{
    background-color: #f8f8f8;
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
    a{
        position: absolute;
        width: 1rem;
        height: 1rem;
        left: 0;
        top: -0.02rem
    }
    a:hover{
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-user-select: none;
        -moz-user-focus: none;
        -moz-user-select: none;
        text-decoration: none;
    }
}
.nav{
    height: 7.32rem;
    ul{
        padding: 0 0.17rem;
        margin-top: 1rem;
            li{
                float: left;
                margin-top: 0.16rem;
                width: 3.5rem;
                height: 3.5rem;
                background-color: #fff;
                text-align: center;
                border: 1px solid #e0e0e0;
                box-sizing: border-box;
                border-radius: 0.15rem;
                span{
                    display: block
                }
                span:first-child{
                    margin-top: 0.7rem;
                    img{
                        width: 1.4rem;
                    }
                }
                span:last-child{
                    margin-top: 0.3rem;
                    font-size: 0.3rem;
                    color: #333333;
                }
            }
        li:nth-child(2n){
            margin-left: 0.16rem;
        }
        a:hover{
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
            -webkit-user-select: none;
            -moz-user-focus: none;
            -moz-user-select: none;
            text-decoration: none;
        }
    }
}
.exit{
    margin-top: 0.9rem;
    height: 1rem;
    input{
        width: 100%;
        height: 1rem;
        font-size: 0.32rem;
        color: #666666;
        background-color: #fff;
        border: none;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        outline:none;
        -webkit-appearance:none;
    }
}
.bottom{
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    text-align: center;
    img{
        width: 5rem;
    }
}
</style>
