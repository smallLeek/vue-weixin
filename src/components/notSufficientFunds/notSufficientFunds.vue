<template>
  <div class="notSufficientFunds">
    <div class="popup">
      <div class="box">
        <img class="close" src="../../../static/images/close_icon.png">
        <img class="bg" src="../../../static/images/notSufficientFunds.png">
        <h1>
          <span>您的账户余额不足</span>
          <span>请先充值后在进行投资</span>
        </h1>
        <div class="payBtn">立即充值</div>        
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  mounted(){
    $('.close').click(function(){
      $('.notSufficientFunds').hide()
    })
  }
}
</script>
<style lang="less" scoped>
.popup{
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    .box{
      width: 4.4rem;
      height: 4.86rem;
      background-color: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      right: 0;
      bottom: 0;
      margin-left: -2.2rem;
      margin-top: -2.43rem;
      border-radius: 0.1rem;
      text-align: center;
      .close{
        position: absolute;
        width: 0.7rem;
        top: 0;
        right: 0;
        padding: 0.2rem;
      }
      .bg{
        margin-top: 0.3rem;
        width: 2rem;
      }
      h1{
        line-height: 1;
        font-size: 0.3rem;
        span{
          display: block;
          font-weight: 500;
          line-height: 0.45rem;
        }
      }
      .payBtn{
        width: 3.2rem;
        height: 0.8rem;
        line-height: 0.8rem;
        border-radius: 2rem;
        margin: auto;
        margin-top: 0.3rem;
        color: #fff;
        font-size: 0.3rem;
        background-color: #fb4747;
      }
    }
}
</style>
