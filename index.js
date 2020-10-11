var number;
function add(a, b){
  number = a + b;
  return number;
}
function subtract(a, b){
  number = a - b;
  return number;
}
function multiply(a, b){
  number = a * b;
  return number;
}
function divide(a, b){
  number = a / b;
  return number;
}
function inc(n){
  number = n ++;
  return number;
}
function dec(n){
  n = number + n++;
  return n
}
function makeInt(a){
  number = parseInt(a, 10);
  return number;
}
function preserveDecimal(a){
  number = parseFloat(a, 10);
  return number;
}
