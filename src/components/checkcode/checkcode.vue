<template>
  <div>
    <div class="popup" v-if="isShow==true">
      <div class="box">
        <p>确认支付金额<span v-text="withDraw"></span> 元</p>
        <div class="boxInput">
          <input type="text" placeholder="" v-model="publicCode">
          <input type="button" class="codeActive" id="code" @click="createCode" v-model="checkCode">
        </div>
        <div class="btnBox">
          <button class="cancleBox" @click="cancleBox()">取消</button>
          <button class="okBox" @click="okBox()">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as apis from '../../assets/js/jwt.apis'
  import {mapGetters, mapActions, mapState} from 'vuex'
  import * as regexfun from '../../../src/assets/js/jwt.regex';
  export  default ({
    data () {
      return {
        publicCode: '',
        checkCode: '',
        flag: '',
        isShow:true
      }
    },
    props:[
      'withDraw'
    ],
    computed: {
      ...mapGetters(
        ['loginStatus', 'userInfo', 'tokenCode','payDetail']
      ),
    },
    methods: {
      createCode: function() {
        var code = ''
        this.checkCode =''
//        验证码长度
        let codeLength = 4
//        生成随机数
        let random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',

          'S','T','U','V','W','X','Y','Z')
        for(var i=0; i<codeLength; i++) {
//          取得随机数（0-35）
          let index = Math.floor(Math.random()*36)
//          根据索引取得随机数加到code上
          code += random[index]
        }
//        把code值赋值给验证码
        this.checkCode = code
      },
      //取消输入验证码
      cancleBox() {
        this.isShow = false
      },
      //确定按钮
      okBox() {
        //正确
        this.publicCode.toUpperCase()
        if(this.publicCode == '') {
          regexfun.handleFailMsg(this,"验证码不能为空");
          this.flag = 0;
        }else if(this.publicCode.toUpperCase() !=this.checkCode) {
          regexfun.handleFailMsg(this,"验证码不正确");
//          刷新验证码
          this.createCode()
          this.publicCode = '';
          this.flag = 1;
        }else if(this.publicCode.toUpperCase() ==this.checkCode) {
          this.isShow = false
          this.flag = 2;
        }else{

        }
        this.$emit("checkNewCode",this.flag)


      }
    },
    created () {
      this.createCode()
    }
  })
</script>

<style lang="less" scoped>
  .codeActive{
    font-size: 0.34rem;
  }
  input{
    border: none;
    font-size: 0.34rem;
  }
  .popup {
    position: fixed;
    z-index: 9999999;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    .box {
      width: 7rem;
      height: 2.5rem;
      background-color: #fff;
      position: fixed;
      left: 50%;
      top: 50%;
      right: 0;
      bottom: 0;
      margin-left: -3.5rem;
      margin-top: -2.5rem;
      border-radius: 0.1rem;
      .boxInput{
        width: 6rem;
        margin: 0 auto;
        border:0.8px solid #ccc;
        line-height: 0;
        margin-top:0.3rem;
        input{
          margin:0.01rem 0.1rem;
          height: 0.8rem;
          line-height: 0.8rem;
          width: 3rem;
        }
        input:last-child{
          background-color: #fff;
          width: 1.5rem;
        }
      }
      p{
        margin-top:0.3rem;
        width: 7rem;
        text-align: center;
        font-size: 0.34rem;
        color: #333333;
        span{
          font-size: 0.34rem;
          color: #fb4747;
        }
      }
    }
    .btnBox{
      width: 100%;
      height: 1rem;
      margin-top: 0.3rem;
      button{
        width: 50%;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border: 0;
        border-top:0.8px solid #ccc ;
        margin: 0;
        float: left;
        background-color: #fff;
        font-size: 0.34rem;
      }
      button:first-child{
        border-right: 0.8px solid #ccc;
      }
      button:last-child{
        color: #fb4747;
      }
    }
  }
</style>
