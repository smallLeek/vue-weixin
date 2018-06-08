<template>
    <div class="news">
        <div class="news_title">
            <a>
                <img src="../../../static/images/goBack.png">
            </a>
            <span>新闻</span>
        </div>
        <div class="news_content">
          <div class="content" v-html="content">
            <!-- <li></li> -->
          </div>
        </div>
    </div>
</template>
<script>
import * as apis from '../../assets/js/jwt.apis'
export default {
   data () {
    return {
      items:[],
      content:null,
    }
},

  mounted:function () {
    $('.content p').css('background','#f8f8f8')
    this.getNoticeInfo()
    let _this=this;
    // 返回上一路由
    $('.news_title a').click(function(){
      if(_this.$route.query.url.indexOf('newsList')>-1){
        _this.$router.push({ path: "/newsList" })
      }else if(_this.$route.query.url.indexOf('announcementList')>-1){
        _this.$router.push({ path: "/announcementList" })
      }else if(_this.$route.query.url.indexOf('home')>-1){
        _this.$router.push({ path: "/home" })
      }
    })
  },
  methods:{
    // 获取公告详情
    getNoticeInfo(){
        apis.getNoticeInfo(this.$route.query.id).then((data)=> {
          this.content=data.result.main_data.data[0].CONTENT
        });
    },
  }

}
</script>
<style lang="less" scoped>
@import "../../assets/css/news.less";
</style>
