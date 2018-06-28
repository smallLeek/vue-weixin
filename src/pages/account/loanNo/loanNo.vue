<template>
  <div class="box" v-title="'合同模板'">
    <div class="title">
      <router-link to="/setting">
        <img src="../../../../static/images/goBack.png">
      </router-link>
      <span>合同模板</span>
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

      }
    },
    mounted(){
      this.goAboutUs()
    },
    methods:{
      goAboutUs(){
        let url  ="https://www.phtfdata.com/web6/page/loanNo.do"
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
