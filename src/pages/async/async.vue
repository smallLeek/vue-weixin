<template>
    <div class="async" v-title="'审核中'">
      <div class="icon"></div>
      <div class="registerCon">
        <p class="bank"><span>银行存管系统处理中请稍后</span><span class="time">{{count}}s</span></p>
      </div>
    </div>
</template>

<script>
  import store from '../../vuex/store'
  import * as apis from '../../assets/js/jwt.apis'
  import {mapGetters, mapActions,mapState} from 'vuex'
  import * as regexfun from '../../../src/assets/js/jwt.regex';
  import * as infoName from '../../assets/js/jwt.asyncInfo'
    export default {
        data(){
          return{
            count: null,
            timer: null,
            timer1: null,
            status: null,
            request_no:null,
            method_name:null,
            infoTitle:null
          }
        },
      created(){
        this.request_no= this.$route.query.REQUEST_NO;
        this.method_name= this.$route.query.METHOD_NAME;
        this.infoTitle = this.request_no.substring(0, 3);
        this.load();
      },
      computed: {
        //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
        ...mapGetters([
          'loginStatus','userInfo','tokenCode','isRealName'
        ])
      },
      mounted(){
      },
      methods:{
        ...mapActions({setUserInfo: 'setUserInfo'}),

        load() {
          let userState = store.state.user
          let self = this
          this.count = 20
          self.timer = setInterval(() => {
            if (self.count > 0 && self.count <= self.count) {
              self.count--;
            } else {

              clearInterval(self.timer);
              clearInterval(self.timer1);
              self.timer = null;
              self.timer1 = null;
              self.updateUserInfo();
              store.dispatch('USER_XW_BANK', '银行存管系统审核中...')
              self.$router.push({path: '/asyncReturn'})
            }
          }, 1000)
          self.timer1 = setInterval(() => {
            apis.queryNewAddPersonAsync( self.request_no,self.method_name,'1',userState.ID,userState.USER_TYPE).then((data) => {
              console.log(data)
              if(data.status =='00000000'){
                let userData = data.result.main_data;
                if(userData.XW_IS_ASYNC == '1') {
                  if (userData.XW_ASYNC_STATE == '1') {
                    clearInterval(self.timer);
                    clearInterval(self.timer1);
                    self.timer = null;
                    self.timer1 = null;
                    self.updateUserInfo();
                    store.dispatch('USER_XW_BANK',userData.XW_MESSAGE )
                    this.$router.push({path: '/asyncReturn'})
                  } else if (userData.XW_ASYNC_STATE == '0') {
                    regexfun.handleFailMsg(self, userData.XW_MESSAGE);
                    location.href = location.origin +  userState.accessAuth.whereBack

                  }
                }
              } else {
                regexfun.handleFailMsg(self, data.message);
              }


            })

          }, 5000)
        },
        //异步回来刷新用户信息
        updateUserInfo(){
          let  userId = store.state.user.userInfo.ID;
          console.log(userId)
          apis.userBaseData(userId,'1').then((data) => {
            console.log(data)
            if(data.status == '00000000'){
              console.log(data.result.main_data)
              let res = data.result.main_data
              this.setUserInfo(res);
            }else {
              regexfun.handleFailMsg(this,data.message)
            }


          })

        },
      }
    }
</script>

<style scoped>
  .async {
    font-family: "微软雅黑";
    width: 5rem;
    height: 4.6rem;
    margin: 1.6rem auto 0 auto;
  }

  .icon {
    margin: 0 auto;
    height: .9rem;
    width: .9rem;
    background: url("../../../static/images/loading.gif");
    background-size: 100%;
  }

  .registerCon {
    margin: .5rem auto 0 auto;
  }

  .bank {
    width: 5rem;
    color: #666;
    font-size: .3rem;
    line-height: .48rem;
    text-align: center;
  }

  .time {
    color: #fb4747;
  }
</style>
