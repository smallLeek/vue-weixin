const path = require('path');
const express = require('express');
const proxy = require('http-proxy-middleware');//引入代理中间件
const historyApiFallback = require('connect-history-api-fallback');
const compress = require('compression');
const app = express();


// 部署上线时读取静态文件
app.use(express.static(path.join(__dirname, '../dist')));


app.use(historyApiFallback({
  rewrites: [
    { from: /.*/, to:path.posix.join('/', 'index.html')},
  ],
  verbose: true,
}));

app.get('*', express.static(path.join(__dirname, '../dist')));


app.post('/m/finance/register/isHand*',function(req, res){
  console.log("dddddd");
  const url = req.url;
  res.redirect(url);
})

//************************************proxy start *******************************************************************************************
//红包服务
const proxy_redpackets = proxy('/redpackets', { target: 'http://139.129.12.93:8094',changeOrigin: true,pathRewrite:{
  '^/redpackets': ''
} });
app.use('/redpackets', proxy_redpackets);


//定投盈服务
const proxyXwpdss = proxy('/xwpdss', { target: 'http://139.129.12.93:8096',changeOrigin: true,pathRewrite:{
  '^/xwpdss': ''
} });
app.use('/xwpdss', proxyXwpdss);

//消息服务
const proxy_datas = proxy('/datas', { target: 'http://139.129.12.93:8097',changeOrigin: true,pathRewrite:{
  '^/datas': ''
} });
app.use('/datas', proxy_datas);


//天天盈服务
const proxy_xwddss = proxy('/xwddss', { target: 'http://139.129.12.93:8087',changeOrigin: true,pathRewrite:{
  '^/xwddss': ''
} });
app.use('/xwddss', proxy_xwddss);


//优惠券服务
const proxy_coupons = proxy('/coupons', { target: 'http://139.129.12.93:8099',changeOrigin: true,pathRewrite:{
  '^/coupons': ''
} });
app.use('/coupons', proxy_coupons);

//新网银行注册绑卡
const proxy_apts = proxy('/apts', { target: 'http://139.129.12.93:8089',changeOrigin: true,pathRewrite:{
  '^/apts': ''
} });
app.use('/apts', proxy_coupons);

//************************************proxy end *******************************************************************************************


//使用压缩
app.use(compress());
//自定义数据


// 监听端口
var server  = app.listen(8090, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

