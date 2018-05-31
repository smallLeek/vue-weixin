import Vue from 'vue'
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


