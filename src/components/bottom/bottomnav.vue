<template>
    <div class="bottom">
      <li>
        <router-link to="/home">
        <span><img src="../../../static/images/home.png"></span><span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/account">
        <span><img src="../../../static/images/user.png"></span><span>我的</span>
        </router-link>
      </li>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
/* 底部 */
.bottom{
    display: flex;
    position: fixed;
    z-index: 10000;
    bottom: 0;
    margin: auto;
    width: 7.5rem;
    height: 1.18rem;
    max-height: 80px;
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    li{
        flex: 1;
        text-align: center;
        color: #666666;
        span:first-child{
            display: block;
            font-size: 0.5rem;
            // margin-top: 0.06rem;
            img{
                height: 0.45rem;
                vertical-align: middle;
            }
        }
        span:last-child{
            display: block;
            font-size: 0.24rem;
            // margin-top: 0.06rem;
        }
        a{
            color: #666666;
        }
    }
    li.on a{
        color: #fb4747
    }
}

</style>
