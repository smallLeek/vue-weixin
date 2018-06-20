<template>
    <div class="XwBank" v-if="openXW">
      <div class="XwContent">
        <div class="XwBox">
          <div class="XwBank-close" @click="close()">
            <div class="pic"></div>
          </div>
          <div class="XwBank-detail" @click ="detail()"></div>
          <div class="XwBank-open" @click="userActivate()"></div>
        </div>

      </div>

    </div>
</template>

<script>
  import * as apis from '../../assets/js/jwt.apis'
    export default {
       data(){
         return{
           openXW:true
         }
       },
      methods:{
        close(){
          this.openXW =false
        },
        detail(){
          location.href = "https://www.phtfdata.com/web6/hander/newBankHerd.do"
        },
        userActivate(){

        }
      }
    }
</script>

<style lang="less" scoped>
  .XwBank{
    position: relative;
  .XwContent{
    position: fixed;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 99999999;
    background: rgba(0,0,0,0.5)!important;
    .XwBox{
      background: url("../../../static/images/xwBank.png") no-repeat;
      background-size: contain;
      margin: 2rem auto;
      width: 90%;
      height: 90%;
      .XwBank-close{
        position: absolute;
        height: 1.2rem;
        width: 2rem;
        top: 1rem;
        right: .4rem;
        z-index: 99999999;
        .pic{
          width: .9rem;
          margin-left: 1.2rem;
          height: 1rem;
          background: url("../../../static/images/hot_activity_close_img.png") no-repeat;
          background-size: contain;
        }
      }
      .XwBank-detail{
        position: absolute;
        height: 3rem;
        width: 100%;
        top: 2rem;
        right: 0;
        opacity: 0;
        z-index: 99999999;
      }
      .XwBank-open{
        position: absolute;
        height: 5rem;
        width: 100%;
        opacity: 0;
        top: 5rem;
        right: 0;
        z-index: 99999999;
      }

    }
  }


  }



</style>
