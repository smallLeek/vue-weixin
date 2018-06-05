<template>
  <div>
  <div class="xiaoren" v-if="show"><img src="../../../static/images/fenxiang.png" alt="" title="" style="width:60%;float:right;"/></div>
  <div class="zhezhao" v-if="show"></div>
  </div>
</template>

<script>
export default {
   data () {
    return {
      show:false

    }
},
mounted(){
  let self =this
  this.bs.$on('e:block', function (data) {
    self.show =data
  });
}

}
</script>

<style scoped>
  .zhezhao{
    position:fixed;
    z-index:99;
    left:0;
    top:0;
    opacity:0.7;
    width:100%;
    height:100%;
    background:#000;
  }
  .xiaoren{
    position:fixed;
    top:.03rem;
    right:5%;
    z-index:999;
  }

</style>
