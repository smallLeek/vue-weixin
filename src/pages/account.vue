<template>
    <div class="account" v-title="'融资'">
        <!-- loading -->
        <pht-modal v-show=show></pht-modal>
        <pht-loading v-show=show></pht-loading>
        <!-- 资产 -->
        <div class="asset">
            <div class="asset_top">
                <h2>资产总计(元)</h2>
                <h1>34,000.82</h1>
            </div>
            <div class="asset_bottom">
                <li>
                    <span>可用余额(元)</span>
                    <span>14,000.12</span>
                </li>
                <li>
                    <span>累计收益(元)</span>
                    <span>20,000.7</span>
                </li>
            </div>
        </div>
        <!-- 菜单 -->
        <div class="menu">
            <ul>
                <router-link to="">
                    <li>
                        <img src="../assets/images/user_tty_icon.png">
                        <span>天天盈</span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../assets/images/user_dty_icon.png">
                        <span>定投盈</span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../assets/images/user_Transaction_icon.png">
                        <span>交易记录</span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../assets/images/user_recharge_icon.png">
                        <span>账户充值</span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../assets/images/user_withdraw_deposit_icon.png">
                        <span>账户提现</span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../assets/images/user_help_icon.png">
                        <span>新手帮助</span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../assets/images/user_share_icon.png">
                        <span>分享邀请</span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../assets/images/user_security_center_icon.png">
                        <span>安全中心</span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../assets/images/user_intercalate_icon.png">
                        <span>设置</span>
                    </li>
                </router-link>
            </ul>
        </div>
        <!-- 底部 -->
        <div class="bottom">
            <li>
                <router-link to="/home">
                <span><img src="../assets/images/home.png"></span><span>首页</span>
                </router-link>
            </li>
            <li class="on">
                <router-link to="/account">
                <span><img src="../assets/images/userOn.png"></span><span>我的</span>
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
<style scoped>
.account{
  background: url(../assets/images/background_img_1x.png);
  padding-bottom: 1.5rem;
}
/* 资产 */
.asset{
    background: url(../assets/images/user_menu_icon.png) no-repeat;
    height: 4rem;
    background-size: 100%;
    position: relative;
    color: #fff
}
.asset_top{
    text-align: center;
}
.asset_top h2{
    padding-top: 0.7rem;
    font-size: 0.28rem;
}
.asset_top h1{
    margin: 0.4rem;
    font-size: 0.88rem;
}
.asset_bottom{
    position: absolute;
    width: 100%;
    height: 1.1rem;
    left: 0;
    bottom: 0;
    display: flex;
    border-top: 1px solid #fc9891;
}
.asset_bottom li{
    flex: 1;
    text-align: center
}
.asset_bottom li:first-child{
    border-right: 1px solid #fc9891;
    box-sizing: border-box
}
.asset_bottom li span{
    display: block
}
.asset_bottom li span:first-child{
    margin-top: 0.2rem;
    font-size: 0.26rem;
}
.asset_bottom li span:last-child{
    margin-top: 0.1rem;
    font-size: 0.36rem;
}
/* 菜单 */
.menu{
    margin-top: 0.4rem;
    height: 6rem;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    box-sizing: border-box;
}
.menu ul li{
    width: 33.333%;
    height: 2rem;
    float: left;
    box-sizing: border-box;
    border-bottom: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
}
.menu ul li:nth-child(3n){
    border-right: none
}
.menu ul li img{
    display: block;
    width: 0.7rem;
    margin: auto;
    margin-top: 0.3rem;
}
.menu ul li span{
    text-align: center;
    display: block;
    margin-top: 0.24rem;
    font-size: 0.28rem;
}
.menu ul a:hover{
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;  
}
.menu ul a:visited{
    color: #666666
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
