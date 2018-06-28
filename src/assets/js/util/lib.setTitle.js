export const setWechatTitle = function(title) {
  document.title = title;
  let mobile = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(mobile)) {
    let iframe = document.createElement('iframe');
    iframe.style.visibility = 'hidden';
    let iframeCallback = function() {
      setTimeout(function() {
        iframe.removeEventListener('load', iframeCallback)
        document.body.removeChild(iframe)
      }, 10)
    };
    iframe.addEventListener('load', iframeCallback)
    document.body.appendChild(iframe)
  }
};
