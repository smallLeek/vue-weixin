<template>
<div class="getBackPwd">
  <x-header :left-options="{backText:''}">密码找回</x-header>
  <div class="content">
    <div class="phoneNum">
      <input class="i_phoneNum" type="text" maxlength="11" v-model="phoneNum" placeholder="请输入绑定手机号" >

    </div>
  </div>
</div>
</template>

<script>
  import { XHeader }  from 'vux'
    export default {
        data(){
          return{
            phoneNum:null,

          }
        },
      components:{
        XHeader
      }
    }
</script>

<style scoped>

</style>
