<template>
    <div class="account" v-title="'账户信息'">
        <!-- 资产 -->
        <div class="asset">
            <div class="asset_top">
                <h2>资产总计(元)</h2>
                <h1>{{this.amount_count | farmatAmount}}</h1>
            </div>
            <div class="asset_bottom">
                <li>
                    <span>可用余额(元)</span>
                    <span>{{this.available_balance | farmatAmount}}</span>
                </li>
                <li>
                    <span>累计收益(元)</span>
                    <span>{{this.lj_amount_count | farmatAmount}}</span>
                </li>
            </div>
        </div>
        <!-- 菜单 -->
        <div class="menu">
            <ul>
                    <li>
                <router-link to="">
                        <img src="../../../static/images/user/user_tty_icon.png">
                        <span>天天盈</span>
                </router-link>
                    </li>
                    <li>
                <router-link to="">
                        <img src="../../../static/images/user/user_dty_icon.png">
                        <span>定投盈</span>
                </router-link>
                    </li>
                    <li>
                <router-link to="">
                        <img src="../../../static/images/user/user_Transaction_icon.png">
                        <span>交易记录</span>
                </router-link>
                    </li>
                    <li>
                <router-link to="/recharge">
                        <img src="../../../static/images/user/user_recharge_icon.png">
                        <span>账户充值</span>
                </router-link>
                    </li>
                    <li>
                <router-link to="">
                        <img src="../../../static/images/user/user_withdraw_deposit_icon.png">
                        <span>账户提现</span>
                </router-link>
                    </li>
                    <li>
                <router-link to="">
                        <img src="../../../static/images/user/user_help_icon.png">
                        <span>新手帮助</span>
                </router-link>
                    </li>
                    <li>
                <a @click="shareInvitationShow()">
                        <img src="../../../static/images/user/user_share_icon.png">
                        <span>分享邀请</span>
                </a>
                    </li>
                    <li>
                <a href="https://www.phtfdata.com/web6/hander/MsafetyGuarantee.do" target="_blank">
                        <img src="../../../static/images/user/user_security_center_icon.png">
                        <span>安全中心</span>
                </a>
                    </li>
                    <li>
                <router-link to="/setting">
                        <img src="../../../static/images/user/user_intercalate_icon.png">
                        <span>设置</span>
                </router-link>
                    </li>
            </ul>
        </div>
        <!-- 底部 -->
        <pht-bottomnav></pht-bottomnav>
        <!-- 分享邀请 -->
        <shareInvitation class="shareInvitation"></shareInvitation>
        <!-- 下载提醒 -->
        <downloadRemind class="downloadRemind"></downloadRemind>
    </div>
</template>
<script>
  import phtBottomnav from '../../components/bottom/bottomnav.vue';
  import shareInvitation from '../../components/shareInvitation/shareInvitation.vue';
  import downloadRemind from '../../components/downloadRemind/downloadRemind.vue';
  import * as apis from '../../assets/js/jwt.apis'
  import '../../assets/js/filter'
  import {mapGetters, mapActions,mapState} from 'vuex'
  export default {
     data () {
      return {
        amount_count:'',
        available_balance:'',
        lj_amount_count:''
      }
  },
  computed: {
    ...mapGetters([
      'loginStatus','userInfo','tokenCode'
    ])
  },
  mounted:function () {
    this.newAccountDataForApp()
    $('.bottom li:last-child img').attr('src',require('../../../static/images/userOn.png'))
    $('.bottom li:last-child').addClass('on')
    
  },
  methods:{
     //我的-资产总计(元)/可用余额(元)/累计收益
    newAccountDataForApp() {
      let userId = this.userInfo.ID;
      let userType = this.userInfo.USER_TYPE;
      apis.newAccountDataForApp(userId,userType).then( (data) => {
        let AccountData = data.result.main_data.data[0];
        this.amount_count =AccountData.AMOUNT_COUNT;
        this.available_balance   =AccountData.AVAILABLE_BALANCE;
        this.lj_amount_count =AccountData.LJ_AMOUNT_COUNT;
      })
    },
    shareInvitationShow(){
        $('.shareInvitation').show()
    }
  },
  components: {
    phtBottomnav,
    shareInvitation,
    downloadRemind
  }
  }
</script>
<style lang="less" scoped>
@import "../../assets/css/account.less";
</style>
