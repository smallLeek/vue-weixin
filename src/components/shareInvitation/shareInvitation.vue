<template>
  <div class="shareInvitation">
    <div class="popup">
      <div class="box">
        <img class="close" src="../../../static/images/close_icon.png">
        <h1 class="box_title">
          <span>扫一扫二维码</span>
          <span>推荐好友加入金梧桐</span>
        </h1>
        <img class="erweima" src="../../../static/images/share_erweima.jpg">
        <h1>或复制链接发送给好友加入金梧桐</h1>
        <div id="copyBtn">复制链接</div>
      </div>      
    </div>
    <input id="erweimaVal" type="text" value="https://www.phtfdata.com">
  </div>  
</template>
<script>
export default {
  mounted(){
    // 关闭弹窗
    $('.close').click(function(){
      $('.shareInvitation').hide()
    });
    // 复制邀请链接
    $("#copyBtn").click(function() {
      $("#erweimaVal").select();
      document.execCommand("copy");
    });
  }
}
</script>
<style lang="less" scoped>
.popup{
    position: fixed;
    z-index: 10000;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    .box{
      background-image: url(../../../static/images/share_bg.png);
      background-size: 100% 100%;
      width: 5.5rem;
      height: 7rem;
      position: absolute;
      left: 50%;
      top: 50%;
      right: 0;
      bottom: 0;
      margin-left: -2.75rem;
      margin-top: -3.5rem;
      border-radius: 0.1rem;
      text-align: center;
      .close{
        position: absolute;
        width: 0.9rem;
        top: 0;
        right: 0;
        padding: 0.3rem;
      }
      h1{
        font-weight: 500;
        font-size: 0.28rem;
        color: #333333;
        line-height: 1;
        span{
          font-size: 0.3rem;
          display: block;
          margin-top: 0.1rem;
        }
      }
      .erweima{
        width: 2.6rem;
        height: 2.6rem;
        margin-top: 0.4rem;
        margin-bottom: 0.2rem;
      }
      .box_title{
        margin-top: 0.8rem;
      }
    }
}
#copyBtn{
  width: 4.1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.3rem;
  border-radius: 0.1rem;
  margin: auto;
  margin-top: 0.3rem;
  color: #fff;
  background-color: #fb4747;
}
#erweimaVal{
  margin-left: -100000px;
}
</style>
