function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
  else if (n < 0) {
    n = NaN;
    return n;
  }
  else if (n === 1){
   n = 1;
   return n;
  }
else if (n > 0) {
  let result = 1;
  while (n > 0) {   
   result *= n--;
  }
  return (result);
}
}
//console.log(factorial(5));