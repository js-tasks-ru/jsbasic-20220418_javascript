function getMinMax(str) {
  // ваш код... 
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = +str[i];
    if (str[i] !== str[i]) {
      str[i] = str.splice(i + 1, 1);
    }
  }
  let result = {
  min: Math.min(...str),
  max: Math.max(...str),
  }
return result;
}