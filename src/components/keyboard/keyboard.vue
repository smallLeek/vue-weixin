<template>
  <div class="app">
      <input onfocus="this.blur();" id="amount" type="text" :placeholder="placeholderval">
      
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
  data(){
    return{
      
    }
  },
  props:{
    placeholderval:String,
    qkbtn:String,
    jphx:String
  },
    mounted(){
        // 清空输入金额
        $(this.qkbtn).click(function(){
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
        $(this.jphx).click(function(){
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
.keyboard{
    width: 7.5rem;
    height: 4.68rem;
    position: fixed;
    bottom: -5rem;
    left: 0;
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
