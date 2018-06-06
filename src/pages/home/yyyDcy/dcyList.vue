<template>
    <div class="dcyList">
        <div class="dcy_area">
        <div class="area_title">
            <img src="../../../../static/images/home_dcy_title.png" class="area_title_img">
            <!-- <router-link to="/dcyMore"><span>更多<img src="../../../static/images/home_more.png"></span></router-link> -->
        </div>
            <router-link :to="{path: 'dcyParticulars', query: {  name: 'home',id: item.PROJ_CODE}}" v-for="(item , index) in recommendedProject_dcy" :key="index">
            <ul>
                <li v-text="item.PROJ_NAME"></li>
                <li>
                <span>
                    <b v-text="item.ANNUAL_RATE"></b>%
                </span>
                <span>
                    <b v-text="item.LOAN_LIMITTIME"></b>个月
                </span>
                <span>
                    <b v-text="item.SURPLUS_AMOUNT"></b>元
                </span>
                </li>
                <li>
                <span>年化收益</span>
                <span>投资期限</span>
                <span>剩余可投</span>
                </li>
                <!-- 进度条 -->
                <li>
                <span><b><s :style="{width:100-(item.SURPLUS_PART/item.BID_AMOUNT)*100+'%'}"></s></b></span>
                <span>{{100-(item.SURPLUS_PART*100/item.BID_AMOUNT).toFixed(2)}}%</span>
                </li>
            </ul>
            </router-link>
        </div>
    </div>
</template>
<script>
import * as apis from '../../../assets/js/jwt.apis'
export default {
    data(){
        return{
            recommendedProject_dcy:null,
        }
    },
    mounted(){
        this.recommendedProjectList()
    },
    methods:{
            // 获取推荐项目
    recommendedProjectList(){
        let that =this;
        function formatNum(num) {
          return (num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
        apis.recommendedProject().then((data)=> {
          this.recommendedProject_dcy=data.result.main_data.main_dataDCY;
          for (let i=0;i<this.recommendedProject_dcy.length;i++){
            this.recommendedProject_dcy[i].REDEEM_MAX_AMOUNT=formatNum(this.recommendedProject_dcy[i].SURPLUS_AMOUNT)
          }
        });
    },
    }
}
</script>
<style lang="less" scoped>
/* 专区 */
.area_title{
    height: 1rem;
    line-height: 1rem;
    margin-top: 0.2rem;
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    .area_title_img{
        width: 4.5rem;
    }
    span{
        float: right;
        font-size: 0.24rem;
        color: #999999;
        img{
            width: 0.15rem;
            height: auto;
            margin-top: -0.05rem;
            margin-left: 0.1rem;
            margin-right: 0.3rem;
        }
    }
    a:hover{
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-user-select: none;
        -moz-user-focus: none;
        -moz-user-select: none;
        text-decoration: none
    }
  }
.dcy_area{
  background-color: #fff;
  a:hover{
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
    text-decoration: none
}
  ul{
        li:first-child{
            font-size: 0.28rem;
            color: #333333;
            margin-top: 0.2rem;
        }
        li:nth-child(2){
            display: flex;
            span{
                flex: 1;
                text-align: center;
                font-size: 0.28rem;
                margin-top: 0.4rem;
                color: #666666;
                b{
                    font-family: 黑体;
                    font-weight: 500;
                    font-size: 0.4rem;
                    color: #333333
                }
            }
            span:first-child{
                color: #fb4747;
                margin-top: 0;
                font-size: 0.34rem;
                b{
                    font-weight: 500;
                    font-size: 0.94rem;
                    color: #fb4747
                }
            }
        }
        li:nth-child(3){
            display: flex;
            span{
                flex: 1;
                text-align: center;
                font-size: 0.26rem;
                font-weight: 500;
                color: #999999
            }
            span:first-child{
                font-size: 0.24rem;
                line-height: 0.35rem;
            }
        }
        li:nth-child(4){
            margin-top: 0.05rem;
            span:first-child{
                float: left;
                margin-top: 0.16rem;
                width: 82%;
                height: 0.05rem;
                background-color: #e8e8e8;
                border-radius: 10px;
                s{
                    float: left;
                    width: 50%;
                    height: 100%;
                    border-radius: 10px;
                    background-color: #fb4747;
                }
            }
            span:last-child{
                float: right;
                color: #999999;
                font-size: 0.24rem;
                line-height: 0.4rem;
            }
        }
        li:nth-child(5){
            clear: both;
            padding-top: 0.1rem;
            padding-bottom: 0.3rem;
            a{
                display: block;
                color: #fff;
                font-size: 0.3rem;
                width: 5.4rem;
                height: .7rem;
                line-height: .7rem;
                border-radius: 1rem;
                background-color: #fb4747;
                text-align: center;
                margin: auto;
            }
            a:hover{
                -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
                -webkit-user-select: none;
                -moz-user-focus: none;
                -moz-user-select: none;
                text-decoration: none;
            }
            a:active{
                background-color: #de2626;
            }
        }
  }
}
.dcy_area ul{
    padding-left: 0.3rem;
    padding-right: 0.4rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e5e5e5;
}
</style>
