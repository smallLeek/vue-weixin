<template>
    <div class="projectProgress">
        <div class="title">
            <span>
                <router-link to="/home">
                    <img src="../../../../static/images/goBack.png">
                </router-link>
            </span>
            <span>项目进度</span>
            <span>
                <router-link class="explainBtn" to="/earnings">查看合同</router-link>
            </span>
        </div>
        <div class="progressBar">
          <div class="projectStatus1">
            <ul>
              <li>
                <!-- <img src="../../../../static/images/projectProgress/projectProgress_start.png"> -->
                <span>60%</span>
              </li>
              <li>
                <!-- <img src="../../../../static/images/projectProgress/projectProgress_center.png"> -->
              </li>
              <li>
                <!-- <img src="../../../../static/images/projectProgress/projectProgress_end.png"> -->
              </li>
            </ul>
            <ul>
              <li>投资进度</li>
              <li>项目成立</li>
              <li>项目还款</li>
            </ul>
          </div>
        </div>
        <div class="content">
          <ul>
            <li>
              <span>投资项目</span>
              <span>按揭宝2015924</span>
            </li>
            <li>
              <span>待收收益(元)</span>
              <span>91.66</span>
            </li>
            <li>
              <span>投资金额(元)</span>
              <span>10,000</span>
            </li>
            <li>
              <span>年化收益率</span>
              <span>15%</span>
            </li>
            <li>
              <span>项目期限</span>
              <span>9个月</span>
            </li>
            <li>
              <span>成立日期</span>
              <span>2016-01-2 15:50:33</span>
            </li>
            <li>
              <span>还款日期</span>
              <span>2016-01-22</span>
            </li>
          </ul>
        </div>
        <div class="btn">按揭宝收益计划</div>
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
    font-size: 0.4rem;
    text-align: center;
    color: #fff;
    background-color: #fd4747;
    position: fixed;
    top: 0;
    z-index: 100;
    span{
        float: left;
        height: 1rem;
        img{
            position: absolute;
            left: 0.2rem;
            top: 0.25rem;
            height: 0.5rem;
        }
    }
    span:first-child{
        width: 25%;
        a{
            display: block;
            width: 1rem;
            height: 1rem;
        }
    }
    span:nth-child(2){
        width: 50%;
        font-size: 0.36rem;
    }
    span:last-child{
        width: 25%;
        a{
            color: #fff;
            float: right;
            margin-right: 0.2rem;
            margin-top: 0.05rem;
            font-size: 0.3rem;
        }
    }
}
.progressBar{
  height: 2.5rem;
  margin-top: 1rem;
  background-color: #fff;
  line-height: 0;
  ul{
    width: 6rem;
    display: flex;
    margin: auto;
    padding-top: 0.4rem;
    li{
      flex: 1;
      text-align: center;
      font-size: 0.28rem;
      color: #333333;
    }
    li:first-child{
      text-align: left;
    }
    li:nth-child(2){
      flex: 1.5;
    }
    li:last-child{
      flex: 0.9;
      text-align: right;
    }
  }
  .projectStatus1{
    ul:first-child{
      li:first-child{
        height: 1.2rem;
        background-image: url(../../../../static/images/projectProgress/projectProgress_start.png);
        background-size: 100% 100%;
        line-height: 1.2rem;
        text-align: left;
        text-indent: 0.35rem;
        span{
          font-size: 0.34rem;
          color: #ff9900;
        }
      }
      li:nth-child(2){
        height: 1.2rem;
        background-image: url(../../../../static/images/projectProgress/projectProgress_center.png);
        background-size: 100% 100%;
      }
      li:last-child{
        height: 1.2rem;
        background-image: url(../../../../static/images/projectProgress/projectProgress_end.png);
        background-size: 100% 100%;
      }    
    }
  }
}

.content{
  margin-top: 0.2rem;
  background-color: #fff;
  ul{
    padding-bottom: 0.3rem;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    li{
      padding: 0 0.2rem;
      clear: both;
      span:first-child{
        color: #999999;
        float: left;
      }
      span:last-child{
        color: #333333;
        float: right;
      }
    }
    li:nth-child(-n+2){
      height: 0.9rem;
      line-height: 0.9rem;
      font-size: 0.3rem;
      border-bottom: 1px solid #e0e0e0;
    }
    li:nth-child(n+3){
      font-size: 0.28rem;
      margin-top: 0.3rem;
      height: 1em;
    }
    li:nth-child(2){
      span:last-child{
        color: #ff8400;
      }
    }
  }  
}
.btn{
  width: 5.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.3rem;
  border-radius: 2rem;
  margin: auto;
  margin-top: 0.6rem;
  color: #fff;
  text-align: center;
  background-color: #fd4747;
}
.btn:active{
  background-color: #dc2323;
}
</style>
