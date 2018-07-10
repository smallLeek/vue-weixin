<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="list in bannerList" :style="{backgroundImage: 'url(' +list.FILE_PATH+ ')'}"  @click="changeBanner(list)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { phtServer } from '../../assets/js/phtServer'
  import Swiper from '../../../static/idangerous.swiper'
  import * as apis from '../../assets/js/jwt.apis'
  import {mapGetters, mapActions,mapState} from 'vuex'
  import * as userAge from '../../assets/js/jwt.userUrl'
  export default {
    data() {
      return {
        bannerList:null,
        userData:null
      }
    },
    computed: {
      ...mapGetters([
        'loginStatus','userInfo','tokenCode'
      ])
    },
    mounted () {
      this.loopBanner();
      let that = this;
      that.swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 5000,
        paginationClickable: true,
        preventClicks: false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        noSwiping: true,
        effect: false,
        autoplayDisableOnInteraction: false,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,
        onSlideChangeEnd: function (swiper) {
          swiper.update()
        }
      });

    },
    methods:{
      ...mapActions({setAccessAuth: 'setAccessAuth'}),
      loopBanner () {
        let that =this;
        apis.getBanner("huoqiapp_banner").then((data)=> {
          that.swiper.startAutoplay()
          that.swiper.reLoop()
          this.bannerList =data.result.main_data.data;
          //加风险评估页面
          let addBanner = {
            "CREATE_DATE": "",
            "FILE_LINK_TYPE": 1,
            "FILE_NAME": "app-banner-修改.png",
            "FILE_PATH":require("../../../static/images/home/risk.png"),
            "FILE_TITLE": "风险承受能力评估",
            "FILE_TYPE": "huoqiapp_banner",
            "IS_LOGIN": "1",
            "LINK_COMMENT": "",
            "TABLE_ID": "huoqiapp_banner",
            "TABLE_NAME": "WEB_PIC"
          }
          if(this.loginStatus == true){
            let userId = this.userInfo.ID;
            apis.userBaseData(userId,'1').then( (data) => {
              this.userData = data.result.main_data;
              let investscore  = this.userData.INVESTSCORE;
              let invest_score = this.userData.INVEST_SCORE;
              if(investscore == "0"){
                addBanner.LINK_COMMENT = 'http://139.129.12.93:3102/web2/hander/investor.do?CUST_ID='+userId;
                this.bannerList.push(addBanner)
              }else if(investscore == "1"){
                addBanner.LINK_COMMENT = 'http://139.129.12.93:3102/web2/hander/investorResult.do?CUST_ID='+userId+'&INVEST_SCORE='+invest_score;
                this.bannerList.push(addBanner)
              }else{

              }
            })
          }else{
            this.bannerList.push(addBanner)
          }
        });

      },
      changeBanner (list) {
        if(list.FILE_PATH ==  "../../../static/images/home/risk.png"){
          this.setAccessAuth({whereToGo:'/wx/home'})
          this.$router.push({path:'/blank'})

        }else{
          /**
           * 判断点击banner图是否登录
           */
          if(list.IS_LOGIN == '1'){
            if(this.loginStatus == true){
              window.open(list.LINK_COMMENT)
            }else{
              //如果没有登陆就进登陆页面
              //location.href =  userAge.loginUrl()
              this.$router.push({path:'/loginRegister/login'})
            }
          }else{
            this.setAccessAuth({whereToGo:'/wx/home'})
            this.$router.push({path:'/detail',query:{stage:list.LINK_COMMENT}})
          }
        }

      }
    }
  }
</script>

<style  scoped>
  .swiper-slide{
    -moz-background-size:100% 100%;
    background-size:100% 100%;
    background-repeat: no-repeat;
    width: 7.5rem;
    height: 3.45rem;
  }

</style>
