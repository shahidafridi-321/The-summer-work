let students = [
  {
    name: "shahid",
    age: 21,
    parents: {
      father: "khan",
      mother: "hajra",
    },
  },
  {
    name: "uzair",
    age: 20,
    parents: {
      father: "meraj",
      mother: "sara",
    },
  },
  {
    name: "ali",
    age: 21,
    parents: {
      father: "baba",
      mother: "luna",
    },
  },
];

function randomTime() {
  return Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
}

let timer = randomTime();

function getData(data, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 3000) {
        resolve(data);
      } else {
        reject("It is taking too much time");
      }
    }, time);
  });
}

getData(students, timer)
  .then((data) => data[0])
  .then((firstRecord) => {
    console.table(firstRecord);
    return firstRecord.parents;
  })
  .then((parentsDetails) => console.log(parentsDetails))
  .catch((error) => console.log(error));
