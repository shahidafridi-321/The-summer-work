let users = [
  {
    id: 1,
    name: "shahid",
    age: 21,
  },
  {
    id: 2,
    name: "ali",
    age: 25,
  },
  {
    id: 3,
    name: "khan",
    age: 20,
  },
];

function getUser(users) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users && users.length > 0) {
        resolve(users);
      } else {
        reject("No users available");
      }
    }, 200);
  });
}

getUser(users)
  .then(returnsData)
  .then(processData)
  .then(extractNames)
  .catch(errorHandler);

function errorHandler(error) {
  console.log(error || "No data found");
}

function returnsData(data) {
  console.log("Data is received");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data && data.length > 0) {
        resolve(data);
      } else {
        reject("Data is empty");
      }
    }, 4000);
  });
}

function processData(data) {
  console.log("Data is processing");
  data.forEach((element) => {
    console.log(element);
  });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data && data.length > 0) {
        resolve(data);
      } else {
        reject("Processing error");
      }
    }, 2000);
  });
}

function extractNames(data) {
  console.log("Names are extracted");
  data.forEach((element) => {
    console.log(element.name);
  });
}
