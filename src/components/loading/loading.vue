<template>
  <div class="loading">
    <div class="loadingBg br10">
      <div class="loadingLine">
        <img src="../../../static/images/loading.gif" alt="">
        <p>加载中</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
   data () {
    return {

    }
},

}
</script>

<style scoped>
.loading{
  width: 100%;
  height: 100%;
  background:#fff;
  position: fixed;
  z-index: 99999999;
}
.loadingBg{
  height: 1.8rem;
  width: 1.6rem;
  position: absolute;
  margin: auto;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background: rgba(0,0,0,0.8);
}
.loadingLine{
  height: 1.34rem;
  width: 1.6rem;
  position: absolute;
  margin: auto;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}
.loadingBg img{
  height: 0.82rem;
  width: 0.82rem;
}
.loadingBg p{
  font-size: 0.28rem;
  color: #fff;
  margin-top: 0.24rem;
}
</style>
