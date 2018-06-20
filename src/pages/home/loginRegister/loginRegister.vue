<template>
    <div class="login">
        <div class="head">
            <div class="tab">
                <span @click="showFn()">手机登录</span>
                <span @click="outFn()">免费注册</span>
            </div>
          <s class="loginSign" v-if="show"></s>
          <s class="registerSign" v-if="out"></s>

        </div>
      <router-view></router-view>
    </div>
</template>
<script>
export default {
  data(){
    return{
      show:true,
      out:false
    }
  },
    methods: {
      showFn(){
       this.show = true;
       this.out = false;
        this.$router.push({ path: "/loginRegister/login" })
      },
      outFn(){
        this.show = false;
        this.out = true;
        this.$router.push({ path: "/loginRegister/register" })
      }
      }
}
</script>
<style lang="less" scoped>
.login{
    background-color: #f8f8f8;
}
.head{
    height: 4.1rem;
    background: url(../../../../static/images/login/login_bg.png);
    background-size: 100% 100%;
    position: relative;
  s{
    position: absolute;
    bottom: -0.1rem;
    width: 0.2rem;
    height: 0.2rem;
    background-color:#f8f8f8;
    transform: rotate(45deg)
  }
  .loginSign{
    left: 1.7rem;
  }
  .registerSign{
    right: 1.7rem;
  }
    .tab{
        position: absolute;
        left: 0;
        bottom: 0.4rem;
        width: 100%;
        display: flex;
        span{
            flex: 1;
            text-align: center;
            font-size: 0.3rem;
            color: #fff;
        }

    }
}

</style>
