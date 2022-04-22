function checkSpam(str) {
  // ваш код...
  if (str.toLowerCase().indexOf('xxx') >= 0 || str.toLowerCase().indexOf('1xbet') >= 0) {
    return true;
  } 
  return false;
}