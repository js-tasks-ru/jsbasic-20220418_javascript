function ucFirst(str) {
  if (!str) {  
    return str;
  } else {
      return str[0].toUpperCase() + str.slice(1);
  }
}
//ucFirst('вася');
console.log(ucFirst(''));
//console.log(str[0]);