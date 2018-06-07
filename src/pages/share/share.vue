<template>
  <div>
    <button @click="share">点击分享给好友</button>
  </div>
</template>

<script>
  import {phtServer} from '../../assets/js/phtServer'
export default {
   data () {
    return {

    }
},
  methods:{
     share(){
       phtServer.onMenuShareAppMessage()


     },
    getNetworkType(){
      phtServer.getNetworkType()
    }
  }

}
</script>

<style scoped>

</style>
