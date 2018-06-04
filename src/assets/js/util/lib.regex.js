class XRegexRule{
  constructor(rule,description) {
    this.rule = rule;
    this.description = description;
  }
}

class XRegexBean{
  constructor(name,rules,type,isMust) {
    this.name = name;
    this.type = type;
    this.isMust = isMust;
    this.rules = rules;
  }

  addRules (rule){
    let flag = rule instanceof XRegexRule;
    if (!flag) {
      throw new Error("规则使用 XRegexRule 对象");
    }
    if(this.rules === "undefined"){
      this.rules = [];
    }
    this.rules.push(rule);
  }
}

class XRegexResult{
  constructor(code,msg) {
    this.code = code;
    this.msg = msg;
  }
}

export const REGEX_SUCCESS_CODE = -1;
export const REGEX_FAIL_CODE = 1;
export const REGEX_UNDEFINED_CODE = 0;

export const successXRegexResult = new XRegexResult(REGEX_SUCCESS_CODE,'success');
export const undefinedXRegexResult = new XRegexResult(REGEX_UNDEFINED_CODE,'还未支持非文本框正则，请在这个位置添加');

/**
 * ex: name = 手机号 返回校验失败 手机号不能为空
 * @param name
 * @returns {XRegexResult}
 */
function nullXRegexResult(name) {
  return new XRegexResult(REGEX_FAIL_CODE,name+"不能为空");
}


export function dataToXRegexBean(data) {
  let array = data.rules;
  let rules = [];
  for (let sub of array){
    rules.push(new XRegexRule(sub.rule,sub.description));
  }
  return new XRegexBean(data.name,rules,data.type,data.isMust);
}



function regexRules(text,rules) {
    for (let rule of rules){
      let reg = rule.rule;
      let description = rule.description;
      //是否正则匹配
      if (!reg.test(text)){
        //这里负责组装错误信息
        return new XRegexResult(REGEX_FAIL_CODE,description);
      }
    }
    return successXRegexResult;
}



function regexText(txt,regBean) {
  //是否是必填项目
  let isMust = regBean.isMust;
  let name = regBean.name;
  let  isUndefined = txt === undefined || txt === null;
  let regContent = txt;
  let rules = regBean.rules;
  //做一个undefined过滤 去掉头尾空格
  if(!isUndefined){
    regContent = txt.trim();
  }
  //非必填项 判断是否真的没有填
  if (!isMust) {
      if (isUndefined || regContent.length == 0){
        return successXRegexResult;
      }else{
        return regexRules(regContent,rules);
      }

  }else{
    //是必填项目
    if (isUndefined || regContent.length == 0){
      return nullXRegexResult(name);
    }else{
      return regexRules(regContent,rules);
    }
  }
  return false;
}



export function regex(content,regBean) {
  let type = regBean.type;
  if (type === 0){
    return regexText(content,regBean);
  }else{
    return undefinedXRegexResult;
  }

}











