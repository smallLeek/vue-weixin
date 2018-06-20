<template>
  <div class="pht-dialog-wrapper">
    <div class="pht-dialog-contianer">
      <div class="pht-dialog-window">
        <div class="pht-dialog-header"></div>
        <div class="pht-dialog-content">
          <p class="modal_info_top"></p>
          <p class="modal_info_bottom"></p>
        </div>
        <div class="pht-dialog-footer">
          <button class="pht_cancel"></button>
          <button class="pht_confirm"></button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default{
    data(){
      return {
      }
    },
    mounted: function () {
      this.init();
    },
    methods:{
      init() {
        var self =this;
        var phtModalEntity={
          defaultErrorMsg:"网络繁忙请稍等",
          fadeOutTime:200,//模态窗关闭的动画时间
          messageBottom:"您确定吗？",//底部提示信息的默认值
          oneButtonMessage:"确定",//底部只有一个按钮时，按钮的默认文字
          cancelButtonMessage:"由于您长时间未操作请重新登录！",
          autoCloseTime:2200,//弹出窗多久后自动关闭
          modalWidth:'80%',//模态窗默认宽度
          errorImgUrl:'../../../static/images/dialog/list_box_fail.png',
          successImgUrl:'../../../static/images/dialog/success.png',
          noticeImgUrl:'../../../static/images/dialog/list_box_notice.png',
          maskClass:'.pht_modal_mask',//遮罩类
          modalImgClass:'.pht_modal_img',
          messageTopClass:".modal_info_top",
          messageBottomClass:".modal_info_bottom",
          pht_modal_class:'.pht-dialog-wrapper',
          modal_body_class:'.pht_modal_body',
          button_color_class:'.pht_modal_footer input',
          one_button_class:'only',
          headerClass:'.pht-dialog-header',
          okHeaderClass:'ok',
          failHeaderClass:'fail',
          noticeHeaderClass:'notice',

        };
        var pht_modal_footer=".pht-dialog-footer";
        var modal_cancel_btn=".modal_cancel_btn";
        var modal_confirm_btn=".pht_confirm";
        var modal_cancel_btn=".pht_cancel";
        var headerRate=640/110;//header的背景图像长宽比
        $.extend({
          showphtModal:function(options){
            /**
             * 调整头部背景图像长宽比
             */
            function adjustHeaderImgRate(){
              setTimeout(function () {
                var width=$(phtModalEntity.headerClass).width();
                var height=width/headerRate;

                $(phtModalEntity.headerClass).css({
                  height:height,
                  top:-(height-3)
                });
              })
            }
            function showOkHeader(){
              $(phtModalEntity.headerClass)
                .addClass(phtModalEntity.okHeaderClass)
                .removeClass(phtModalEntity.failHeaderClass)
                .removeClass(phtModalEntity.noticeHeaderClass);

              adjustHeaderImgRate();

            }
            function showFailHeader(){
              $(phtModalEntity.headerClass)
                .addClass(phtModalEntity.failHeaderClass)
                .removeClass(phtModalEntity.okHeaderClass)
                .removeClass(phtModalEntity.noticeHeaderClass);

              adjustHeaderImgRate();
            }
            function showNoticeHeader(){
              $(phtModalEntity.headerClass)
                .addClass(phtModalEntity.noticeHeaderClass)
                .removeClass(phtModalEntity.okHeaderClass)
                .removeClass(phtModalEntity.failHeaderClass);

              adjustHeaderImgRate();
            }


            function showTwoButtons(){
              $(pht_modal_footer).show();
              $(modal_cancel_btn).show().text(opts.cancelButtonMessage);
              $(modal_confirm_btn).show().text(opts.oneButtonMessage);
            }
            function showConfirmBtnOnly(){
              $(pht_modal_footer).show();
              $(modal_cancel_btn).hide();
              $(modal_confirm_btn).show()
                .text(opts.oneButtonMessage)
                .addClass(phtModalEntity.one_button_class);
            }
            function showCancelBtnOnly(){

            }
            function showNoButtons(){
              $(pht_modal_footer).hide();
            }


            function showButtons(opts){
              if(opts.withTwoButtons){//带确定和取消按钮
                showTwoButtons();
              }else if(opts.noButton==1){//没有按钮，2.2秒后自动关闭
                setTimeout(function(){
                  $.hidephtModal();
                },opts.autoCloseTime|| phtModalEntity.autoCloseTime);
              }else{//默认只有一个确定按钮
                showConfirmBtnOnly();
                $(modal_cancel_btn).hide();
                $(modal_confirm_btn).text(opts.oneButtonMessage);
              }
            }
            function reset(){
              showNoButtons();
              $(phtModalEntity.messageTopClass).text("");
              $(phtModalEntity.messageBottomClass).text("");
              $(modal_confirm_btn).removeClass(phtModalEntity.one_button_class);
              $(phtModalEntity.messageBottomClass).hide();
              $(modal_cancel_btn).text(phtModalEntity.cancelButtonMessage);
              $(modal_confirm_btn).unbind('touchend');
              $(modal_cancel_btn).unbind('touchend');

            }
            function setColors(opts){
              //$(phtModalEntity.button_color_class).css('backgroundColor',opts.buttonColor);
              //$(phtModalEntity.modal_body_class).css('backgroundColor',opts.bodyColor);
            }
            function showModalDom(){
              //设置样式让弹窗垂直居中
              //var webViewTopHeight=48;//微信支付宝等顶部容器标题栏的高度
              //var clientHeight=document.body.clientHeight*1;
              //var modalHeight=$(phtModalEntity.pht_modal_class).height()*1;
              //var absoluteTop=(clientHeight-modalHeight)/2-webViewTopHeight;
              //$(phtModalEntity.maskClass).show();
              $(phtModalEntity.pht_modal_class).css("visibility","hidden").show();
              setTimeout(function () {
                $(phtModalEntity.pht_modal_class).css("visibility","visible")
              },10)


            }
            function bindphtModalEvent(opts){
              if(opts.callBack){
                if(opts.withTwoButtons=="1"){
                  $(modal_confirm_btn).bind('touchend',function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    $.hidephtModal();
                    setTimeout(function(){
                      if(opts.scope){
                        opts.scope[opts.callBack]();
                      }else{
                        try{
                          eval(opts.callBack+"()");
                        }catch(e){
                          opts.callBack();
                        }

                      }
                    });
                  }).bind('touchstart', function () {
                    //$(this).css('background','#E3E3E3');
                  });
                  if(opts.callBackForCancel){
                    $(modal_cancel_btn).bind('touchend',function(e){
                      e.preventDefault();
                      e.stopPropagation();
                      $.hidephtModal();
                      setTimeout(function(){
                        if(opts.scope){
                          opts.scope[opts.callBackForCancel]();
                        }else if(typeof opts.callBackForCancel=='function'){
                          opts.callBackForCancel();
                        }else{
                          try{
                            eval(opts.callBackForCancel+"()");
                          }catch(e){
                            opts.callBackForCancel();
                          }
                        }
                      });
                    });
                    if(sessionStorage.isTest){
                      $(modal_cancel_btn).bind('click', function () {
                        $(this).trigger('touchend')
                      });
                    }
                  }else{
                    //如果有取消按钮，则绑定关闭弹出窗事件n
                    $(modal_cancel_btn).bind('touchend',function(e){
                      e.preventDefault();
                      e.stopPropagation();
                      $.hidephtModal();
                    });
                    if(sessionStorage.isTest){
                      $(modal_cancel_btn).bind('click', function () {
                        $(this).trigger('touchend')
                      });
                    }
                  }


                }else{
                  $(modal_confirm_btn).bind('touchend',function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    $.hidephtModal();
                    setTimeout(function(){
                      if(opts.scope){
                        opts.scope[opts.callBack]();
                      }else{
                        try{
                          eval(opts.callBack+"()");
                        }catch(e){
                          opts.callBack();
                        }
                      }
                    });
                  });
                }
              }else{
                //如果有取消按钮，则绑定关闭弹出窗事件n
                $(modal_confirm_btn).bind('touchend',function(e){
                  e.preventDefault();
                  e.stopPropagation();
                  $.hidephtModal();
                });
              }


            }
            function showModalImg(opts){
              if(opts.type==1){
                showOkHeader();
              }else if(opts.type==2){
                showNoticeHeader();
                //token过期之后的操作
                $(modal_confirm_btn).bind('touchend',function () {
                  self.$router.push({ path: "/loginRegister/login"})
                })
              }else if(opts.type==0){
                showFailHeader();
              }else if(opts.type == 3){
                //接口请求失败之后的操作

                showFailHeader();
              }
            }
            function showModalMessages(opts){
              $(phtModalEntity.messageTopClass).html(opts.errorMsg);
              //判断是否显示第二条信息
              if(opts.withMessageBottom==1){
                $(phtModalEntity.messageBottomClass).html(opts.messageBottom).show();
              }
            }
            function adjustModalWidth(opts){//判断是否需要调整弹出窗的宽度

            }

            var defaults={
              errorMsg:phtModalEntity.defaultErrorMsg,
              type:0,//0是错误信息，1是成功信息，2是警告信息  3自定义图片信息
              titleimg:"",
              imgdivcss:"",
              withTwoButtons:0,//是否带有关闭按钮
              buttonColor:"#FFF",
              bodyColor:"#FFF",
              withMessageBottom:0,//是否有底部提示信息，默认没有
              messageBottom:phtModalEntity.messageBottom,//底部提示信息
              withOneButton:1,//是否只有一个按钮，默认是。0不是，1是
              oneButtonMessage:phtModalEntity.oneButtonMessage,//只有一个按钮时，按钮的文字
              width:phtModalEntity.modalWidth,
              noButton:0,//是否不显示按钮，1不显示按钮,
              callBack:'',
              callBackForCancel:'',//有取消和确定按钮时给取消按钮添加回调函数
              scope:''
            };
            reset();
            var opts=$.extend(defaults,options);
            showModalImg(opts);
            showModalMessages(opts);
            adjustModalWidth(opts);
            showButtons(opts);
            setColors(opts);
            $(modal_cancel_btn).bind('touchstart',function(e){//
              //$(this).css('background','#E3E3E3');
              e.preventDefault();
            });
            setTimeout(function(){
              bindphtModalEvent(opts);
            },17);//直接绑定事件的话，有可能点击某按钮弹出弹窗时，直接出发弹窗的关闭事件！
            //},500);//直接绑定事件的话，有可能点击某按钮弹出弹窗时，直接出发弹窗的关闭事件！
            showModalDom();
            if(opts.imgdivcss){
              $(phtModalEntity.modalImgClass).css(opts.imgdivcss);
            }
          },

          hidephtModal:function(){
            //$(phtModalEntity.maskClass).fadeOut(phtModalEntity.fadeOutTime);
            //关闭时直接关掉，否则底部页面会闪亮一下，应该是过渡动画导致的色彩叠加
            $(phtModalEntity.pht_modal_class).hide();

          },

          showphtMask:function(){
            $(phtModalEntity.maskClass).show();
          },
          hidephtMask:function(){
            $(phtModalEntity.maskClass).hide();
          },


        });
      },

    }
  }
</script>

<style  scoped>
  .pht-dialog-wrapper{
    display: none;
  }
  .pht-dialog-contianer{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    align-items: center;
    -webkit-align-items: center;
    -moz-align-items:center;
    -ms-align-items:center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    z-index: 9999999999999;
  }
  .pht-dialog-window{
    padding: .1rem 0;
    border-radius:0 0 0.02rem 0.02rem;
    background: #fff;
    position: relative;
    box-shadow: 0 0.01rem 0.01rem #D6DBE1;
    width:80%;
  }
  .pht-dialog-header{
    width: 100%;
    height: 0.55rem;
    margin: 0 auto;
    background: url("../../../static/images/list_box_fail.png") no-repeat 0 0;
    background-size: 100%;
    position: absolute;
    top: -0.46rem;
  }
  .pht-dialog-header.ok{
    background: url("../../../static/images/success.png") no-repeat 0 0;
    background-size: 100%;
  }
  .pht-dialog-header.fail{
    background: url("../../../static/images/list_box_fail.png") no-repeat 0 0;
    background-size: 100%;
  }
  .pht-dialog-header.notice{
    background: url("../../../static/images/list_box_notice.png") no-repeat 0 0;
    background-size: 100%;
  }
  .pht-dialog-content{
    padding: 1rem 1rem 1rem;
    line-height: 180%;
    text-align: center;
    font-size: 0.14rem;
    font-weight: 500;
    letter-spacing: 0.01rem;
  }
  .pht-dialog-footer{
    font-size: 0.14rem;
    width:100%;
    text-align: center;
  }
  .pht-dialog-footer button{
    -webkit-appearance:normal;
    background-color: rgba(255,255,255,0.8);
    padding: 3% 12%;
    overflow: hidden;
    color: #797F8B;
    border-radius: 0.04rem;
    margin: 0.3rem 1rem;
    font-size: 0.14rem;
    outline: none;
    font-family: "Microsoft YaHei";
    letter-spacing: 0.01rem;
    background-color: #fff;
    border: solid 0.01rem #C0C3C8;
  }
  .pht-dialog-footer button.only{
    width: 60%;
    background-color: #79808A;
    color: #fff;
    box-shadow: 0 0.03rem 0.03rem #e0e0e0;
    border: none;
  }
  .pht-dialog-footer button.pht_cancel{
    background-color: #79808A;
    color: #fff;
    box-shadow: 0 0.03rem 0.03rem #e0e0e0;
    border: none;
  }
</style>
