<template>
  <div class="home"  v-title="'融资'">
    <!-- loading -->
    <pht-modal v-show=show></pht-modal>
    <pht-loading v-show=show></pht-loading>
    <!-- 头部 -->
    <div class="header">
      {{loginStatus}}
      {{userInfo.data}}      
    </div>
    <!-- 轮播 -->
    <div class="swiper">轮播</div>
    <!-- 上部导航 -->
    <div class="nav">
      <li>
        <img src="../assets/images/home_users_Num.png">
        <span>当前用户</span>
        <span><b>16.64</b> 万人</span>
      </li>
      <li>
        <img src="../assets/images/home_financing.png">
        <span>撮合融资</span>
        <span><b>32.64</b> 亿元</span>
      </li>
      <li>
        <img src="../assets/images/home_income.png">
        <span>赚取收益</span>
        <span><b>342.12</b> 万元</span>
      </li>
    </div>
    <!-- 公告 -->
    <div class="news">
      <div class="news_img"><router-link to="/announcement"><img src="../assets/images/home_announcement.png"></router-link></div>
      <b class="shuxian"></b>
      <div class="news_content">
        <ul>
          <router-link to="/news">
            <li>
              <img src="../assets/images/home_announcement_sign.png">
              <span>关于民生、招商银行恢复使用的公告</span>
            </li>
          </router-link>
          <router-link to="/news">
            <li>
              <img src="../assets/images/home_announcement_sign.png">
              <span>关于部分银行系统维护的公告</span>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <!-- 天天盈专区 -->
    <div class="tty_area">
      <div class="area_title">
        <img src="../assets/images/home_tty_title.png" class="area_title_img">
        <router-link to=""><span>更多<img src="../assets/images/home_more.png"></span></router-link>
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
        <img src="../assets/images/home_yyy_title.png" class="area_title_img">
        <router-link to=""><span>更多<img src="../assets/images/home_more.png"></span></router-link>
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
        <img src="../assets/images/home_dcy_title.png" class="area_title_img">
        <router-link to=""><span>更多<img src="../assets/images/home_more.png"></span></router-link>
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
      <h1><img src="../assets/images/home_insurance _title.png"></h1>
      <ul>
        <router-link to="">
          <li>
            <img src="../assets/images/home_xwbank_cg.png">
            <span>新网银行存管</span>
          </li>
        </router-link>
        <router-link to="">
          <li>
            <img src="../assets/images/home_insurance.png">
            <span>安全保障</span>
          </li>
        </router-link>
        <router-link to="">
          <li>
            <img src="../assets/images/home_information_disclosure.png">
            <span>信息披露</span>
          </li>
        </router-link>
      </ul>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <li class="on">
        <router-link to="/home">
        <span><img src="../assets/images/homeOn.png"></span><span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/account">
        <span><img src="../assets/images/user.png"></span><span>我的</span>
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
    ...mapGetters([
      'loginStatus','userInfo'

    ])
  },

  mounted:function () {
   this.showModal();
   this.connectServer();
   this.getAccess();
    phtServer.initWxJsAPI().then(function () {
      alert(phtServer.getNetworkType().subtype);
    });

  },
  methods:{
    ...mapActions({ setUserInfo: 'setUserInfo'}),
    connectServer() {
      this.setUserInfo({data:'1111',age:'18',height:'183'})
     console.log(JSON.parse(phtServer.getStore('userInfo')).data)

    },
     showModal:function () {
//       $.showphtModal({
//         errorMsg: '小白菜地里黄两三岁没了娘',
//         withOneButton:0,
//         type:2
//       })
     },
    getData:function () {
      phtServer.initWxJsAPI().then(function () {
        phtServer.scanQRCode()

      });

    },
    getAccess:function () {
      phtServer.globalGetData('/list/cgi-bin/token?grant_type=client_credential&appid=wx8f11eee482052822&secret=1f139593d8d1b11675c99ff4348057d6').then((data)=>{
        console.log(data)
      },(error)=>{
      console.log(error)
      })

    },

  },

  components: {
    phtModal,
    phtLoading
  }

}
</script>

<style scoped >
.home{
  background: url(../assets/images/background_img_1x.png);
  padding-bottom: 1.5rem;
}
/* 头部 */
.header{
  color: red;
  font-size: .26rem;
  width: 7.5rem;
  height: .8rem;
  background: cyan;
  line-height: .8rem;
  text-align: center;
}
/* 轮播 */
.swiper{
  width: 100%;
  height: 3.54rem;
  background-color: #e5e5e5;
}
/* 导航 */
.nav{
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
}
.nav li{
  margin-top: 0.3rem;
  flex: 1;
  padding-bottom: .4rem;
  text-align: center;
  font-size: .24rem;
}
.nav li img{
  display: block;
  margin: auto;
  width: 1rem;
}
.nav li span{
  display: block;
  margin-top: .2rem;
}
.nav li span:first-child{
  color: #333333;
}
.nav li span:last-child{
  color: #fb4747;
  font-size: .2rem;
  margin-top: 0.1rem;
  line-height: .4rem;
}
.nav li span:last-child b{
  font-size: .38rem;
}
/* 公告 */
.news{
  height: 1.1rem;
  background-color: #fff;
}
.news .shuxian{
  height: .66rem;
  margin-top: 0.22rem;
  float: left;
  border-left: 1px solid #e5e5e5;
}
.news .news_img{
  float: left;
  width: 1.07rem;
  line-height: 1.1rem;
  text-align: center
}
.news .news_img img{
  height: .66rem;
  width: auto;
}
.news .news_content{
  float: left;
  margin-left: 0.2rem;
  margin-top: 0.08rem;
}
.news .news_content ul{
  margin-top: 0.08rem;
}
.news .news_content ul li{
  line-height: 0.4rem;
  font-size: 0.24rem;
}
.news .news_content ul li img{
  width: 0.1rem;
  margin-top: -0.07rem;
}
.news .news_content ul a:active{
  text-decoration:none
}
/* 天天盈专区 */
.tty_area{
  background-color: #fff;
}
.area_title{
  height: 1rem;
  line-height: 1rem;
  margin-top: 0.2rem;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
}
.area_title img.area_title_img{
  width: 4.5rem;
}
.area_title span{
  float: right;
  color: #999999
}
.area_title span{
  font-size: 0.24rem;
}
.area_title span img{
  width: 0.15rem;
  height: auto;
  margin-top: -0.05rem;
  margin-left: 0.1rem;
  margin-right: 0.3rem;
}
.area_title a:hover{
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;  
}

.tty_area ul{
  padding-left: 0.3rem;
  padding-right: 0.4rem;
}
.tty_area ul li:first-child{
  font-size: 0.28rem;
  color: #333333;
  margin-top: 0.2rem;
}
.tty_area ul li:nth-child(2){
  display: flex;
}
.tty_area ul li:nth-child(2) span{
  flex: 1;
  text-align: center;
  font-size: 0.28rem;
  margin-top: 0.52rem;
  color: #666666
}
.tty_area ul li:nth-child(2) span b{
  font-size: 0.4rem;
  color: #333333
}
.tty_area ul li:nth-child(2) span:first-child{
  color: #fb4747;
  margin-top: .24rem;
  font-size: 0.34rem;
}
.tty_area ul li:nth-child(2) span:first-child b{
  font-size: 0.94rem;
  color: #fb4747
}
.tty_area ul li:nth-child(3){
  display: flex
}
.tty_area ul li:nth-child(3) span{
  flex: 1;
  text-align: center;
  font-size: 0.26rem;
  font-weight: 500;
  color: #999999
}
.tty_area ul li:nth-child(3) span:first-child{
  font-size: 0.24rem;
  line-height: 0.35rem;
}
.tty_area ul li:nth-child(4){
  margin-top: 0.24rem;
}
.tty_area ul li:nth-child(4) span:first-child{
  float: left;
  margin-top: 0.16rem;
  width: 6rem;
  height: 0.05rem;
  background-color: #e8e8e8;
  border-radius: 10px;
}
.tty_area ul li:nth-child(4) span:last-child{
  float: right;
  color: #999999;
  font-size: 0.24rem;
  line-height: 0.4rem;
}
.tty_area ul li:nth-child(4) span:first-child s{
  float: left;
  width: 50%;
  height: 100%;
  border-radius: 10px;
  background-color: #fb4747;
}
.tty_area ul li:nth-child(5){
  clear: both;
  padding-top: 0.1rem;
  padding-bottom: 0.3rem;
}
.tty_area ul li:nth-child(5) a{
  display: block;
  color: #fff;
  font-size: 0.3rem;
  width: 5.4rem;
  height: .7rem;
  line-height: .7rem;
  border-radius: 1rem;
  background-color: #fb4747;
  text-align: center;
  margin: auto;
}
.tty_area ul li:nth-child(5) a:hover{
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;  
  text-decoration: none;
}
.tty_area ul li:nth-child(5) a:active{
  background-color: #de2626;
}

/* 月月盈专区 定存盈专区*/
.yyy_area{
  background-color: #fff;
}
.yyy_area ul{
  padding-left: 0.3rem;
  padding-right: 0.4rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e5e5;
}
.yyy_area ul li:first-child{
  font-size: 0.28rem;
  color: #333333;
  margin-top: 0.2rem;
}
.yyy_area ul li:nth-child(2){
  display: flex;
}
.yyy_area ul li:nth-child(2) span{
  flex: 1;
  text-align: center;
  font-size: 0.28rem;
  margin-top: 0.52rem;
  color: #666666
}
.yyy_area ul li:nth-child(2) span b{
  font-size: 0.4rem;
  color: #333333
}
.yyy_area ul li:nth-child(2) span:first-child{
  color: #fb4747;
  margin-top: .24rem;
  font-size: 0.34rem;
}
.yyy_area ul li:nth-child(2) span:first-child b{
  font-size: 0.94rem;
  color: #fb4747
}
.yyy_area ul li:nth-child(3){
  display: flex
}
.yyy_area ul li:nth-child(3) span{
  flex: 1;
  text-align: center;
  font-size: 0.26rem;
  font-weight: 500;
  color: #999999
}
.yyy_area ul li:nth-child(3) span:first-child{
  font-size: 0.24rem;
  line-height: 0.35rem;
}
.yyy_area ul li:nth-child(4){
  margin-top: 0.24rem;
}
.yyy_area ul li:nth-child(4) span:first-child{
  float: left;
  margin-top: 0.16rem;
  width: 6rem;
  height: 0.05rem;
  background-color: #e8e8e8;
  border-radius: 10px;
}
.yyy_area ul li:nth-child(4) span:last-child{
  float: right;
  color: #999999;
  font-size: 0.24rem;
  line-height: 0.4rem;
}
.yyy_area ul li:nth-child(4) span:first-child s{
  float: left;
  width: 50%;
  height: 100%;
  border-radius: 10px;
  background-color: #fb4747;
}
/* 安全保障 */
.insurance{
  background-color: #fff;
  width: 7.2rem;
  height: 2.6rem;
  margin: auto;
  margin-top: 0.2rem;
  border-radius: .12rem;
  border: 1px solid #e0e0e0;
  box-sizing: border-box
}
.insurance h1{
  text-align: center;
  color: #fb4747;
  height: 0.8rem;
  line-height: 0.85rem;
  font-size: 0.35rem;
}
.insurance h1 img{
  width: 95%;
}
.insurance ul{
  display: flex
}
.insurance ul a{
  flex: 1;
}
.insurance ul li{
  text-align: center
}
.insurance ul li img{
  display: block;
  margin: auto;
  width: 1rem;
}
.insurance ul li span{
  margin-top: 0.2rem;
  font-size: 0.26rem;
  color: #666666;
  display: block
}
.insurance ul a:hover{
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;  
  text-decoration: none;
}
/* 底部 */
.bottom{
  display: flex;
  position: fixed;
  z-index: 100;
  bottom: 0;
  margin: auto;
  width: 7.5rem;
  height: 1rem;
  max-height: 80px;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
}
.bottom li{
  flex: 1;
  text-align: center;
  color: #666666
}
.bottom li span:first-child{
  display: block;
  font-size: 0.5rem;
  margin-top: 0.06rem;
}
.bottom li span:last-child{
  display: block;
  font-size: 0.24rem;
  margin-top: 0.06rem;
}
.bottom li.on a{
  color: #fb4747
}
.bottom li span:first-child img{
  height: 0.45rem;
}
.bottom li a:hover{
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;  
  text-decoration: none;
}
</style>
