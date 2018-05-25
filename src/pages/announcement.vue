<template>
    <div class="announcement">
        <!-- title -->
        <div class="announcement_title">
            <router-link to="/home">
                <img src="../assets/images/goBack.png">
            </router-link>
            <span>平台公告</span>
        </div>
        <!-- tab -->
        <div class="announcement_nav">
            <li>
                <span class="on">公告<img src="../assets/images/announcement_news_sign.png"></span>
            </li>
            <li>
                <span>新闻<img src="../assets/images/announcement_news_sign.png"></span>
            </li>
        </div>
        <!-- 公告列表 -->
        <div class="announcement_list">
            <ul>
                <scroller :on-infinite="infinite1"  :on-refresh = "refresh1" ref="my_scroller1">
                <router-link to="/news">
                    <li>
                        <h1>关于招商银行恢复使用公告</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details.png">
                    </li>
                </router-link>
                <router-link to="/news">
                    <li>
                        <h1>关于招商银行恢复使用公告</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details.png">
                    </li>
                </router-link>
                <router-link to="/news">
                    <li>
                        <h1>关于招商银行恢复使用公告</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details.png">
                    </li>
                </router-link>
                <router-link to="/news">
                    <li>
                        <h1>关于招商银行恢复使用公告</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details.png">
                    </li>
                </router-link>
                <router-link to="/news">
                    <li class="on">
                        <h1>关于招商银行恢复使用公告</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details_on.png">
                    </li>
                </router-link>
                <router-link to="/news">
                    <li class="on">
                        <h1>关于招商银行恢复使用公告</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details_on.png">
                    </li>
                </router-link>
                <router-link to="/news">
                    <li class="on">
                        <h1>关于招商银行恢复使用公告</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details_on.png">
                    </li>
                </router-link>
                <router-link to="/news">
                    <li class="on">
                        <h1>关于招商银行恢复使用公告</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details_on.png">
                    </li>
                </router-link>
                </scroller>
            </ul>
        </div>
        <!-- 新闻列表 -->
        <div class="news_list">
            <ul>
                <scroller :on-infinite="infinite2"  :on-refresh = "refresh2" ref="my_scroller2">
                <router-link to="/news">
                    <li>
                        <h1>关于招商银行恢复使用公告1</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details.png">
                    </li>
                </router-link>
                <router-link to="/news">
                    <li>
                        <h1>关于招商银行恢复使用公告1</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details.png">
                    </li>
                </router-link>
                <router-link to="/news">
                    <li>
                        <h1>关于招商银行恢复使用公告1</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details.png">
                    </li>
                </router-link>
                <router-link to="/news">
                    <li>
                        <h1>关于招商银行恢复使用公告1</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details.png">
                    </li>
                </router-link>
                <router-link to="/news">
                    <li class="on">
                        <h1>关于招商银行恢复使用公告1</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details_on.png">
                    </li>
                </router-link>
                <router-link to="/news">
                    <li class="on">
                        <h1>关于招商银行恢复使用公告1</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details_on.png">
                    </li>
                </router-link>
                <router-link to="/news">
                    <li class="on">
                        <h1>关于招商银行恢复使用公告1</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details_on.png">
                    </li>
                </router-link>
                <router-link to="/news">
                    <li class="on">
                        <h1>关于招商银行恢复使用公告1</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../assets/images/announcement_details_on.png">
                    </li>
                </router-link>
                </scroller>
            </ul>
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
        show:false,
        items1: [],
        offset1: 0,
        items2: [],
        offset2: 0 
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
    $('.announcement_nav li span').click(function(){
        window.scrollTo(0,0);
        $(this).addClass('on').parent('li').siblings('li').children('span').removeClass('on')
        if($(this).parent('li').index()==0){
            $('.announcement_list').show()
            $('.news_list').hide()
        }else if($(this).parent('li').index()==1){
            $('.announcement_list').hide()
            $('.news_list').show()
        }
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


    // 上拉刷新下拉加载1
    getDate1 (offset1, fn) {
        this.http.get({
        url: 'api',
        data: {
            'authToken': this.$route.params.authToken, 
            'offset1': offset1,
            'limit': 10
        },
        success: data => {
            if (data.length < 10) {    //每次请求数据是10条，如果数据不够10条，就是没数据了 让页数=0；
            this.offset1 = 0
            fn(true)
            return
            } else {
            if (fn) fn()
            }
            if (offset1 === 1) {
            this.items1 = data   //如果是想下滑动，刷新数据 就让items1等于最新数据
            } else {
            this.items1 = this.items1.concat(data) //否则就把数据拼接
            }
        },
        error: err => {
            console.log(err, '----------err')
            // let message = err.response
            // toastr.toastrUtil(message.data[0].errorMessage)
        }
        })
    },
    // 上拉刷新下拉加载2
    getDate2 (offset2, fn) {
        this.http.get({
        url: 'api',
        data: {
            'authToken': this.$route.params.authToken, 
            'offset2': offset2,
            'limit': 10
        },
        success: data => {
            if (data.length < 10) {    //每次请求数据是10条，如果数据不够10条，就是没数据了 让页数=0；
            this.offset2 = 0
            fn(true)
            return
            } else {
            if (fn) fn()
            }
            if (offset2 === 1) {
            this.items2 = data   //如果是想下滑动，刷新数据 就让items2等于最新数据
            } else {
            this.items2 = this.items2.concat(data) //否则就把数据拼接
            }
        },
        error: err => {
            console.log(err, '----------err')
            // let message = err.response
            // toastr.toastrUtil(message.data[0].errorMessage)
        }
        })
    },
    infinite1 (done) {
        this.offset1++    //每当向上滑动的时候就让页数加1
        this.getDate1(this.offset1, done)
    },
    refresh1 (done) { //这是向下滑动的时候请求最新的数据
        this.offset1 = 0
        this.getDate1(1, done)
    },
    infinite2 (done) {
        this.offset2++    //每当向上滑动的时候就让页数加1
        this.getDate2(this.offset2, done)
    },
    refresh2 (done) { //这是向下滑动的时候请求最新的数据
        this.offset2 = 0
        this.getDate2(1, done)
    }
  },

  components: {
    phtModal,
    phtLoading
  }

}
</script>
<style scoped>
.announcement{
  background: url(../assets/images/background_img_1x.png);
  padding-bottom: 0.5rem;
  padding-top: 1.98rem;
  width: 7.5rem;
}
/* title */
.announcement_title{
    width: 7.5rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.4rem;
    text-align: center;
    color: #fff;
    background-color: #fb4747;
    position: fixed;
    top: 0;
    margin: auto;
    z-index: 100;
}
.announcement_title img{
    position: absolute;
    left: 0.2rem;
    top: 0.25rem;
    height: 0.5rem;
}
.announcement_title a:hover{
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;  
  text-decoration: none;
}
/* tab */
.announcement_nav{
  width: 7.5rem;
    height: 0.78rem;
    line-height: 0.78rem;
    display: flex;
    background-color: #fff;
    margin-bottom: 0.2rem;
    position: fixed;
    top: 1rem;
    margin: auto;
    z-index: 100;
    border-bottom: 1px solid #e0e0e0;
}
.announcement_nav li{
    flex: 1;
    text-align: center;
    font-size: 0.3rem;
    color: #333333;
}
.announcement_nav li span{
    display: block;
    margin: auto;
    width: 1.2rem;
    height: 0.74rem;
    line-height: 0.78rem;
    position: relative;
}
.announcement_nav li span.on{
    color: #fb4747;
    border-bottom: 0.04rem solid #fb4747;
}
.announcement_nav li img{
    position: absolute;
    top: 0.1rem;
    right: 0;
    width: 0.15rem;
}
/* 公告列表 */
.announcement_list ul{
    width: 7.5rem;
    margin: auto;
}
.announcement_list ul a{
    display: block;
    margin: auto;
    width: 7.5rem;
}
.announcement_list ul li{
    height: 1.3rem;
    padding: 0 .2rem;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    box-sizing: border-box;
    position: relative;
}
.announcement_list ul li img{
    position: absolute;
    height: 0.3rem;
    right: 0.2rem;
    top: 0.5rem;
}
.announcement_list ul a:hover{
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;  
  text-decoration: none;
}
.announcement_list ul li h1{
    font-size: 0.3rem;
    color: #333333;
    padding-top: 0.3rem;
}
.announcement_list ul li h2{
    font-size: 0.24rem;
    color: #999999;
    margin-top: 0.2rem;
}
.announcement_list ul li.on h1{
    font-weight: 500;
    color: #999999
}
/* 新闻列表 */
.news_list{
    display: none
}
.news_list ul a{
    display: block;
    margin: auto;
    width: 7.5rem;
}
.news_list ul li{
    margin: auto;
    width: 7.5rem;
    height: 1.3rem;
    padding: 0 .2rem;
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid #e0e0e0;
    box-sizing: border-box
}
.news_list ul li img{
    position: absolute;
    height: 0.3rem;
    right: 0.2rem;
    top: 0.5rem;
}
.news_list ul a:hover{
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;  
  text-decoration: none;
}
.news_list ul li h1{
    font-size: 0.3rem;
    color: #333333;
    padding-top: 0.3rem;
}
.news_list ul li h2{
    font-size: 0.24rem;
    color: #999999;
    margin-top: 0.2rem;
}
.news_list ul li.on h1{
    font-weight: 500;
    color: #999999
}

/* 刷新加载 */
.row {
  display: block;
  width: 100%;
  height: 50px;
  padding: 10px 0 10px 15px;
  font-size: 16px;
  line-height: 30px;
  color: #444; 
  background-color: #fff;
 }
.grey-bg {
    background-color: #eee;
}
._v-container{
    padding-top: 2rem;
}
</style>
