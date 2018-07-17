<template>
  <div class="box" v-title="'详情'">
    <div class="title">
      <span @click="whereGo" class="Go">
        <img src="../../../../static/images/goBack.png">
      </span>
      <span>详情</span>
    </div>
    <div class="Container">
      <iframe  name="invest" frameBorder=0  width="100%" height="100%"></iframe>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions,mapState} from 'vuex'
  export default {
    data(){
      return{
        openUrl:null
      }
    },
    computed:{
      ...mapGetters([
        'accessAuth'
      ])
    },
    mounted(){
      this.openUrl = this.$route.query.stage;
      this.goAboutUs()
    },
    methods:{
      goAboutUs(){
        let url  =this.openUrl
        $('iframe').attr('src',url);
      },
      whereGo(){
        location.href = location.origin +  this.accessAuth.whereToGo
      }
    }
  }
</script>

<style lang="less" scoped>
  iframe{
    vertical-align:bottom;
  }
  .box{
    overflow: auto;
  }
  .title{
    margin: auto;
    width: 7.5rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.36rem;
    text-align: center;
    color: #fff;
    background-color: #fb4747;
    position: fixed;
    top: 0;
    z-index: 100;
    img{
      height: 0.5rem;
      vertical-align: middle;
    }
    .Go{
      position: absolute;
      width: 1rem;
      height: 1rem;
      left: 0;
      top: -0.02rem
    }
  }
  .Container{
    overflow: hidden;
    margin-top: 1rem;
    width: 7.5rem;
    height: 100%;
  }
  .Container iframe{
    width: 7.5rem;
    height: 13rem;
  }
</style>
