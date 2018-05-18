/**
 * http配置
 */
import axios from 'axios'
import { Loading, Message } from 'element-ui'
// 加载超时时间
axios.defaults.timeout = 10000
// http请求拦截器
var loadinginstace
// var baseURL ='https://www.phtfdata.com/'
// var baseURL ='https://api.weixin.qq.com'
axios.interceptors.request.use(config => {
  // 加载中的方法
  // config.url = baseURL + config.url
  loadinginstace = Loading.service({ fullscreen: true })
  return config
}, error => {
  loadinginstace.close()
  Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
  console.log(Message)
  //加载成功之前显示加载中
  loadinginstace.close()
  return data
}, error => {
  loadinginstace.close()
  Message.error({
    message: '加载失败'
  })
  return Promise.reject(error)
})

export default axios
