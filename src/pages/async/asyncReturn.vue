<template>
    <div class="asyncReturn" v-title="'操作成功'">
      <div class="herd_box"><img src="../../../static/images/async/banner@2x.png" alt=""></div>
      <div class="registerCon">
        <img src="../../../static/images/async/success.png" alt="">
        <p class="bank">恭喜！</p>
        <p class="bank"><span>{{xwBank}}</span></p>
        <p class="sure" @click="sure">确定</p>
      </div>
    </div>
</template>

<script>
  import store from '../../vuex/store'
  import { mapGetters } from 'vuex';
    export default {
       data(){
         return{

         }
       },
      computed:{

        ...mapGetters([
          'xwBank'
        ]),
      },
      mounted(){
      },
      methods:{
        sure(){
          let userState = store.state.user
          location.href = location.origin +  userState.accessAuth.whereToGo

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
.registerCon img{
  height: .65rem;
  width: .65rem;
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
