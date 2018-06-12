<template>
  <div class="informationDisclosure">
    <div class="popup">
        <div class="box">
            <img class="popupTitle" src="../../../static/images/popupLogo.png">
            <h1>
                <span>此项目具体信息披露</span>
                <span>请下载"金梧桐"APP查看</span>
            </h1>
            <div class="btn">
                <a href="javascript:;">立即下载</a>
                <a id="popupClose">关闭</a>
            </div>
            <p>网贷有风险 投资需谨慎</p>
        </div>
    </div>
  </div>  
</template>
<script>
export default {
  mounted(){
    // 弹窗关闭
    $('#popupClose').click(function(){
        $('.informationDisclosure').hide()
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
        height: 5rem;
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
        h1{
            margin-top: 0.3rem;
            span{
                display: block;
                font-weight: 500;
                font-size: 0.32rem;
                text-align: center;
                color: #333333;
            }
        }
        .btn{
            margin-top: 0.5rem;
            a{
                margin: auto;
                margin-bottom: 0.2rem;
                display: block;
                width: 3.2rem;
                height: 0.8rem;
                line-height: 0.75rem;
                font-size: 0.3rem;
                text-align: center;
                border-radius: 2rem;
                border: 2px solid #fb4747;
            }
            a:first-child{
                color: #fff;
                background-color: #fb4747;
            }
            a:last-child{
                color: #fb4747;
            }
        }
        p{
            position: absolute;
            width: 100%;
            bottom: 0.1rem;
            font-size: 0.22rem;
            color: #999999;
            text-align: center;
        }
    }
}
</style>
