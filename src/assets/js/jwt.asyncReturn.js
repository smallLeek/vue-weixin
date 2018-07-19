  'use strict'
export function asyncInfo(infoName) {
  switch (infoName) {
    case "PRG": {
      return "开通新网存管账户成功"
    }
    case "ERG": {
      return "新网注册成功"
    }
    case "PBC": {
      return "绑卡成功"
    }
    case "EBC": {
      return "换卡成功"
    }
    case "ABC": {
      return "换卡审核中"
    }
    case "UBC": {
      return "解绑银行卡成功"
    }
    case "RPW": {
      return "重置交易密码成功"
    }
    case "IDQ": {
      return "定投盈投资成功"
    }
    case "EEE": {
      return "天天盈投资成功"
    }
    case "CKP": {
      return "验证交易密码成功"
    }
    case "NCP": {
      return "设置不验证交易密码成功"
    }
    case "MFM": {
      return "预留手机号更新成功"
    }
    case "ASU": {
      return "开通新网存管账户成功"
    }
    case "RCG": {
      return "充值成功"
    }
    case "WTD": {
      return "提现成功"
    }
    case "ZZN": {
      return "转账成功"
    }
    case "DPT": {
      return "投资成功"
    }
    default: {
      return "操作成功"
    }

  }

}
