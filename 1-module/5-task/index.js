function truncate(str, maxlength) {
  // ваш код...
  if (maxlength < str.length) {
    return str.substr(0, +maxlength - 1) + '…';
  }
  return str;
}
