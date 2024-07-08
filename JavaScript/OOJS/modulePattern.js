// module pattern is used for making the code private that is not in need else where in program but we can use varibale/properties and method as necessary

const calculator = (function(){
  const add = (a,b) => a + b;
  const sub = (a,b) => a - b;
  const mul= (a,b) => a * b;
  const div = (a,b) => a / b;

  return {
    add,
    sub,
    mul,
    div,
  }
})();

console.log(calculator.add(3,7));
console.log(calculator.mul(3,7));
console.log(calculator.div(3,7));
console.log(calculator.sub(3,7));