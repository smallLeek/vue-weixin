<template>
  <div>
   <button>分享给朋友</button>
  </div>
</template>

<script>
 import * as wxShare from '../../assets/js/jwt.share'
export default {
   data () {
    return {

    }
},
  mounted(){
    wxShare.initWxJsAPI().then(function () {
      wxShare.onMenuShareAppMessage()
    })
  },
  methods:{


  }

}
</script>

<style scoped>

</style>
