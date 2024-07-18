let obj1 = {
  counter:0,
  inc(){
    return this.counter++;
  }
};
// console.log(obj1.counter);
// obj1.inc();
// obj1.inc();
// obj1.inc();
// console.log(obj1.counter);

function Obj(){
  let counter = 0;
  let inc = function(){
    return counter++;
  }
  return {counter,inc,getCounter:()=>counter};
}

let obj2 =Obj();
console.log(obj2.counter);
obj2.inc();
obj2.inc();
obj2.inc();
obj2.inc();
console.log(obj2.getCounter());