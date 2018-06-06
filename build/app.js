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

//代理1
const apiProxy = proxy('/apis', { target: 'https://www.phtfdata.com',changeOrigin: true,pathRewrite:{
  '^/apis': ''
} });
app.use('/apis', apiProxy);

//代理2
const apiProxy1 = proxy('/datas', { target: 'http://139.129.12.93:8097/',changeOrigin: true,pathRewrite:{
  '^/datas': ''
} });
app.use('/datas', apiProxy1);

//代理3
const apiProxy2 = proxy('/aptis', { target: 'http://139.129.12.93:8089/',changeOrigin: true,pathRewrite:{
  '^/aptis': ''
} });
app.use('/aptis', apiProxy2);

app.use(function (res,req,next) {
  console.log(res.url)

})
//使用压缩
app.use(compress());
//自定义数据


// 监听端口
var server  = app.listen(8090, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

