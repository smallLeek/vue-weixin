'use strict'

export function getSex(sexCode) {
  switch (sexCode) {
    case "1": {
      return "男";
    }
    case "2": {
      return "女";
    }
    default: {
      return sexCode;
    }
  }
}

export function getPapersName(paperCode) {
  switch (paperCode) {
    case "PRC_ID": {
      return "中华人民共和国居民身份证";
    }
    case "PASSPORT": {
      return "护照";
    }
    case "COMPATRIOTS_CARD": {
      return "港澳台同胞回乡证";
    }
    case "PERMANENT_RESIDENCE": {
      return "外国人永久居留证";
    }
    default: {
      return "未知";
    }
  }
}


export function getBankIcon(bankCode) {
  switch (bankCode) {
    case "ABOC": {
      return "nongye_bank"
    }
    case "FJIB": {
      return "R.drawable.xingye_bank"
    }
    case "MSBC": {
      return "R.drawable.minsheng_bank"
    }
    case "SPDB": {
      return "R.drawable.pufa_bank"
    }
    case "BKCH": {
      return "R.drawable.zhongguo_bank"
    }
    case "GDBK": {
      return "R.drawable.guangfa_bank"
    }
    case "PCBC": {
      return "R.drawable.jianshe_bank"
    }
    case "BJCN": {
      return "R.drawable.beijing_bank"
    }
    case "CIBK": {
      return "R.drawable.zhongxin_bank"
    }
    case "HXBK": {
      return "R.drawable.huaxia_bank"
    }
    case "PSBC": {
      return "R.drawable.zhongguoyouzheng_bank"
    }
    case "BOSH": {
      return "R.drawable.shanghai_bank"
    }
    case "EVER": {
      return "R.drawable.guangda_bank"
    }
    case "ICBK": {
      return "R.drawable.gongshang_bank"
    }
    case "SZDB": {
      return "R.drawable.pingan_bank"
    }
    case "COMM": {
      return "R.drawable.jiaotong_bank"
    }
    case "CMBC": {
      return "R.drawable.zhaoshang_bank"
    }
    default: {
      return "R.drawable.def_bank_card"
    }
  }
}


export function getBankName (bankCode) {
  switch (bankCode) {
    case "ABOC": {
      return "农业银行";
    }
    case "FJIB": {
      return "兴业银行";
    }
    case "MSBC": {
      return "民生银行";
    }
    case "SPDB": {
      return "浦发银行";
    }
    case "BKCH": {
      return "中国银行";
    }
    case "GDBK": {
      return "广发银行";
    }
    case "PCBC": {
      return "建设银行";
    }
    case "BJCN": {
      return "北京银行";
    }
    case "CIBK": {
      return "中信银行";
    }
    case "HXBK": {
      return "华夏银行";
    }
    case "PSBC": {
      return "中国邮储";
    }
    case "BOSH": {
      return "上海银行";
    }
    case "EVER": {
      return "光大银行";
    }
    case "ICBK": {
      return "工商银行";
    }
    case "SZDB": {
      return "平安银行";
    }
    case "COMM": {
      return "交通银行";
    }
    case "CMBC": {
      return "招商银行";
    }
    default: {
      return "未知";
    }
  }
}
