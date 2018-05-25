<template>
    <div class="news">
        <div class="news_title">
            <router-link to="">
                <img src="../assets/images/goBack.png">
            </router-link>
            <span>新闻</span>
        </div>
        <div class="news_content">
            新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
            <img src="../assets/images/user_menu_icon.png">
            新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
            <img src="../assets/images/user_menu_icon.png">
            新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
            <img src="../assets/images/user_menu_icon.png">
            新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
            <img src="../assets/images/user_menu_icon.png">
        </div>
    </div>
</template>
<script>
  import phtModal from '../components/modal/modal.vue';
  import phtLoading from '../components/loading/loading.vue';
  import {phtServer}  from '../assets/js/phtServer'
  import {mapGetters, mapActions,mapState} from 'vuex'
export default {
   data () {
    return {
      show:false

    }
},
  computed: {
    ...mapGetters([
      'loginStatus','userInfo'

    ])
  },

  mounted:function () {
   this.showModal();
   this.connectServer();
   this.getAccess();
    phtServer.initWxJsAPI().then(function () {
      alert(phtServer.getNetworkType().subtype);
    });

    $('.news_title a').click(function(){
      history.go(-1)
    })
  },
  methods:{
    ...mapActions({ setUserInfo: 'setUserInfo'}),
    connectServer() {
      this.setUserInfo({data:'1111',age:'18',height:'183'})
     console.log(JSON.parse(phtServer.getStore('userInfo')).data)

    },
     showModal:function () {
//       $.showphtModal({
//         errorMsg: '小白菜地里黄两三岁没了娘',
//         withOneButton:0,
//         type:2
//       })
     },
    getData:function () {
      phtServer.initWxJsAPI().then(function () {
        phtServer.scanQRCode()

      });

    },
    getAccess:function () {
      phtServer.globalGetData('/list/cgi-bin/token?grant_type=client_credential&appid=wx8f11eee482052822&secret=1f139593d8d1b11675c99ff4348057d6').then((data)=>{
        console.log(data)
      },(error)=>{
      console.log(error)
      })

    },

  },

  components: {
    phtModal,
    phtLoading
  }

}
</script>
<style scoped>
.news{
  background: url(../assets/images/background_img_1x.png);
  padding-bottom: 0.5rem;
  padding-top: 1rem;
}
/* title */
.news_title{
    margin: auto;
    width: 7.5rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.4rem;
    text-align: center;
    color: #fff;
    background-color: #fb4747;
    position: fixed;
    top: 0;
    z-index: 100;
}
.news_title img{
    position: absolute;
    left: 0.2rem;
    top: 0.25rem;
    height: 0.5rem;
}
.news_title a:hover{
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;  
  text-decoration: none;
}
.news_content{
    font-size: 0.3rem;
    padding: .2rem;
}
.news_content img{
    width: 100%;
}
</style>
