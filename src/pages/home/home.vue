<template>
<keep-alive include="home">
  <div class="home"  v-title="'融资'">
    <!-- loading -->
    <pht-modal v-show=show></pht-modal>
    <pht-loading v-show=show></pht-loading>
    <!-- 头部 -->
    <!-- <div class="header">
      {{loginStatus}}
      {{userInfo.data}}
    </div> -->
    <!-- 轮播 -->
    <div class="swiper">
      <loop></loop>
    </div>
    <!-- 上部导航 -->
    <div class="nav">
      <li>
        <img src="../../../static/images/home_users_Num.png">
        <span>当前用户</span>
        <span><b>{{dataStatisticss_CUST_SUM}}</b> 万人</span>
      </li>
      <li>
        <img src="../../../static/images/home_financing.png">
        <span>撮合融资</span>
        <span><b>{{dataStatisticss_INCOME_SUM}}</b> 亿元</span>
      </li>
      <li>
        <img src="../../../static/images/home_income.png">
        <span>赚取收益</span>
        <span><b>{{(dataStatisticss_INVEST_SUM/10000).toFixed(2)}}</b> 万元</span>
      </li>
    </div>
    <!-- 公告 -->
    <div class="news">
      <div class="news_img"><router-link to="/announcementList"><img src="../../../static/images/home_announcement.png"></router-link></div>
      <b class="shuxian"></b>
      <div class="news_content">
        <ul>
          <router-link :to="{path: 'news', query: {  name: '123',url: 'home'}}" v-for="(item,index) in announcement">
            <li>
              <img src="../../../static/images/home_announcement_sign.png">
              <span>{{item.NOTICE_TITLE}}</span>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <!-- 天天盈专区 -->
    <div class="tty_area">
      <div class="area_title">
        <img src="../../../static/images/home_tty_title.png" class="area_title_img">
        <router-link to="/ttyMore"><span>更多<img src="../../../static/images/home_more.png"></span></router-link>
      </div>
      <ul v-for="item in recommendedProject_tty">
        <li>{{item.PROJ_NAME}}（{{item.RATE}}%）</li>
        <li>
          <span>
            <b>{{item.RATE}}</b>%
          </span>
          <span>
            <b>{{item.MAX_AMOUNT/10000}}</b>万元
          </span>
          <span>
            <b>{{item.REDEEM_MAX_AMOUNT}}</b>元
          </span>
        </li>
        <li>
          <span>年化收益</span>
          <span>需求金额</span>
          <span>剩余可投</span>
        </li>
        <!-- 进度条 -->
        <li>
          <span><s :style="{width:(item.REDEEM_STATUS)+'%'}"></s></span>
          <span>{{item.REDEEM_STATUS}}%</span>
        </li>
        <li>
          <router-link :to="{path: 'ttyParticulars', query: {  name: 'home',id: item.PROJ_CODE}}">立即投资</router-link>
        </li>
      </ul>
    </div>
    <!-- 月月盈专区 -->
    <div class="yyy_area">
      <div class="area_title">
        <img src="../../../static/images/home_yyy_title.png" class="area_title_img">
        <router-link to="/yyyMore"><span>更多<img src="../../../static/images/home_more.png"></span></router-link>
      </div>
        <router-link :to="{path: 'yyyParticulars', query: {  name: 'home',id: item.PROJ_CODE}}" v-for="(item , index) in recommendedProject_yyy">
          <ul>
            <li>{{item.PROJ_NAME}}</li>
            <li>
              <span>
                <b>{{item.ANNUAL_RATE}}</b>%
              </span>
              <span>
                <b>{{item.LOAN_LIMITTIME}}</b>个月
              </span>
              <span>
                <b>{{item.SURPLUS_AMOUNT}}</b>元
              </span>
            </li>
            <li>
              <span>年化收益</span>
              <span>投资期限</span>
              <span>剩余可投</span>
            </li>
            <!-- 进度条 -->
            <li>
              <span><b><s :style="{width:100-(item.SURPLUS_PART/item.BID_AMOUNT)*100+'%'}"></s></b></span>
              <span>{{100-(item.SURPLUS_PART*100/item.BID_AMOUNT).toFixed(2)}}%</span>
            </li>
          </ul>
        </router-link>
    </div>
    <!-- 定存盈专区 -->
    <div class="yyy_area">
      <div class="area_title">
        <img src="../../../static/images/home_dcy_title.png" class="area_title_img">
        <router-link to="/dcyMore"><span>更多<img src="../../../static/images/home_more.png"></span></router-link>
      </div>
      <router-link :to="{path: 'dcyParticulars', query: {  name: '123',url: 'home'}}" v-for="(item ,index) in recommendedProject_dcy" :key="index">
        <ul>
          <li>{{item.PROJ_NAME}}</li>
          <li>
            <span>
              <b>{{item.ANNUAL_RATE}}</b>%
            </span>
            <span>
              <b>{{item.LOAN_LIMITTIME}}</b>个月
            </span>
            <span>
              <b>{{item.SURPLUS_AMOUNT}}</b>元
            </span>
          </li>
          <li>
            <span>年化收益</span>
            <span>投资期限</span>
            <span>剩余可投</span>
          </li>
          <!-- 进度条 -->
          <li>
            <span><b><s :style="{width:100-(item.SURPLUS_PART/item.BID_AMOUNT)*100+'%'}"></s></b></span>
            <span>{{100-(item.SURPLUS_PART*100/item.BID_AMOUNT).toFixed(2)}}%</span>
          </li>
        </ul>
      </router-link>
    </div>
    <!-- 安全保障 -->
    <div class="insurance ">
      <h1><img src="../../../static/images/home_insurance _title.png"></h1>
      <ul>
        <router-link to="">
          <li>
            <img src="../../../static/images/home_xwbank_cg.png">
            <span>新网银行存管</span>
          </li>
        </router-link>
        <router-link to="">
          <li>
            <img src="../../../static/images/home_insurance.png">
            <span>安全保障</span>
          </li>
        </router-link>
        <router-link to="">
          <li>
            <img src="../../../static/images/home_information_disclosure.png">
            <span>信息披露</span>
          </li>
        </router-link>
      </ul>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <li class="on">
        <router-link to="/home">
        <span><img src="../../../static/images/homeOn.png"></span><span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/account">
        <span><img src="../../../static/images/user.png"></span><span>我的</span>
        </router-link>
      </li>
    </div>
  </div>
</keep-alive>


</template>

<script>
  import phtModal from '../../components/modal/modal.vue';
  import loop from '../../components/loop/loop.vue';
  import phtLoading from '../../components/loading/loading.vue';
  import {mapGetters, mapActions,mapState} from 'vuex'
  import {getUserInfo} from '../../assets/js/getUserInfo'
  import { phtServer } from '../../assets/js/phtServer'
  import * as apis from '../../assets/js/jwt.apis'
export default {
   data () {
    return {
      show:false,
      announcement:null,
      dataStatisticss_CUST_SUM:null,
      dataStatisticss_INCOME_SUM:null,
      dataStatisticss_INVEST_SUM:null,
      recommendedProject_tty:null,
      recommendedProject_yyy:null,
      recommendedProject_dcy:null,
    }
},

  mounted:function () {
    this.announcementList();
    this.dataStatistics();
    this.recommendedProjectList()
    this.getUserInfo();
  },
    beforeRouteLeave(to, from, next) {
        // 设置下一个路由的 meta
      to.meta.keepAlive = true;  // B 跳转到 A 时，让 A 缓存，即不刷新
      next();
  },
  methods:{
    // 获取首页公告
    announcementList(){
        let that =this;
        let CURR_PAGE_NUM=1;
        let PER_PAGE_SIZE=2;
        apis.getNotice("重要公告","网站",CURR_PAGE_NUM,PER_PAGE_SIZE).then((data)=> {
          this.announcement =data.result.main_data.data;
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
    // 获取推荐项目
    recommendedProjectList(){
        let that =this;
        function formatNum(num) {
          return (num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
        apis.recommendedProject().then((data)=> {
          this.recommendedProject_tty=data.result.main_data.main_dataTTY;
          this.recommendedProject_yyy=data.result.main_data.main_dataYYY;
          this.recommendedProject_dcy=data.result.main_data.main_dataDCY;
          for (let i=0;i<this.recommendedProject_tty.length;i++){
            this.recommendedProject_tty[i].REDEEM_MAX_AMOUNT=formatNum(this.recommendedProject_tty[i].REDEEM_MAX_AMOUNT)
          }
          for (let i=0;i<this.recommendedProject_yyy.length;i++){
            this.recommendedProject_yyy[i].SURPLUS_AMOUNT=formatNum(this.recommendedProject_yyy[i].SURPLUS_AMOUNT)
          }
          for (let i=0;i<this.recommendedProject_dcy.length;i++){
            this.recommendedProject_dcy[i].SURPLUS_AMOUNT=formatNum(this.recommendedProject_dcy[i].SURPLUS_AMOUNT)
          }
        });
    },
    getUserInfo() {
//      getUserInfo.getCode()

    }
  },

  components: {
    phtModal,
    phtLoading,
    loop
  }

}
</script>

<style lang="less" scoped>
@import "../../assets/css/home.less";
</style>
