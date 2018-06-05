/**
 * http配置
 */
import axios from 'axios';
// 加载超时时间
axios.defaults.timeout = 30000
// http请求拦截器
var loadinginstace
// var baseURL ='https://www.phtfdata.com/'
// var baseURL ='https://api.weixin.qq.com'
axios.interceptors.request.use(config => {
  // 加载中的方法
  // config.url = baseURL + config.url
  return config
}, error => {
  //请求超时的提示
  $.showphtModal({
    withOneButton:0,
    errorMsg:"连接超时！请稍后！",
    type: 1
  })
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
  //加载成功之前显示加载中
  if(data.data.response.status=="88888888" || data.data.response.status=="99999999"){
    // $.showphtModal({
    //   withOneButton:0,
    //   errorMsg: '由于您长时间未操作！请重新登录！',
    //   type: 2
    // });
    return data.data.response

  }else if(data.data.response.status=="00000000"){

    return data.data.response

  }else{

  }


}, error => {
  if(error.data.response){
    $.showphtModal({
      withOneButton:0,
      errorMsg: error.message,
      type: 3
    })

  }

  return Promise.reject(error)
})

export default axios
