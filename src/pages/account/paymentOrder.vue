<template>
  <div class="paymentOrder">
    <div class="title">
        <router-link to="/home">
            <img src="../../../static/images/goBack.png">
        </router-link>
        <span>支付订单</span>
    </div>
    <div class="countDown">
      <img src="../../../static/images/time_icon.png">
      <span>剩余支付时间：<b>9:56</b></span>
    </div>
    <div class="content">
      <ul>
        <li>
          <span>产品名称</span>
          <span>月月盈2015925</span>
        </li>
        <li>
          <span>投资期限</span>
          <span>3个月</span>
        </li>
        <li>
          <span>可用余额</span>
          <span>5000.32元</span>
        </li>
        <li>
          <span>投资金额</span>
          <span>1000元</span>
        </li>
      </ul>
    </div>
    <div class="btn">确认支付</div>
    <div class="remind">
      <h1>交易小贴士：</h1>
      <p>如您在“我的-安全中心-免支付密码投标”中已开通<b>免支付密码投标</b>，可免输入交易密码<b>快速投资</b>，未开通免支付密码投标需跳转到<b>新网银行存管页面</b>，输入交易密码进行投资确认。</p>
    </div>
  </div>
</template>
<script>
export default {
  
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
.countDown{
  margin-top: 1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.3rem;
  text-align: center;
  background-color: #fff8cb;
  border-bottom: 1px solid #ffeb6d;
  img{
    width: 0.35rem;
    margin-top: -0.1rem;
    margin-right: 0.1rem;
    vertical-align: middle;
  }
  b{
    color: #fb4747;
  }
}
.content{
  margin-top: 0.2rem;
  ul{
    padding-left: 0.2rem;
    background-color: #fff;
    li{
      height: 1rem;
      line-height: 1rem;
      padding-right: 0.2rem;
      border-bottom: 1px solid #e0e0e0;
      span{
        font-size: 0.3rem;
      }
      span:first-child{
        float: left;
        color: #333333;
      }
      span:last-child{
        float: right;
        color: #999999;
      }
    }
    li:last-child{
      border-bottom: none;
      span:last-child{
        color: #fb4747;
      }
    }
  }
}
.btn{
  width: 6rem;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.3rem;
  text-align: center;
  margin: auto;
  margin-top: 0.8rem;
  border-radius: 0.08rem;
  color: #fff;
  background-color: #fb4747;
}
.btn:active{
  background-color: #de2626;
}
.remind{
  margin-top: 0.9rem;
  padding: 0 0.3rem;
  h1{
    font-size: 0.3rem;
    font-weight: 500;
    color: #333333;
  }
  p{
    margin-top: 0.2rem;
    font-size: 0.28rem;
    color: #666666;
    line-height: 1.4;
    text-align: justify;
    b{
      color: #fb4747;
    }
  }
}
</style>
