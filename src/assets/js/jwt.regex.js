import * as regexLib from './util/lib.regex'
import regexConfig from './config/regex.config'


/**
 * 处理正则失败的
 * @param vue
 * @param msg
 */
function handleFailMsg(vue,msg) {
  vue.bs.$emit('e:alert',msg);
}


/**
 * 校验一个输入框
 * @param vue
 * @param key the key for checked rule config, the config is in js/config/regex.config.js
 * @param content the input or something to be checked with regex rule
 * @returns {boolean}  if the content passed the check
 */
export function regex(vue,key,content) {
  let reg = regexConfig[key];
  let regBean = regexLib.dataToXRegexBean(reg);
  let regexResult = regexLib.regex(content,regBean);

  if(regexResult.code === regexLib.REGEX_SUCCESS_CODE){
    return true;
  }else{
    handleFailMsg(vue,regexResult.msg);
    return false;
  }
}

/**
 * 校验多个输入项
 * @param vue
 * @param regList  数组 里面内容必须为{key:'keyForConfig',content:'input to be checked'}
 * @returns {boolean}
 */
export function regexList(vue,regList) {
  //正则结果
  let result = true;
  for(let sub of regList){
    let key = sub.key;
    let content = sub.content;
    result = regex(vue,key,content);
    if (result === false){
      return false;
    }
  }
    return true;

}
