<template>
  <div class="loading">
    <img src="../../assets/images/loading.gif" alt="">
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
.loading img{
  height: 50px;
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -25px;
}
</style>
