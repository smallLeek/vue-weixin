const api_env_keys = {
  product:"product",
  dev:"dev",
  dev_onLine:'dev_onLine',//本地直连线上
};


const config = {
  dev_onLine:{
    origin_baseUrl:"",
    origin_ProxyPath:"/apis",
    //3102 地址和线上地址不一样做区分(8093端口线上)
    inline_path :"/xwuser",
    //消息服务
    origin_ProxyPath_datas:'/apis',
    origin_ProxyPath_msgcenter:'/msgcenter',

    //用户服务
    origin_ProxyPath_texts:'/apis',
    origin_ProxyPath_user:'/xwuser',

    //红包服务
    origin_ProxyPath_redpackets:'/apis',
    origin_ProxyPath_redpacket:'/redpacket',

    //定投盈
    origin_ProxyPath_xwpdss:'/apis',
    origin_ProxyPath_pds:'/xwpds',

    //天天盈服务
    origin_ProxyPath_xwddss:'/apis',
    origin_ProxyPath_dds:'/xwdds',

    //优惠券服务
    origin_ProxyPath_coupons:'/apis',
    origin_ProxyPath_coupon:'/coupon',

    //新网银行注册绑卡
    origin_ProxyPath_apts:'/apis',
    origin_ProxyPath_xwbankWebNotify:'/xwbankWebNotify',
  },
  dev:{
    //需要重定向 不要配置这个origin_baseUrl
    origin_baseUrl:"",
    //线上跨域
    origin_ProxyPath:"/apis",

    //3102 地址和线上地址不一样做区分(8093端口测试)
    inline_path:"/user",

    //消息服务
    origin_ProxyPath_datas:'/datas',
    origin_ProxyPath_msgcenter:'/msgcenter',

    //用户服务
    origin_ProxyPath_texts:'/texts',
    origin_ProxyPath_user:'/user',

    //红包服务
    origin_ProxyPath_redpackets:'/redpackets',
    origin_ProxyPath_redpacket:'/redpacket',

    //定投盈
    origin_ProxyPath_xwpdss:'/xwpdss',
    origin_ProxyPath_pds:'/pds',

    //天天盈服务
    origin_ProxyPath_xwddss:'/xwddss',
    origin_ProxyPath_dds:'/dds',

    //优惠券服务
    origin_ProxyPath_coupons:'/coupons',
    origin_ProxyPath_coupon:'/coupon',

    //新网银行注册绑卡
    origin_ProxyPath_apts:'/apts',
    origin_ProxyPath_xwbankWebNotify:'/xwbankWebNotify',
  },
  build:{
    origin_baseUrl:"https://www.phtfdata.com",
    origin_ProxyPath:"",
    //3102 地址和线上地址不一样做区分(8093端口线上)
    inline_path :"/xwuser",
    //消息服务
    origin_ProxyPath_datas:'',
    origin_ProxyPath_msgcenter:'/msgcenter',

    //用户服务
    origin_ProxyPath_texts:'',
    origin_ProxyPath_user:'/xwuser',

    //红包服务
    origin_ProxyPath_redpackets:'',
    origin_ProxyPath_redpacket:'/redpacket',

    //定投盈
    origin_ProxyPath_xwpdss:'',
    origin_ProxyPath_pds:'/xwpds',

    //天天盈服务
    origin_ProxyPath_xwddss:'',
    origin_ProxyPath_dds:'/xwdds',

    //优惠券服务
    origin_ProxyPath_coupons:'',
    origin_ProxyPath_coupon:'/coupon',

    //新网银行注册绑卡
    origin_ProxyPath_apts:'',
    origin_ProxyPath_xwbankWebNotify:'/xwbankWebNotify',

  }
}


// const env = config.product;
const env = config.dev;
//const env = config.dev_onLine;





export {env}
