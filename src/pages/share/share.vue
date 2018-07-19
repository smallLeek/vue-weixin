<template>
  <div class="share">
    <div>
      分享分享
    </div>
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
