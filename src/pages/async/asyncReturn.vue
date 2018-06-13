<template>
    <div class="asyncReturn" v-title="'异步返回'">
      <div class="herd_box"><img src="../../../static/images/asnyc/banner@2x.png" alt=""></div>
      <div class="registerCon">
        <img src="../../../static/images/asnyc/success.png" alt="">
        <p class="bank"><span>{{xwBank}}</span></p>
        <p class="sure" @click="sure">确定</p>
      </div>
    </div>
</template>

<script>
  import store from '../../vuex/store'
  import { mapGetters } from 'vuex';
  import * as apis from '../../assets/js/jwt.apis'
    export default {
       data(){
         return{

         }
       },
      computed:{

        ...mapGetters([
          'xwBank',
        ]),
      },
      mounted(){
         this.updateUserInfo()
      },
      methods:{
        sure(){

        }
      }
    }
</script>

<style scoped>
.herd_box img{
  width: 100%;
}
.registerCon {
  width: 6rem;
  margin: .8rem auto 0 auto;
  color: #666;
  font-size: .3rem;
  line-height: .48rem;
  text-align: center;
}
.registerCon  p{
  margin-top: .3rem;
}
.registerCon .sure{
  display: inline-block;
  margin-top: 1rem;
  height: .7rem;
  width: 2.6rem;
  background: #fb4747;
  text-align: center;
  border-radius: .05rem;
  color: #fff;
  line-height: .7rem;
}
.sure:hover{
  background: #e03434;
}



</style>
