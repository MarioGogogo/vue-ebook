//对象转字符串存储
//字符串转对象取值
import Storage from "web-storage-cache";

const localStorage = new Storage();
//取值
export function getLocalStorage(key) {
  return localStorage.get(key);
}
//设置  过期时间很重要
export function setLocalStorage(key, value, expire = 30 * 24 * 3600) {
  return localStorage.set(key, value, { exp: expire });
}
//删除
export function removeLocalStorage(key) {
  return localStorage.delete(key);
}
//全删
export function clearLocalStorage() {
  return localStorage.clear();
}
//字体
export function getFontFamily(fileName) {
  return getBookObject(fileName, "fontFamily");
}

export function saveFontFamily(fileName, fontFamily) {
  setBookObject(fileName, "fontFamily", fontFamily);
}
//字号
export function getFontSize(fileName) {
  return getBookObject(fileName, "fontSize");
}

export function saveFontSize(fileName, fontSize) {
  setBookObject(fileName, "fontSize", fontSize);
}
//设置每一本书籍信息
export function setBookObject(fileName, key, value) {
  let book = {};
  if (getLocalStorage(`${fileName}-info`)) {
    book = getLocalStorage(`${fileName}-info`);
  }
  book[key] = value;
  setLocalStorage(`${fileName}-info`, book);
}

export function getBookObject(fileName, key) {
  if (getLocalStorage(`${fileName}-info`)) {
    return getLocalStorage(`${fileName}-info`)[key];
  } else {
    return null;
  }
}
