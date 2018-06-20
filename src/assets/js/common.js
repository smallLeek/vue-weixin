/*
	* 如果页面的宽度超过了640px，那么页面中html的font-size恒为100px，
	* 否则，页面中html的font-size的大小为： 100 * (当前页面宽度 / 640)
*/
document.addEventListener('DOMContentLoaded', function(){
  document.documentElement.style.fontSize = '85px';
});
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if(clientWidth>=750){
        docEl.style.fontSize = '100px';
      }else{
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

// IOS激活:active事件
document.body.addEventListener('touchstart', function () { });
