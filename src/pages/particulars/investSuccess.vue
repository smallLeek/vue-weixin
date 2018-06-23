<template>
  <!--月月盈和定投盈是一个页面-->
  <div class="investSuccess">
    <div class="title">
      <router-link to="/home">
        <img src="../../../static/images/goBack.png">
      </router-link>
      <span>投资</span>
    </div>
    <div class="invest">
      <div class="investTop">
        <div class="investIcon">
          <p>
            <img src="../../../static/images/investOn.png" alt="">
          </p>
          <div class="investOn">
            投资提交成功
          </div>
        </div>
      </div>
      <ul class="investMiddle">
        <li>
          <span>投资金额</span>
          <span>1</span>
        </li>
        <li>
          <span>项目名称</span>
          <span>1</span>
        </li>
        <li v-show="isDq == true">
          <span>投资期限</span>
          <span>1</span>
        </li>
      </ul>
      <div class="investBottom">
        <button>确定</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isDq:true
      }
    },
    computed: {

    },
    mounted() {

    },
    methods:{

    },
    components: {

    }
  }
</script>
<style lang="less" scoped>

  /* title */
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
  .investSuccess{
    background-color: #f8f8f8;
    width: 7.5rem;
    height: 100%;

  }
</style>
