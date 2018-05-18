<template>
  <div class="home"  v-title="'融资'">
    <pht-modal v-show=show></pht-modal>
    <pht-loading v-show=show></pht-loading>
    {{loginStatus}}
    {{userInfo.data}}
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

<style scoped >
.home{
  color: red;
  font-size: .26rem;
  width: 7.5rem;
  height: .8rem;
  background: cyan;
  line-height: .8rem;
  text-align: center;
}
</style>
