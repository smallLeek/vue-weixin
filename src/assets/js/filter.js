import Vue from 'vue';
//把数字格式化为亿元
Vue.filter('farmatDataYi',function (value) {
  if(!value) return ''
  return (value/100000000).toFixed(2)
})
//把数字格式化为万元
Vue.filter('farmatDataWan',function (value) {
  if(!value) return ''
  return (value/10000).toFixed(2)
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

