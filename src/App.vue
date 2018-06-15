<template>
  <div id="app">
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
export default {

  name: 'App',
  data(){
    return{

    }
  },
  components:{
    modal,
    alert
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>
