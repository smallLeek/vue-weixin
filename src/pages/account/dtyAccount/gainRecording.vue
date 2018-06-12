<template>
    <div class="gainRecording">
        <div class="title">
            <a>
                <img src="../../../../static/images/goBack.png">
            </a>
            <span>收益记录</span>
        </div>
        <div class="nav">
          <span>类型</span>
          <span>时间</span>
          <span>金额(元)</span>
        </div>
        <div class="list">
          <ul>
            <li>
              <span>按揭宝2018321</span>
              <span>2015-12-22</span>
              <span>120.63</span>
            </li>
            <li>
              <span>按揭宝2018321</span>
              <span>2015-12-22</span>
              <span>120.63</span>
            </li>
            <li>
              <span>按揭宝2018321</span>
              <span>2015-12-22</span>
              <span>120.63</span>
            </li>
            <li>
              <span>按揭宝2018321</span>
              <span>2015-12-22</span>
              <span>120.63</span>
            </li>
            <li>
              <span>按揭宝2018321</span>
              <span>2015-12-22</span>
              <span>120.63</span>
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
.nav{
  position: fixed;
  top: 1rem;
  width: 7.5rem;
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.25rem;
  margin: auto;
  display: flex;
  color: #333333;
  background-color: #fff;
  span{
    flex: 1;
    font-size: 0.28rem;
    text-align: center
  }
}
.list{
  margin-top: 2.1rem;
  background-color: #fff;
  ul{
    width: 7rem;
    margin: auto;
    li{
      height: 0.9rem;
      line-height: 0.9rem;
      font-size: 0.28rem;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      span{
        flex: 1;
        text-align: center;
        color: #333333;
      }
      span:last-child{
        color: #ff8400;
      }
    }
  }
}
</style>
