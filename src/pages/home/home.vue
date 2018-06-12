<template>
  <div class="home"  v-title="'首页'">
    <!-- loading -->
    <pht-modal v-show=show></pht-modal>
    <pht-loading v-show=show></pht-loading>
    <!-- 轮播 -->
    <div class="swiper">
      <loop></loop>
    </div>
    <!-- 上部导航 -->
    <div class="nav">
      <li>
        <img src="../../../static/images/home/home_users_Num.png">
        <span>当前用户</span>
        <span><b>{{dataStatisticss_CUST_SUM|farmatDataWan}}</b> 万人</span>
      </li>
      <li>
        <img src="../../../static/images/home/home_financing.png">
        <span>撮合融资</span>
        <span><b>{{dataStatisticss_INCOME_SUM|farmatDataWan}}</b> 万元</span>
      </li>
      <li>
        <img src="../../../static/images/home/home_income.png">
        <span>赚取收益</span>
        <span><b>{{dataStatisticss_INVEST_SUM|farmatDataYi}}</b> 亿元</span>
      </li>
    </div>
    <!-- 公告 -->
    <div class="news">
      <div class="news_img">
        <a>
          <img src="../../../static/images/home/home_announcement.png">
        </a>
      </div>
      <b class="shuxian"></b>
      <div class="news_content">
        <div id="rollText">
            <router-link  v-for="(item,index) in announcement" :key="index" :to="{path: 'news', query: {  id: item.ID ,url: 'home'}}">
              <img src="../../../static/images/home/home_announcement_sign.png">
              <span v-text="item.NOTICE_TITLE"></span>
            </router-link>
          <br />
        </div>
      </div>
    </div>
    <!-- 天天盈专区 -->
    <tty-list></tty-list>
    <!-- 月月盈专区和定投盈 -->
    <invest-list></invest-list>
    <!-- 安全保障 -->
    <div class="insurance ">
      <h1><img src="../../../static/images/home/home_insurance _title.png"></h1>
      <ul>
          <li>
        <a href="https://www.phtfdata.com/web6/hander/newBankHerd.do" target="_blank">
            <img src="../../../static/images/home/home_xwbank_cg.png">
            <span>新网银行存管</span>
        </a>
          </li>
          <li>
        <a href="https://www.phtfdata.com/web6/hander/MsafetyGuarantee.do" target="_blank">
            <img src="../../../static/images/home/home_insurance.png">
            <span>安全保障</span>
        </a>
          </li>
          <li>
        <a href="https://www.phtfdata.com/web6/notice/infoShow.do?infoType=basic" target="_blank">
            <img src="../../../static/images/home/home_information_disclosure.png">
            <span>信息披露</span>
        </a>
          </li>
      </ul>
    </div>
    <!-- 底部 -->
    <pht-bottomnav></pht-bottomnav>
  </div>


</template>

<script>
  import phtModal from '../../components/modal/modal.vue';
  import loop from '../../components/loop/loop.vue';
  import phtLoading from '../../components/loading/loading.vue';
  import ttyList from './tty/ttyList.vue';
  import investList from './yyyDcy/investList.vue';
  import phtBottomnav from '../../components/bottom/bottomnav.vue';
  import {mapGetters, mapActions,mapState} from 'vuex'
  import {getUserInfo} from '../../assets/js/getUserInfo'
  import { phtServer } from '../../assets/js/phtServer'
  import { Swiper,SwiperItem } from 'vux'
  import '../../assets/js/filter'
  import * as apis from '../../assets/js/jwt.apis'
  import store from '../../vuex/store'
  import { setTimeout, setInterval } from 'timers';
export default {
   data () {
    return {
      show:false,
      announcement:null,
      dataStatisticss_CUST_SUM:null,
      dataStatisticss_INCOME_SUM:null,
      dataStatisticss_INVEST_SUM:null,
    }
},

  mounted:function () {

    $('.bottom li:first-child img').attr('src',require('../../../static/images/homeOn.png'))
    $('.bottom li:first-child').addClass('on')
    this.announcementList();
    this.dataStatistics();
    this.getUserInfo();
  },
  computed:{

    ...mapGetters([
      'showLoading','accessAuth'
    ]),
  },
  methods:{
    ...mapActions({setAccessAuth: 'setAccessAuth'}),
    // 获取首页公告
    announcementList(){
        let that =this;
        apis.indexNotice().then((data)=> {
          this.announcement =data.result.main_data.data;

setTimeout(function(){
  var positionTop=0;
  var textDiv = document.getElementById("rollText");
  var newslist = textDiv.getElementsByTagName("a").length;
  var hang=Math.ceil(newslist/2)
  const hangnum=hang;
  setInterval(function(){
    hang--;
    if(hang<=0){
      hang=hangnum;
      positionTop=0
    }else{
      positionTop-=0.75
    }
    $('#rollText').css('top',positionTop+'rem')
  },5000)
},100)





        });
    },
    // 获取数据统计
    dataStatistics(){
        let that =this;
        apis.getDataStatistics().then((data)=> {
          this.dataStatisticss_CUST_SUM =data.result.main_data.data[0].CUST_SUM;
          this.dataStatisticss_INCOME_SUM =data.result.main_data.data[0].INCOME_SUM;
          this.dataStatisticss_INVEST_SUM =data.result.main_data.data[0].INVEST_SUM;
        });
    },
    getUserInfo() {
    this.setAccessAuth({'isNeedLogin':true,'isNeedRealName':true,'whereToGo':'/home'});
    console.log(store.state.user.userInfo.STATE);
    },

    //判断用户是否使用微信登陆过




  },

  components: {
    phtModal,
    phtLoading,
    loop,
    phtBottomnav,
    ttyList,
    investList,
    Swiper,
    SwiperItem
  }

}
</script>

<style lang="less" scoped>
@import "../../assets/css/home.less";
</style>
