<template>
    <div class="benefitPlan">
        <div class="title">
            <a>
                <img src="../../../../static/images/goBack.png">
            </a>
            <span>按揭宝收益计划</span>
        </div>
        <h1 class="benefitPlanTitle">
          <span>投资项目</span>
          <span>按揭宝2015924</span>
        </h1>
        <div class="list">
          <ul>
            <li class="on">
              <h2>一期</h2>
              <div class="listContent">
                <p>
                  <span>返还日期</span>
                  <span>2016-01-22</span>
                </p>
                <p>
                  <span>返还金额(元)</span>
                  <span>91.66</span>
                </p>
                <p>
                  <span>返还状态</span>
                  <span>已返还</span>
                </p>
              </div>
            </li>
            <li>
              <h2>二期</h2>
              <div class="listContent">
                <p>
                  <span>返还日期</span>
                  <span>2016-01-22</span>
                </p>
                <p>
                  <span>返还金额(元)</span>
                  <span>91.66</span>
                </p>
                <p>
                  <span>返还状态</span>
                  <span>未返还</span>
                </p>
              </div>
            </li>
            <li>
              <h2>三期</h2>
              <div class="listContent">
                <p>
                  <span>返还日期</span>
                  <span>2016-01-22</span>
                </p>
                <p>
                  <span>返还金额(元)</span>
                  <span>91.66</span>
                </p>
                <p>
                  <span>返还状态</span>
                  <span>未返还</span>
                </p>
              </div>
            </li>
            <li>
              <h2>四期</h2>
              <div class="listContent">
                <p>
                  <span>返还日期</span>
                  <span>2016-01-22</span>
                </p>
                <p>
                  <span>返还金额(元)</span>
                  <span>91.66</span>
                </p>
                <p>
                  <span>返还状态</span>
                  <span>未返还</span>
                </p>
              </div>
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
.benefitPlanTitle{
  position: fixed;
  top: 1rem;
  margin: auto;
  width: 7.5rem;
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.2rem;
  background-color: #fff;
  span{
    font-weight: 500;
    font-size: 0.3rem;
  }
  span:first-child{
    float: left;
    color: #999999;
  }
  span:last-child{
    float: right;
    color: #333333;
  }
}
.list{
  padding: 0 0.2rem;
  margin-top: 2.2rem;
  padding-bottom: 1rem;
  ul{
    li{
      height: 2rem;
      background-image: url(../../../../static/images/dcy/dcy_return.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-bottom: 0.2rem;
      h2{
          float: left;
          font-size: 0.3rem;
          width: 1em;
          color: #fff;
          margin-left: 0.26rem;
          margin-top: 0.6rem;
          font-weight: 500;
          line-height: 1.2;
      }
      .listContent{
        float: left;
        line-height: 1;
        margin-left: 0.5rem;
        margin-top: 0.3rem;
        width: 5.8rem;
        p{
          width: 100%;
          height: 0.55rem;
          span{
            font-size: 0.3rem;
          }
          span:first-child{
            float: left;
            color: #999999;
          }
          span:last-child{
            float: right;
            color: #333333;
          }
        }
        p:last-child{
          span:last-child{
            color: #ff9900
          }
        }
      }
    }
    li.on{
      background-image: url(../../../../static/images/dcy/dcy_notreturn.png);
        p:last-child{
          span:last-child{
            color: #333333
          }
        }
    }
  }
}
</style>
