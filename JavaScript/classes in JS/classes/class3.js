class Counter {
  constructor(counter){
    this.counter = counter;
  }
  increament(){
    this.counter++;
  }
}
let c = new Counter(5);
c.increament();
c.increament();
c.increament();
console.log(c);

function counter(){
  let counter = 0;
  function couterpp(){
    return counter++;
  }
  
  return {counter,couterpp,
    getCounter:()=>counter,
  }
}

let c1 = counter();
c1.couterpp();
c1.couterpp();
c1.couterpp();
console.log(c1.getCounter());