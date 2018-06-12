<template>
    <div class="async">
    {{loginStatus}}
    </div>
</template>

<script>
  import store from '../../vuex/store'
  import * as apis from '../../assets/js/jwt.apis'
  import {mapGetters, mapActions,mapState} from 'vuex'


    export default {
        data(){
          return{

          }
        },
      computed: {
        //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
        ...mapGetters([
          'loginStatus','userInfo','tokenCode','isRealName'
        ])
      },
      mounted(){

          this.updateUserInfo()
      },
      methods:{
        ...mapActions({setUserInfo: 'setUserInfo'}),
       //异步回来刷新用户信息
        updateUserInfo(){
         console.log(store.state.user.userInfo);
         let  userId = store.state.user.userInfo.ID;
         let  userType = store.state.user.userInfo.USER_TYPE;
          apis.userBaseData(userId,userType).then((data) => {
            let res = data.result.main_data
            if(data.status=='00000000'){
              this.setUserInfo(res)
            }


          })

        }
      }
    }
</script>

<style scoped>

</style>
