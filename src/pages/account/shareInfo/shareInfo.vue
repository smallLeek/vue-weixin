<template>
  <div class="box" v-title="'分享奖励'">
    <div class="title">
      <router-link to="/account">
        <img src="../../../../static/images/goBack.png">
      </router-link>
      <span>分享奖励</span>
    </div>
    <div class="Container">
      <iframe  name="invest" frameBorder=0  width="100%"></iframe>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        proj_code:null
      }
    },
    mounted(){
      this.goAboutUs()
      this.proj_code = this.$route.query.pro;
    },
    methods:{
      goAboutUs(){
        let url  ="https://www.phtfdata.com/web6/hander/shareIntro.do"
        $('iframe').attr('src',url);
      }
    }
  }
</script>

<style lang="less" scoped>
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
    a{
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
    height: 12rem;
  }
</style>
