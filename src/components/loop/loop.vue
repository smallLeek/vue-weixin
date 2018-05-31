<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="list in bannerList" :style="{backgroundImage: 'url(' +list.FILE_PATH+ ')'}"  @click="changeBanner(list)">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>

<script>
  import { phtServer } from '../../assets/js/phtServer'
  import Swiper from '../../../static/idangerous.swiper'
  import * as apis from '../../assets/js/jwt.apis'
  export default {
    data() {
      return {
        bannerList:null
      }
    },
    cumputed: {

    },
    mounted () {
      this.loopBanner()
    },
    methods:{
      loopBanner () {
        let that =this;
        apis.getBanner("huoqiapp_banner").then((data)=> {
          this.bannerList =data.result.main_data.data;
        });
        setTimeout(function () {
          let swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: 3000,
            paginationClickable: true,
            preventClicks: false,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            noSwiping: true,
            effect: false,
            pagination : '.swiper-pagination',
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
