import Vue from 'vue';
//把数字格式化为亿元
Vue.filter('farmatDataYi',function (value) {
  if(!value) return ''
  return (value/100000000).toFixed(2)
})
//把数字格式化为万元
Vue.filter('farmatDataWan',function (value) {
  if(!value) return ''
  if(value%10000 == 0){
    return (value/10000)
  }else{
    return (value/10000).toFixed(2)
  }
})
/**
 * 时间格式化  yyyy-MM-dd HH:mm:ss
 */
Vue.filter('farmatDate',function () {
  let date = new Date();
  let seperator1 = "-";
  let seperator2 = ":";
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  let strHourse = date.getHours();
  let strMinutes = date.getMinutes();
  let strSeconds = date.getSeconds();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  if (strHourse >= 1 && strHourse <= 9) {
    strHourse = "0" + strHourse;
  }
  if (strMinutes >= 0 && strMinutes <= 9) {
    strMinutes = "0" + strMinutes;
  }
  if (strSeconds >= 0 && strSeconds <= 9) {
    strSeconds = "0" + strSeconds;
  }
  let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    + " " + strHourse + seperator2 + strMinutes
    + seperator2 + strSeconds;
  return currentdate;
})
/**
 *数字格式化    千分隔
 */
Vue.filter('farmatAmount', function(amount) {
  let result = "";
  amount = (amount-0).toFixed(2);
  let arg0=(amount+"").split(".");
  let len= arg0[0].length;
  let count = parseInt(len/3);
  let fl = len%3;

  if(fl != 0){
    if(count != 0){
      result =arg0[0].substr(0 , fl)+ ",";
    }else{
      result =arg0[0].substr(0 , fl);
    }
  }
  for(let j = count ; j> 0;j--){
    if(j == 1){
      result += arg0[0].substr( (count -j)*3 + fl, 3);
    }else{
      result += arg0[0].substr( (count -j)*3 + fl, 3)+",";
    }
  }
  if(arg0[1] != null ){
    return result + "."+ arg0[1];
  }else{
    return result;
  }
  return result;
})
//字符串后四位
Vue.filter('farmatBankcode', function (str) {
  if(( typeof str ) != "string"){
    return
  }
  let len = str.length;
  return str.substring(len-4);
})
//百分比取整
Vue.filter('farmatRate',function (rate) {
  if((typeof rate)!= 'string' && (typeof rate)!= 'number' ){
    return
  }
  if((typeof rate) == 'number'){
    rate = rate+"";
  }
  if(rate.match('%') == null){
    return ((rate-0).toFixed(0)) + '%'
  }else{
    return ((rate.split('%'))[0]-0).toFixed(0) + "%"
  }
})
//隐藏手机号中间四位
Vue.filter('farmatMobile',function (mobile) {
  return mobile.substr(0, 3) + '****' + mobile.substr(7);
})

