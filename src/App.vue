<template>
  <div id="app">
    <open-bank v-if="showXwBank" v-show="loginStatus"></open-bank>
    <!--<x-header v-show="showBar" :left-options="{showBack: false}" :right-options="{showMore: showMore}" style="background: #fb4747" >{{title}}-->
      <!--<a v-show="showReturn" slot="left" href="javascript:history.go(-1)" style="color: #fff;font-size:18px;font-family: '微软雅黑'">-->
        <!--<img src="../static/images/goBack.png" alt="" style="height: .45rem;;vertical-align: middle;margin-top: -0.05rem">返回</a>-->
    <!--</x-header>-->
    <modal></modal>
    <alert></alert>
    <router-view></router-view>
    <div class="xwUrl"></div>
  </div>
</template>

<script>
  import modal from './components/modal/modal.vue'
  import alert from './components/alert/alert.vue'
  import openBank from './components/openXWBank/openXWBANK.vue'
  import {XHeader} from 'vux'
  import * as apis from './assets/js/jwt.apis'
  import {mapGetters, mapActions,mapState} from 'vuex'
  import {storeUtil} from './assets/js/util/lib.store'
export default {

  name: 'App',
  data(){
    return{
      title:"首页",
      showMore:true,
      showReturn:false,
      showBar:true

    }
  },
  mounted(){
    this.setTime()
  },
  computed:{
    //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
    ...mapGetters([
      'showXwBank','loginStatus','userInfo','tokenCode','isRealName','accessAuth'
    ])

  },
  methods:{
    ...mapActions({setUserInfo: 'setUserInfo',getTokenCode:'getTokenCode',setIsRealName:'setIsRealName',setSignOut:'setSignOut'}),
    setTime(){
      if(this.loginStatus == true){
        let self =this
        let currentTime =JSON.parse(storeUtil.getStore('times'))
        let lastTime = new Date().getTime();
        //let loginOutTime =24 * 60 * 60 * 1000;
        let loginOutTime = 10 * 60 * 1000;
        if(lastTime - currentTime >loginOutTime){
          let userId = self.userInfo.ID;
          apis.exitLogin(userId,'1').then((data) =>{
            if(data.status = '00000000'){
              self.setSignOut();
              self.$router.push({path: '/loginRegister/login'})
            }else {
              regexfun.handleFailMsg(self,data.message)
            }

          })
        }

      }

    }


  },
  components:{
    modal,
    alert,
    XHeader,
    openBank
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>
