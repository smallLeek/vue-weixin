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
      wxShare.onMenuShareAppMessage({
        title:"这是分享的标题",
        desc:"这是分享的描述",
        link:"https://www.phtfdata.com/wx/home",
        imgUrl:"https://www.phtfdata.com/web6/images/wen2.png",
        type:"link"
      })
    })
  },
  methods:{


  }

}
</script>

<style scoped>

</style>
