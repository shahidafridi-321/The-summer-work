const Formatter = (function() {
 

  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  const timesRun = [];

  const makeUppercase = (text) => {
    log("Making uppercase");
    timesRun.push(null);
    return text.toUpperCase();
  };

  // let timesRun = 0;
  // const makeUppercase = (text) => {
  //   log("Making uppercase");
  //   setTimesRun();
  //   return text.toUpperCase();
  // };

  return {
    makeUppercase,
    timesRun,
  }
})();
console.log(Formatter.makeUppercase("tomek"));
console.log(Formatter.timesRun);


// Formatter.timesRun = 10;
// console.log(Formatter.timesRun);

Formatter.timesRun.push(8);
console.log(Formatter.timesRun);
