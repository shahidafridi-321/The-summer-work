// CLOSER FUNCTIONS

function makeAdding(firstNumber) {
  const first = firstNumber;
  return function resulting(secondNymber) {
   const second = secondNymber;
    return first + second;
  }
} 

function details(firstName,age) {
  const fName = firstName ;
 const myage = age;

 return function personObject(lastName,array) {
  const Lname = lastName;
  const powers = array;
  return {
    name:`${fName} ${Lname}`,
    age : myage,
    abilities:powers,
  }
 }
}
// let somePowers = ['fire','destroy'];
// let person = details('shahid',21);
// console.log(typeof(person));

// person = person('afridi',somePowers);
// typeof
// console.table(person.abilities[1]);



//FACTORY FUNCTIONS
function createUser (name) {
  const discordName = "@" + name;
  return { name, discordName };
}

let user1 = createUser('shahid');
console.log(user1);

function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
}

const person1 = createPerson('Alice', 30);
const person2 = createPerson('Bob', 25);

person1.greet(); // Hello, my name is Alice and I am 30 years old.
person2.greet(); // Hello, my name is Bob and I am 25 years old.
console.log(person1);