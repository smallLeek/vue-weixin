<template>
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
    <div class="swiper">轮播</div>
    <!-- 上部导航 -->
    <div class="nav">
      <li>
        <img src="../../static/images/home_users_Num.png">
        <span>当前用户</span>
        <span><b>16.64</b> 万人</span>
      </li>
      <li>
        <img src="../../static/images/home_financing.png">
        <span>撮合融资</span>
        <span><b>32.64</b> 亿元</span>
      </li>
      <li>
        <img src="../../static/images/home_income.png">
        <span>赚取收益</span>
        <span><b>342.12</b> 万元</span>
      </li>
    </div>
    <!-- 公告 -->
    <div class="news">
      <div class="news_img"><router-link to="/announcement_list"><img src="../../static/images/home_announcement.png"></router-link></div>
      <b class="shuxian"></b>
      <div class="news_content">
        <ul>
          <router-link :to="{path: 'news', query: {  name: 'home'+'123'}}">
            <li>
              <img src="../../static/images/home_announcement_sign.png">
              <span>关于民生、招商银行恢复使用的公告</span>
            </li>
          </router-link>
          <router-link :to="{path: 'news', query: {  name: 'home'+'123'}}">
            <li>
              <img src="../../static/images/home_announcement_sign.png">
              <span>关于部分银行系统维护的公告</span>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <!-- 天天盈专区 -->
    <div class="tty_area">
      <div class="area_title">
        <img src="../../static/images/home_tty_title.png" class="area_title_img">
        <router-link to=""><span>更多<img src="../../static/images/home_more.png"></span></router-link>
      </div>
      <ul>
        <li>天天盈2015502（8%）</li>
        <li>
          <span>
            <b>10</b>%
          </span>
          <span>
            <b>50</b>万元
          </span>
          <span>
            <b>400,000</b>元
          </span>
        </li>
        <li>
          <span>年化收益</span>
          <span>需求金额</span>
          <span>剩余可投</span>
        </li>
        <!-- 进度条 -->
        <li>
          <span><s></s></span>
          <span>60%</span>
        </li>
        <li>
          <router-link to="">立即投资</router-link>
        </li>
      </ul>
    </div>
    <!-- 月月盈专区 -->
    <div class="yyy_area">
      <div class="area_title">
        <img src="../../static/images/home_yyy_title.png" class="area_title_img">
        <router-link to=""><span>更多<img src="../../static/images/home_more.png"></span></router-link>
      </div>
      <ul>
        <li>月月盈2015502</li>
        <li>
          <span>
            <b>13</b>%
          </span>
          <span>
            <b>6</b>个月
          </span>
          <span>
            <b>400,000</b>元
          </span>
        </li>
        <li>
          <span>年化收益</span>
          <span>投资期限</span>
          <span>剩余可投</span>
        </li>
        <!-- 进度条 -->
        <li>
          <span><b><s></s></b></span>
          <span>60%</span>
        </li>
      </ul>
      <ul>
        <li>月月盈2015502</li>
        <li>
          <span>
            <b>13</b>%
          </span>
          <span>
            <b>6</b>个月
          </span>
          <span>
            <b>400,000</b>元
          </span>
        </li>
        <li>
          <span>年化收益</span>
          <span>投资期限</span>
          <span>剩余可投</span>
        </li>
        <!-- 进度条 -->
        <li>
          <span><b><s></s></b></span>
          <span>60%</span>
        </li>
      </ul>
    </div>
    <!-- 定存盈专区 -->
    <div class="yyy_area">
      <div class="area_title">
        <img src="../../static/images/home_dcy_title.png" class="area_title_img">
        <router-link to=""><span>更多<img src="../../static/images/home_more.png"></span></router-link>
      </div>
      <ul>
        <li>定存盈2015502</li>
        <li>
          <span>
            <b>13</b>%
          </span>
          <span>
            <b>6</b>个月
          </span>
          <span>
            <b>400,000</b>元
          </span>
        </li>
        <li>
          <span>年化收益</span>
          <span>投资期限</span>
          <span>剩余可投</span>
        </li>
        <!-- 进度条 -->
        <li>
          <span><b><s></s></b></span>
          <span>60%</span>
        </li>
      </ul>
      <ul>
        <li>定存盈2015502</li>
        <li>
          <span>
            <b>13</b>%
          </span>
          <span>
            <b>6</b>个月
          </span>
          <span>
            <b>400,000</b>元
          </span>
        </li>
        <li>
          <span>年化收益</span>
          <span>投资期限</span>
          <span>剩余可投</span>
        </li>
        <!-- 进度条 -->
        <li>
          <span><b><s></s></b></span>
          <span>60%</span>
        </li>
      </ul>
    </div>
    <!-- 安全保障 -->
    <div class="insurance ">
      <h1><img src="../../static/images/home_insurance _title.png"></h1>
      <ul>
        <router-link to="">
          <li>
            <img src="../../static/images/home_xwbank_cg.png">
            <span>新网银行存管</span>
          </li>
        </router-link>
        <router-link to="">
          <li>
            <img src="../../static/images/home_insurance.png">
            <span>安全保障</span>
          </li>
        </router-link>
        <router-link to="">
          <li>
            <img src="../../static/images/home_information_disclosure.png">
            <span>信息披露</span>
          </li>
        </router-link>
      </ul>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <li class="on">
        <router-link to="/home">
        <span><img src="../../static/images/homeOn.png"></span><span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/account">
        <span><img src="../../static/images/user.png"></span><span>我的</span>
        </router-link>
      </li>
    </div>
  </div>

</template>

<script>
  import phtModal from '../components/modal/modal.vue';
  import phtLoading from '../components/loading/loading.vue';
  import {phtServer}  from '../assets/js/phtServer'
  import {mapGetters, mapActions,mapState} from 'vuex'
export default {
   data () {
    return {
      show:false
    }
},
  computed: {

  },

  mounted:function () {


  },
  methods:{

  },

  components: {
    phtModal,
    phtLoading
  }

}
</script>

<style lang="less" scoped>
@import "../assets/css/home.less";
</style>
