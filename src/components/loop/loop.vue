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
  import {mapGetters, mapActions, mapStates} from 'vuex'
  export default {
    data() {
      return {
        bannerList:null
      }
    },
    cumputed: {
      ...mapGetters([
        'loginStatus','userInfo','tokenCode'
      ])
    },
    mounted () {
      this.loopBanner()
    },
    methods:{
      loopBanner () {
        let that =this;
        apis.getBanner("huoqiapp_banner").then((data)=> {
          this.bannerList =data.result.main_data.data;
          if(this.loginStatus == true){
            let addBanner = {
              "CREATE_DATE": "2017-11-22 11:20:19",
              "FILE_LINK_TYPE": 1,
              "FILE_NAME": "app-banner-修改.png",
              "FILE_PATH": "http://139.129.12.93:3102//file/file/WEB_PIC/huoqiapp_banner//1511140962272.png",
              "FILE_TITLE": "惠迎11.11 携友集福利！",
              "FILE_TYPE": "huoqiapp_banner",
              "ID": 13995,
              "IS_LOGIN": "0",
              "LINK_COMMENT": "http://139.129.12.93:3102/web2/hander/MsinglesDay.do",
              "TABLE_ID": "huoqiapp_banner",
              "TABLE_NAME": "WEB_PIC"
            }
          }
        });
        setTimeout(function () {
          let swiper = new Swiper('.swiper-container', {
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
              swiper.update();
              swiper.startAutoplay();
              swiper.reLoop();
            }
          });
        },500);

      },
      changeBanner (list) {
        window.open(list.LINK_COMMENT)
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
