<template>
  <div id="app">
    <open-bank></open-bank>
    <!--<x-header v-show="showBar" :left-options="{showBack: false}" :right-options="{showMore: showMore}" style="background: #fb4747" >{{title}}-->
      <!--<a v-show="showReturn" slot="left" href="javascript:history.go(-1)" style="color: #fff;font-size:18px;font-family: '微软雅黑'">-->
        <!--<img src="../static/images/goBack.png" alt="" style="height: .45rem;;vertical-align: middle;margin-top: -0.05rem">返回</a>-->
    <!--</x-header>-->
    <modal></modal>
    <alert></alert>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <div class="xwUrl"></div>
  </div>
</template>

<script>
  import modal from './components/modal/modal.vue'
  import alert from './components/alert/alert.vue'
  import openBank from './components/openXWBank/openXWBANK.vue'
  import {XHeader} from 'vux'
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
  methods:{


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
