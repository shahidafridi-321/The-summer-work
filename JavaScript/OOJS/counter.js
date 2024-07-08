function counter(){
  let number = 0;
  function inc() {
    number++;
  }
  function displayCounter() {
    console.log(number);
  }
  return {displayCounter,inc};
}


let counter1 = counter();
counter1.inc();
counter1.inc();
counter1.inc();
counter1.displayCounter();
