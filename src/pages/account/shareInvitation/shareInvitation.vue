<template>
  <div class="shareInvitation">
    <div class="title">
        <router-link to="/setting">
            <img src="../../../../static/images/goBack.png">
        </router-link>
        <span>分享</span>
    </div>
    <div class="content">
      <img src="../../../../static/images/shareInvitation/shareInvitation_bg.jpg">
      <img src="../../../../static/images/shareInvitation/shareInvitation_bg.jpg">
    </div>
    <div class="shareInvitationBtn">
      <h1 class="shareInvitationTitle">
        <span></span>
        <span>分享到</span>
        <span></span>
      </h1>
      <div class="shareInvitationContent">
        <ul>
          <li>
            <span><img src="../../../../static/images/shareInvitation/friends.png"></span>
            <span><img src="../../../../static/images/shareInvitation/wechat.png"></span>
            <span><img src="../../../../static/images/shareInvitation/microblog.png"></span>
            <span><img src="../../../../static/images/shareInvitation/note.png"></span>
            <span><img src="../../../../static/images/shareInvitation/twoDdimensionalCode.png.png"></span>
            <span><img src="../../../../static/images/shareInvitation/qq.png"></span>
            <span><img src="../../../../static/images/shareInvitation/qzone.png"></span>
          </li>
          <li>
            <span>朋友圈</span>
            <span>微信好友</span>
            <span>微博</span>
            <span>短信分享</span>
            <span>二维码</span>
            <span>QQ好友</span>
            <span>QQ空间</span>
          </li>
        </ul>
      </div>
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
.content{
  margin-top: 1rem;
  width: 100%;
  img{
    float: left;
    width: 100%;
  }
}
.shareInvitationBtn{
  position: fixed;
  width: 7.5rem;
  height: 3rem;
  bottom: 0;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.95);
  .shareInvitationTitle{
    width: 6rem;
    margin: auto;
    margin-top: 0.36rem;
    text-align: center;
    span:first-child,
    span:last-child
    {
      width: 2.2rem;
      border-bottom: 1px solid #e0e0e0;
    }
    span:first-child{
      float: left;
    }
    span:last-child{
      float: right;
    }
    span:nth-child(2){
      font-weight: 500;
      float: left;
      width: 1.6rem;
      line-height: 0;
      font-size: 0.3rem;
      text-align: center;
      color: #666666;
    }
  }
}
.shareInvitationContent{
  width: 100%;
  overflow: scroll;
  ul{
    width: 9.8rem;
    padding: 0 0.36rem;
    margin-top: 0.4rem;
    li{
      clear: both;
      span{
        float: left;
        margin-left: 0.1rem;
        width: 1.2rem;
        text-align: center;
        img{
          width: 1rem;
        }
      }
      span:first-child{
        margin-left: 0;
      }
    }
    li:last-child{
      margin-top: 0.3rem;
      span{
        text-align: center;
        font-size: 0.26rem;
      }
    }
  }
}
</style>
