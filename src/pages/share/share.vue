<template>
  <div>
   <button @click="shareF()">分享给朋友</button>
  </div>
</template>

<script>
  import '../../assets/js/jwt.share';
  import {onMenuShareAppMessage} from '../../assets/js/jwt.share'
export default {
   data () {
    return {

    }
},
  methods:{
    shareF(){
      onMenuShareAppMessage()
    },

  }

}
</script>

<style scoped>

</style>
