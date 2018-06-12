<template>
    <div class="capital">
        <div class="title">
            <router-link to="/ttyAccount">
                <img src="../../../../static/images/goBack.png">
            </router-link>
            <span>在投本金</span>
        </div>
        <div class="header">
            <img src="../../../../static/images/account/account_invest.png">正在投资以下债权
        </div>
        <div class="list">
            <ul>
                <router-link to="">
                    <li>
                        <span>借款方：重庆********公司</span>
                        <span>投资时间：2015-11-17</span>
                    </li>
                    <li>1227.27元</li>
                </router-link>
                <router-link to="">
                    <li>
                        <span>借款方：重庆********公司</span>
                        <span>投资时间：2015-11-17</span>
                    </li>
                    <li>1227.27元</li>
                </router-link>
                <router-link to="">
                    <li>
                        <span>借款方：重庆********公司</span>
                        <span>投资时间：2015-11-17</span>
                    </li>
                    <li>1227.27元</li>
                </router-link>
                <router-link to="">
                    <li>
                        <span>借款方：重庆********公司</span>
                        <span>投资时间：2015-11-17</span>
                    </li>
                    <li>1227.27元</li>
                </router-link>
                <router-link to="">
                    <li>
                        <span>借款方：重庆********公司</span>
                        <span>投资时间：2015-11-17</span>
                    </li>
                    <li>1227.27元</li>
                </router-link>
                <router-link to="">
                    <li>
                        <span>借款方：重庆********公司</span>
                        <span>投资时间：2015-11-17</span>
                    </li>
                    <li>1227.27元</li>
                </router-link>
                <router-link to="">
                    <li>
                        <span>借款方：重庆********公司</span>
                        <span>投资时间：2015-11-17</span>
                    </li>
                    <li>1227.27元</li>
                </router-link>
                <router-link to="">
                    <li>
                        <span>借款方：重庆********公司</span>
                        <span>投资时间：2015-11-17</span>
                    </li>
                    <li>1227.27元</li>
                </router-link>
                <router-link to="">
                    <li>
                        <span>借款方：重庆********公司</span>
                        <span>投资时间：2015-11-17</span>
                    </li>
                    <li>1227.27元</li>
                </router-link>
                <router-link to="">
                    <li>
                        <span>借款方：重庆********公司</span>
                        <span>投资时间：2015-11-17</span>
                    </li>
                    <li>1227.27元</li>
                </router-link>
                <router-link to="">
                    <li>
                        <span>借款方：重庆********公司</span>
                        <span>投资时间：2015-11-17</span>
                    </li>
                    <li>1227.27元</li>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.ttyAccount{
    background-color: #f8f8f8;
    padding-bottom: 1.5rem;
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
        height: 0.5rem;
    }
    a{
        position: absolute;
        width: 1rem;
        height: 1rem;
        left: 0;
        top: -0.02rem
    }
}
.header{
    width: 7.5rem;
    height: 0.64rem;
    line-height: 0.64rem;
    top: 1rem;
    margin: auto;
    font-size: 0.3rem;
    color: #333333;
    position: fixed;
    text-align: center;
    background-color: #fff8cb;
    border-top: 1px solid #ffeb6b;
    border-bottom: 1px solid #ffeb6b;
    img{
        margin-right: 0.14rem;
        height: 0.35rem;
        margin-top: -0.1rem;
    }
}
.list{
    margin-top: 1.84rem;
    a{
        padding: 0 0.2rem;
        display: block;
        height: 1.3rem;
        background-color: #fff;
        border-bottom: 1px solid #e5e5e5;
        li:first-child{
            float: left;
            span{
                display: block
            }
            span:first-child{
                font-size: 0.3rem;
                color: #333333;
                margin-top: 0.2rem;
            }
            span:last-child{
                font-size: 0.26rem;
                color: #666666;
                margin-top: 0.08rem;
            }
        }
        li:last-child{
            float: right;
            line-height: 1.3rem;
            font-size: 0.32rem;
            color: #fb4747;
            font-family: 黑体;
        }
    }
    a:first-child{
        border-top: 1px solid #e5e5e5;
    }
}
</style>
