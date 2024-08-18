function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      const data = { id: 1, name: "John Doe" };

      if (success) {
        resolve(data); // The operation was successful
      }
      reject("Failed to fetch data"); // Uncomment this to simulate a failure
    }, 2000); // Simulate a 2-second delay
  });
}

fetchData()
  .then((data) => {
    console.log("Data fetched:", data);
  })
  .catch((error) => {
    console.error(error);
  });
