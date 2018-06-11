<template>
  <div class="security">
    <div class="title">
        <router-link to="/setting">
            <img src="../../../../static/images/goBack.png">
        </router-link>
        <span>安全中心</span>
    </div>
    <div class="content">
      <h1>金梧桐账号设置</h1>
      <ul>
        <li>
          <span><img src="../../../../static/images/security/security_Phonum.png">登录手机号修改</span>
          <span>已绑定<img src="../../../../static/images/security/security_more.png"></span>
        </li>
        <li>
          <span><img src="../../../../static/images/security/security_modificationPassword.png">登录密码修改</span>
          <span><img src="../../../../static/images/security/security_more.png"></span>
        </li>
      </ul>
      <h1>新网银行存管设置</h1>
      <ul>
        <li>
          <a href="javascript:;">
            <span><img src="../../../../static/images/security/security_bankCard.png">我的银行卡</span>
            <span>***************7362<img src="../../../../static/images/security/security_more.png"></span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span><img src="../../../../static/images/security/security_reservedPhonum.png">银行预留手机号</span>
            <span>已绑定<img src="../../../../static/images/security/security_more.png"></span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span><img src="../../../../static/images/security/security_password.png">交易密码</span>
            <span><img src="../../../../static/images/security/security_more.png"></span>
          </a>
        </li>
        <li class="on">
          <a href="javascript:;">
            <span><img src="../../../../static/images/security/security_Authorization.png"><b>设置用户授权坐标</b><b>授权期限：2027-12-20 单笔授权金额：10.00万元</b></span>
            <span><b>未授权</b><img src="../../../../static/images/security/security_more.png"></span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span><img src="../../../../static/images/security/security_cancelAuthorization.png">取消用户授权投标</span>
            <span><img src="../../../../static/images/security/security_more.png"></span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span><img src="../../../../static/images/security/security_delegation.png">免支付密码投标</span>
            <span><b>未开启</b><img src="../../../../static/images/security/security_more.png"></span>
          </a>
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
.content{
  margin-top: 1rem;
  h1{
    font-weight: 500;
    line-height: 1;
    padding: 0.3rem 0.2rem 0.1rem 0.2rem;
    font-size: 0.28rem;
    color: #666666;
  }
  ul{
    background-color: #fff;
    padding-left: 0.2rem;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    li{
      height: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid #e0e0e0;
      padding-right: 0.2rem;
      span{
        font-size: 0.32rem;
        img{
          vertical-align: middle;
        }
      }
      span:first-child{
        float: left;
        color: #333333;
        img{
          height: 0.45rem;
          margin-right: 0.1rem;
          margin-top: -0.07rem;
        }
      }
      span:last-child{
        float: right;
        color: #999999;
        img{
          height: 0.3rem;
          margin-left: 0.2rem;
          margin-top: -0.05rem;
        }
      }
    }
    li:last-child{
      border-bottom: none;
    }
  }
  ul:last-child{
    li:nth-child(n+4){
      span:last-child{
        color: #0387ff;
      }
    }
  }
  ul:last-child{
    li:nth-child(4){
      b{
        font-weight: 500;
      }
      span:first-child{
        b:last-child{
          display: none;
        }            
      }
    }
    li.on{
      span:first-child{
          line-height: 1;
          img{
            float: left;
            margin-top: 0.27rem;
          }
        b{
          width: 6.5rem;
          display: block;
          font-weight: 500;
        }
        b:nth-child(2){
          margin-top: 0.2rem;
        }
        b:last-child{
          font-size: 0.24rem;
          margin-top: 0.1rem;
          color: #999999;
          display: block;
        }
      }
      span:last-child{
        b{
          display: none
        }
      }

    }
    li:last-child{
      b{
        font-weight: 500;
      }
    }
  }
}

</style>
