

let storeUtil = {}
/**
 * 获取localStorage
 * @param name
 * @param content
 */
storeUtil.setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 * @param name
 */
storeUtil.getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 * @param name
 */
storeUtil.removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

export {storeUtil}
