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
        <span><b>{{dataStatisticss_INVEST_SUM| farmatDataYi }}</b> 亿元</span>
      </li>
      <li>
        <img src="../../../static/images/home/home_income.png">
        <span>赚取收益</span>
        <span><b>{{dataStatisticss_INCOME_SUM|farmatDataWan}}</b> 万元</span>
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

        <marquee class="news_content" style=" height: 0.7rem;">
          <marquee-item v-for="(item,index) in announcement" :key="index">

            <router-link :to="{path: 'news', query: {  id: item.ID ,url: '/wx/home'}}">
            <img src="../../../static/images/home/home_announcement_sign.png">
            {{item.NOTICE_TITLE}}
            </router-link>
          </marquee-item>

        </marquee>

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
  import { Marquee, MarqueeItem } from 'vux'
  import phtModal from '../../components/modal/modal.vue';
  import loop from '../../components/loop/loop.vue';
  import phtLoading from '../../components/loading/loading.vue';
  import ttyList from './tty/ttyList.vue';
  import investList from './yyyDcy/investList.vue';
  import phtBottomnav from '../../components/bottom/bottomnav.vue';
  import {mapGetters, mapActions,mapState} from 'vuex'
  import { Swiper,SwiperItem } from 'vux'
  import '../../assets/js/filter'
  import * as apis from '../../assets/js/jwt.apis'
  import * as regexfun from '../../../src/assets/js/jwt.regex';
  import * as urlReturn from '../../assets/js/jwt.userAgent'
export default {
   data () {
    return {
      show:false,
      announcement:null,
      dataStatisticss_CUST_SUM:'',
      dataStatisticss_INCOME_SUM:'',
      dataStatisticss_INVEST_SUM:'',
      code:null
    }
},

  mounted:function () {
    setTimeout(function(){
      $('.vux-swiper').css('height',parseInt($('.vux-swiper').css('height'))*2+'px')
    },10)
    $('.bottom li:first-child img').attr('src',require('../../../static/images/homeOn.png'))
    $('.bottom li:first-child').addClass('on')
    this.announcementList();
    // if(urlReturn.JwtUserAgentIsWeiXin()){
    //   this.isLoginWeiXIn()
    // }
    this.dataStatistics();
    // this.getUserInfo();
  },
  created(){
     this.code = this.$route.query.code
  },
  computed:{

    ...mapGetters([
      'showLoading','accessAuth','wxCode','tokenCode'
    ]),
  },
  methods:{
    ...mapActions({setAccessAuth: 'setAccessAuth',setUserInfo : 'setUserInfo',setwxCode:'setwxCode'}),
    // 获取首页公告
    announcementList(){
        let that =this;
        apis.indexNotice().then((data)=> {
          if(data.status =='00000000'){
            this.announcement =data.result.main_data.data;
          }else {
            regexfun.handleFailMsg(this,data.message)
          }


        });
    },
    // 获取数据统计
    dataStatistics(){
        let that =this;
        apis.queryMainPageTotalData().then((data)=> {
          if(data.status =='00000000'){
            this.dataStatisticss_CUST_SUM =data.result.main_data.data[0].CUST_SUM;
            this.dataStatisticss_INCOME_SUM =data.result.main_data.data[0].INCOME_SUM;
            this.dataStatisticss_INVEST_SUM =data.result.main_data.data[0].INVEST_SUM;
          }else {
            regexfun.handleFailMsg(this,data.message)
          }

        });
    },
    getUserInfo() {
    this.setAccessAuth({'isNeedLogin':true,'isNeedRealName':true,'whereToGo':'/home'});
    },
    //判断用户是否使用微信登陆过
    isLoginWeiXIn (){
      apis.WeiXinnewLogin(this.code,"1").then((data)=>{
        if(data.status == '00000000'){
          let userInfoList = data.result.main_data.data[0];
          //用户登陆过并且已授权刷新用户信息
          this.setUserInfo(userInfoList);
          this.setIsRealName(userInfoList.STATE);
          this.getTokenCode(userInfoList.token);
        }else if(data.status== '77777777'){
          regexfun.handleFailMsg(this,'您还没有授权登陆')
        }else{
          regexfun.handleFailMsg(this,data.message)
        }

      })

    }
  },

  components: {
    phtModal,
    phtLoading,
    loop,
    phtBottomnav,
    ttyList,
    investList,
    Swiper,
    SwiperItem,
    Marquee,
    MarqueeItem
  }

}
</script>

<style lang="less" scoped>
@import "../../assets/css/home.less";
</style>
