let myPromise = new Promise(function (resolve) {
  setTimeout(() => {
    resolve("Resolve after 3 seconds");
  }, 3000);
});

myPromise.then((msg) => {
  console.log(msg);
});
