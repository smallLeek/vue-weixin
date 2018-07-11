<template>
  <div class="box" v-title="'风险能力评估'">
    <div class="title">
      <a @click="whereGo">
        <img src="../../../static/images/goBack.png">
      </a>
      <span>风险能力评估</span>
    </div>
    <div class="Container">
      <iframe  name="invest" frameBorder=0  width="100%"></iframe>
    </div>

  </div>
</template>

<script>
  import * as apis from '../../assets/js/jwt.apis'
  import {mapGetters, mapActions,mapState} from 'vuex'
  export default {
    data () {
      return {

      }
    },
    computed:{
      ...mapGetters([
        'loginStatus','userInfo','tokenCode','accessAuth'
      ])
    },
    mounted() {
      this.openPage();
    },
    methods:{
      openPage() {
        let userId = this.userInfo.ID;
        apis.userBaseData(userId,'1').then( (data) => {
          this.userData = data.result.main_data;
          let investscore = this.userData.INVESTSCORE;
          let invest_score = this.userData.INVEST_SCORE;
          if (investscore == "0") {
            let url = 'http://139.129.12.93:3102/web2/hander/investor.do?CUST_ID=' + userId;
            $('iframe').attr('src',url);
          } else{
            let url = 'http://139.129.12.93:3102/web2/hander/investorResult.do?CUST_ID=' + userId + '&INVEST_SCORE=' + invest_score;
            $('iframe').attr('src',url);
          }
        })
      },
      whereGo(){
        location.href = location.origin +  this.accessAuth.whereToGo
      }
    }
  }
</script>

<style lang="less" scoped>
  .box{
    overflow: auto;
  }
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
  }
.Container{
  margin-top: 1rem;
  width: 7.5rem;
  height: 100%;
}
.Container iframe{
  width: 7.5rem;
  height: 12rem;
}
</style>
