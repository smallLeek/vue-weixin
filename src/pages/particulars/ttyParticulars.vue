<template>
  <div class="tty" v-title="'天天盈'">
    <div class="title">
      <router-link to="/home">
        <img src="../../../static/images/goBack.png">
      </router-link>
      <span>天天盈20170300(8%)</span>
    </div>
    <div class="fund">
      <h2>
        <span></span>
        <span>年化收益率</span>
        <span></span>
      </h2>
      <h1>8<span>%</span></h1>
      <ul>
        <li>转投随心</li>
        <li>100元起投</li>
        <li>稳定高收益</li>
      </ul>
    </div>
    <div class="schedule">
      <ul>
        <li>
          <span>起投金额</span>
          <span>100.00元</span>
        </li>
        <li>
          <span>收益时间</span>
          <span>投资成功即可计息</span>
        </li>
        <li>
          <span>计息方式</span>
          <span>所有债权以平台当日年化收益率为准</span>
        </li>
        <li v-on:click="goMoneySafe()">
          <span>保障方式</span>
          <span>资金安全保障<img src="../../../static/images/more.png"></span>
        </li>
        <li>
          <span>投资列表</span>
          <span>71笔<img src="../../../static/images/more.png"></span>
        </li>
      </ul>
    </div>
    <div class="creditor_list">
      <h1>债权列表</h1>
      <ul>
        <li>
          <span>JWT1180521926102</span>
          <span>1,000.28元</span>
        </li>
        <li>
          <span>JWT1180521926102</span>
          <span>1,000.28元</span>
        </li>
        <li>
          <span>JWT1180521926102</span>
          <span>1,000.28元</span>
        </li>
        <li>
          <span>JWT1180521926102</span>
          <span>1,000.28元</span>
        </li>
        <li>
          <span>JWT1180521926102</span>
          <span>1,000.28元</span>
        </li>
        <li>
          <span>JWT1180521926102</span>
          <span>1,000.28元</span>
        </li>
      </ul>
    </div>
    <div class="bottom_input">
      <div class="input_text">
        <input type="number" placeholder="投资金额">
        <span>元</span>
      </div>
      <div class="input_submit">
        <router-link to="">立即投资</router-link>
        <!-- <router-link to="" class="end">已售罄</router-link> -->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    mounted() {

    },
    methods:{
      //去安全保障
      goMoneySafe() {
       window.location.href = "https://www.phtfdata.com/web6/hander/bxprotectedNew.do"
      }
    }
  }
</script>
<style lang="less" scoped>
  .tty {
    background-color: #f8f8f8;
    padding-bottom: 0.94rem;
  }

  /* title */
  .title {
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
    img {
      height: 0.5rem;
      vertical-align: middle;
    }
    a {
      position: absolute;
      width: 1rem;
      height: 1rem;
      left: 0;
      top: -0.02rem
    }
    a:hover {
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      -webkit-user-select: none;
      -moz-user-focus: none;
      -moz-user-select: none;
      text-decoration: none;
    }
  }

  .fund {
    margin-top: 1rem;
    height: 2.7rem;
    background: linear-gradient(to bottom, #fb4747 0%, #fb6547 100%);
    text-align: center;
    color: #fff;
    h2 {
      font-size: 0.26rem;
      font-weight: 500;
      color: #fff;
      span:nth-child(2) {
        margin: 0 0.02rem;
      }
      span:first-child,
      span:last-child {
        display: inline-block;
        width: 0.6rem;
        vertical-align: middle;
        margin-top: -0.06rem;
        border-bottom: 1px solid #ffa7a7;
      }
    }
    h1 {
      font-weight: 500;
      font-size: 1.4rem;
      span {
        font-size: 0.46rem;
      }
    }
    ul {
      width: 5rem;
      height: 0.38rem;
      margin: auto;
      display: flex;
      li {
        flex: 1;
        float: left;
        height: 0.38rem;
        line-height: 0.36rem;
        margin-right: 0.2rem;
        border-radius: 1rem;
        font-size: 0.24rem;
        border: 1px solid #fff;
        box-sizing: border-box;
      }
      li:last-child {
        margin-right: 0;
      }
    }
  }

  .schedule {
    ul {
      margin-top: 0.2rem;
      padding-left: 0.2rem;
      background-color: #fff;
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      li {
        height: 0.9rem;
        line-height: 0.9rem;
        padding-right: 0.2rem;
        font-size: 0.3rem;
        border-bottom: 1px solid #e0e0e0;
        span:first-child {
          float: left;
          color: #666666;
        }
        span:last-child {
          color: #333333;
          float: right;
          img {
            height: 0.2rem;
            margin-top: -0.1rem;
            margin-left: 0.2rem;
          }
        }
        a {
          display: block;
          height: 0.9rem;
        }
        a:hover {
          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
          -webkit-user-select: none;
          -moz-user-focus: none;
          -moz-user-select: none;
          text-decoration: none;
        }
      }
      li:last-child {
        border: none;
      }
    }
  }

  .creditor_list {
    margin-top: 0.3rem;
    h1 {
      font-weight: 500;
      padding-left: 0.2rem;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.3rem;
      color: #333333;
      background-color: #e0e0e0;
    }
    ul {
      background-color: #fff;
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      padding-left: 0.2rem;
      li {
        height: 0.9rem;
        line-height: 0.9rem;
        padding-right: 0.2rem;
        font-size: 0.3rem;
        border-bottom: 1px solid #e0e0e0;
        span:first-child {
          float: left;
        }
        span:last-child {
          float: right;
        }
      }
      li:last-child {
        border: none
      }
    }
  }

  .bottom_input {
    position: fixed;
    bottom: 0;
    height: 0.94rem;
    width: 7.5rem;
    margin: auto;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    .input_text {
      float: left;
      margin-top: 0.2rem;
      margin-left: 0.2rem;
      width: 4.7rem;
      height: 0.6rem;
      border: 1px solid #e0e0e0;
      border-radius: 1rem;
      input {
        float: left;
        width: 3.5rem;
        margin-left: 0.2rem;
        margin-top: 0.1rem;
        font-size: 0.3rem;
        border: none;
        outline: medium;
        color: #333333;
      }
      ::-moz-placeholder {
        color: #999999;
        line-height: 0.35rem;
      }
      :-ms-input-placeholder {
        color: #999999;
        line-height: 0.35rem;
      }
      ::-webkit-input-placeholder {
        color: #999999;
        line-height: 0.35rem;
      }
      span {
        float: right;
        margin-right: 0.2rem;
        line-height: 0.6rem;
        font-size: 0.3rem;
        color: #333333;
      }
    }
    .input_submit {
      float: right;
      width: 2.3rem;
      height: 0.94rem;
      line-height: 0.94rem;
      color: #fff;
      font-size: 0.32rem;
      text-align: center;
      a {
        display: block;
        width: 2.3rem;
        height: 0.94rem;
        line-height: 0.94rem;
        color: #fff;
        font-size: 0.32rem;
        text-align: center;
        background-color: #ffae00;
      }
      a:hover {
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-user-select: none;
        -moz-user-focus: none;
        -moz-user-select: none;
        text-decoration: none;
      }
      .end {
        background-color: #bbbbbb;
      }
    }
  }
</style>
