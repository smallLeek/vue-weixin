<template>
    <div class="investment">
        <div class="title">
            <router-link to="/ttyParticulars">
                <img src="../../../static/images/goBack.png">
            </router-link>
            <span>投资记录</span>
        </div>
        <h1>
            <span>投资人/投资时间</span>
            <span>投资金额(元)</span>
        </h1>
        <div class="list">
            <ul>
                <li>
                    <span>
                        <b>132****5832</b>
                        <b>2018-05-31 10:56:15</b>
                    </span>
                    <span>249.00</span>
                </li>
                <li>
                    <span>
                        <b>132****5832</b>
                        <b>2018-05-31 10:56:15</b>
                    </span>
                    <span>249.00</span>
                </li>
                <li>
                    <span>
                        <b>132****5832</b>
                        <b>2018-05-31 10:56:15</b>
                    </span>
                    <span>249.00</span>
                </li>
                <li>
                    <span>
                        <b>132****5832</b>
                        <b>2018-05-31 10:56:15</b>
                    </span>
                    <span>249.00</span>
                </li>
                <li>
                    <span>
                        <b>132****5832</b>
                        <b>2018-05-31 10:56:15</b>
                    </span>
                    <span>249.00</span>
                </li>
                <li>
                    <span>
                        <b>132****5832</b>
                        <b>2018-05-31 10:56:15</b>
                    </span>
                    <span>249.00</span>
                </li>
                <li>
                    <span>
                        <b>132****5832</b>
                        <b>2018-05-31 10:56:15</b>
                    </span>
                    <span>249.00</span>
                </li>
                <li>
                    <span>
                        <b>132****5832</b>
                        <b>2018-05-31 10:56:15</b>
                    </span>
                    <span>249.00</span>
                </li>
                <li>
                    <span>
                        <b>132****5832</b>
                        <b>2018-05-31 10:56:15</b>
                    </span>
                    <span>249.00</span>
                </li>
                <li>
                    <span>
                        <b>132****5832</b>
                        <b>2018-05-31 10:56:15</b>
                    </span>
                    <span>249.00</span>
                </li>
                <li>
                    <span>
                        <b>132****5832</b>
                        <b>2018-05-31 10:56:15</b>
                    </span>
                    <span>249.00</span>
                </li>
            </ul>
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
h1{
    position: fixed;
    top: 1rem;
    margin: auto;
    z-index: 100;
    width: 7.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.28rem;
    color: #387eff;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    span:first-child{
        float: left;
        margin-left: 0.2rem;
    }
    span:last-child{
        float: right;
        margin-right: 0.2rem;
    }
}
.list{
    margin-top: 1.8rem;
    ul{
        li{
            height: 1.2rem;
            padding: 0 0.2rem;
            border-bottom: 1px solid #e0e0e0;
            span:first-child{
                float: left;
                b{
                    display: block;
                    font-weight: 500;
                }
                b:first-child{
                    margin-top: 0.2rem;
                    font-size: 0.34rem;
                    color: #333333;
                }
                b:last-child{
                    margin-top: 0.1rem;
                    font-size: 0.26rem;
                    color: #999999;
                }
            }
            span:last-child{
                float: right;
                line-height: 1.2rem;
                font-size: 0.36rem;
                color: #ff8400;
            }
        }
    }
}
</style>
