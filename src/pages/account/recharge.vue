<template>
    <div class="recharge">
        <div class="title">
            <router-link to="/account">
                <img src="../../../static/images/goBack.png">
            </router-link>
            <span>充值</span>
        </div>
        <div class="fund">
            <ul>
                <li>
                    <span><img src="../../../static/images/recharge/recharge_cardlg.png"></span>
                    <span><img src="../../../static/images/recharge/recharge_bank.png"></span>
                    <span>民生银行尾号:3669</span>
                </li>
                <li>
                    <span><img src="../../../static/images/recharge/recharge_right.png"></span>
                </li>
                <li>
                    <span><img src="../../../static/images/recharge/recharge_balance.png"></span>
                    <span>账户余额</span>
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="operation">
                <ul>
                    <li>
                        <span>充值金额(元)</span>
                        <span>账户余额(元)：<b>26.33</b></span>
                    </li>
                    <li>
                        <span>￥</span>
                        <span><input onfocus="this.blur();" id="amount" type="text" placeholder="请输入充值金额"></span>
                        <span id="close"><img src="../../../static/images/recharge/recharge_close.png"></span>
                    </li>
                    <li>
                        <span>充值后余额(元)：<b>6326.33</b></span>
                    </li>
                    <li>
                        <span>本次最大充值金额(元)：<b>500,000.00</b></span>
                        <span><router-link to="">限额说明</router-link></span>
                    </li>
                    <li>
                        <span>卡支付额度：<b>单笔50万/单日50万/单月300万</b></span>
                    </li>
                    <li class="on" id="paybtn">立即充值</li>
                </ul>
            </div>
            <div class="hint">
                <h1>充值小贴士:</h1>
                <ul>
                    <li>1.您的账户资金将由新网银行托管；</li>
                    <li>2.目前充值手续费由平台垫付，快捷充值具体限额以银行为准，大额充值您可通过网页使用网银充值；</li>
                    <li>3.充值到账时间为实时到账。查看<router-link to="">更多帮助</router-link></li>
                </ul>
            </div>
        </div>
        <div class="keyboard">
            <ul class="left">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>.</li>
                <li>0</li>
                <li class="keyboard_down"><img src="../../../static/images/keyboard/keyboardDown.png"></li>
            </ul>
            <ul class="right">
                <li class="keyboardClose"><img src="../../../static/images/keyboard/keyboardReturn.png"></li>
                <li class="keyboard_down">确定</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        // 清空输入金额
        $('#close').click(function(){
            $('#amount').val('')
        });

        $('.keyboard .left li').click(function(){
            if($(this).index()=='11'){
                return
            };
            if($('#amount').val()==''){
                if($(this).index()=='10'||$(this).index()=='9'){
                    return
                }
            }
            if($('#amount').val().indexOf('.')!=-1){
                if($(this).index()=='9'){
                    return
                }
                if($('#amount').val().length>$('#amount').val().indexOf('.')+2){
                    return
                }
            }
            if($('#amount').val().length>=9){
                return
            }
            document.getElementById('amount').value+=$(this).html()
        })
        // 键盘删除按钮
        $('.keyboardClose').click(function(){
            document.getElementById('amount').value=removeLastOne($('#amount').val())
        })
        function removeLastOne(str){
            return str.substring(0,str.length - 1);
        }
        // 键盘显隐
        $('.operation ul li:nth-child(2)').click(function(){
            $('.keyboard').css('bottom','0')
        })
        $('.keyboard_down').click(function(){
            $('.keyboard').css('bottom','-5rem')
        })
        $(document).mouseup(function(e){
            let _con = $('.keyboard');   
            if($('.keyboard').css('bottom')=='0px'){
                if(!_con.is(e.target) && _con.has(e.target).length === 0){
                    $('.keyboard').css('bottom','-5rem')
                }            
            }
        });


        // $("#amount").keyup(function () {
        //         var reg = $(this).val().match(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(1){1}$)|(^[0-9]\.[0-9]([0-9])?$)/);
        //         var txt = '';
        //         if (reg != null) {
        //             txt = reg[0];
        //         }
        //         $(this).val(txt);
        //     }).change(function () {
        //         $(this).keypress();
        //         var v = $(this).val();
        //         if (/\.$/.test(v))
        //         {
        //             $(this).val(v.substr(0, v.length - 1));
        //         }
        //     });

    }
}
</script>
<style lang="less" scoped>
.recharge{
    background-color: #f8f8f8;
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
    }
    a{
        position: absolute;
        width: 1rem;
        height: 1rem;
        left: 0;
        top: -0.02rem
    }
    a:hover{
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-user-select: none;
        -moz-user-focus: none;
        -moz-user-select: none;  
        text-decoration: none;
    }
}
.fund{
    margin-top: 1rem;
    height: 2.5rem;
    background:linear-gradient(to bottom,#fb4747 0%,#fb6547 100%);
    ul{
        padding: 0 0.5rem;
        display: flex;
        li{
            flex: 1;
            padding-top: 0.3rem;
            span{
                display: block;
                text-align: center;
            }
            span:last-child{
                margin-top: 0.2rem;
                font-size: 0.24rem;
                color: #fff;
            }
        }
        li:first-child{
            flex: 1.2;
            position: relative;
            span:first-child{
                position: absolute;
                top: 0.1rem;
                right: -0.5rem;
                img{
                    width: 1rem;
                }
            }
            span:nth-child(2){
                img{
                    width: 1.2rem
                }
            }
        }
        li:nth-child(2){
            text-align: center;
            img{
                width: 1.7rem;
                margin-top: 0.25rem;
            }
        }
        li:last-child{
            flex: 1.2;
            span:first-child{
                img{
                    width: 1.2rem
                }
            }
        }
    }
}
.content{
    background-color: #fff;
    padding: 0 0.3rem;
    padding-bottom: 0.5rem;
    .operation{
        ul{
            padding-top: 0.5rem;
            li{
                clear: both;
            }
            li:first-child{
                span:first-child{
                    float: left;
                    font-size: 0.28rem;
                    color: #333333
                }
                span:last-child{
                    float: right;
                    font-size: 0.26rem;
                    color: #666666;
                    b{
                        font-weight: 500;
                        color: #fb4747;
                    }
                }
            }
            li:nth-child(2){
                margin-top: 0.52rem;
                width: 7rem;
                height: 0.8rem;
                margin-left: -0.05rem;
                border-bottom: 1px solid #e0e0e0;
                span:first-child{
                    float: left;
                    font-size: 0.46rem;
                    margin-left: 0.05rem;
                    line-height: 0.8rem;
                    color: #333333;
                }
                span:nth-child(2){
                    float: left;
                    margin-left: 0.1rem;
                    input{
                        width: 5.5rem;
                        font-size: 0.6rem;
                        color: #333333;
                        border: none;
                        outline:medium;
                        display: inherit;
                    }
                    ::-moz-placeholder {
                        color: #999999;
                        font-size: 0.35rem;
                    }
                    :-ms-input-placeholder {
                        color: #999999;
                        font-size: 0.35rem;
                    }
                    ::-webkit-input-placeholder {
                        color: #999999;
                        font-size: 0.35rem;
                    }
                }
                span:last-child{
                    float: right;
                    width: 0.8rem;
                    height: 0.8rem;
                    line-height: 0.3rem;
                    margin-right: 0.05rem;
                    text-align: right;
                    img{
                        width: 0.3rem;
                    }
                }
            }
            li:nth-child(3){
                margin-top: 0.4rem;
            }
            li:nth-child(4){
                span:last-child{
                    float: right;
                    a{
                        color: #3297ff;
                    }
                }
            }
            li:nth-child(3),
            li:nth-child(4),
            li:nth-child(5){
                height: 0.46rem;
                span{
                    font-size: 0.26rem;
                }
                span:first-child{
                    float: left;
                    color: #666666;
                    b{
                        color: #333333;
                        font-weight: 500;
                    }
                }
            }
            li:nth-child(6){
                width: 7rem;
                height: 0.8rem;
                line-height: 0.8rem;
                margin-top: 0.4rem;
                margin-left: -0.05rem;
                font-size: 0.3rem;
                text-align: center;
                color: #fff;
                background-color: #c4c4c4;
                border-radius: 0.12rem;
            }
            li:nth-child(6){
                background-color: #fb4747;
            }
        }
    }
    .hint{
        margin-top: 0.8rem;
        h1{
            font-size: 0.28rem;
            color: #333333;
        }
        ul{
            margin-top: 0.24rem;
            li{
                height: 0.4rem;
                font-size: 0.26rem;
                color: #333333;
            }
            li:nth-child(2){
                height: 0.8rem;
                line-height: 0.35rem;
            }
            li:last-child{
                a{
                    color: #3297ff
                }
            }
        }
    }
}

.keyboard{
    width: 7.5rem;
    height: 4.68rem;
    position: fixed;
    bottom: -5rem;
    margin: auto;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    transition: 0.2s linear;
    img{
        width: 0.6rem;
    }
    .left{
        float: left;
        width: 5.7rem;
        li{
            float: left;
            width: 1.9rem;
            height: 1.17rem;
            line-height: 1.17rem;
            font-size: 0.42rem;
            color: #333333;
            text-align: center;
            box-sizing: border-box;
            border-bottom: 1px solid #e0e0e0;
            border-right: 1px solid #e0e0e0;
        }
        li:active{
            background-color: #e5e5e5;
        }
        li:nth-child(n+10){
            border-bottom: none;
        }
    }
    .right{
        float: left;
        li{
            width: 1.8rem;
            height: 2.34rem;
            line-height: 2.34rem;
            font-size: 0.36rem;
            text-align: center;
        }
        li:first-child:active{
            background-color: #e5e5e5;
        }
        li:last-child{
            color: #fff;
            background-color: #fb4747;
        }
        li:last-child:active{
            background-color: #de2626;
        }
    }
}
</style>
