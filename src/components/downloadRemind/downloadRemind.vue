<template>
  <div class="downloadRemind">
    <div class="popup">
        <div class="box">
            <img class="close" src="../../../static/images/close_icon.png">
            <img class="popupTitle" src="../../../static/images/popupLogo.png">
            <h1>
                <span>若要使用或了解金梧桐</span>
                <span>其他功能以及更多信息</span>
                <span>请下载app后使用</span>
            </h1>
            <a id="downloadBtn" href="javascript:;">立即下载</a>
        </div>
    </div>
  </div>  
</template>
<script>
export default {
  mounted(){
    // 弹窗关闭
    $('.close').click(function(){
        $('.downloadRemind').hide()
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
        width: 4.56rem;
        height: 4.4rem;
        background-color: #fff;
        position: fixed;
        left: 50%;
        top: 50%;
        right: 0;
        bottom: 0;
        margin-left: -2.28rem;
        margin-top: -2.5rem;
        border-radius: 0.1rem;
        .popupTitle{
            display: block;
            width: 1.7rem;
            height: 1.7rem;
            border-radius: 50%;
            text-align: center;
            margin: auto;
            margin-top: -0.85rem;
        }
        .close{
            position: absolute;
            width: 0.7rem;
            top: 0;
            right: 0;
            padding: 0.2rem;
        }
        h1{
            font-size: 0.3rem;
            color: #333333;
            text-align: center;
            line-height: 1;
            margin-top: 0.5rem;
          span{
            font-weight: 500;
            display: block;
            line-height: 0.4rem;
          }
        }
        #downloadBtn{
            display: block;
            margin: auto;
            margin-top: 0.6rem;
            width: 3.2rem;
            height: 0.7rem;
            line-height: 0.7rem;
            font-size: 0.3rem;
            border-radius: 2rem;
            text-align: center;
            color: #fff;
            background-color: #fb4747;
        }
    }
}
</style>
