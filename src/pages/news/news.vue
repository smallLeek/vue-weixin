<template>
    <div class="news">
        <div class="news_title">
            <a>
                <img src="../../../static/images/goBack.png">
            </a>
            <span>新闻</span>
        </div>
        <scroller class="news_content" :on-refresh="refresh" :on-infinite="infinite">
          <div class="content">
            <li v-for="item in items">{{item}}<img src="../../../static/images/user_menu_icon.png"></li>
          </div>
        </scroller>
    </div>
</template>
<script>
import * as apis from '../../assets/js/jwt.apis'
export default {
   data () {
    return {
      items:[]
    }
},

  mounted:function () {
    this.getNoticeInfo()
    for (var i = 1; i <= 10; i++) {
      this.items.push(i +  - '新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻');
    }
    this.top = 1;
    this.bottom = 10;

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
        apis.getNotice(this.$route.query.id).then((data)=> {
          console.log(data)
        });
    },



    //   上拉刷新下拉加载
      refresh: function (done) {
        //   alert(1)
        var self = this
        setTimeout(function () {
          var start = self.top - 1
          for (var i = start; i > start - 10; i--) {
            self.items.splice(0, 0, i + ' - 新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻');
          }
          self.top = self.top - 10;
          done();
        }, 1500)
      },

      infinite: function (done) {
        //   alert(2)
        var self = this
        setTimeout(function () {
          var start = self.bottom + 1;
          for (var i = start; i < start + 10; i++) {
            self.items.push(i + ' - 新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻');
          }
          self.bottom = self.bottom + 10;
          done();
        }, 1500)
      },

  }

}
</script>
<style lang="less" scoped>
@import "../../assets/css/news.less";
</style>
