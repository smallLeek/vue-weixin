<template>
    <div class="sign_in">
        <div class="title">
            <a>
                <img src="../../../static/images/goBack.png">
            </a>
            <span>签到</span>
        </div>
        <div class="integral">
            <ul>
                <li>
                    <span><b>260</b>积分</span>
                    <span>前往商城 >> >></span>
                </li>
                <li>
                    <span>
                        <span>
                            <span>已签到</span>
                            <span>积分+15</span>
                        </span>
                    </span>
                </li>
                <li>？ 签到攻略</li>
            </ul>
            <p>已累计签到14天，再签5天即可获得额外奖励</p>
        </div>
        <div class="list">

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="less" scoped>
.sign_in{
    background-color: #f8f8f8;
    padding-bottom: 0.5rem;
    padding-top: 1rem;
}
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
        position: absolute;
        left: 0.2rem;
        top: 0.25rem;
        height: 0.5rem;
    }
    a:hover{
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-user-select: none;
        -moz-user-focus: none;
        -moz-user-select: none;  
        text-decoration: none;
    }
}
.integral{
    height: 4rem;
    background:linear-gradient(to bottom,#FFAB3B 0%,#FF6B65 100%);
    ul{
        padding: 0 0.3rem;
        padding-top: 0.3rem;
        li{
            height: 3rem;
            float: left;
            span{
                display: block;
            }
        }
        li:first-child{
            width: 2.05rem;
        }
        li:nth-child(2){
            width: 2.8rem;
            height: 2.8rem;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            position: relative;
            >span{
                position: absolute;
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 50%;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background-color: #fff;
                >span{
                    display: block;
                    width: 2.2rem;
                    height: 2.2rem;
                    border-radius: 50%;
                    margin: auto;
                    border: 1px solid #fb4747;
                }
            }
        }
        li:last-child{
            width: 2.05rem;
        }
    }
    p{
        clear: both;
        text-align: center;
        color: #F9EEE3;
        font-size: 0.28rem;
    }
}
</style>
