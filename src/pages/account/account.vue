<template>
    <div class="account" v-title="'账户信息'">
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
                <router-link to="/ttyAccount">
                    <li>
                        <img src="../../../static/images/user_tty_icon.png">
                        <span>天天盈</span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../../../static/images/user_dty_icon.png">
                        <span>定投盈</span>
                    </li>
                </router-link>
                <router-link to="/tradingRecord">
                    <li>
                        <img src="../../../static/images/user_Transaction_icon.png">
                        <span>交易记录</span>
                    </li>
                </router-link>
                <router-link to="/recharge">
                    <li>
                        <img src="../../../static/images/user_recharge_icon.png">
                        <span>账户充值</span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../../../static/images/user_withdraw_deposit_icon.png">
                        <span>账户提现</span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../../../static/images/user_help_icon.png">
                        <span>新手帮助</span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../../../static/images/user_share_icon.png">
                        <span>分享邀请</span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../../../static/images/user_security_center_icon.png">
                        <span>安全中心</span>
                    </li>
                </router-link>
                <router-link to="/setting">
                    <li>
                        <img src="../../../static/images/user_intercalate_icon.png">
                        <span>设置</span>
                    </li>
                </router-link>
            </ul>
        </div>
        <!-- 底部 -->
        <pht-bottomnav></pht-bottomnav>
    </div>
</template>
<script>
  import phtBottomnav from '../../components/bottom/bottomnav.vue';
export default {
   data () {
    return {

    }
},

  mounted:function () {
    $('.bottom li:last-child img').attr('src',require('../../../static/images/userOn.png'))
    $('.bottom li:last-child').addClass('on')

  },
  methods:{

  },

  components: {
    phtBottomnav
  }

}
</script>
<style lang="less" scoped>
@import "../../assets/css/account.less";
</style>
