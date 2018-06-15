export function asyncInfo(infoName) {
  if(infoName=='PRG'){
    return '账户激活成功'
  }else if(infoName=='ERG'){
    return '新网注册成功'
  }else if(infoName=='PBC'){
    return '绑卡成功'
  }else if(infoName =='EBC'){
    return '换卡成功'
  }else if(infoName == 'ABC'){
    return '换卡审核中'
  }else if(infoName == 'UBC'){
    return '解绑银行卡成功'
  }else if(infoName =='RPW'){
    return '重置交易密码成功'
  }else  if (infoName == 'IDQ'){
    return '定投盈投资成功'
  } else if (infoName =='EEE') {
    return '天天盈投资成功'
  }else  if(infoName == 'CKP'){
    return '验证交易密码成功'
  }else  if(infoName =='NCP'){
    return '设置不验证交易密码成功'
  }else if(infoName == 'MFM'){
    return '预留手机号更新成功'
  }else if (infoName == 'ASU'){
    return '激活账户成功'
  } else if(infoName =='RCG'){
    return '充值成功'
  }else if(infoName == 'WTD'){
    return '提现成功'
  }else if(infoName == 'ZZN'){
    return '转账成功'
  }else  if(infoName =='DPT'){
    return '投资成功'
  }else {
    return '操作成功'
  }
  }
