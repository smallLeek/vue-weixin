<template>
    <div class="record" v-title="'交易记录'">
        <div class="title">
            <span>
                <router-link to="/account">
                    <img src="../../../static/images/goBack.png">
                </router-link>
            </span>
            <span>交易记录</span>
        </div>
        <div class="list">
            <h1  v-if="tradAllRecordLists">
                <span>项目</span>
                <span>单位(元)</span>
            </h1>
            <ul  v-if="tradAllRecordLists">
                <li v-for="item in tradAllRecordList">
                    <p>
                        <span>{{item.TYPESTR}}</span>
                        <span>{{item.SHOWTIME}}</span>
                    </p>
                    <p>
                        <span :class="{ 'on': item.TYPE=='1' || item.TYPE=='4' || item.TYPE=='12' || item.TYPE=='3'||
                         item.TYPE=='11','active':item.TYPE=='0' && item.STATE=='交易失败','actives':item=='1'&&item.STATE=='交易失败'}">{{fn(item)}}{{item.AMOUNT | farmatAmount}}</span>
                        <span>{{item.STATE}}</span>
                    </p>
                </li>
            </ul>
          <div class="noData" v-if="!tradAllRecordLists">
            <div>
              <img src="../../../static/images/noData.png" alt="">
              <p>还没有交易记录</p>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
  import formatTimes from '../../assets/js/util/lib.formatTime';
  import * as apis from '../../assets/js/jwt.apis';
  import {mapGetters, mapActions,mapState} from 'vuex'
  import '../../assets/js/filter'
export default {
    data(){
      return{
        timeList:null,
        tradAllRecordList:null,
        addSlow:null,
        tradAllRecordLists:null
      }
    },
  computed:{
  ...mapGetters([
      'loginStatus','userInfo','tokenCode'
    ])
  },
    mounted(){
      this.timeList =formatTimes()
      let beginTime =this.timeList.min;
      let endTime = this.timeList.max;
      apis.tradAllRecord(this.userInfo.ID,'1',beginTime[5],endTime[0],'0',endTime[0],'1','100000').then((data)=>{
        if(data.status ='00000000'){
         this.tradAllRecordList =data.result.main_data.data;
          this.tradAllRecordLists = !(this.tradAllRecordList === undefined || this.tradAllRecordList.length == 0);
        }

      })

    },
  methods:{
      fn(item){
        if (item.TYPE=='1'||item.TYPE=='3'||item.TYPE=='4'||item.TYPE=='11'||item.TYPE=='12'||item.TYPE=='14'||item.TYPE=='15'||item.TYPE=='16') {
          return '-'
        }else if(item.TYPE=='9'){
          if (item.TYPESTR=="商品兑换"||item.TYPESTR=="预付利息"||item.TYPESTR=="项目手续费") {
           return '-'
          }else {
            return '+'
          }
        }else {
          return "+"
        }

      }
  }
}
</script>
<style lang="less" scoped>
.record{
    background-color: #f8f8f8;
    padding-bottom: 0.94rem;
}
/* title */
.title{
  margin: auto;
  width: 7.5rem;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.36rem;
  text-align: center;
  color: #fff;
  background-color: #fb4747;
  position: fixed;
  top: 0;
  z-index: 100;
  img{
    height: 0.5rem;
    vertical-align: middle;
  }
  a{
    position: absolute;
    width: 1rem;
    height: 1rem;
    left: 0;
    top: -0.02rem
  }
}
.nav{
        width: 7.5rem;
        position: fixed;
        margin: auto;
        top: 1rem;
    ul{
        display: flex;
        height: 1.2rem;
        background-color: #fff;
        li{
            flex: 1;
            line-height: 1;
            text-align: center;
            span{
                display: block;
                color: #333333;
            }
            span:first-child{
                font-size: 0.3rem;
                margin-top: 0.3rem;
            }
            span:last-child{
                font-size: 0.24rem;
                margin-top: 0.1rem;
            }
        }
        li.on{
            span{
                color: #fd4747
            }
        }
    }
}
.list{
    h1{
        position: fixed;
        margin: auto;
        top: 1rem;
        width: 7.5rem;
        height: 0.6rem;
        line-height: 0.7rem;
        font-size: 0.26rem;
        font-weight: 500;
        color: #999999;
        background-color: #F8F8F8;
        span:first-child{
            float: left;
            margin-left: 0.2rem;
        }
        span:last-child{
            float: right;
            margin-right: 0.2rem;
        }
    }
    ul{
        margin-top: 1.8rem;
        padding: 0 0.2rem;
        background-color: #fff;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        li{
            height: 1.3rem;
            line-height: 1;
            border-bottom: 1px solid #e0e0e0;
            p{
                height: 1.3rem;
                span{
                    display: block;
                }
                span:first-child{
                    font-size: 0.3rem;
                    margin-top: 0.3rem;
                }
                span:last-child{
                    font-size: 0.3rem;
                    color: #999999;
                    margin-top: 0.18rem;
                }
            }
            p:first-child{
                float: left;

            }
            p:last-child{
                float: right;
                span{
                    text-align: right
                }
                span:first-child{
                    color: #387eff
                }
                span.on{
                    color: #ff8400
                }
              span.active{
                color:#999
              }
              span.actives{
                color:#999
              }
            }
        }
        li:last-child{
            border: none
        }
    }
}
.inquire{
    display: none;
    position: fixed;
    margin: auto;
    top: 1rem;
    z-index: 1000;
    width: 7.5rem;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    .box{
        height: 3.3rem;
        background-color: #fff;
        ul{
            padding: 0.3rem;
            li{
                float: left;
                width: 2.2rem;
                height: 0.7rem;
                line-height: 0.7rem;
                margin-bottom: 0.2rem;
                margin-right: 0.15rem;
                font-size: 0.3rem;
                text-align: center;
                color: #333333;
                border: 1px solid #e0e0e0;
                border-radius: 0.06rem;
                box-sizing: border-box;
            }
            li:nth-child(3n){
                margin-right: 0;
            }
            li.on{
                color: #fff;
                background-color: #ffa800;
                border-color: #ffa800;
            }
        }
    }
}
.noData{
  text-align: center;
  div{
    position: absolute;
    width: 100%;
    height: 2.04rem;
    margin: auto;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    p{
      font-size: 0.32rem;
      color: #666;
    }
    img{
      width: 1.85rem;
      height: 2.04rem;
    }
  }
}
</style>
