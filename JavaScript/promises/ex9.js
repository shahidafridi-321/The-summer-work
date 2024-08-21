const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

// accepts an array of promises,and returns an array of results for all the promises. it is used when we have more than one promise but they do not depends on each other mean which one to fulfill first they are independent of each other ,it fails if any promise in they array fails

/*
Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) =>
    responses.forEach((response) =>
      console.log(`${response.url} : ${response.status}`)
    )
  )
  .catch((error) => console.log(`failed to fetch : ${error}`));
*/
// it is same as the promise.all() except it only returns the first fulfilled promise

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => console.log(`${response.url} : ${response.status}`))
  .catch((error) => console.log(`Failed to fetch: ${error}`));
