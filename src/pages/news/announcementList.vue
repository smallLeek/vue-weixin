<template>
    <div class="announcement">
        <!-- title -->
        <div class="announcement_title">
            <router-link to="/home">
                <img src="../../../static/images/goBack.png">
            </router-link>
            <span>平台公告</span>
        </div>
        <!-- tab -->
        <div class="announcement_nav">
            <router-link to="/announcementList">
                <li>
                    <span class="on">公告<img src="../../../static/images/announcement_news_sign.png"></span>
                </li>
            </router-link>
            <router-link to="/newsList">
                <li>
                    <span>新闻<img src="../../../static/images/announcement_news_sign.png"></span>
                </li>
            </router-link>
        </div>
        <!-- 公告列表 -->
        <scroller class="announcement_list" :on-refresh="refresh" :on-infinite="infinite">
            <ul>
                <router-link :to="{path: 'news', query: {  name: 'announcementList'+'123'}}" v-for="item in items">
                    <li>
                        <h1>{{item}}</h1>
                        <h2>2017-03-22 14:41:27</h2>
                        <img src="../../../static/images/announcement_details.png">
                    </li>
                </router-link>
                <router-link :to="{path: 'news', query: {  name: 'announcementList'+'123'}}" v-for="item in items">
                    <li>
                        <h1>关于招商银行恢复使用公告</h1>
                        <h2>{{item}}</h2>
                        <img src="../../../static/images/announcement_details.png">
                    </li>
                </router-link>
            </ul>
        </scroller>
    </div>
</template>
<script>
export default {
   data () {
    return {
        items: []
    }
},

  mounted:function () {
      for (var i = 1; i <= 10; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.');
      }
      this.top = 1;
      this.bottom = 10;

  },
  methods:{
    //   上拉刷新下拉加载
      refresh: function (done) {
        //   alert(1)
        var self = this
        setTimeout(function () {
          var start = self.top - 1
          for (var i = start; i > start - 10; i--) {
            self.items.splice(0, 0, i + ' - keep walking, be 2 with you.');
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
            self.items.push(i + ' - keep walking, be 2 with you.');
          }
          self.bottom = self.bottom + 10;
          done();
        }, 1500)
      }
  }
}
</script>
<style lang="less" scoped>
@import "../../assets/css/newsList.less";
</style>