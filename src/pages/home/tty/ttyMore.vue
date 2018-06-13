<template>
  <div class="tty_more">
    <div class="title">
      <span>
        <router-link to="/home">
            <img src="../../../../static/images/goBack.png">
        </router-link>
      </span>
      <span>天天盈</span>
      <span>
        <router-link to="/ttyHistory">历史项目</router-link>
      </span>
    </div>
    <div class="list">
      <ul>
        <li>产品编号：天天盈2910482 8%</li>
        <li>
          <span>8%</span>
          <span>245笔</span>
          <span>2,073,989.76元</span>
        </li>
        <li>
          <span>年化收益</span>
          <span>投资笔数</span>
          <span>认购金额</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    computed:{

    },
    mounted() {
      this.getMore();
    },
    methods:{
      getMore(){

      }
    }
  }
</script>
<style lang="less" scoped>
  .tty_more {
    background-color: #fff;
  }

  /* title */
  .title {
    margin: auto;
    width: 7.5rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.4rem;
    text-align: center;
    color: #fff;
    background-color: #fd4747;
    position: fixed;
    top: 0;
    z-index: 100;
    span {
      float: left;
      height: 1rem;
      img {
        position: absolute;
        left: 0.2rem;
        top: 0.25rem;
        height: 0.5rem;
      }
    }
    span:first-child {
      width: 25%;
    }
    span:nth-child(2) {
      width: 50%;
      font-size: 0.36rem;
    }
    span:last-child {
      width: 25%;
      a {
        color: #fff;
        float: right;
        margin-right: 0.2rem;
        margin-top: 0.05rem;
        font-size: 0.3rem;
      }
    }
  }

  .list {
    margin-top: 1rem;
    ul {
        display: block;
        height: 1.8rem;
        border-bottom: 1px solid #e5e5e5;
        li {
          span {
            float: left;
            text-align: center;
          }
          span:first-child {
            width: 1.86rem;
          }
          span:nth-child(2) {
            width: 1.86rem;
          }
          span:last-child {
            width: 3.78rem;
          }
        }
        li:first-child {
          padding-left: 0.3rem;
          padding-top: 0.2rem;
          color: #ff8400;
          font-size: 0.28rem;
        }
        li:nth-child(2) {
          span {
            margin-top: 0.2rem;
            font-size: 0.34rem;
            color: #333333;
          }
        }
        li:last-child {
          span {
            margin-top: 0.1rem;
            font-size: 0.26rem;
            color: #999999;
          }
        }
    }
  }
</style>
