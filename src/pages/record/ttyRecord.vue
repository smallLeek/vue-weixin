<template>
    <div class="ttyRecord">
        <div class="title">
            <router-link to="/ttyAccount">
                <img src="../../../static/images/goBack.png">
            </router-link>
            <span>天天盈交易记录</span>
        </div>
        <div class="list">
          <ul>
              <li>
                  <p>
                      <span>天天盈-债权投资</span>
                      <span>-5,000.0元</span>
                  </p>
                  <p>
                      <span>投资时间：2015-11-17</span>
                      <span>交易成功</span>
                  </p>
              </li>
              <li>
                  <p>
                      <span>天天盈-债权投资</span>
                      <span>-5,000.0元</span>
                  </p>
                  <p>
                      <span>投资时间：2015-11-17</span>
                      <span >交易成功</span>
                  </p>
              </li>
              <li>
                  <p>
                      <span>天天盈-债权投资</span>
                      <span class="on">-5,000.0元</span>
                  </p>
                  <p>
                      <span>投资时间：2015-11-17</span>
                      <span>交易成功</span>
                  </p>
              </li>
              <li>
                  <p>
                      <span>天天盈-债权投资</span>
                      <span>-5,000.0元</span>
                  </p>
                  <p>
                      <span>投资时间：2015-11-17</span>
                      <span>交易成功</span>
                  </p>
              </li>
              <li>
                  <p>
                      <span>天天盈-债权投资</span>
                      <span class="on">-5,000.0元</span>
                  </p>
                  <p>
                      <span>投资时间：2015-11-17</span>
                      <span>交易成功</span>
                  </p>
              </li>
              <li>
                  <p>
                      <span>天天盈-债权投资</span>
                      <span>-5,000.0元</span>
                  </p>
                  <p>
                      <span>投资时间：2015-11-17</span>
                      <span>交易成功</span>
                  </p>
              </li>
              <li>
                  <p>
                      <span>天天盈-债权投资</span>
                      <span>-5,000.0元</span>
                  </p>
                  <p>
                      <span>投资时间：2015-11-17</span>
                      <span>交易成功</span>
                  </p>
              </li>
              <li>
                  <p>
                      <span>天天盈-债权投资</span>
                      <span>-5,000.0元</span>
                  </p>
                  <p>
                      <span>投资时间：2015-11-17</span>
                      <span>交易成功</span>
                  </p>
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
.ttyRecord{
    background: url(../../../static/images/background_img_1x.png);
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
    background-color: #fd4747;
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
// list
.list{
    margin-top: 1rem;
    width: 100%;
    ul{
        li{
            padding: 0 0.2rem;
            height: 1.3rem;
            background-color: #fff;
            border-bottom: 1px solid #f8f8f8;
            box-sizing: border-box;
            p{
                clear: both;
                span:first-child{
                    float: left;
                }
                span:last-child{
                    float: right;
                }
            }
            p:first-child{
                color: #333333;
                font-size: 0.3rem;
                padding-top: 0.25rem;
                span:last-child{
                    color: #ff8400;
                    font-size: 0.32rem;
                }
                span.on{
                    color: #387eff
                }
            }
            p:last-child{
                color: #666666;
                font-size: 0.26rem;
                padding-top: 0.16rem;
            }
        }
    }
}
</style>
