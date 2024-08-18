let myPromise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("The Operation was Successful");
  } else {
    reject("the operation was failed");
  }
});

myPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log(error);
  });
